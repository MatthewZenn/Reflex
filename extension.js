const vscode = require('vscode');
const fs = require('fs');
const path = require('path');
const { exec } = require('child_process');


/**
 * @param {vscode.ExtensionContext} context
 */
function activate(context) {

	let disposable = vscode.commands.registerCommand('reflex.helloWorld', function () {

		vscode.window.showInformationMessage('Starting Reflector Server...');
		exec('echo "hello there"', (err, stdout, stderr) => {
			console.log('stdout: ' + stdout);
			console.log('stderr: ' + stderr);
			if (err) {
				console.log('error: ' + err);
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
