<template>
    <button @click="count++">
        <span>{{ count }}</span>
    </button>
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