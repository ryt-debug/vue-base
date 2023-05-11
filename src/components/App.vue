<template>
	<app2></app2>
	<Separator></Separator>
	<count>引入子组件</count>
	<Separator></Separator>
	<Data></Data>
	<Separator></Separator>
	<Methods></Methods>
	<Separator></Separator>
	<ModularApi></ModularApi>
	<Separator></Separator>
	<Send></Send>
</template>

<script>
	import App2 from './App2.vue'
	import Separator from './Separator.vue';
	import Count from './Count.vue'
	import Data from './Data.vue';
	import Methods from './Methods.vue';
	import ModularApi from './ModularApi.vue';
	import Send from './SendRequest.vue';

	// 组件就是一个普通的js对象
	export default{
		// data中的this就是组件实例
		// data返回一个对象作为返回值，vue会对该对象进行代理，从而将其转换为响应式数据
		// 数据变化时网页也会发生变化，这种数据叫做响应式数据
		// data() {},
		components:{
			app2:App2,
			count:Count,
			Separator,
			Data,
			Methods,
			ModularApi,
			Send,
		},
	};
</script>


