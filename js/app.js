//实例化对象
new Vue({
    el:"#vue-app",
    data:{
        name:"guomin",
        job:"web开发"
    },
    methods:{
        greet:function (time) {
            return 'Good '+time+' '+this.name+'!';
        }
    }
});
/*
el:element 需要获取的元素，一定是html中的根容器元素
data:用于数据的存储
 */

