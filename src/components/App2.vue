<template>
    <h3>模板插值语法</h3>
	<p>{{ msg }}</p>
	<h3>Js表达式</h3>
	<p>{{ number + 1 }}</p>
	<p>{{ ok ? 'Yes' : 'No' }}</p>
	<p v-html="rawHtml"></p>
    <hr>
    <h3>绑定属性</h3>
    <div v-bind:class="msg">被绑定的div标签</div><br>
    <button :disabled="isButtonDisable">Button</button>
    <br><div v-bind="objectOfArrays">动态绑定多个值</div><br>
</template>

<script>
    export default{
        data(){
            // 直接向组件实例中添加的属性不是响应式数据，不会被vue代理
			msg1:"你好";
			// 可以通过vm.$data.msg1向组件添加响应式数据，但不建议
            return {
                msg:"active",
                isButtonDisable:false,
                objectOfArrays:{
                    id:'container',
                    class:'wrapper',
                },
				number:10,
				ok:true,
				rawHtml:"<a href='https://rytcloud.cn'>网站</a>",
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