<template>
    <button @click="count++">
        <span>{{ count }}</span>
    </button>
</template>

<script setup>
    import { ref } from 'vue';
    let count = ref(0);
</script>

<!-- <script>
    export default{
        data() {
            return {
                count:0,
            }
        },
    }
</script> -->

