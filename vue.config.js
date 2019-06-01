
module.exports = {
    publicPath: './',
    devServer: {
        proxy: {
          // 这里是配置代理的
        "/user": {
            target: "http://t.ceyu99.com",
            // target:'http://192.168.1.124:9999',
            changeOrigin: true,  // 允许跨域
            ws: true,
            pathRewrite: {'^/user' : ''}
          }
          
        }
      }
}