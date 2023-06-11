<template>
    <div class="box">
        <h3>请求展示</h3>
        <button @click="AvailableRoom">查看可用琴房</button>
        <br>
        <button @click="CreateReserve">预约</button>
        <br>
        姓名:<input type="text" v-model="name">
        学号:<input type="text" v-model="number">
        <button @click="Login">登录</button>
        <br>
        <button @click="GetToken">getToken</button>
        <br>
        <button @click="GetStudent">模糊查询学生</button>
    </div>

    <!-- 
        /**
        * 事件修饰符：
        *  .stop 停止事件的传播
        *  .capture 在捕获阶段触发事件
        *  .prevent 取消默认行为
        *  .self 只有事件由自身触发时才会有效
        *  .once 绑定一个一次性事件
        *  .passive 主要用于提升滚动事件的性能
        */

        /**
        * 透传属性
        *     在组件上设置属性会自动传给根组件
        *     方便在父组件中为子组件设置属性
        *     透传会发生在没有被声明的props和emit的属性上
        *     自动的透传只适用于单根组件
        *     在模板中可以通过$attrs来访问透传的属性
        *     在script中可以使用useAttrs()来访问透传属性
        * 
        *     在不想使用透传属性的模板中加上
        *     <script>
        *         export default {
        *             inheritAttrs: false；
        *         }
        *     </script>
        *     关闭该模板的透传
        */
     -->
</template>

<script setup>
import { inject, onMounted, ref, reactive } from "vue";
const request = inject('$request');
const global = inject('$global');

let name = ref(''), number = ref('');

function AvailableRoom() {
    request.post('/ReserveController/availableRoom', {
        StartTime: '2021-10-01 08:00:00',
        EndTime: '2021-10-01 09:00:00',
    }).then((res) => {
        console.log(res);
    }).catch((err) => {
        console.log(err);
    });
}

function CreateReserve() {
    request.post('/ReserveController/createReserve', {
        StartTime: '2021-10-01 08:00:00',
        EndTime: '2021-10-01 09:00:00',
        StudentId: 1,
        RoomId: 1,
    }).then((res) => {
        console.log(res);
    }).catch((err) => {
        console.log(err);
    });
}

function Login() {
    request.post('/LoginController/login', {
        name: name.value,
        number: number.value,
    }).then((res) => {
        console.log(res);
    }).catch((err) => {
        console.log(err);
    });
}

function GetToken() {
    request.get('/TestController/getToken', {
        params: { Id: 1 },
    }).then((res) => {
        global.jwtToken = res;
        console.log('token :>> ', res);
    }).catch((err) => {
        console.log(err);
    });
}

function GetStudent() {
    request.post('/WebController/getStudentDetailsByFuzzyQuery', {
        name: name.value,
        number: number.value,
    }).then((res)=>{
        console.log(res);
    }).catch((err)=>{
        console.log(err);
        return;
    });
}
</script>
