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
	<Separator></Separator>
	<Bind></Bind>
	<Separator></Separator>
	<Style1></Style1>
	<Separator></Separator>
	<Exercise1></Exercise1>
	<Separator></Separator>
	<DynamicComponent></DynamicComponent>
	<Separator></Separator>
	<VFor></VFor>
	<Separator></Separator>
	<!-- 插槽入口 -->
	<SlotButton>此文本由Slot插入</SlotButton>
</template>

<script setup>
import App2 from './App2.vue'
import Separator from './Separator.vue';
import Count from './Count.vue'
import Data from './Data.vue';
import Methods from './Methods.vue';
import ModularApi from './ModularApi.vue';
import Send from './SendRequest.vue';
import Bind from './Bind.vue';
import Style1 from './Style1.vue';
import Exercise1 from './Exercise1/Exercise.vue';
import DynamicComponent from './DynamicComponent.vue';
import VFor from './vFor.vue';
import SlotButton from './SlotButton.vue';

// 组件就是一个普通的js对象

// data中的this就是组件实例
// data返回一个对象作为返回值，vue会对该对象进行代理，从而将其转换为响应式数据
// 数据变化时网页也会发生变化，这种数据叫做响应式数据
// data() {},
</script>


