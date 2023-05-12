<template>
    <button @click="changeImg">换图片</button>
    <img :src="imgPath" alt="">
</template>

<script setup>
import { ref } from 'vue';

let imgPath = ref('/images/dotnet.png');
function changeImg(){
    imgPath.value='/images/desk.jpg';
}
</script>