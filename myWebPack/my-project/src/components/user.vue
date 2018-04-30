<template>
  <div class="user">
    <h1>Helloween Users</h1>
    <ul>
      <li v-for="user in users">
        {{user}}
      </li>
    </ul>

  </div>
</template>

<script>
  export default {
    name: 'user',
    data () {
      return {
       users:['herry','bucky','Email']
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  h1 {
    font-weight: normal;
    color:purple;
  }
  ul {
    list-style-type: none;
    padding: 0;
  }
  li {
    display: inline-block;
    margin: 0 10px;
  }
  a {
    color: #42b983;
  }
</style>
