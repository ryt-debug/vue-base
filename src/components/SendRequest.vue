<template>
    <h3>请求展示</h3>
    <button @click="AvailableRoom">查看可用琴房</button>
    <br>
    <button @click="CreateReserve">预约</button>
</template>

<script setup>
    import { inject, onMounted } from "vue";
    const request = inject('$request');

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
            StartTime:'2021-10-01 08:00:00',
            EndTime:'2021-10-01 09:00:00',
            StudentId:1,
            RoomId:1,
        }).then((res)=>{
            console.log(res);
        }).catch((err)=>{
            console.log(err);
        })
    }
</script>