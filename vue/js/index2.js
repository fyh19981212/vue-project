var vm = new Vue({
	el:'#warp',
	data : {
		message :"你好呀"
	},
	computed :{
		messageReverse :function(){
			return this.message.split('').reverse().jion('');
		}
	}
});
