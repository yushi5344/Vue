<template>
  <div id="app">
    <img src="./assets/logo.png">
    <h1>{{title}}</h1>
    <user></user>
    <foot></foot>
  </div>
</template>

<script>
  import user from './components/user'
  import foot from './components/footer'
export default {
  name: 'App',
  data (){
    return {
      title:"这是我的第一个Vue脚手架项目"
    }
  },
  components:{
    "user":user,
    'foot':foot
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
