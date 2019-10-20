# zj_component

## 脚手架搭建

### 创建项目
npm init
```javascript
├── config  # webpack配置
     ├── webpack.base.js # 公共配置
     ├── webpack.dev.config.js # 开发环境配置
     └── webpack.prod.config.js # 打包发布环境配置
├── example # 开发测试组件
       ├── src 
├── lib # 打包目录
├── node_modules 
├── src # 组件
├── .babelrc # 
├── .npmignore # 忽略的文件和文件夹
├── README.md
└── package.json
```

### 安装依赖

### 配置 webpack 和 babel
  公共配置文件：webpack.base.js。
  开发环境配置文件：webpack.dev.config.js。
  打包发布环境配置文件：webpack.prod.config.js。

## 开发组件

## 组件打包及功能测试
  npm link 把打包之后的组件引入到全局 node_modules 
  import Component from 'zj_component';
  import 'zj_component/lib/main.min.css';

## 发布组件
