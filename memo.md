## 目标
- 实现前后端分离
  - 后端：express
  - 前端：vue-cli
  - 前后端之间的通信用api实现
    - 同源问题：利用cors解决
    - ajax通信：引用axios插件
- firebase realtime database
  - 使用方式
    - 前端和database不直接通信，全部通过后端处理
    - read：后端从database获取数据并加工
    - write：后端从前端获取数据后，加工并写入database
- 插件
  - 除上述插件，还尝试了vuejs-datepicker和moment

## 补充
- 制作时间：10h左右（……加上拖延的时间可能有100h）
- 部分参考网页
  - express + vue-cli的前后端分离：https://www.cnblogs.com/adoctors/p/8911151.html
  - nodesjs + firebase database：https://qiita.com/YutoKoguchi/items/5de7f19768bea1885c99
  - express + nodemon：https://zy-email1991.iteye.com/blog/2195936
  - express cors middleware：https://expressjs.com/en/resources/middleware/cors.html
- 有关firebase
  - 有空想尝试下authorization，hosting，cloud的数据库等功能
- 困难
  - vue-cli的build遭遇`Unexpected token <`，无法在后端服务器上正常读取，就……再、再说吧（望天

## 准备工作
- express：`npm install express-generator -g`
- vue-cli：`npm install -g vue-cli`
- 项目结构
  - object
    - views
    - server

## express（命令行相关）
```
# 生成项目
$ express server
$ cd server
$ npm install

# 运行项目：http://127.0.0.1:3000/
$ DEBUG=myapp:* npm start

$ npm install cors --save
$ npm install firebase-admin --save
```

## vue-cli（命令行相关）
```
$ vue init webpack views
$ npm i --save axios
```





