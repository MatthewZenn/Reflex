const vscode = require('vscode');
const fs = require('fs');
const { exec } = require('child_process');
const panther = require("./modules/panther.js");


/**
 * @param {vscode.ExtensionContext} context
 */
function activate(context) {
	let path = vscode.window.activeTextEditor.document.uri.fsPath;
	let disposable = vscode.commands.registerCommand('reflex.helloWorld', function () {

		vscode.window.showInformationMessage('Starting Reflector Server...');
		console.log('Reflector-Server started at http://localhost:8080');
		exec((panther.reflectorInstallLocation + ' ' + path), (err) => {
			if (err) {
				console.log(err);
			}
		});

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
