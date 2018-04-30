<template>
  <div class="footer">
   <p v-on:click="changeTitle">{{copyright}}</p>

  </div>
</template>

<script>
  export default {
    name: 'footer',
    data () {
      return {
        copyright:"CopyRight 2018-2019 all rights resvered"
      }
    },
    methods:{
      changeTitle:function () {
        this.$emit("titltChanged","子像父组件传值");
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

  p {
    color: #42b983;
  }
</style>
