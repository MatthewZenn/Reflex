const vscode = require('vscode');
const fs = require('fs');
const path = require('path');


/**
 * @param {vscode.ExtensionContext} context
 */
function activate(context) {

	let disposable = vscode.commands.registerCommand('reflex.helloWorld', function () {

		if (!vscode.workspace) {
			return vscode.window.showErrorMessage('No HTML File Found');
		}

		else {
			vscode.window.showInformationMessage('Starting Reflector Server...');
		}
	});

	context.subscriptions.push(disposable);
	const statusBar = vscode.window.createStatusBarItem(vscode.StatusBarAlignment.Right, 100);

	statusBar.text = (`$(server-environment) Reflex`);
	statusBar.command = 'reflex.helloWorld';
	statusBar.show();
}

function deactivate() {}

module.exports = {
	activate,
	deactivate
}
