<template>
    <p>----{{ person.name }}----{{ person.age }}----{{ person.gender }}----</p>
</template>

<script>
    import {shallowReactive} from 'vue' // 浅层响应式对象

    export default{
        data(){
            // return shallowReactive({
            //     person:{
            //         name:'张三',
            //         age:18,
            //         gender:'男'
            //     },
            // })
            return {
                person:{
                    name:'张三',
                    age:18,
                    gender:'男'
                },
            }
        },
    }
</script>