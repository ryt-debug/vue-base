<template>
<!-- 
    动态组件
    由is属性决定
 -->
 <component is="h3">动态组件</component>
 <component :is="isShow ? A : B">11111</component>
 <button @click="isShow = !isShow">切换</button>
</template>

<script setup>
import { ref } from 'vue';
import A from './A.vue';
import B from './B.vue';

let isShow = ref(true);
</script>