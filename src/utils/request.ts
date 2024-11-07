// 引入axios
import axios from "axios"
// 利用axios创建一个实例
const requst = axios.create({
  baseURL:'/api', //请求基础路径
  timeout:5000 //请求超时时间
})


// 对外暴露axios
export default requst