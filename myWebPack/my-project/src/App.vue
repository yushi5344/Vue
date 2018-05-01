<template>
  <div id="app">
    <ul>
      <li><router-link to="/">home</router-link> </li>
      <li> <router-link to="/helloworld">helloworld</router-link> </li>
    </ul>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
  data (){
    return {

    }
  },
  methods:{

  }
}
</script>

<style scoped>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 10px;
}
  #app ul{
    text-align: left;
    list-style-type: none;
  }
</style>
