const path = require('path');
const fs = require('fs');
const vscode = require('vscode');
const diff = require('semver/functions/diff');

/**
 * @param {vscode.ExtensionContext} context
 */
function activate(context) {
	this.extensionName = 'ahmadawais.shades-of-purple';
	this.cntx = context;
	this.extension = vscode.extensions.getExtension(this.extensionName);
	if (this.extension) {
		this.version = this.extension.packageJSON.version;
		const prevVersion = context.globalState.get(`${this.extensionName}.version`);

		if (prevVersion) {
			const d = diff(this.version, prevVersion);
			// Show update page on major or minor updates
			if (d == 'major' || d == 'minor') {
				showUpdatePage();
				context.globalState.update(`${this.extensionName}.version`, this.version);
			}
		} else {
			showUpdatePage();
			context.globalState.update(`${this.extensionName}.version`, this.version);
		}
	}

	const config = vscode.workspace.getConfiguration('shadesOfPurple');
	let disableGlow = config && config.disableGlow ? !!config.disableGlow : false;

	let brightness = parseFloat(config.brightness) > 1 ? 1 : parseFloat(config.brightness);
	brightness = brightness < 0 ? 0 : brightness;
	brightness = isNaN(brightness) ? 0.45 : brightness;

	const parsedBrightness = Math.floor(brightness * 255)
		.toString(16)
		.toUpperCase();
	let neonBrightness = parsedBrightness;

	let disposable = vscode.commands.registerCommand('shadesOfPurple.enableGlow', function() {
		const isWin = /^win/.test(process.platform);
		const appDir = path.dirname(require.main.filename);
		const base = appDir + (isWin ? '\\vs\\code' : '/vs/code');

		const htmlFile =
			base + (isWin ? '\\electron-browser\\workbench\\workbench.html' : '/electron-browser/workbench/workbench.html');

		const templateFile =
			base + (isWin ? '\\electron-browser\\workbench\\sopglow.js' : '/electron-browser/workbench/sopglow.js');

		try {
			// const version = context.globalState.get(`${context.extensionName}.version`);

			// generate production theme JS
			const chromeStyles = fs.readFileSync(__dirname + '/css/editor_chrome.css', 'utf-8');
			const jsTemplate = fs.readFileSync(__dirname + '/js/theme_template.js', 'utf-8');
			const themeWithGlow = jsTemplate.replace(/\[DISABLE_GLOW\]/g, disableGlow);
			const themeWithChrome = themeWithGlow.replace(/\[CHROME_STYLES\]/g, chromeStyles);
			const finalTheme = themeWithChrome.replace(/\[NEON_BRIGHTNESS\]/g, neonBrightness);
			fs.writeFileSync(templateFile, finalTheme, 'utf-8');

			// modify workbench html
			const html = fs.readFileSync(htmlFile, 'utf-8');

			// check if the tag is already there
			const isEnabled = html.includes('sopglow.js');

			if (!isEnabled) {
				// Delete script tag if there.
				let output = html.replace(
					/^.*(<!-- Shades of Purple --><script src="sopglow.js"><\/script><!-- Shades of Purple Glow -->).*\n?/gm,
					''
				);
				// Add script tag
				output = html.replace(
					/\<\/html\>/g,
					`	<!-- Shades of Purple --><script src="sopglow.js"></script><!-- Shades of Purple Glow -->\n`
				);
				output += '</html>';

				fs.writeFileSync(htmlFile, output, 'utf-8');

				vscode.window
					.showInformationMessage(
						"Shades of Purple Glow enabled. VSCode must reload for this change to take effect. VSCode may display a warning that it is corrupted, this is normal. You can dismiss this message by clicking the ⚙️ icon and choosing 'Don't show this again'.",
						{ title: 'Reload VSCode' }
					)
					.then(function(msg) {
						vscode.commands.executeCommand('workbench.action.reloadWindow');
					});
			} else {
				vscode.window
					.showInformationMessage('Shades of Purple Glow is already enabled. Reload VSCode to make it work.', {
						title: 'Reload VSCode'
					})
					.then(function(msg) {
						vscode.commands.executeCommand('workbench.action.reloadWindow');
					});
			}
		} catch (e) {
			if (/ENOENT|EACCES|EPERM/.test(e.code)) {
				vscode.window.showInformationMessage(
					'You must run VSCode with admin privileges in order to enable Shades of Purple Glow.'
				);
				return;
			} else {
				vscode.window.showErrorMessage('Something went wrong when enabling Shades of Purple Glow.');
				return;
			}
		}
	});

	let disable = vscode.commands.registerCommand('shadesOfPurple.diableGlow', uninstall);
	let whatsNew = vscode.commands.registerCommand('shadesOfPurple.whatsNew', showUpdatePage);

	context.subscriptions.push(disposable);
	context.subscriptions.push(disable);
	context.subscriptions.push(whatsNew);
}
exports.activate = activate;

function showUpdatePage() {
	const panel = vscode.window.createWebviewPanel(
		`shadesOfPurple.whatsNew`, // Identifies the type of the webview. Used internally
		"Shades of Purple: What's new?", // Title of the panel displayed to the user
		vscode.ViewColumn.One, // Editor column to show the new webview panel in.
		{ enableScripts: !0 } // Webview options. More on these later.
	);

	const viewPath = path.join(this.cntx.extensionPath, 'greet', 'sop.html');
	const viewResourcePath = panel.webview.asWebviewUri(viewPath);
	const htmlContent = fs.readFileSync(viewPath, 'utf-8');
	panel.webview.html = htmlContent;
}

// This method is called when your extension is deactivated
function deactivate() {}

function uninstall() {
	var isWin = /^win/.test(process.platform);
	var appDir = path.dirname(require.main.filename);
	var base = appDir + (isWin ? '\\vs\\code' : '/vs/code');
	var htmlFile =
		base + (isWin ? '\\electron-browser\\workbench\\workbench.html' : '/electron-browser/workbench/workbench.html');

	// modify workbench html
	const html = fs.readFileSync(htmlFile, 'utf-8');

	// check if the tag is already there
	const isEnabled = html.includes('sopglow.js');

	if (isEnabled) {
		// Delete script tag if there
		let output = html.replace(
			/^.*(<!-- Shades of Purple --><script src="sopglow.js"><\/script><!-- Shades of Purple Glow -->).*\n?/gm,
			''
		);
		fs.writeFileSync(htmlFile, output, 'utf-8');

		vscode.window
			.showInformationMessage('Shades of Purple Glow disabled. Please reload.', {
				title: 'Reload VSCode'
			})
			.then(function(msg) {
				vscode.commands.executeCommand('workbench.action.reloadWindow');
			});
	} else {
		vscode.window.showInformationMessage("Shades of Purple Glow isn't running.");
	}
}

module.exports = {
	activate,
	deactivate
};
