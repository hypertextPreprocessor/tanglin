# 项目名称 - xxxx项目
## 全局声明
- 主域名: `https://example.com`
- cdn: `https://qiniu.icloud.com/example/`
- 请求地址: `/api`
- 媒体资源地址: `/static/resource/`
- sql地址:  `/usr/local/sql`
- 请求头规范:   
- `Content-Type: application/json`
- 响应状态吗:  
|状态码|说明|
|---|---|
|500|服务器内部错误|
|200|OK|
|404|not found|  
## 安装方法/使用说明
### 前端   
解压文件之后执行.  
`npm install`  
尝试开发环境在跟目录执行  
`npm start`  
打包生产环境在根目录执行  
`npm run build`  
切换生产/开发环境可以手动更改根目录下的config/config.js文件也可以在根目录下执行  
`gulp dev` 或 `gulp prod`  
### 后台  
开发环境要求：     
   - JDK 14
   - springboot
   - mysql 8.0
   - lombok 1.18.16
## api文档
### 1. 登录接口
---
- ####  请求地址 `/sys/login.do`
- #### 请求方式 `POST`
- ####  页面位置 `com/headway/controller/weixin/LoginIndex.java`
- ####  请求参数
|名称|是否必填|数据类型|说明|
|---|---|---|---|
|code|是|string|登录code|
- #### 返回参数
|名称|类型|默认值|说明|
|---|---|---|---|
|name|string|空|姓名|
- #### 示例
 ``` 
 {
     result:1,
     data:{}
     message:"success"
 }
 ```
### 2.查询接口
---