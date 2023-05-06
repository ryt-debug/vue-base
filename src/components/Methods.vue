<template>
    <div>{{ msg }}</div>
    <button @click="changeMsg">点击</button>
</template>

<script>
export default {
    data() {
        return {
            msg: 'Hello World',
        }
    },
    methods: {
        test() {
            console.log("testtesttest")
            // alert("test函数");
        },
        changeMsg(){
            this.msg = 'new World';
        },
    },
    mounted(){
        this.test();
    },
}
</script>