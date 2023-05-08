<template>
    <p>----{{ person.id }}----{{ person.name }}----{{ person.age }}----{{ person.gender }}----</p>
    <button @click="getData">请求</button>
    <article v-html="responseJson"></article>
</template>

<script>
import { getData } from '../apis/api.js';
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
        // getData() {
        //     //2.使用axios 进行post请求
        //     this.$http.post("testParams", {
        //         id: 1
        //     }).then((res) => {
        //         //请求成功的回调函数
        //         console.log(res);
        //         this.$data.responseJson = res;
        //         this.$data.id = res;
        //     }).catch((err) => {
        //         //请求失败的回调函数
        //         console.log(err)
        //     })
        // }
        getData() {
            console.log(getData());
            getData().then(res=>{
                console.log( res);
            }).catch((err)=>{

            });
        }
    },
}
</script>