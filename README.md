# x-formly

## INTRO

此项目将 @angular/material 和 x-material 的基础组件以 formly 的方式进行再次封装，各组件的使用方法见 demo 文件夹。

你也可以将 demo 运行后在本地查看各组件的实际效果。

如果你想实时查看组件配置修改后的展示效果，请将项目运行后，点击各组件右上方的 'edit in stackblitz' 按钮在线修改代码并测试结果

## DEMO

```bash
npm start
```

## PUBLISH

1. cd projects/x-formly
2. change the code
3. npm version patch
4. ng build x-formly
5. cd dist/x-formly
6. npm login
7. npm publish [--tag beta]
