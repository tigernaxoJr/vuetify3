import axios from 'axios'

//#region create axios instance
const baseURL = import.meta.env.DEV
  ? '/api/'
  : 'https://eformapi.ktgh.com.tw/api/';

const api = axios.create({ baseURL });

// 設定 api 送出前要做的事
function requestHandler(){ }
api.interceptors.request.use(requestHandler)
// 收到回應要做的事，例如收到 401, 402... 的動作
function responseHandler(){ }
api.interceptors.response.use(responseHandler)
//#endregion

// 模擬 ajax
api.GetUser = () => new Promise(res=>res([
  { id: 1, name: '', age: 22 },
  { id: 2, name: '', age: 22 },
  { id: 3, name: '', age: 22 },
  { id: 4, name: '', age: 22 },
  { id: 5, name: '', age: 22 },
  { id: 6, name: '', age: 22 },
]))

// https://ithelp.ithome.com.tw/articles/10230336
export default api
