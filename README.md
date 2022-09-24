## npm 安装问题
--legacy-peer-deps标志是在v7中引入的，目的是绕过peerDependency自动安装；它告诉 NPM 忽略项目中引入的各个modules之间的相同modules但不同版本的问题并继续安装，保证各个引入的依赖之间对自身所使用的不同版本modules共存。
## rollup 小结

目的 - 将一系列互相依赖的模块代码，打包生成处理完依赖关系的一个或者几个大的文件，可以胜任 web 应用或者第三方库

```js
// 安装
npm install rollup -g // 全局
npm install rollup -D
// 简单实用
format 格式 - 可选
1. iife  - 自执行函数包裹
2. cjs  - commonjs
3. es - es modules
rollup main.js --file bundle.js --format iife

```

## 基本插件

- commonjs 格式处理 @rollup/plugin-commonjs
- json 文件处理 @rollup/plugin-json
- node-resolve 第三方库路径处理 @rollup/plugin-node-resolve
- typescript 格式处理 @rollup-plugin-typescript2
