# vscode 插件简单开发使用

# 1.Hello vscode

## ①.安装依赖

```bash
npm install -g yo generator-code
```

+ `yo`:通用型项目脚手架工具。官网是：[yo](https://yeoman.io/generators/)
+ `generator-code`:是vscode的扩展生成器，必须配合yo才能使用

## ②.创建vscode脚手架

```bash
$ yo code
# 选择JavaScript
# 输入拓展名 extension: extensionName
# 输入标识符 identifier: identifierName
# 输入描述 description: description
# 是否启动js类型检查: N
# 初始化Git仓库: Y
# 使用什么作为包管理? npm/pnpm/yarn
```

## ③.项目结构

![image-20231007134417669](D:\projects\js\Study-vscode-plugin\README.assets\image-20231007134417669.png)

### package.json

![image-20231007134948541](D:\projects\js\Study-vscode-plugin\README.assets\image-20231007134948541.png)

## ④.第一次调试

1. 在当前vscode插件的项目下，按 `F5`,打开到新窗口

![image-20231007135457191](D:\projects\js\Study-vscode-plugin\README.assets\image-20231007135457191.png)

2. 在新窗口下，按 `ctrl shift p`,输入 `Hello World`，点击之后，右下角会弹出一个 `hello world`

![image-20231007135549314](D:\projects\js\Study-vscode-plugin\README.assets\image-20231007135549314.png)

3. 代码区写完代码后，代码区按 `ctrl+s`保存，或者调试区按 `ctrl r`，更新插件。

# 2.编写vsc插件

## ①vscode api

[官网api](https://code.visualstudio.com/api/references/vscode-api)

# 3.打包及使用

## ①vsce打包

1. 下载打包编译依赖

```bash
npm install -g vsce
```

2. 第一次打包需要修改README.md,不然可能会报错。(意思就是声明自己的插件不再是测试使用了)

![image-20231007195337338](D:\projects\js\Study-vscode-plugin\README.assets\image-20231007195337338.png)

2. 在插件目录下打包，生成 `xxx.vsix` 文件

```bash
vsce package
```

![image-20231007195716739](D:\projects\js\Study-vscode-plugin\README.assets\image-20231007195716739.png)

## ②vsix安装插件

![image-20231007195857741](D:\projects\js\Study-vscode-plugin\README.assets\image-20231007195857741.png)

# 4.发布插件

vsce命令行上传[官方教程](https://code.visualstudio.com/api/working-with-extensions/publishing-extension)

本次首次上传需要账号登录,用的是web界面上传：

->[官网插件市场](https://marketplace.visualstudio.com/VSCode)

## ①

![image-20231007200730532](D:\projects\js\Study-vscode-plugin\README.assets\image-20231007200730532.png)

## ②

![image-20231007200841603](D:\projects\js\Study-vscode-plugin\README.assets\image-20231007200841603.png)

## ③将vsix拖放进去upload

需要在package.json中提前加上

`"publisher": "Your Name",`

`"repository": "GitHub Url of this plugin",`

![image-20231007202257124](D:\projects\js\Study-vscode-plugin\README.assets\image-20231007202257124.png)

# 5.下载使用

![image-20231007202443442](D:\projects\js\Study-vscode-plugin\README.assets\image-20231007202443442.png)
