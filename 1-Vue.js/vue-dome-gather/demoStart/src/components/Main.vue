<template>
  <div class="Box">
   <el-container>
      <el-header>
        例子功能整理
      </el-header>
      <el-row>
        <el-col :span="4">
          <Aside></Aside>
        </el-col>
        <el-col :span="20">
          <div class="grid-content bg-danger">
            <router-view></router-view>
          </div>
        </el-col>
      </el-row>
    </el-container>
  </div>
</template>

<script>
import Aside from './Aside/Aside'
export default{
  components: {
    Aside
  }
}
</script>

<style scoped>
.Box{
  font-size: 20px
}
.el-header {
  background-color: black;
  color: white;
  text-align: center;
  line-height: 60px;
}
.el-row {
  margin-bottom: 20px;
  /* &:last-child {
    margin-bottom: 0;
  } */
}
.el-col {
  border-radius: 4px;
  height: 100% !important;
}
.bg-danger {
  background: #409EFF;
  padding: 15px;
}
</style>
