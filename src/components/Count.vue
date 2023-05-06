<template>
    <button @click="count++">点击</button>
    <span>{{ count }}</span>
</template>

<script>
    export default{
        data() {
            return {
                count:0,
            }
        },
    }
</script>