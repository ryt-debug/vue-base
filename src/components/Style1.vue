<template>
    <div :class="$style.box1">
        <h2 :class="arr">Vue1</h2>
        <Style2></Style2>
    </div>
</template>

<script setup>
import Style2 from './Style2.vue';

// 动态设置class
let arr = [{ box1: true }, { box2: false }, { box3: false }];
</script>


<!-- scoped只对当前组件生效 -->
<!--
    实现原理
    组件中有scoped样式时
    vue会为所有元素生成一个随机属性 data-v-7a7a37b1
    所有的选择器都会在最后加一个 [data-v-7a7a37b1]

    随机生成的属性，除了会添加到当前组件中所有元素上
    也会添加到当前组件引入的其他组件的根元素上（此行为只适用于单根组件）
    设计思路：为了可以通过父组件来为子组件设置样式
-->
<style scoped>
/* 设置深层样式 */
/* .box1 :deep(h2){
        color:blue;
        background-color: orange;
    } */

.box1 h2 {
    color: blue;
    background-color: orange;
}

/* 设置全局样式 */
/* :global(div){
    border:1px red solid
} */
</style>

<!-- style模块化 -->
<!-- 
    不同组件中同样的选择器hash后的值不同
 -->
<style module>
.box1 {
    border: 1px red solid;
}
</style>