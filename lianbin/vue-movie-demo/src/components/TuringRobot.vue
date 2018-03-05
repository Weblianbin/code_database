<template>
  <div>
        <div class="show">
            <h3>我是图灵机器人</h3>
            <p>请在下面的框中输入你想要和我说的话:</p>
            <div id="inputContent" contentEditable='true'></div>
            <button @click='says'>确定</button>
        </div>
        <div id="showContent" v-for="(item,index) in info" :key="index">
            <div>
                <div v-if="item.code=='100000'">
                         {{item.text}}
                </div>
                <div v-else-if="item.code=='200000'">
                     <div>
                         {{item.text}}
                     </div>
                     <a :href="item.url">点我跳转</a>
                </div>
                <div v-else-if="item.code == '308000'">
                    <div>
                       
                         {{item.text}}
                     </div>
                    <div v-for="(ele,index) in item.arr" :key="index">
                        <img :src="ele.icon">
                        <p>菜名:{{ele.name}}</p>
                        <p>{{ele.info}}</p>
                    </div>
                </div>
               <div v-else>
                    <div>
                       
                         {{item.text}}
                     </div>
                    <div v-for="(ele,index) in item.arr" :key="index">
                        <img :src="ele.icon">
                        <p>{{ele.article}} <a :href="ele.detailurl">查看详情</a></p>
                        <p>来源:{{ele.source}}</p>
                    </div>
               </div>
              
            </div>
        </div>
  </div>
</template>
<style>
h3 {
  margin: 0;
}
#inputContent {
  height: 200px;
  width: 100%;
  border: 1px solid red;
  padding: 10px;
}
#inputContent:focus {
  outline: none;
}
</style>
<script>
// 导入api文件
import Api from "../service/api";
export default {
  data() {
    return {
      info: []
    };
  },
  created: function() {},
  methods: {
    says: function() {
      var value = document.getElementById("inputContent").innerText;
      // 设置代理之后，这里api前面不需要斜杠
      // 如果后面还有path，比如api/v1/user?name=lianbin
      this.$axios
        .post("api", { key: "588881add9714a46af72d77349dde62e", info: value })
        .then(res => {
          var info = this.info;
          var obj = {};
          obj.text = res.data.text;
          obj.arr = res.data.list;
          obj.code = res.data.code;
          obj.url = res.data.url;
          info.push(obj);
          console.log(info);
          console.log(res.data);
        })
        .catch(err => {
          console.log(err);
        });
      document.getElementById("inputContent").innerText = "";
    }
  }
};
</script>