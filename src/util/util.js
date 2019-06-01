/* eslint-disable no-irregular-whitespace */
import axios from 'axios'
import { Toast } from 'vant';
let util = {};
util.ajax = axios.create({
  // baseURL: "http://t.ceyu99.com",
  // baseURL:"http://localhost:8081",
  baseURL:"/user/",
  // baseURL:'http://api.demourl.com/',
  // baseURL:"http://user.demourl.com/",
  timeout: 30000
});
// axios.defaults.baseURL = '/user/'
// axios.defaults.timeout = 5000
util.ajax.interceptors.request.use(
  config => {
    config.headers={
      "Content-Type":"application/json;charset=UTF-8"
      // "Content-Type":"application/x-www-form-urlencoded;charset=UTF-8"
    }
    return config;
  },
  err => {
    return Promise.reject(err);
  }
);
util.ajax.interceptors.response.use(
  response => {
    if (response.data.code !== 0) {
      /*
      * 判断所有提示信息
      */
      Toast({message: response.data.msg, type: 'fail'});
      return Promise.reject(response);
    }
    return response;
  },
  error => {
    // eslint-disable-next-line no-console
    console.log(error.response);
    
    Toast({message: error.response.data.msg, type: 'fail'});
     
    return Promise.reject(error.response)   // 返回接口返回的错误信息
  }
);
util.randomLenNum = (len, date) => {
  let random = ''
  random = Math.ceil(Math.random() * 100000000000000).toString().substr(0, len || 4)
  if (date) random = random + Date.now()
  return random
}
util.deconstructUrl= function(url='') {
  if(!url.includes('?')){
    return ;
  }
  let params = {};
  let arr = url.split('?')[1].split('&');
  arr.forEach(function(item){
    let entries = item.split('=');
    params[entries[0]] = decodeURI(entries[1]);
  });
  return params;
};
util.getLocationSearch = function() {
  if(!window.location.search){
    return {};
  }
  return util.deconstructUrl(window.location.search);
}
util.getParam = function (paraName) {
　     var url = document.location.toString();
　　　　var arrObj = url.split("?");

　　　　if (arrObj.length > 1) {
　　　　　　var arrPara = arrObj[1].split("&");
　　　　　　var arr;

　　　　　　for (var i = 0; i < arrPara.length; i++) {
　　　　　　　　arr = arrPara[i].split("=");

　　　　　　　　if (arr != null && arr[0] == paraName) {
　　　　　　　　　　return arr[1];
　　　　　　　　}
　　　　　　}
　　　　　　return "";
　　　　}else {
　　　　　　return "";
　　　　}
}
util.getParams= function(paramName){
  paramValue = "", isFound = !1; 
    if (this.location.search.indexOf("?") == 0 && this.location.search.indexOf("=") > 1) { 
        arrSource = unescape(this.location.search).substring(1, this.location.search.length).split("&"), i = 0; 
        while (i < arrSource.length && !isFound) arrSource[i].indexOf("=") > 0 && arrSource[i].split("=")[0].toLowerCase() == paramName.toLowerCase() && (paramValue = arrSource[i].split("=")[1], isFound = !0), i++ 
    } 
    return paramValue == "" && (paramValue = null), paramValue 
}
export default util;