<template>
	<h3>模板插值语法</h3>
	<p>{{ msg }}</p>
	<h3>Js表达式</h3>
	<p>{{ number + 1 }}</p>
	<p>{{ ok ? 'Yes' : 'No' }}</p>
	<p v-html="rawHtml"></p>
	<Separator></Separator>
	<app2></app2>
	<Separator></Separator>
	<count>引入子组件</count>
</template>

<script>
	import App2 from './App2.vue'
	import Separator from './Separator.vue';
	import Count from './Count.vue'

	// 组件就是一个普通的js对象
	export default{
		// data中的this就是组件实例
		// data返回一个对象作为返回值，vue会对该对象进行代理，从而将其转换为响应式数据
		// 数据变化时网页也会发生变化，这种数据叫做响应式数据
		data() {
			// 直接向组件实例中添加的属性不是响应式数据，不会被vue代理
			msg1:"你好";
			return {
				msg:"aaaa",
				number:10,
				ok:true,
				rawHtml:"<a href='https://rytcloud.cn'>网站</a>"
			};
		},
		components:{
			app2:App2,
			count:Count,
			Separator,
		},
	};
</script>


