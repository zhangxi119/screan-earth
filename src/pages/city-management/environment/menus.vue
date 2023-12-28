<template>
  <div class="menus">
    <ul class="menu">
      <router-link tag="li"
        :to="{name:item.go}"
        v-for="item in menu"
        :key="item.name"
        class="menuItem"
        >{{item.name}}</router-link>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'menus',
  data () {
    return {
      menu: [{
        name: '生态环境',
        go: 'ecology'
      }, {
        name: '大气环境',
        go: 'atmosphericEnvironment'
      }, {
        name: '水环境',
        go: 'waterEnvironment'
      }]
    }
  },
  mounted () {
    console.log(this.$route.name)
  }
}
</script>

<style lang='scss' scoped>
.menus{
  position: absolute;
  width: 2.6rem;
  height: 2.54rem;
  left: 70%;
  top: 15%;
  z-index: 300;
  .menu{
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    background: url('../../../assets/city-management/environment/water-environment/line.png') center no-repeat;
    background-size: 0.03rem 1.88rem;
    background-position-x: 2.23rem;
  }
}
  .menuItem{
    height: 0.76rem;
    list-style: none;
    text-align: center;
    line-height: 0.63rem;
    font-size:0.2rem;
    font-family:Source Han Sans CN;
    font-weight:500;
    font-style:italic;
    color:rgba(255,255,255,1);
    background: url('../../../assets/city-management/environment/water-environment/menuItem.png') center center no-repeat;
    background-size: 2.1rem 0.44rem;
  }
  .menuItem:nth-child(1){
    font-size:0.22rem;
    font-family:Source Han Sans CN;
    font-weight:500;
    font-style:italic;
    color:rgba(255,255,255,1);
    -webkit-text-stroke:1px undefined;
    background: url('../../../assets/city-management/environment/water-environment/menu.png') center center no-repeat;
    background-size:2.6rem 0.76rem;
    line-height: 0.76rem;
  }
  .aliveItem{
    background:url("../../../assets/city-management/environment/water-environment/menuAlive.png") center center no-repeat!important;
    background-size: 2.1rem 0.44rem!important;
    height: 0.76rem;
    list-style: none;
    text-align: center;
    line-height: 0.5rem;
    font-size:0.2rem;
    font-family:Source Han Sans CN;
    font-weight:500;
    font-style:italic;
    color:rgba(255,255,255,1);
  }
  .router-link-exact-active {
    background:url("../../../assets/city-management/environment/water-environment/menuAlive.png") center center no-repeat;
    background-size: 2.1rem 0.44rem;
    height: 0.76rem;
    list-style: none;
    text-align: center;
    line-height: 0.72rem;
    font-size:0.2rem;
    font-family:Source Han Sans CN;
    font-weight:500;
    font-style:italic;
    color:rgba(255,255,255,1);
  }
</style>
