// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
// 模块“vscode”包含 VS Code 扩展性 API
// 导入模块并在下面的代码中使用别名 vscode 引用它
const vscode = require('vscode');

// This method is called when your extension is activated
// Your extension is activated the very first time the command is executed
// 当您的扩展被激活时会调用此方法
// 您的扩展将在第一次执行命令时激活
/**
 * @param {vscode.ExtensionContext} context
 */
function activate(context) {
	// 使用控制台输出诊断信息（console.log）和错误（console.error）
	// 这行代码只会在您的扩展程序激活时执行一次
	// console.log('Congratulations, your extension "identifiername" is now active!');

	// 该命令已在package.json文件中定义
	// 现在用registerCommand提供命令的实现
	// commandId 参数必须与 package.json 中的命令字段匹配
	let disposable = vscode.commands.registerCommand('identifiername.helloWorld', function () {
		// 活动的编辑器对象
		const activeTextEditor = vscode.window.activeTextEditor;
		// console.log(activeTextEditor);

		// 获取选中区域的文本
		if (activeTextEditor.selection.isEmpty) {
			vscode.window.showErrorMessage("请先选择文本!");
		}
		let text = activeTextEditor.document.getText(activeTextEditor.selection);
		// 正则匹配选中文本的 prop="xxx"和label="xxx"中的内容，并添加到tableDataArr中
		let propMatch = text.match(/prop="([^"]+)"/g);
		if (!propMatch) {
			vscode.window.showErrorMessage("没有找到prop属性!");
		}
		let labelMatch = text.match(/label="([^"]+)"/g);
		let tableData = {};
		propMatch.forEach((match, index) => {
			let propValue = match.match(/prop="([^"]+)"/)[1];
			let labelValue = labelMatch[index].match(/label="([^"]+)"/)[1];
			tableData[propValue] = labelValue;
		});
		const tableDataArr = [tableData];
		console.log("tableDataArr:", tableDataArr);

		// 将获取到的数据处理之后，再插入到选中区域的下一行
		const tableDataArrString = JSON.stringify(tableDataArr, null, 2);
		console.log("tableDataArrString:", tableDataArrString);
		activeTextEditor.edit((build) => {
			build.insert(activeTextEditor.selection.end, "\n" + tableDataArrString);
		});

		vscode.window.showInformationMessage('Hello VSCode from extension_name');
	});

	context.subscriptions.push(disposable);
}

// This method is called when your extension is deactivated
// 当您的扩展被停用时，将调用此方法
function deactivate() { }

module.exports = {
	activate,
	deactivate
}
