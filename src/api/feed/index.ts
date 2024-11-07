// 统一管理首页模块的接口
import request from '../../utils/request'
// 引入接口类型

// 通过枚举去管理接口地址
enum API {
  // 获取随机图片的数据接口地址
  GET_RANDOM_IMG = 'https://random-picture.vercel.app/api/?json',
}
// 获取随机图片的数据
export const getRandomImg = () => request.get(API.GET_RANDOM_IMG)