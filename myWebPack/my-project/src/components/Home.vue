<template>
  <div id="home">
    <img src="../assets/logo.png">
    <h1>{{title}}</h1>
    <user v-bind:users="users"></user>
    <foot v-on:titltChanged="updateTitle($event)"></foot>
  </div>
</template>

<script>
  import user from './user'
  import foot from './footer'
export default {
  name: 'home',
  data (){
    return {
      title:"这是我的第一个Vue脚手架项目",
      users:[],
    }
  },
  components:{
    "user":user,
    'foot':foot
  },
  methods:{
    updateTitle(title){
      this.title=title;
    }
  },
  created(){
    this.$http.get('http://jsonplaceholder.typicode.com/users'
    ).then((data)=>{
      this.users=data.body;
    });
  }
}
</script>

<style>
#home {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
