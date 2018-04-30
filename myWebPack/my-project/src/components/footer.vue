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
        this.copyright='更新';
        this.$emit("titltChanged","子像父组件传值");
      }
    },
    beforeCreate:function () {
      alert('组件实例化之前执行的函数');
    },
    created:function () {
      alert('组件实例化完毕，但页面未显示');
    },
    beforeMount:function () {
      alert('组件挂载之前，页面未展示，但虚拟DOM已经加载完毕');
    },
    mounted:function () {
      alert('组件挂载后，此方法执行后，页面显示');
    },
    beforeUpdate:function () {
      alert('组件更新前，页面未展示，但虚拟DOM已经位置完毕');
    },
    updated:function () {
      alert('组件更新，此方法执行后，页面显示');
    },
    beforeDestroy:function () {
      alert('组件销毁前');
    },
    Destroy:function () {
      alert('组件已经销毁');
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

  p {
    color: #42b983;
  }
</style>
