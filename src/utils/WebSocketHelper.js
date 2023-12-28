/*
 * @Descripttion: webSocket连接
 * @Author: chenqy
 * @Date: 2020-04-10
 * @LastEditors: chenqy
 * @LastEditTime: 2020-04-10
 */
class WebSocketHelper {
  // *********** params 参数列表 ************ //
  // --- open ：ws成功连接回调
  // --- message ：ws服务器向客户端发送消息回调
  // --- error ：ws连接失败回调
  // --- close ：ws连接关闭回调
  // --- isKeepAlive ：是否开启心跳机制
  // --- keepAliveTime ：心跳机制间隔时间
  // --- keepData ：心跳机制向服务器发送参数
  // --- isReConnect ：是否重新连接
  // --- reConnectTime ：ws重新连接时间
  constructor (params) {
    this.wsObject = null // socket实例
    this.wsOptions = params // 参数设置
    this.wsInterOut = null // 心跳检测
    this.wsTimeOut = null // 重新连接
    this.wsState = 0
  }
  init (isFirst, sendMsg) {
    if (!window.WebSocket) {
      alert('浏览器不支持webSocket')
    } else {
      let _this = this
      // 开始连接
      this.wsObject = new window.WebSocket(this.wsOptions.url)
      // 连接成功回调
      this.wsObject.onopen = function (e) {
        _this.wsState = _this.wsObject.readyState
        // 如果是第一次连接
        if (isFirst) {
          let data = sendMsg ? sendMsg : '{first: 1}'
          _this.wsObject.send(data)
        }
        if (_this.wsOptions.open) {
          _this.wsOptions.open(e)
        }
        // 清除重连接
        if (_this.wsTimeOut) {
          clearTimeout(_this.wsTimeOut)
          _this.wsTimeOut = null
        }
        // 开启心跳机制
        if (_this.wsOptions.isKeepAlive) {
          _this.keepAlive()
        }
      }
      // 服务器向客户端发送消息
      this.wsObject.onmessage = function (data) {
        if (_this.wsOptions.message) {
          _this.wsOptions.message(data)
        }
      }
      // 连接失败回调
      this.wsObject.onerror = function (e) {
        if (_this.wsOptions.error) {
          _this.wsOptions.error(e)
        }
      }
      // 连接关闭回调
      this.wsObject.onclose = function (e) {
        console.log('websocket关闭')
        // 清空心跳机制
        if (_this.wsInterOut) {
          clearInterval(_this.wsInterout)
        }
        if (_this.wsOptions.close) {
          _this.wsOptions.close(e)
        }
        _this.wsObject = null
        // 重新连接
        if (_this.wsOptions.isReConnect) {
          _this.reConnect()
        }
      }
    }
  }
  // 重新连接
  reConnect () {
    console.log('正在准备重新连接...')
    let reTime = this.wsOptions.reConnectTime || 10
    this.wsTimeOut = setTimeout(() => {
      this.init()
    }, reTime * 1000)
  }
  // 心跳机制
  keepAlive () {
    let keepTime = this.wsOptions.keepAliveTime || 20
    if (this.wsInterOut) {
      return
    }
    if (this.wsOptions.keepData && this.wsOptions.keepAliveTime) {
      this.wsInterOut = setInterval(() => {
        this.send(this.wsOptions.keepData)
      }, keepTime * 1000)
    }
  }
  // 手动关闭
  close () {
    this.wsOptions.isReConnect = false
    if (this.wsObject) {
      this.wsObject.close()
    }
  }
  // 客户端向服务器发送消息
  send (data) {
    if (this.wsObject && this.wsObject.readyState === 1) {
      this.wsObject.send(data)
    }
  }
}
export default WebSocketHelper
