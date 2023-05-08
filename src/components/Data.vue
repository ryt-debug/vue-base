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
            let id =Math.random()*10;
            //2.使用axios 进行post请求
            this.$request.post("TestController/testParams", {
                id
            }).then((res) => {
                //请求成功的回调函数
                console.log(res);
                this.responseJson = res;
                this.person.id = res.id;
            }).catch((err) => {
                //请求失败的回调函数
                console.log(err)
            })
        }
    },
}
</script>