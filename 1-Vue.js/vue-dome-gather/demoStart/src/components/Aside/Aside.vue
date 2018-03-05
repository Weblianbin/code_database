<template>
  <div class="Box">
    <div class="grid-content bg-purple">
      <div>
        <router-link to="/home">首页</router-link>
      </div>
      <div>
        <router-link to="/JSchangeStyle">变量解构,js修改样式</router-link>
      </div>
      <div>
        <router-link to="/video">video视频</router-link>
      </div>
      <div>
        <router-link to="/betterScroll">better-scroll滚动</router-link>
      </div>
    </div>
  </div>
</template>

<style scoped>
/* 左侧 */
.Box{
  border-right: 1px solid #F56C6C;
  /* height: 500px; */
}
.bg-purple div{
  border-bottom: 1px solid #F56C6C;
  padding: 15px;
}
.bg-purple div a{
  font-size: 16px;
  color: black;
  text-decoration: none;
}
</style>
