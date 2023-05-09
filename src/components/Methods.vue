<template>
    <div>{{ msg }}</div>
    <button @click="changeMsg">点击</button>
    <p>{{ stu.age >= 18 ? "成年" : "未成年" }}</p>
    <p>使用get{{ info }}</p>
    <!-- 成功请求接口并拿到数据 :D -->
    <!-- <p>{{ historyArray[0].Status === 1 ? "状态正常" : "状态异常" }}</p> -->
    <p>token:{{ token }}</p>
</template>

<script>
export default {
    data() {
        return {
            msg: 'Hello World',
            stu: {
                name: '张三',
                age: 18,
            },
            token: null,

            // 成功请求接口并拿到数据 :D
            // historyArray: null,
        }
    },
    // 计算属性
    computed: {
        // 计算属性会缓存数据，只在相关属性被更新时会调用
        // // 不建议使用set
        // info: {
        //     get() {
        //         return this.stu.age >= 18 ? "成年" : "未成年";
        //     },
        //     set(value) {
        //         this.age = value;
        //     },
        // },
        info(){
            return this.stu.age >= 18 ? "成年" : "未成年";
        }
    },
    methods: {
        test() {
            console.log("testtesttest")
            // alert("test函数");
        },
        changeMsg() {
            this.msg = 'new World';
            this.stu.age = 17;
            this.token = this.$global.jwtToken;

            // 成功请求接口并拿到数据 :D
            // this.$request.post("Reserve/HistoryRecord", {})
            // .then((res)=>{
            //     console.log(res);
            //     this.historyArray = res.data;
            // }).catch((err)=>{
            //     console.log(err);
            // });
        },
    },
    mounted() {
        this.test();
    },
}
</script>