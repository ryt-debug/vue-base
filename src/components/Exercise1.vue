<template>
    <div class="tap-wrapper">
        <header class="tap-head">
            <div @click="current = 0" class="tap-button" :class="{ active: current === 0 }">热门球员</div>
            <div @click="current = 1" class="tap-button" :class="{ active: current === 1 }">热门球队</div>
        </header>
        <div class="main">
            <!-- 
                v-show，用来设置一个内容是否显示
                通过display设置
             -->
            <!-- 球员 -->
            <div v-show="current === 0">
                <div class="tap-list">
                    <div class="tap-item">
                        <div class="photo">
                            <img src="/images/desk.jpg" alt="">
                            <span>1</span>
                        </div>
                        <div class="desc">
                            <span class="name">梅西</span>
                            <div class="hot-bar">
                                <div class="inner">热度</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <!-- 球队 -->
            <div v-show="current === 1">
                <div class="tap-list">
                    <div class="tap-item">
                        <div class="photo">
                            <img src="/images/desk.jpg" alt="">
                            <span>1</span>
                        </div>
                        <div class="desc">
                            <span class="name">法国</span>
                            <div class="hot-bar">
                                <div class="inner">热度</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';

let current = ref(0);
</script>

<style scoped>
.tap-wrapper {
    box-sizing: border-box;
    width: 800px;
    padding: 20px;
    background-color: rgb(45, 83, 211);
}

.tap-head {
    display: flex;
    border-radius: 10px;
    overflow: hidden;
}

.tap-button {
    background-color: #fff;
    font-size: 30px;
    /* flex弹性系数，auto自动伸缩 */
    flex: auto;
    padding: 10px 0;
    text-align: center;
    cursor: pointer;
    /* 切换所需时长 */
    transition: 0.5s;
}

.tap-button:not(.active):hover {
    color: rgb(187, 3, 52);
}

.active {
    background-color: rgb(187, 3, 52);
    color: #fff;
}

.tap-list {
    margin: 20px;
}

.tap-item {
    display: flex;
    margin-bottom: 40px;
}

.photo {
    width: 150px;
    background-color: #fff;
    border-radius: 20px;
    overflow: hidden;
    position: relative;
}

.photo img {
    width: 100%;
    vertical-align: top;
    /* display:block; */
}

.photo span {
    position: absolute;
    width: 50px;
    height: 50px;
    background-color: rgb(245, 102, 1);
    font-size: 20px;
    font-weight: bold;
    color: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
    top: 0;
    left: 0;
    border-bottom-right-radius: 20px;
}

.desc {
    display: flex;
    flex-flow: column;
    flex:auto;
    justify-content: space-evenly;
    font-size: 30px;
    color: #fff;
    margin-left: 30px;
}

.hot-bar {
    border-radius: 20px;
    background-color: rgb(3, 37, 103);
    text-indent: .5em;
    /* overflow: hidden; */
}

.inner {
    width: 70%;
    background: linear-gradient(to right, rgb(187, 3, 52) 50%, rgb(66, 2, 12));
    border-radius: 20px;
    white-space: nowrap;
}
</style>