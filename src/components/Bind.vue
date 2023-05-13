<template>
    <button @click="changeImg">换图片</button>
    <br>
    <img :src="imgPath" alt="">
    <br>
    <input v-bind:[attrName]="attrValue"/>
</template>

<script setup>
import { ref } from 'vue';

let attrName=ref('type');
let attrValue=ref('file');

let imgPath = ref('/images/dotnet.png');
function changeImg(){
    imgPath.value='/images/desk.jpg';
}
</script>