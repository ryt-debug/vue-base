<template>
    <button>
        <!-- 插槽会被输入的文本替换掉 -->
        <slot></slot> <!-- 插槽出口 -->
    </button>
</template>

<style scoped>
button{
    width: 200px;
    height: 200px;
    font-size: 10px;
}
</style>