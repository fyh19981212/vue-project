var vm = new Vue ({
    el: "#warp",
    
    // data: 里面的数据都会和 DOM 已经被建立了关联，所有东西都是响应式的。data外的数据，不会关联
    data: function () {
        return {
             
             message: "",
             headerTitle: "我是header标签title值",
             navMessage: "我是导航标签",
             navMessageTitle: "我是导航标签title",
             flag: true,
             list: [
                  { text:"学好vue" },
                  { text:"学好js" },
                  { text:"学好html" },
                  { text:"学好css" }
             ],
             activeclass:"my-class",
             comeclass:"ny-common-class",
              spanflag:true
        }
    },
    methods:{
        handleaddclick:function(){
            console.log(this);
        }
    },
    //计算属性：computed对象管理所有的计算属性
    computed:{
        resverseMassage:function(){
            return this.message.split("").reverse().join("");
        }

    }
});
