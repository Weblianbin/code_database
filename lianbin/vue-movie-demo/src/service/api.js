import axios from 'axios'
export default {
    /**
     * 图灵机器人获取回答数据
     * @param {提问的内容} info 
     * @param {回调函数} callback 通过回调传递请求结果 
     */
    getData(info,callback){
        // global.key 全局定义的key
        axios.post('api',{key:global.key,info:info})
        .then((res)=>{
            // 成功
            callback(res)
        })
        .catch((err)=>{
            // 错误
            console.log(err)
        })
    }
}