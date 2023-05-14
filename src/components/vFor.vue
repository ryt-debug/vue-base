<template>
    <!--
        对arr修改时，v-for是顺序对比旧版，只修改被改变的部分
        可以加入属性值key来修改其比较顺序
        key的值要用对象的唯一表示
    -->
    <button @click="arr.push('赵六')">添加1</button>
    <button @click="arr1.unshift({ name: '赵六', age: 21 })">添加2（有区别的）</button>
    <ul>
        <li v-for="name in arr">{{ name }}</li>
    </ul>
    <ul>
        <!-- index要在从arr取出的属性后面 -->
        <li v-for="(name, index) in arr">{{ index }} - {{ name }}</li>
    </ul>
    <ul>
        <li v-for="obj in arr1">
            {{ obj.name }} -- {{ obj.age }}
            <!-- vue只会修改改变的部分 -->
            <input type="text">
        </li>
    </ul>
    <ul>
        <li v-for="{ id, name, age } in arr1" :key="id">
            {{ name }} -- {{ age }}
            <input type="text">
        </li>
    </ul>

    <!-- v-if的优先级比v-for高，所以v-if不能使用在同一个标签中v-for取出的属性的值 -->
</template>

<script setup>
import { ref } from 'vue';

let arr = ref(['张三', '李四', '王五']);

let arr1 = ref([
    {
        id: 1,
        name: '张三',
        age: 18,
    },
    {
        id: 2,
        name: '李四',
        age: 19,
    },
    {
        id: 3,
        name: '王五',
        age: 20,
    },
])
</script>