***
├── config  # webpack配置
     ├── webpack.base.js # 公共配置
     ├── webpack.dev.config.js # 开发环境配置
     └── webpack.prod.config.js # 打包发布环境配置
├── example # 开发时预览代码
       ├── src # 示例代码目录
            ├── app.js # 入口 js 文件
            └── index.html # 入口 html 文件
├── lib # 组件打包结果目录
├── node_modules # 安装依赖时自动生成
├── src # 组件源代码目录
     ├── index.css # 组件样式
     └── index.js  # 组件源代码
├── .babelrc # babel 配置
├── .npmignore # 指定发布 npm 的时候需要忽略的文件和文件夹
├── README.md
└── package.json