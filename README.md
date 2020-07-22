# my-project
全栈开发练习

-----
技术涉及： NodeJs + VueJs 
-----

# 一、PC

## 1.根目录下：

新建文件夹server （服务器）
```
mkdir server
```

新建web项目 （前端页面展示）
```
vue create web
```
新建文件夹admin （后台管理）

```
mkdir admin
```
## 1.2 server文件下
进入server，初始化node项目

```
cd server
npm init -y
```
在server中新建index.js文件

在package.json里的"scripts":{}中自定义脚本，加一段：
"serve": "nodemon index.js",

安装nodemon和vue
```
npm i -g nodemon
npm i -g @vue/cli
```
## 1.3 admin文件下
启动admin项目

```
npm run serve
```
安装elementUI
```
vue add element
```
安装路由
```
vue add router
```
# 二、管理后台
基于element UI的后台管理基础界面搭建
## 2.1 创建分类（多层级）
...
写页面

提交表单，需要安装axios
```
npm i axios
```
新建http.js
## 2.2 分类列表
CategoryList.vue
## 2.3 修改列表

## 2.4 删除列表

# 三、服务器端

进入server文件,安装express ， mongoose（用于连接数据库的）cors（允许跨于请求的）
```
cd server
npm i express@next mongoose cors
```
新建routes文件夹（后端路由）：每个模块在routes下有一个对应的路由文件夹

创建连接数据库的plugins文件夹--db.js 用于连接数据库

新建models文件夹，用于存储数据模型

# 四、数据库

此时要确保安装了mongodb, 并且启动mongodb
mongodb安装方式（mac）
新的安装方式告诉我们，需要先执行：
打开mac终端

```
brew tap mongodb/brew
```
接着执行：
```
brew install mongodb-community
```
上面是安装的社区版的。如果需要安装指定版本的，可以带上 @版本号。
```
brew install mongodb-community@4.2
brew install mongodb-community@4.0
brew install mongodb-community@3.6
```
安装后的默认配置文件路径如下：
-----> 配置文件：/usr/local/etc/mongod.conf
-----> 日志目录路径：/usr/local/var/log/mongodb
-----> 数据目录路径：/usr/local/var/mongodb

启动mongodb
```
brew services start mongodb-community
```

首先，我们启动 mongo 成功后，执行下面的命令：

-----> 链接 mongo
```
mongo
```

## 五、通用 CRUD 接口 （Create Read Update Delete）

封装通用api


```
npm i inflection // 处理单复数/下划线/单词格式的转换
```

 1.装备管理
 2.图片上传和文件管理（multer）
 3.英雄管理
 4.编辑英雄
 5.装备多选（el-select，multiple）
 6.技能的编辑

### 图片上传
express本身是获取不到上传文件的数据的，所以这里需要中间件来处理上传数据
在server下 ，安装 multer
```
npm i multer
```

### 文章编辑
文章管理
富文本编辑器（quill）
在admin文件夹下，安装富文本编辑插件
```
npm install --save vue2-editor
```
管理员账号管理（bcrypt）
在server文件夹下安装bcrypt，对密码进行散列加密处理
```
npm i bcrypt
```
登录接口（jwt, jsonwebtoken）
做web的token验证的
```
npm i jsonwebtoken
```
服务端登录校验
```
npm i http-assert
```
客户端路由限制（beforeEach，meta）

# 移动端网站
1.开发服务器接口
2.考虑整体样式
3.使用字体图标（iconfont）
4.首页顶部轮播图片（swiper）
5.考虑通用组件（SFC）
6.卡片组件
7.菜单组件（tab + swiper）
8.首页新闻资讯
9.新闻详情页
10.首页英雄列表