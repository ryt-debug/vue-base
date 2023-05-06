<template>
    <div v-bind:class="msg">绑定属性</div><br>
    <button :disabled="isButtonDisable">Button</button>
    <br><br><div v-bind="objectOfArrays">动态绑定多个值</div>
</template>

<script>
    export default{
        data(){
            return {
                msg:"active",
                isButtonDisable:false,
                objectOfArrays:{
                    id:'container',
                    class:'wrapper',
                },
            }
        },
    }
</script>

<style>
.active{
    color:red;
    font-size: large;
}
</style>