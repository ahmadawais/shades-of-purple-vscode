// Canonical VS Code Theme Color reference section order.
// Used by the builder to emit the `colors` object grouped + labeled.
// https://code.visualstudio.com/docs/getstarted/theme-color-reference

const SECTIONS = [
	['Base', ['focusBorder', 'foreground', 'disabledForeground', 'widget.', 'selection.background', 'descriptionForeground', 'errorForeground', 'icon.foreground', 'sash.']],
	['Contrast', ['contrastActiveBorder', 'contrastBorder']],
	['Window', ['window.']],
	['Text', ['text']],
	['Action / Toolbar', ['toolbar.', 'editorActionList.']],
	['Buttons / Checkbox / Radio', ['button.', 'checkbox.', 'radio.']],
	['Dropdown', ['dropdown.']],
	['Input', ['input.', 'inputOption.', 'inputValidation.']],
	['Scrollbar', ['scrollbar.', 'scrollbarSlider.']],
	['Badge', ['badge.']],
	['Progress Bar', ['progressBar.']],
	['Lists & Trees', ['list.', 'listFilterWidget.', 'tree.']],
	['Activity Bar', ['activity']],
	['Profiles', ['profileBadge.', 'profiles.']],
	['Side Bar', ['sideBar']],
	['Minimap', ['minimap']],
	['Editor Groups & Tabs', ['editorGroup', 'editorGroupHeader', 'editorPane', 'sideBySideEditor', 'tab.']],
	['Editor', ['editor.', 'editorLineNumber', 'editorCursor', 'editorMultiCursor', 'editorLink', 'editorIndentGuide', 'editorInlayHint', 'editorRuler', 'editorCodeLens', 'editorLightBulb', 'editorBracketMatch', 'editorBracketHighlight', 'editorBracketPairGuide', 'editorOverviewRuler', 'editorError', 'editorWarning', 'editorInfo', 'editorHint', 'editorUnnecessaryCode', 'editorGutter', 'editorGhostText', 'editorStickyScroll', 'editorWhitespace', 'editorUnicodeHighlight']],
	['Diff Editor', ['diffEditor', 'diffEditorGutter', 'diffEditorOverview', 'multiDiffEditor']],
	['Editor Widget', ['editorWidget', 'editorSuggestWidget', 'editorHoverWidget', 'editorMarkerNavigation', 'debugExceptionWidget']],
	['Peek View', ['peekView']],
	['Merge Conflicts', ['merge.', 'mergeEditor']],
	['Panel', ['panel', 'outputView']],
	['Status Bar', ['statusBar']],
	['Title Bar', ['titleBar']],
	['Menu Bar / Menu', ['menubar', 'menu.']],
	['Command Center', ['commandCenter']],
	['Notifications', ['notification']],
	['Banner', ['banner.']],
	['Extensions', ['extensionButton', 'extensionBadge', 'extensionIcon']],
	['Quick Picker', ['pickerGroup', 'quickInput']],
	['Keybindings', ['keybindingLabel', 'keybindingTable']],
	['Terminal', ['terminal']],
	['Debug', ['debugToolBar', 'debugIcon', 'debugView', 'debugTokenExpression', 'debugConsole', 'debugConsoleInputIcon', 'editor.stackFrame', 'editor.focusedStackFrame', 'editor.inlineValues']],
	['Testing', ['testing.']],
	['Welcome Page', ['welcomePage', 'walkThrough', 'walkthrough']],
	['Git', ['gitDecoration', 'git.']],
	['Settings Editor', ['settings.']],
	['Breadcrumbs', ['breadcrumb']],
	['Snippets', ['editor.snippet']],
	['Symbol Icons', ['symbolIcon.']],
	['Notebook', ['notebook']],
	['Charts', ['charts.', 'chart.']],
	['Ports', ['ports.']],
	['Markdown', ['markdownAlert']],
	['Chat', ['chat.', 'inlineChat']],
];

const prefixList = [];
SECTIONS.forEach(([, prefixes], idx) => prefixes.forEach((p) => prefixList.push([p, idx])));

function sectionFor(key) {
	let best = -1;
	let bestLen = -1;
	for (const [p, idx] of prefixList) {
		if (key.startsWith(p) && p.length > bestLen) {
			bestLen = p.length;
			best = idx;
		}
	}
	return best;
}

// Emit the grouped, section-labeled body of the `colors` object.
function emitColorsBody(colors) {
	const keys = Object.keys(colors);
	const buckets = SECTIONS.map(() => []);
	const misc = [];
	for (const k of keys) {
		const s = sectionFor(k);
		if (s === -1) misc.push(k);
		else buckets[s].push(k);
	}
	buckets.forEach((b) => b.sort());
	misc.sort();

	const lines = [];
	SECTIONS.forEach(([title], idx) => {
		if (!buckets[idx].length) return;
		lines.push({ header: title });
		buckets[idx].forEach((k) => lines.push({ k, v: colors[k] }));
	});
	if (misc.length) {
		lines.push({ header: 'Misc' });
		misc.forEach((k) => lines.push({ k, v: colors[k] }));
	}

	const keyIdxs = lines.map((l, i) => (l.k ? i : -1)).filter((i) => i >= 0);
	const lastKeyIdx = keyIdxs[keyIdxs.length - 1];

	let body = '';
	lines.forEach((l, i) => {
		if (l.header) {
			body += `\n\t\t// ─── ${l.header} ───\n`;
		} else {
			const comma = i === lastKeyIdx ? '' : ',';
			body += `\t\t${JSON.stringify(l.k)}: ${JSON.stringify(l.v)}${comma}\n`;
		}
	});
	return body.replace(/^\n/, '');
}

module.exports = { SECTIONS, sectionFor, emitColorsBody };
