<template>
  <div class="box">
    <div class="contentBox">
      <div class="title">

      </div>
      <div class="content">
        <div ref="contentShow" v-html="item.content" v-for="(item,index) in newsArr" :key="index"></div>
      </div>
      <!-- <div class="imgBox">
        <img src="/static/news/1.jpg" alt="">
        <img src="/static/news/2.jpg" alt="">
        <img src="/static/news/3.jpg" alt="">
        <img src="/static/news/4.jpg" alt="">
      </div> -->
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      newsArr: [
        {
          content: '<div>【编者按】2018年春节假期是党的十九大后一个重要节点。正值各地人大、政府、政协换届时期，春节和换届两个重要节点重叠，能否风清气正、能否彻底遏制“节日腐败”，关乎人民群众对我们持续推进全面从严治党的信心与信任，关乎党的十九大后持续深入抓作风建设能否开好局、起好步。</div>'
        },
        {
          content: '<p><img src="/static/news/1.jpg" alt=""></p>'
        },
        {
          content: '<p>原话：“四风”问题具有顽固性反复性，纠正“四风”不能止步，作风建设永远在路上。形式主义、官僚主义同我们党的性质宗旨和优良作风格格不入，是我们党的大敌、人民的大敌。中央政治局的同志必须带头树立正确政绩观，始终做老实人、说老实话、干老实事，自觉反对形式主义、官僚主义。中央政治局的同志不仅要带头不搞形式主义、官僚主义，而且要同形式主义、官僚主义的种种表现进行坚决斗争，聚焦突出问题，充分认识形式主义、官僚主义的多样性和变异性，摸清形式主义、官僚主义在不同时期、不同地区、不同部门的不同表现，紧密联系具体实际，既解决老问题，也察觉新问题；既解决显性问题，也解决隐性问题；既解决表层次问题，也解决深层次问题，抓出习惯，抓出长效。</p>'
        },
        {
          content: '<p><img src="/static/news/2.jpg" alt=""></p>'
        },
        {
          content: '<p><img src="/static/news/3.jpg" alt=""></p>'
        },
        {
          content: '<p><img src="/static/news/4.jpg" alt=""></p>'
        },
        {
          content: '<p>【编者按】2018年春节假期是党的十九大后一个重要节点。正值各地人大、政府、政协换届时期，春节和换届两个重要节点重叠，能否风清气正、能否彻底遏制“节日腐败”，关乎人民群众对我们持续推进全面从严治党的信心与信任，关乎党的十九大后持续深入抓作风建设能否开好局、起好步。</p>'
        }
      ]
    }
  },
  updated () {
    console.log(this.$refs.contentShow)
    console.log('>>>>>>>>>')
  },
  mounted () {
    this.imgHandle()
    this.pHandle()
  },
  methods: {
    imgHandle () {
      // console.log(this.$refs.contentShow.getElementsByClassName('img'))
      let img = document.getElementsByTagName('img')
      let imgArr = []
      // ### 通过后台返回的HTML代码,用v-html进行解析,但是不能在style中设置样式,因为会找不到对应的选择器
      // 所以通过原生js去处理这个问题,要把处理的js样式代码写在update中,可能mounted也可以
      // (我这里就是在mounted测试,在公司是用update的生命周期函数)

      // 用原生js,获取到的DOM原生,它是一个集合,不是数组,
      // 可以通过变量解构,得到每个img标签,push到数组中,
      // 通过map的方法遍历这个数组,进行js原生处理img样式
      // 这里有个坑,就是不能移除高度,(如赋值 '','none','null',都是不行的,要使用'auto'自适应)
      // 而且这个需求是,我只要设置宽度,不要原本的高度,要把原本的高度设置为自适应
      imgArr.push(...img)
      imgArr.map((item) => {
        item.style.height = 'auto'
        item.style.width = '100%'
      })
      console.log(imgArr)
    },
    pHandle () {
      let p = document.getElementsByName('p')
      console.log('选不到p')
      console.log(p)
      let pArr = []
      pArr.push(...p)
      pArr.map((item) => {
        item.style.margin = ''
      })
      console.log(pArr)
    }
  }
}
</script>

<style scoped>
/* .box{
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100%;
} */
.contentBox{
  width: 80%;
  margin: 0 auto;
  background-color: red;
}
p{
  margin: 0 !important;
}
</style>
