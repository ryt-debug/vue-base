<template>
    <div>{{ s }}</div>
    <div>{{ person }}</div>
    <button @click="setAge">改变年龄</button>
</template>

<script setup>
    import { reactive, ref } from 'vue';

    let s = ref("++++++");
    console.log('s :>> ', s.value);
    /**
     * reactive()
     * 返回一个指定对象的深层响应式代理对象
     * 缺点：只能返回对象的响应式代理对象
     * 
     * ref()
     * 接收一个任意值，并返回它的响应式代理
     * 生成响应式代理是，将值包装为一个对象
     */
    const person = reactive({
        name:"张三",
        age:18,
    });
    function setAge(){
        person.age++;
    };
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
