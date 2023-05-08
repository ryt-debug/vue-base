<template>
    <p>----{{ person.id }}----{{ person.name }}----{{ person.age }}----{{ person.gender }}----</p>
    <button @click="getData">请求</button>
    <article v-html="responseJson"></article>
</template>

<script>
import { shallowReactive } from 'vue' // 浅层响应式对象

export default {
    data() {
        // return shallowReactive({
        //     person:{
        //         name:'张三',
        //         age:18,
        //         gender:'男'
        //     },
        // })
        return {
            person: {
                id: 10,
                name: '张三',
                age: 18,
                gender: '男',
            },
            responseJson: null,
        }
    },
    methods: {
        getData() {
            //2.使用axios 进行post请求
            this.$request.post("TestController/testParams", {
                id: 1
            }).then((res) => {
                //请求成功的回调函数
                console.log(res);
                this.$data.responseJson = res;
                this.$data.person.id = res;
            }).catch((err) => {
                //请求失败的回调函数
                console.log(err)
            })
        }
    },
}
</script>