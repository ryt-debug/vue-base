<template>
    <p>----{{ person.name }}----{{ person.age }}----{{ person.gender }}----</p>
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
                name: '张三',
                age: 18,
                gender: '男'
            },
            responseJson: null,
        }
    },
    methods: {
        getData() {
            var api = "https://s1.hdslb.com/bfs/cm/cm-sdk/static/js/pc.js";
            //2.使用axios 进行get请求
            this.$http.get(api).then((res) => {
                //请求成功的回调函数
                console.log(res);
                responseJson = res.data;
            }).catch((err) => {
                //请求失败的回调函数
                console.log(err)
            })
        }
    },
}
</script>