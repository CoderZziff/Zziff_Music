/**axios封装
 * 请求拦截、相应拦截、错误统一处理
 */
import axios from "axios";
import QS from "qs";
import store from '../store'
import Message from 'ant-design-vue/es/message'
import Toast from 'components/Toast/toast'

axios.defaults.baseURL = process.env.VUE_APP_URL;

// 请求超时时间
axios.defaults.timeout = 30000;

// post请求头
axios.defaults.headers.post["Content-Type"] =
  "application/x-www-form-urlencoded;charset=UTF-8";

// 请求拦截器
axios.interceptors.request.use(
  config => {
    return config;
  },
  error => {
    Message.error(error)
    return Promise.reject(error);
  }
);

// 响应拦截器
axios.interceptors.response.use(
  response => {
    if (response.status === 200) {
      return Promise.resolve(response);
    } else {
      return Promise.reject(response);
    }
  },
  // 服务器状态码不是200的情况
  error => {
    if (error.response.status) {
      switch (error.response.status) {
        case 301:
          store.commit('User/SET_SHOW_LOGIN', true)
          store.commit('User/SET_USER_INFO', {})
          store.commit('App/SET_REDIRECT', '/home')
          localStorage.removeItem('userId')
          Message.warn(res.data.msg || '请先登录')
          break
        case 400:
          Message.warn(res.data.message || res.data.msg || '资源不在收藏列表中')
          break
        case 401:
          store.commit('User/SET_SHOW_LOGIN', true)
          store.commit('User/SET_USER_INFO', {})
          store.commit('App/SET_REDIRECT', '/home')
          localStorage.removeItem('userId')
          Message.warn(res.data.msg || '请先登录')
          break
        // 403 token过期
        // 登录过期对用户进行提示
        // 清除本地token和清空vuex中token对象
        // 跳转登录页面
        case 403:
          Message.error(res.data.msg || "权限不足");
          // 清除token
          localStorage.removeItem("token");
          store.commit("loginSuccess", null);
          // 跳转登录页面，并将要浏览的页面fullPath传过去，登录成功后跳转需要访问的页面
          setTimeout(() => {
            router.replace({
              path: "/login",
              query: {
                redirect: router.currentRoute.fullPath
              }
            });
          }, 1000);
          break;
        // 404请求不存在
        case 404:
          Message.error({
            message: res.data.msg || "请求资源不存在",
          });
          break;
        case 500:
          Message.error(res.data.msg || '服务器开小差啦')
          break
        case 504:
          Message.error(res.data.msg || '网络请求失败')
          break
        // 其他错误，直接抛出错误提示
        default:
          Message.error({
            message: error.response.data.message,
          });
      }

    }
    else {
      console.log('error', error.message)
      Toast({
        content: '请检查网络连接状态!'
      })
    }
    return Promise.reject(error.response);
  }
);
/**
 * get方法，对应get请求
 * @param {String} url [请求的url地址]
 * @param {Object} params [请求时携带的参数]
 */
export function get(url, params) {
  return new Promise((resolve, reject) => {
    axios
      .get(url, {
        params: params
      })
      .then(res => {
        resolve(res.data);
      })
      .catch(err => {
        reject(err.data);
      });
  });
}
/**
 * post方法，对应post请求
 * @param {String} url [请求的url地址]
 * @param {Object} params [请求时携带的参数]
 */
export function post(url, params) {
  return new Promise((resolve, reject) => {
    axios
      .post(url, QS.stringify(params))
      .then(res => {
        resolve(res.data);
      })
      .catch(err => {
        reject(err.data);
      });
  });
}
