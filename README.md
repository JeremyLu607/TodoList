# 这是一个可支持多用户注册和登录使用的待办事项APP。此应用分别由使用React框架开发的待办事项应用以及基于nodejs完成的用户注册和登录系统组成。

## 项目使用说明:
- 待办事项应用 TodoList 相关使用说明:
    - 首先在nodejs官网 (https://nodejs.org/en/download/) 下载nodejs
    - 然后打开终端
    - 通过执行 ***$ npx create-react-app 项目名称*** 来创建项目
    - 接下来下载yarn (https://classic.yarnpkg.com/en/docs/install/#windows-stable) ，一个资源管理器
    - 然后执行 ***$ yarn add uuid***
    - 最后安装Material-UI: ***$ yarn add @material-ui/core @material-ui/icons***
    - 通过 ***$ npm start*** 来启动项目

- 用户注册和登录系统 Login_Register_Sytem 相关使用说明:
    - 打开终端
    - 安装express-generator脚手架工具来搭建项目工程: ***$ npm install express-generator -g***
    - 接下来创建项目工程，由于会用到ejs模板引擎，所以在执行项目初始化的时候需要加上 -e: ***$ express -e 项目名称***（如已有搭建好的项目就不需要进行这一步的操作）
    - 然后进入到项目目录: ***$ cd 项目名称***
    - 并安装初始化模块: ***$ npm install***
    - 为了保证代码实时更新并且自动编译，使用nodemon来启动项目: ***$ npm install nodemon -g***
    并在package.json文件中将node改成nodemon
    - 最后，通过 ***$ npm start*** 来启动项目
    - 另外打开一个终端并进入该项目目录，启动mongodb: ***$ mongod --dbpath 
    "C:\Users\Jeremy\PROGRAMMING\mongodb"***（这个路径只是例子，路径以自己电脑安装mongodb的路径为准）

### 在完成以上所有安装后，便可以操作此系统了。
