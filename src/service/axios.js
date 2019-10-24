import axios from "axios";
import store from "../store";
// import { message } from "antd";
import config from "../config"
import {
  SHOW_LOADING_ASYNC,
  HIDE_LOADING_ASYNC
} from "../store/actionTypes";
import storage from "../utils/storage";

const instance = axios.create({
  baseURL: config.SERVER_URL + config.API_PATH,
  headers: {},
  validateStatus: function(status) {
      if(status === 401) {
          // 具体操作（后续加）
          return false
      } else {
          return true
      }
  }
});

instance.interceptors.request.use(config => {
    config.headers["x-auth-token"] = storage.get("token");
    store.dispatch({ type: SHOW_LOADING_ASYNC });
    return config;
  },
  error => {
    console.warn(error.response);
    store.dispatch({ type: HIDE_LOADING_ASYNC });
    return Promise.reject(error);
  }
);

// Add a response interceptor
instance.interceptors.response.use( res => {
    store.dispatch({ type: HIDE_LOADING_ASYNC });
    // if (res.status !== 200 || !res.data || res.data.code !== "0000") {
    //   // message.error(res.data.msg || "服务异常");

    //   // 登录过期了
    //   if (res.data.code === "0401") {
    //     store.dispatch({ type: LOGOUT });
    //   }

    //   return Promise.reject(res.data.msg);
    // }

    return res.data.data;
  }, error => {
    store.dispatch({ type: HIDE_LOADING_ASYNC });
    // if (error.response && error.response.status === 401) {
    //   console.log('401报错！')
    // }
    // todo: 异常抛出后，saga未捕获，控制台报错
    return Promise.reject(error);
  }
);

export default instance;
