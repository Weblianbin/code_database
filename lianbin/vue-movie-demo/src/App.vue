<template>
  <div id="app">
    <div class="container">
      <div class="row">
        <div class="col-xs-8 col-xs-offset-2">
          <div class="page-header">
            <h1>豆瓣电影Top20</h1>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-xs-2 col-xs-offset-2">
          <ul class="list-group">
            <li class="list-group-item">
              <router-link to="/home">首页</router-link>
            </li>
            <li class="list-group-item">
              <router-link to="/robot">机器人对话</router-link>
            </li>
            <li class="list-group-item">
              <router-link to="/about">关于</router-link>
            </li>
          </ul>
        </div>
        <div class="col-xs-6">
          <div class="panel">
            <div class="panel-body">
              <!-- 切换路由需要显示的组件 -->
              <router-view></router-view>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-align: center; */
  color: #2c3e50;
  margin-top: 60px;
}
</style>
