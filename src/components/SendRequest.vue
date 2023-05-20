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
    </div>
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
</script>