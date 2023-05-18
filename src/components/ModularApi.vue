<template>
    <h3>组合式Api</h3>
    <div>{{ s }}</div>
    <div>{{ person}}</div>
    <button @click="setAge">改变年龄</button>
</template>

<script setup>
    import { reactive, ref, computed, inject } from 'vue';
    const global = inject('$global');

    let s = ref("++++++");
    console.log('s :>> ', s.value);
    console.log('ForMat:' + global.formatDate(Date.now()));
    /**
     * reactive()
     * 返回一个指定对象的深层响应式代理对象
     * 缺点：只能返回对象的响应式代理对象
     * 
     * ref()
     * 接收一个任意值，并返回它的响应式代理
     * 生成响应式代理是，将值包装为一个对象
     * 在模板中访问ref会被自动解包(在引用的后面自动加.value)
     * 
     * computed()
     * 生成计算属性
     */
    const person = reactive({
        name:"张三",
        age:18,
    });
    function setAge(){
        person.age++;
    };
    let newMsg = computed(()=>{
        return msg+'cnm';
    });
</script>

<!-- 比较原始的写法
<script>
import { reactive } from 'vue';

export default {
    setup() {
        // 组合式中声明的变量是普通变量，不是响应式属性
        let s = 111;
        let person = reactive({
            name:"张三",
            age:18,
            gender:"男",
        });
        function setAge(){
            person.age++;
        }
        return {
            s,
            person,
            setAge,
        };
    }
}
</script> -->
