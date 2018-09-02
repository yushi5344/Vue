#Vue.js

## vue框架 ##
html

	<body>
	    <div id="vue-app">
	        <h1>{{name}}</h1>
	    </div>
	</body>

js

	//实例化对象
	new Vue({
	    el:"#vue-app",
	    data:{
	        name:"guomin"
	    }
	});


## vue中方法 ##

html

	<body>
	    <div id="vue-app">
	        <h1>{{greet('afternoon')}}</h1>
	        <p>Name:{{name}}</p>
	        <p>Job:{{job}}</p>
	    </div>
	</body>


js  

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

- el:element 需要获取的元素，一定是html中的根容器元素

- data:用于数据的存储

- methods: 指定方法

![](./img/methods.gif)

## vue中属性绑定 ##

html 

	<body>
	    <div id="vue-app">
	        <h1>{{greet('afternoon')}}</h1>
	        <p>Name:{{name}}</p>
	        <p>Job:{{job}}</p>
	        <a v-bind:href="website">web开发</a><br>
	        <input type="text" v-bind:value="name">
	        <p v-html="websiteTag"></p>
	    </div>
	    <script src="js/app.js"></script>
	</body>

app.js

	//实例化对象
	new Vue({
	    el:"#vue-app",
	    data:{
	        name:"guomin",
	        job:"web开发",
	        website:"http://www.baidu.com",
	        websiteTag:"<a href='http://www.baidu.com'>百度</a>"
	    },
	    methods:{
	        greet:function (time) {
	            return 'Good '+time+' '+this.name+'!';
	        }
	    }
	});

- data-binding:给属性绑定对应的值


	<a v-bind:href="website">web开发</a><br>


给a标签绑定一个href属性，值为Vue实例中的website

	<input type="text" v-bind:value="name">

给input绑定value属性，值为vue实例中的name


	 <p v-html="websiteTag"></p>

给p标签绑定一个html属性，内容为vue实例中的websiteTag值。

## vue中的事件 ##

html

	<body>
	    <div id="vue-app">
	        <h1>Events</h1>
	        <button @click="add(1)">加一岁</button>
	        <button v-on:click="substract(1)">减一岁</button>
	        <p>my age is {{age}}</p>
	        <div id="canvas" v-on:mousemove="updateXY" style="width:500px;height:500px;border:1px solid #ccc">
	            {{x}},{{y}}
	        </div>
	    </div>
	</body>

js

	<script>
	    new Vue({
	        el:'#vue-app',
	        data:{
	            age:30,
	            x:0,
	            y:0
	        },
	        methods:{
	            add:function (inc) {
	                this.age+=inc;
	            },
	            substract:function (dec) {
	                this.age-=dec;
	            },
	            updateXY:function (event) {
	                this.x=event.offsetX;
	                this.y=event.offsetY;
	            }
	        }
	    });
	</script>


![](./img/events.gif)


## vue中的事件修饰符  ##


html


	<div id="vue-app">
	        <h1>Events</h1>
	        <button @click="add(1)">加一岁</button>
	        <button @click.once="add(10)">加十岁</button>
	        <button v-on:click="substract(5)">减一岁</button>
	        <p>my age is {{age}}</p>
	        <div id="canvas" style="width:500px;height:500px;border:1px solid #ccc" v-on:mousemove="updateXY">
	            {{x}},{{y}} <span v-on:mousemove="stopMoving">Stop Moving </span>
	            <span v-on:mousemove.stop="">Stop Moving2 </span>
	        </div>
	        <a v-on:click.prevent="hello" href="http://www.baidu.com">阻止跳转</a>
	    </div>
	</body>

js  


	<script>
	    new Vue({
	        el:'#vue-app',
	        data:{
	            age:30,
	            x:0,
	            y:0
	        },
	        methods:{
	            add:function (inc) {
	                this.age+=inc;
	            },
	            substract:function (dec) {
	                this.age-=dec;
	            },
	            updateXY:function (event) {
	                this.x=event.offsetX;
	                this.y=event.offsetY;
	            },
	            stopMoving:function (event) {
	                event.stopPropagation();
	            },
	            hello:function () {
	                alert('hello');
	            }
	        }
	    });
	</script>

- @click.once="add(10)" 只执行一次

- v-on:mousemove="updateXY"绑定事件

- @click="substract(5)"等同于v-on:click="substract(5)"

- v-on:click.prevent="hello" 点击阻止默认行为

![](./img/event-dec.gif)


## 键盘事件和键值修饰符 ##

html 

	<body>
	    <div id="vue-app">
	        <h1>键盘 Event</h1>
	        <label>姓名：</label>
	        <input type="text" v-on:keyup.enter="logName">
	        <label for="">年龄</label>
	        <input type="text" v-on:keyup.enter="logAge">
	    </div>
	</body>

js

	<script>
	    new Vue({
	        el:'#vue-app',
	        data:{
	
	        },
	        methods:{
	            logName:function () {
	                console.log('你正在输入姓名');
	            },
	            logAge:function () {
	                console.log('你正在输入年龄');
	            }
	        }
	    });
	</script>

![](./img/keyevent.gif)


## 双向绑定 input/select/textarea ##

html

	<body>
	    <div id="vue-app">
	        <h1>双向绑定 input/select/textarea</h1>
	        <label>姓名：</label>
	        <input ref="name" type="text" v-on:keyup="logName">
	        <span>{{name}}</span>
	        <label for="">年龄</label>
	        <input ref="age" type="text" v-on:keyup="logAge">
	        <span>{{age}}</span>
	        <label for="">性别</label>
	        <input ref="sex" type="text" v-model="sex">
	        <span>{{sex}}</span>
	    </div>
	</body>

js

	<script>
	    new Vue({
	        el:'#vue-app',
	        data:{
	            name:'',
	            age:'',
	            sex:''
	        },
	        methods:{
	            logName:function () {
	                this.name=this.$refs.name.value;
	                console.log('你正在输入姓名');
	            },
	            logAge:function () {
	                this.age=this.$refs.age.value;
	                console.log('你正在输入年龄');
	            }
	        }
	    });
	</script>

![](./img/databind.gif)

绑定方法 

ref属性，通过v-on方法，在方法中通过下面方式实现双向绑定

	this.name=this.$refs.name.value;

也可以通过v-model来绑定

	<input ref="sex" type="text" v-model="sex">
    <span>{{sex}}</span>


## vue的计算属性  ##
html

	<body>
	    <div id="vue-app">
	        <h1>computed 计算属性</h1>
	        <button v-on:click="a++"> Add to A</button>
	        <button v-on:click="b++">Add to B</button>
	        <p> A={{a}}</p>
	        <p>B={{b}}</p>
	        <p>age={{age}}</p>
	        <p>Age+A={{addToA}}</p>
	        <p>Age+B={{addToB}}</p>
	    </div>
	</body>
	
js

	<script>
	    new Vue({
	        el:'#vue-app',
	        data:{
	          a:0,
	          b:0,
	          age:20
	        },
	        methods:{
	            /*
	            addToA:function () {
	                return this.a+this.age;
	            },
	            addToB:function () {
	                return this.b+this.age;
	            }
	            */
	        },
	        computed:{
	            addToA:function () {
	                return this.a+this.age;
	            },
	            addToB:function () {
	                return this.b+this.age;
	            }
	        }
	    });
	</script>

![](./img/computed.gif)

## vue动态绑定css ##

	<body>
	    <div id="vue-app">
	        <h1>动态css</h1>
	        <h2>实例1</h2>
	        <div v-on:click="changeColor=!changeColor" v-bind:class="{changeColor:changeColor}">222222</div>
	        <span>Henry</span>
	        <h2>示例2</h2>
	        <button v-on:click="changeColor=!changeColor">changeColor</button>
	        <button v-on:click="changeLength=!changeLength">changeLength</button>
	        <div v-bind:class="compClass">
	            <span>haahhhahha</span>
	        </div>
	    </div>
	</body>

js

	<script>
	    new  Vue({
	        el:'#vue-app',
	        data:{
	            changeColor:false,
	            changeLength:false
	        },
	        computed:{
	            compClass:function () {
	                return {
	                    changeColor:this.changeColor,
	                    changeLength:this.changeLength
	                }
	            }
	        }
	    });
	</script>

css 

	span{
	    background: red;
	    display: inline-block;
	    padding:10px;
	    color: #fff;
	    margin: 10px 0;
	}
	.changeColor span{
	    background: green;
	}
	.changeLength span:after{
	    content: 'length';
	    margin-left: 10px;
	}

![](./img/bindcss.gif)


## vue  for循环 ##

html

	<body>
	    <div id="vue-app">
	        <h1>v-for</h1>
	        <!--数组遍历-->
	        <ul>
	            <li v-for="item in characters">
	                {{item}}
	            </li>
	        </ul>
	        <ul>
	            <li v-for="(item,index) in users">
	                {{index}}-{{item.name}}---{{item.age}}
	            </li>
	        </ul>
	        <template v-for="(user,index) in users">
	            <div v-for="(val,key) in user">
	                <p>{{key}}--{{val}}</p>
	            </div>
	        </template>
	    </div>
	</body>

js

	<script>
	    new Vue({
	        el:'#vue-app',
	        data:{
	            characters:['Mario','Luffy','Yoshi'],
	            users:[
	                {name:'Henry',age:20},
	                {name:'bucky',age:24},
	                {name:'Emily',age:29}
	            ]
	        },
	        methods:{
	
	        },
	        computed:{
	
	        }
	    });
	</script>

![](./img/vfor.gif)


## 初始化vue多个对象 ##


html

	<body>
	    <h1>初始化多个Vue实例对象</h1>
	    <div id="vue-app-one">
	        {{title}}
	        {{greet}}
	    </div>
	    <div id="vue-app-two">
	        {{title}}
	        {{greet}}
	    </div>
	</body>

js

	<script>
	    new Vue({
	        el:'#vue-app-one',
	        data:{
	            title:'vue-app-one'
	        },
	        computed:{
	            greet:function () {
	                return 'hello one';
	            }
	        }
	    });
	    new Vue({
	        el:'#vue-app-two',
	        data:{
	            title:'vue-app-two'
	        },
	        computed:{
	            greet:function () {
	                return 'hello two';
	            }
	        }
	    });
	</script>


![](./img/object.gif)

## 组件 ##

html

	<body>
	    <div id="vue-app-one">
	        <greeting></greeting>
	    </div>
	    <div id="vue-app-two">
	        <greeting></greeting>
	    </div>
	</body>

js

	<script>
	    Vue.component('greeting',{
	        template:'<p>{{name}} 大家好<button v-on:click="changeName">改名</button></p>',
	        data:function () {
	            return {
	                name:'百度'
	            }
	        },
	        methods:{
	            changeName:function () {
	                this.name='Herry';
	            }
	        }
	    });
	    new Vue({
	        el:'#vue-app-one'
	    });
	    new Vue({
	        el:'#vue-app-two'
	    })
	</script>

![](./img/component.gif)