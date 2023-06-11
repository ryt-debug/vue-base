<template>
<form @submit="">
    <input type="text" @input="(event) => (text = event.target.value)">
    <button>提交</button>
</form>
</template>

<script setup>
let text="";

function submitHandler(){
    console.log(text);
}
</script>

<style scoped>

</style>