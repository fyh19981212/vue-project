//Vue.component("button-click",{
//	name:"button-clock",
//	data:function(){
//		return{
//			count:1
//		}
//	},
//	template:`
//<div class="my-header">
//			<div class="my-header-left">
//				<a href="#">登陆</a>
//				<a href="#">注册</a>
//			</div>
//		</div>
//	`,
//	methods:{
//		handleAddCount (){
//			this.count++;
//		}
//	}
//});

//	<button type="button" @click="handleAddCount">{{ count }}</button>
Vue.component("my-component", {
	//	prop:["todo"],
	template: `
        <div class="my-header">
			<div class="my-header-left">
				<a href="#"@click="$emit('child',headerMessage)">登陆</a>
				<a href="#">注册</a>
			</div>
			<div class="my-header-foot">
				<a href="#">我的</a>
				<a href="#"@click="handlepropsDate">查看</a>
			</div>
			<p>{{ aaa }}{{aAaa}}</p>
		</div>
	`,
	props: {
		aaa: {
			type: String,
			default: "",
		},
		aAaa: {
			type: String,
			default: "",
		} 
	},
	data: function() {
		return {
			headerMessage: "我是header组件",
			propsData:"",
			childrenMessage:"我是子组件的数据",
			propsDataChildren: null
		}
	},
	methods:{
    handleLogin:function(){
    	console.log("子组件触发了");
    },
    handlepropsDate:function(){
    	console.log(this.aaa,"aaa");
    	this.propsDataChildren=this.aaa;
    	this.propsDataChildren=this.headerMessage;
    	console.log(this.propsDataChildren,"this.propsDataChildren")
    }
	},
});
var vm = new Vue({
	el: "#warp",
	data: function() {
		return {
			message: "自定义组件",
			messageTwo: "hhh",
			flag:true
		}
	},
	methods:{
	  parent:function(data){
	    console.log(data,"daya")
	  }
	}
})