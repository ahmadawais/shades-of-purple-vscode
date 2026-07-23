const P = require('../palette');

module.exports = {
	$schema: "vscode://schemas/color-theme",
	name: "Shades of Purple (Super Dark) · BETA",
	type: "dark",
	colors: {
		// Base
		"descriptionForeground": P.lavender,
		"errorForeground": P.red_f5,
		"focusBorder": P.c15152B,
		"foreground": P.lavender,
		"sash.hoverBorder": P.gold,
		"selection.background": P.c5706A2,
		"widget.shadow": P.black_26,

		// Contrast
		"contrastActiveBorder": P.transparent,
		"contrastBorder": P.transparent,

		// Text
		"textBlockQuote.background": P.c15152B,
		"textBlockQuote.border": P.purple,
		"textCodeBlock.background": P.c15152B,
		"textLink.activeForeground": P.violet,
		"textLink.foreground": P.gold,
		"textPreformat.foreground": P.gold,
		"textSeparator.foreground": P.c15152B,

		// Buttons / Checkbox / Radio
		"button.background": P.gold_dd,
		"button.foreground": P.c131327,
		"button.hoverBackground": P.gold,
		"button.secondaryBackground": P.lavender_cc,
		"button.secondaryForeground": P.c131327,
		"button.secondaryHoverBackground": P.lavender,
		"checkbox.background": P.c131327,
		"checkbox.foreground": P.gold,

		// Dropdown
		"dropdown.background": P.c15152B,
		"dropdown.border": P.c15152B,
		"dropdown.foreground": P.white,

		// Input
		"input.background": P.c191830,
		"input.border": P.c15152B,
		"input.foreground": P.gold,
		"input.placeholderForeground": P.lavender,
		"inputOption.activeBackground": P.purpleDeep,
		"inputOption.activeBorder": P.c15152B,
		"inputValidation.errorBackground": P.c191830,
		"inputValidation.errorBorder": P.gold,
		"inputValidation.infoBackground": P.c191830,
		"inputValidation.infoBorder": P.c191830,
		"inputValidation.warningBackground": P.c191830,
		"inputValidation.warningBorder": P.gold,

		// Scrollbar
		"scrollbar.shadow": P.lavender_81_x2,
		"scrollbarSlider.activeBackground": P.gold,
		"scrollbarSlider.background": P.lavender_81_x2,
		"scrollbarSlider.hoverBackground": P.purpleBright,

		// Badge
		"badge.background": P.gold,
		"badge.foreground": P.c15152B,

		// Progress Bar
		"progressBar.background": P.gold,

		// Lists & Trees
		"list.activeSelectionBackground": P.c191830,
		"list.activeSelectionForeground": P.white,
		"list.dropBackground": P.c191830,
		"list.focusBackground": P.c191830,
		"list.focusForeground": P.white,
		"list.highlightForeground": P.gold,
		"list.hoverBackground": P.c191830,
		"list.hoverForeground": P.lavenderLight,
		"list.inactiveSelectionBackground": P.c191830,
		"list.inactiveSelectionForeground": P.cAAA,
		"listFilterWidget.background": P.c191830,
		"listFilterWidget.noMatchesOutline": P.red_f5,
		"listFilterWidget.outline": P.c191830,

		// Activity Bar
		"activityBar.activeBackground": P.c131327,
		"activityBar.activeBorder": P.purple_62_x2,
		"activityBar.background": P.c15152A,
		"activityBar.border": P.c131327,
		"activityBar.dropBackground": P.bgDrop,
		"activityBar.foreground": P.white,
		"activityBar.inactiveForeground": P.lavender,
		"activityBarBadge.background": P.gold,
		"activityBarBadge.foreground": P.c15152B,

		// Side Bar
		"sideBar.background": P.c131327,
		"sideBar.border": P.c1A1A35,
		"sideBar.foreground": P.lavender,
		"sideBarSectionHeader.background": P.c15152B,
		"sideBarSectionHeader.border": P.c15152B,
		"sideBarSectionHeader.foreground": P.lavender,
		"sideBarTitle.foreground": P.lavender,

		// Editor Groups & Tabs
		"editorGroup.border": P.c131327,
		"editorGroup.dropBackground": P.c131327D0,
		"editorGroupHeader.noTabsBackground": P.c191830,
		"editorGroupHeader.tabsBackground": P.c191830,
		"editorGroupHeader.tabsBorder": P.bgLine,
		"tab.activeBackground": P.c131327,
		"tab.activeBorder": P.gold,
		"tab.activeForeground": P.white,
		"tab.activeModifiedBorder": P.lavender,
		"tab.border": P.c15152B,
		"tab.inactiveBackground": P.c191830,
		"tab.inactiveForeground": P.lavender,
		"tab.inactiveModifiedBorder": P.lavender_66,
		"tab.unfocusedActiveForeground": P.lavender,
		"tab.unfocusedActiveModifiedBorder": P.lavender_66,
		"tab.unfocusedInactiveForeground": P.lavender,
		"tab.unfocusedInactiveModifiedBorder": P.lavender_66,

		// Editor
		"editor.background": P.c191830,
		"editor.findMatchBackground": P.amber2_ab,
		"editor.findMatchHighlightBackground": P.cFFFF0336,
		"editor.findRangeHighlightBackground": P.cFFFF0336,
		"editor.foreground": P.white,
		"editor.hoverHighlightBackground": P.bgPanel_80,
		"editor.inactiveSelectionBackground": P.slate_c0,
		"editor.lineHighlightBackground": P.bgLine,
		"editor.lineHighlightBorder": P.bgLine,
		"editor.linkedEditingBackground": P.purpleMuted_aa,
		"editor.rangeHighlightBackground": P.bgLine,
		"editor.selectionBackground": P.c5706A288,
		"editor.selectionHighlightBackground": P.purpleMuted_46,
		"editor.wordHighlightBackground": P.white_0d,
		"editor.wordHighlightStrongBackground": P.white_0d,
		"editorBracketMatch.background": P.violetMid_46,
		"editorBracketMatch.border": P.violetMid_46,
		"editorCodeLens.foreground": P.lavender,
		"editorCursor.foreground": P.gold,
		"editorError.foreground": P.red_f5,
		"editorGutter.addedBackground": P.greenGutter,
		"editorGutter.background": P.c15152A,
		"editorGutter.deletedBackground": P.red_f5,
		"editorGutter.modifiedBackground": P.violetMid_46,
		"editorIndentGuide.activeBackground": P.lavender_42,
		"editorIndentGuide.background": P.lavender_0f,
		"editorLineNumber.foreground": P.c7870AB,
		"editorLink.activeForeground": P.lavender,
		"editorOverviewRuler.border": P.lavender_1c,
		"editorOverviewRuler.commonContentForeground": P.goldAmber_55,
		"editorOverviewRuler.currentContentForeground": P.cEE3A4355,
		"editorOverviewRuler.incomingContentForeground": P.green_55,
		"editorRuler.foreground": P.lavender_1c,
		"editorWarning.border": P.transparent,
		"editorWarning.foreground": P.gold,
		"editorWhitespace.foreground": P.white_1a,

		// Diff Editor
		"diffEditor.insertedTextBackground": P.green_20,
		"diffEditor.removedTextBackground": P.cEE3A4320,

		// Editor Widget
		"debugExceptionWidget.background": P.c15152B,
		"debugExceptionWidget.border": P.lavender,
		"editorHoverWidget.background": P.bgDeeper,
		"editorHoverWidget.border": P.bgDeeper,
		"editorMarkerNavigation.background": P.c3B536433,
		"editorMarkerNavigationError.background": P.red_f5,
		"editorMarkerNavigationWarning.background": P.gold,
		"editorSuggestWidget.background": P.bgLine,
		"editorSuggestWidget.border": P.bgLine,
		"editorSuggestWidget.foreground": P.lavender,
		"editorSuggestWidget.highlightForeground": P.gold,
		"editorSuggestWidget.selectedBackground": P.c191830,
		"editorWidget.background": P.c131327,
		"editorWidget.border": P.bgLine,

		// Peek View
		"peekView.border": P.gold,
		"peekViewEditor.background": P.c15152B,
		"peekViewEditor.matchHighlightBackground": P.c19354900,
		"peekViewEditorGutter.background": P.bgDeep,
		"peekViewResult.background": P.c15152B,
		"peekViewResult.fileForeground": P.cAAA,
		"peekViewResult.lineForeground": P.white,
		"peekViewResult.matchHighlightBackground": P.c191830,
		"peekViewResult.selectionBackground": P.c191830,
		"peekViewResult.selectionForeground": P.white,
		"peekViewTitle.background": P.bgLine,
		"peekViewTitleDescription.foreground": P.cAAA,
		"peekViewTitleLabel.foreground": P.gold,

		// Merge Conflicts
		"merge.currentContentBackground": P.green_70,
		"merge.currentHeaderBackground": P.green_70,
		"merge.incomingContentBackground": P.lavender_70,
		"merge.incomingHeaderBackground": P.lavender_70,

		// Panel
		"panel.background": P.c15152B,
		"panel.border": P.gold,
		"panelTitle.activeBorder": P.gold,
		"panelTitle.activeForeground": P.gold,
		"panelTitle.inactiveForeground": P.lavender,

		// Status Bar
		"statusBar.background": P.c15152B,
		"statusBar.border": P.c15152B,
		"statusBar.debuggingBackground": P.gold,
		"statusBar.debuggingForeground": P.c15152B,
		"statusBar.foreground": P.lavender,
		"statusBar.noFolderBackground": P.c15152B,
		"statusBar.noFolderForeground": P.lavender,
		"statusBarItem.activeBackground": P.purpleBright,
		"statusBarItem.hoverBackground": P.purpleBright,
		"statusBarItem.prominentBackground": P.c15152B,
		"statusBarItem.prominentHoverBackground": P.c191830,

		// Title Bar
		"titleBar.activeBackground": P.c15152B,
		"titleBar.activeForeground": P.white,
		"titleBar.inactiveBackground": P.c15152B,
		"titleBar.inactiveForeground": P.lavender,

		// Menu Bar / Menu
		"menu.separatorBackground": P.lavender,

		// Notifications
		"notificationCenter.border": P.c15152B,
		"notificationCenterHeader.background": P.purple,
		"notificationCenterHeader.foreground": P.white,
		"notificationLink.foreground": P.white,
		"notificationToast.border": P.c15152B,
		"notifications.background": P.c15152B,
		"notifications.border": P.c191830,
		"notifications.foreground": P.lavenderLight,

		// Extensions
		"extensionButton.prominentBackground": P.purpleDeep,
		"extensionButton.prominentForeground": P.white,
		"extensionButton.prominentHoverBackground": P.orange,

		// Quick Picker
		"pickerGroup.border": P.c15152B,
		"pickerGroup.foreground": P.lavender,

		// Terminal
		"terminal.ansiBlack": P.black,
		"terminal.ansiBlue": P.indigo,
		"terminal.ansiBrightBlack": P.graphite,
		"terminal.ansiBrightBlue": P.purple,
		"terminal.ansiBrightCyan": P.cyanBright,
		"terminal.ansiBrightGreen": P.green,
		"terminal.ansiBrightMagenta": P.magenta,
		"terminal.ansiBrightRed": P.red_f5,
		"terminal.ansiBrightWhite": P.white,
		"terminal.ansiBrightYellow": P.gold,
		"terminal.ansiCyan": P.cyanBright,
		"terminal.ansiGreen": P.green,
		"terminal.ansiMagenta": P.pinkHot,
		"terminal.ansiRed": P.red_f5,
		"terminal.ansiWhite": P.white,
		"terminal.ansiYellow": P.gold,
		"terminal.background": P.c15152B,
		"terminal.foreground": P.white,
		"terminalCursor.background": P.gold,
		"terminalCursor.foreground": P.gold,

		// Debug
		"debugIcon.continueForeground": P.gold,
		"debugIcon.disconnectForeground": P.gold,
		"debugIcon.pauseForeground": P.gold,
		"debugIcon.restartForeground": P.green,
		"debugIcon.startForeground": P.gold,
		"debugIcon.stepBackForeground": P.gold,
		"debugIcon.stepIntoForeground": P.gold,
		"debugIcon.stepOutForeground": P.gold,
		"debugIcon.stepOverForeground": P.gold,
		"debugIcon.stopForeground": P.red_f5,
		"debugToolBar.background": P.c15152B,

		// Welcome Page
		"walkThrough.embeddedEditorBackground": P.c15152B,
		"welcomePage.buttonBackground": P.c15152B,
		"welcomePage.buttonHoverBackground": P.bgTile,

		// Git
		"gitDecoration.conflictingResourceForeground": P.amber,
		"gitDecoration.deletedResourceForeground": P.red_f5,
		"gitDecoration.ignoredResourceForeground": P.lavender_81,
		"gitDecoration.modifiedResourceForeground": P.gold,
		"gitDecoration.untrackedResourceForeground": P.green,

		// Settings Editor
		"settings.checkboxBackground": P.c15152B,
		"settings.checkboxBorder": P.c15152B,
		"settings.checkboxForeground": P.lavenderPale,
		"settings.dropdownBackground": P.c15152B,
		"settings.dropdownBorder": P.c15152B,
		"settings.dropdownForeground": P.lavenderPale,
		"settings.dropdownListBorder": P.c191830,
		"settings.headerForeground": P.white,
		"settings.modifiedItemIndicator": P.gold,
		"settings.numberInputBackground": P.c15152B,
		"settings.numberInputBorder": P.c15152B,
		"settings.numberInputForeground": P.lavenderPale,
		"settings.textInputBackground": P.c15152B,
		"settings.textInputBorder": P.c15152B,
		"settings.textInputForeground": P.lavenderPale,

		// Breadcrumbs
		"breadcrumb.activeSelectionForeground": P.white,
		"breadcrumb.focusForeground": P.gold,
		"breadcrumb.foreground": P.lavender,
		"breadcrumbPicker.background": P.c15152B,

		// Snippets
		"editor.snippetFinalTabstopHighlightBackground": P.purple_62_x2,
		"editor.snippetFinalTabstopHighlightBorder": P.purple_62_x2,
		"editor.snippetTabstopHighlightBackground": P.purple_62_x2,
		"editor.snippetTabstopHighlightBorder": P.purple_62_x2,
	},
	tokenColors: [
		{
			name: "[COMMENTS] — The main comments color",
			scope: ["comment","punctuation.definition.comment"],
			settings: { foreground: P.violet },
		},
		{
			name: "[Entity] — The main Entity color",
			scope: "entity",
			settings: { foreground: P.gold },
		},
		{
			name: "[Constant] — The main constants color",
			scope: "constant",
			settings: { foreground: P.pink },
		},
		{
			name: "[Keyword] — The main color for Keyword",
			scope: ["keyword, storage.type.class.js"],
			settings: { foreground: P.orange },
		},
		{
			name: "[Meta] — The main color for Meta",
			scope: "meta",
			settings: { foreground: P.cyan },
		},
		{
			name: "[invalid] — The main color for invalid",
			scope: "invalid",
			settings: { foreground: P.red_f5 },
		},
		{
			name: "[Meta Brace] — The main color for Meta Brace",
			scope: ["meta.brace","punctuation.definition.parameters.begin.js","punctuation.definition.parameters.end.js"],
			settings: { foreground: P.iceBlue },
		},
		{
			name: "[Punctuation] — The main color for Punctuation",
			scope: "punctuation",
			settings: { foreground: P.iceBlue },
		},
		{
			name: "[Punctuation] — Color for Punctuation Parameters",
			scope: "punctuation.definition.parameters",
			settings: { foreground: P.goldPale },
		},
		{
			name: "[Punctuation] — Color for Punctuation Template Expression",
			scope: "punctuation.definition.template-expression",
			settings: { foreground: P.goldPale },
		},
		{
			name: "[Storage] — The main color for Storage",
			scope: "storage",
			settings: { foreground: P.gold },
		},
		{
			name: "[Storage] — The color for Storage Type Arrow Function",
			scope: "storage.type.function.arrow",
			settings: { foreground: P.gold },
		},
		{
			name: "[String]",
			scope: ["string","punctuation.definition.string"],
			settings: { foreground: P.greenSoft },
		},
		{
			name: "[String] Template Color",
			scope: ["string.template","punctuation.definition.string.template"],
			settings: { foreground: P.green },
		},
		{
			name: "[Support]",
			scope: "support",
			settings: { foreground: P.mint },
		},
		{
			name: "[Support] Function Colors",
			scope: "support.function",
			settings: { foreground: P.orange },
		},
		{
			name: "[Support] Variable Property DOM Colors",
			scope: "support.variable.property.dom",
			settings: { foreground: P.cyan },
		},
		{
			name: "[Variable]",
			scope: "variable",
			settings: { foreground: P.iceBlue },
		},
		{
			name: "[INI] - Color for Entity",
			scope: ["source.ini entity","meta.embedded.block.ini","source.ini"],
			settings: { foreground: P.iceBlue },
		},
		{
			name: "[INI] - Color for Keyword",
			scope: ["source.ini keyword","keyword.other.definition.ini"],
			settings: { foreground: P.gold },
		},
		{
			name: "[INI] - Color for Punctuation Definition",
			scope: ["source.ini punctuation.definition"],
			settings: { foreground: P.goldPale },
		},
		{
			name: "[INI] - Color for Punctuation Separator",
			scope: ["source.ini punctuation.separator","punctuation.separator.key-value.ini"],
			settings: { foreground: P.orange },
		},
		{
			name: "[CSS] - Color for Entity",
			scope: ["source.css entity","source.stylus entity"],
			settings: { foreground: P.green },
		},
		{
			name: "[CSS] - Color for Class Selector",
			scope: "entity.other.attribute-name.class.css",
			settings: { foreground: P.cyan },
		},
		{
			name: "[CSS] - Color for ID Selector",
			scope: ["entity.other.attribute-name.id.css","entity.other.attribute-name.pseudo-class.css"],
			settings: { foreground: P.orangeSoft },
		},
		{
			name: "[CSS] - Color for Element Selector",
			scope: "entity.name.tag",
			settings: { foreground: P.cyan },
		},
		{
			name: "[CSS] - Color for Support",
			scope: ["source.css support","entity.name.tag.css","source.stylus support"],
			settings: { foreground: P.greenSoft },
		},
		{
			name: "[CSS] - Color for Constant",
			scope: ["source.css constant","source.css support.constant","source.stylus constant","source.stylus support.constant"],
			settings: { foreground: P.goldPale },
		},
		{
			name: "[CSS] - Color for String",
			scope: ["source.css string","source.css punctuation.definition.string","source.stylus string","source.stylus punctuation.definition.string"],
			settings: { foreground: P.goldPale },
		},
		{
			name: "[CSS] - Color for Variable",
			scope: ["source.css variable","source.stylus variable"],
			settings: { foreground: P.cyan },
		},
		{
			name: "[HTML] - Color for Entity Name",
			scope: ["text.html.basic entity.name","punctuation.definition.tag.html","entity.name.tag.inline.any.html","meta.tag.other.html","meta.tag.inline.any.html","punctuation.definition.tag.begin.html","punctuation.definition.tag.end.html","entity.name.tag","meta.tag.other.html","meta.tag.other.js","meta.tag.other.tsx","entity.name.tag.tsx","entity.name.tag.js","entity.name.tag","meta.tag.js","meta.tag.tsx","meta.tag.html"],
			settings: { foreground: P.cyan },
		},
		{
			name: "[HTML] - Color for ID value",
			scope: "meta.toc-list.id.html",
			settings: { foreground: P.greenSoft },
		},
		{
			name: "[HTML] - Color for Entity Other",
			scope: "text.html.basic entity.other",
			settings: { foreground: P.gold },
		},
		{
			name: "[HTML] - Color for Script Tag",
			scope: "meta.tag.metadata.script.html entity.name.tag.html",
			settings: { foreground: P.gold },
		},
		{
			name: "[HTML] - Quotes. Different color to handle expanded selection",
			scope: "punctuation.definition.string.begin, punctuation.definition.string.end",
			settings: { foreground: P.greenLime },
		},
		{
			name: "[HTML/PUG] Equals Sign",
			scope: ["meta.tag.inline.any.html","meta.tag.other"],
			settings: { foreground: P.orange },
		},
		{
			name: "[JSON] - Color for Support",
			scope: "source.json support",
			settings: { foreground: P.gold },
		},
		{
			name: "[JSON] - Color for String",
			scope: ["source.json string","source.json punctuation.definition.string"],
			settings: { foreground: P.greenLime },
		},
		{
			name: "[JAVASCRIPT] - Color for Storage Type Function",
			scope: "source.js storage.type.function",
			settings: { foreground: P.magenta },
		},
		{
			name: "[JAVASCRIPT] - Color for Variable Language",
			scope: "variable.language, entity.name.type.class.js",
			settings: { foreground: P.magenta },
		},
		{
			name: "[JAVASCRIPT] - Color for Inherited Component",
			scope: ["entity.other.inherited-class"],
			settings: { foreground: P.goldPale },
		},
		{
			name: "[JAVASCRIPT] - Color for React Extends keyword",
			scope: ["storage.type.extends.js","storage.type.class.jsdoc"],
			settings: { foreground: P.orange },
		},
		{
			name: "[JAVASCRIPT] — Docs Keywords",
			scope: "punctuation.definition.block.tag.jsdoc",
			settings: { foreground: P.orange },
		},
		{
			name: "[JAVASCRIPT] — Doc Var Types",
			scope: ["variable.other.jsdoc","entity.name.type.instance.jsdoc"],
			settings: { foreground: P.cyan },
		},
		{
			name: "[JAVASCRIPT] — Var Types",
			scope: ["variable.other.constant"],
			settings: { foreground: P.cyan },
		},
		{
			name: "[JAVASCRIPT REACT] — JSX HTML",
			scope: ["punctuation.definition.tag.begin.js","punctuation.definition.tag.end.js"],
			settings: { foreground: P.cyan },
		},
		{
			name: "[JAVASCRIPT REACT] — JSX HTML Children Text",
			scope: "meta.jsx.children.js",
			settings: { foreground: P.white },
		},
		{
			name: "[JAVASCRIPT] — Storage types",
			scope: ["storage.type","storage.type.class","storage.modifier","keyword.control","keyword.operator"],
			settings: { foreground: P.orange },
		},
		{
			name: "[JAVASCRIPT] — Docs Useless stuff",
			scope: "punctuation.definition.bracket.curly",
			settings: { foreground: P.plumGray },
		},
		{
			name: "Typescript React Assignment Operator",
			scope: ["keyword.operator.assignment.tsx","keyword.operator.assignment.jsx"],
			settings: { foreground: P.orange },
		},
		{
			name: "[JAVASCRIPT] Keyword Operator Assignment",
			scope: "keyword.operator.assignment",
			settings: { foreground: P.orange },
		},
		{
			name: "[JAVASCRIPT] Typescript/React Children",
			scope: "meta.jsx.children.tsx",
			settings: { foreground: P.white },
		},
		{
			name: "[JAVASCRIPT] - Object keys",
			scope: "meta.object-literal.key.js",
			settings: { foreground: P.mint },
		},
		{
			name: "Typescript/React Classnames and Modules",
			scope: ["entity.name.type.class.tsx","entity.name.type.class.jsx","variable.other.readwrite.alias.tsx","variable.other.readwrite.tsx","variable.other.readwrite.alias.ts","variable.other.readwrite.alias.jsx","variable.other.readwrite.alias.js","variable.other.object.tsx","variable.other.object.jsx","variable.other.object","support.class.component.tsx","support.class.component.jsx","entity.name.type.tsx","entity.name.type.jsx","variable.other.readwrite","variable.other.object.js"],
			settings: { foreground: P.cyan },
		},
		{
			name: "[JAVASCRIPT] - .something",
			scope: ["variable.other.property","variable.other.object.property"],
			settings: { foreground: P.goldPale },
		},
		{
			name: "[JAVASCRIPT] - Color for Text inside JSX",
			scope: "JSXNested",
			settings: { foreground: P.white },
		},
		{
			name: "[JAVASCRIPT] - Parameters",
			scope: ["variable.parameter"],
			settings: { foreground: P.cyan },
		},
		{
			name: "[PYTHON] - Color for Self Argument",
			scope: "variable.parameter.function.language.special.self.python",
			settings: { foreground: P.cyan },
		},
		{
			name: "[PYTHON] - Functions",
			scope: ["meta.function-call.python","meta.function-call.generic.python","support.function.builtin.python"],
			settings: { foreground: P.gold },
		},
		{
			name: "[TYPESCRIPT] - Color for Entity Name Type",
			scope: "source.ts entity.name.type",
			settings: { foreground: P.mint },
		},
		{
			name: "[TYPESCRIPT] - Color for Keyword",
			scope: "source.ts keyword",
			settings: { foreground: P.gold },
		},
		{
			name: "[TYPESCRIPT] - Color for Punctuation Parameters",
			scope: "source.ts punctuation.definition.parameters",
			settings: { foreground: P.iceBlue },
		},
		{
			name: "[TYPESCRIPT] - Color for Punctuation Arrow Parameters",
			scope: "meta.arrow.ts punctuation.definition.parameters",
			settings: { foreground: P.goldPale },
		},
		{
			name: "[TYPESCRIPT] - Color for Storage",
			scope: "source.ts storage",
			settings: { foreground: P.cyan },
		},
		{
			name: "[MARKDOWN] - Color for Heading Name Section",
			scope: ["entity.name.section.markdown","markup.heading.setext.1.markdown","markup.heading.setext.2.markdown"],
			settings: { foreground: P.gold, fontStyle: "bold" },
		},
		{
			name: "[MARKDOWN] - Diff Code Inserted Block",
			scope: ["markup.inserted.diff","punctuation.definition.inserted.diff"],
			settings: { foreground: P.greenBright },
		},
		{
			name: "[MARKDOWN] - Diff Deleted Code Block",
			scope: ["markup.deleted.diff","punctuation.definition.deleted.diff"],
			settings: { foreground: P.redSoft },
		},
		{
			name: "[MARKDOWN] - Diff Meta text",
			scope: ["meta.embedded.block.diff"],
			settings: { foreground: P.white },
		},
		{
			name: "[MARKDOWN] - Color for Paragraph",
			scope: "meta.paragraph.markdown",
			settings: { foreground: P.white },
		},
		{
			name: "[MARKDOWN] - Comment Punctuation",
			scope: ["punctuation.definition.from-file.diff","meta.diff.header.from-file"],
			settings: { foreground: P.c5706A2 },
		},
		{
			name: "[MARKDOWN] - Color for Text inside inline code block `code`",
			scope: "markup.inline.raw.string.markdown",
			settings: { foreground: P.lavender },
		},
		{
			name: "[MARKDOWN] - Color for Quote Punctuation",
			scope: "beginning.punctuation.definition.quote.markdown",
			settings: { foreground: P.gold },
		},
		{
			name: "[MARKDOWN] - Color for Quote Paragraph",
			scope: ["markup.quote.markdown meta.paragraph.markdown","punctuation.definition.quote.begin.markdown"],
			settings: { foreground: P.lavender },
		},
		{
			name: "[MARKDOWN] - Color for Separator",
			scope: "meta.separator.markdown",
			settings: { foreground: P.gold },
		},
		{
			name: "[MARKDOWN] - Color for Emphasis Bold",
			scope: "markup.bold.markdown",
			settings: { fontStyle: "bold" },
		},
		{
			name: "[MARKDOWN] - Color for Emphasis Italic",
			scope: "markup.italic.markdown",
			settings: { fontStyle: "italic" },
		},
		{
			name: "[MARKDOWN] - Color for Lists",
			scope: ["beginning.punctuation.definition.list.markdown","punctuation.definition.list.begin.markdown","markup.list.unnumbered.markdown"],
			settings: { foreground: P.gold },
		},
		{
			name: "[MARKDOWN] - Link/Image title string",
			scope: ["string.other.link.description.title.markdown punctuation.definition.string.markdown","meta.link.inline.markdown string.other.link.description.title.markdown","string.other.link.description.title.markdown punctuation.definition.string.begin.markdown","string.other.link.description.title.markdown punctuation.definition.string.end.markdown","meta.image.inline.markdown string.other.link.description.title.markdown"],
			settings: { foreground: P.greenSoft, fontStyle: "" },
		},
		{
			name: "[MARKDOWN] - Color for Link Title",
			scope: ["meta.link.inline.markdown string.other.link.title.markdown","meta.link.reference.markdown string.other.link.title.markdown","meta.link.reference.def.markdown markup.underline.link.markdown"],
			settings: { foreground: P.gold, fontStyle: "underline" },
		},
		{
			name: "[MARKDOWN] - Color for Link/Image Title",
			scope: ["markup.underline.link.markdown","string.other.link.description.title.markdown"],
			settings: { foreground: P.lavender },
		},
		{
			name: "[MARKDOWN] - Color for Inline Code",
			scope: ["fenced_code.block.language","markup.inline.raw.markdown"],
			settings: { foreground: P.cyan },
		},
		{
			name: "[MARKDOWN] - Color for Punctuation — Heading, `Code` and fenced ```code blocks```, **Bold**",
			scope: ["punctuation.definition.markdown","punctuation.definition.raw.markdown","punctuation.definition.heading.markdown","punctuation.definition.bold.markdown","punctuation.definition.italic.markdown"],
			settings: { foreground: P.plumGray },
		},
		{
			name: "[MARKDOWN] - LINK Brackets",
			scope: ["meta.link.inline.markdown punctuation.definition.string.begin.markdown","meta.link.inline.markdown punctuation.definition.string.end.markdown","meta.link.reference.markdown punctuation.definition.string.begin.markdown","meta.link.reference.markdown punctuation.definition.string.end.markdown","string.other.link.description.markdown"],
			settings: { foreground: P.gold },
		},
		{
			name: "[MARKDOWN] - IMG LINK Brackets",
			scope: ["meta.image.inline.markdown punctuation.definition.string.begin.markdown","meta.image.inline.markdown punctuation.definition.string.end.markdown","string.other.link.description.markdown"],
			settings: { foreground: P.orange },
		},
		{
			name: "[MARKDOWN] - LINK ALT URI",
			scope: ["markup.underline.link.markdown","punctuation.definition.metadata.markdown","markup.underline.link.image.markdown","constant.other.reference.link.markdown","punctuation.definition.constant.markdown","punctuation.definition.constant.begin.markdown","punctuation.definition.constant.end.markdown"],
			settings: { foreground: P.lavender },
		},
		{
			name: "[PUG] - Color for Entity Name",
			scope: "text.jade entity.name",
			settings: { foreground: P.cyan },
		},
		{
			name: "[PUG] - Types",
			scope: ["storage.type.function.pug"],
			settings: { foreground: P.orange },
		},
		{
			name: "[PUG] - Var Params",
			scope: ["variable.parameter.function.js"],
			settings: { foreground: P.cyan },
		},
		{
			name: "[PUG] - Imports",
			scope: ["variable.control.import.include.pug"],
			settings: { foreground: P.greenLime },
		},
		{
			name: "[PUG] - Color for String Interpolated",
			scope: "text.jade string.interpolated",
			settings: { foreground: P.goldPale },
		},
		{
			name: "[C#] - Color for Annotations",
			scope: "storage.type.cs",
			settings: { foreground: P.cyan },
		},
		{
			name: "[C#] - Color for Properties",
			scope: "entity.name.variable.property.cs",
			settings: { foreground: P.cyan },
		},
		{
			name: "[C#] - Color for Storage modifiers",
			scope: "storage.modifier.cs",
			settings: { foreground: P.mint },
		},
		{
			name: "[PHP] - Color for Entity",
			scope: ["source.php entity","variable.other.class.php"],
			settings: { foreground: P.cyan },
		},
		{
			name: "[PHP] - Docs Keywords",
			scope: ["keyword.other.phpdoc.php"],
			settings: { foreground: P.orange },
		},
		{
			name: "[PHP] - Functions",
			scope: ["entity.name.function.php","support.function.basic_functions.php","meta.function-call.php","variable.other.property"],
			settings: { foreground: P.gold },
		},
		{
			name: "[PHP] - Variables",
			scope: ["variable.other.php","punctuation.definition.variable.php","variable.other.global.php","variable.language.this.php"],
			settings: { foreground: P.cyan },
		},
		{
			name: "[PHP] - Color for Storage Modifiers",
			scope: ["storage.modifier.php","keyword.other.namespace.php"],
			settings: { foreground: P.orange },
		},
		{
			name: "[YML] — KEYWORDS",
			scope: ["entity.name.tag.yaml"],
			settings: { foreground: P.gold },
		},
		{
			name: "[YML] — Punctuation",
			scope: ["punctuation.definition.block.sequence.item.yaml"],
			settings: { foreground: P.iceBlue },
		},
		{
			name: "[PHP] - Keywords for definition",
			scope: ["storage.type.function.php","meta.function.parameters.php"],
			settings: { foreground: P.magenta },
		},
		{
			name: "[PHP Blade] - Keywords for definition",
			scope: ["keyword.blade"],
			settings: { foreground: P.orange },
		},
		{
			name: "[PHP Blade] - Punctuation",
			scope: ["begin.bracket.round.blade.php","end.bracket.round.blade.php"],
			settings: { foreground: P.iceBlue },
		},
		{
			name: "[PHP Blade] - Construct",
			scope: ["support.function.construct.begin.blade","support.function.construct.end.blade"],
			settings: { foreground: P.goldPale },
		},
		{
			name: "[GO] - Keywords for definition",
			scope: ["keyword.package.go","keyword.import.go"],
			settings: { foreground: P.orange },
		},
		{
			name: "[GO] - Functions",
			scope: ["keyword.function.go"],
			settings: { foreground: P.magenta },
		},
		{
			name: "[GO] - Variables",
			scope: ["variable.other.assignment.go"],
			settings: { foreground: P.cyan },
		},
		{
			name: "[GO] - Punctuation",
			scope: ["punctuation.definition.string.begin.go","punctuation.definition.string.end.go","support.function.go"],
			settings: { foreground: P.gold },
		},
		{
			name: "[RUBY] - Interpolation Quoted Double & Block Inline",
			scope: ["punctuation.section.embedded.end.ruby","punctuation.section.embedded.begin.ruby","punctuation.section.scope.begin.ruby","punctuation.section.scope.end.ruby"],
			settings: { foreground: P.goldPale },
		},
		{
			name: "[RUBY] - Constant",
			scope: "variable.other.constant.ruby",
			settings: { foreground: P.mint },
		},
		{
			name: "[RUBY] - Class",
			scope: "entity.name.type.class.ruby",
			settings: { foreground: P.magenta },
		},
		{
			name: "[RUBY] - Variables",
			scope: ["variable.other.block.ruby","variable.other.ruby"],
			settings: { foreground: P.cyan },
		},
		{
			name: "[RUBY] - Separators",
			scope: "punctuation.separator.other.ruby",
			settings: { foreground: P.orange },
		},
		{
			name: "[RUBY] - Special Methods",
			scope: "keyword.other.special-method.ruby",
			settings: { foreground: P.goldPale },
		},
		{
			name: "[SHELL] - Function Keyword",
			scope: ["storage.type.function.shell"],
			settings: { foreground: P.magenta },
		},
		{
			name: "[SHELL] - Var Other",
			scope: ["variable.other.special.shell","punctuation.definition.variable.shell"],
			settings: { foreground: P.orange },
		},
		{
			name: "[GRAPHQL] — Variable",
			scope: ["variable.graphql"],
			settings: { foreground: P.goldPaler },
		},
		{
			name: "[GRAPHQL] — Keywords",
			scope: ["keyword.operation.graphql"],
			settings: { foreground: P.magenta },
		},
		{
			name: "[SQL] Source",
			scope: ["source.sql"],
			settings: { foreground: P.iceBlue },
		},
		{
			name: "[SQL] — Keywords",
			scope: ["source.sql keyword.other","support.function.mysqli.php"],
			settings: { foreground: P.goldPaler },
		},
		{
			name: "[SQL] — Functions Used",
			scope: ["support.function.mysqli.php","source.sql support.function"],
			settings: { foreground: P.gold },
		},
		{
			name: "[SQL] — RegExp String",
			scope: ["string.regexp","string.regexp keyword.other"],
			settings: { foreground: P.iceBlue },
		},
		{
			name: "[SQL] — Other keywords",
			scope: ["keyword.other.DML.sql"],
			settings: { foreground: P.orange },
		},
		{
			name: "[TOML] — SYNTAX",
			scope: ["punctuation.definition.table.array.toml"],
			settings: { foreground: P.iceBlue },
		},
		{
			name: "[TOML] — Other keywords",
			scope: ["entity.other.attribute-name.table.array.toml","entity.other.attribute-name.table.toml"],
			settings: { foreground: P.orange },
		},
		{
			name: "[TOML] — Keywords",
			scope: ["keyword.key.toml"],
			settings: { foreground: P.gold },
		},
		{
			name: "[DOCKER] — Keywords",
			scope: ["keyword.other.special-method.dockerfile"],
			settings: { foreground: P.gold },
		},
		{
			name: "[RUST] — Keywords",
			scope: ["keyword.other.rust"],
			settings: { foreground: P.orange },
		},
		{
			name: "[RUST] — Keyword Fn",
			scope: ["keyword.other.fn.rust"],
			settings: { foreground: P.magenta },
		},
		{
			name: "[ENV] — Keyword",
			scope: ["keyword.other.env"],
			settings: { foreground: P.orange },
		},
		{
			name: "[ENV] — Variable",
			scope: ["variable.other.env"],
			settings: { foreground: P.gold },
		},
		{
			name: "[ENV] — Source",
			scope: ["source.env"],
			settings: { foreground: P.iceBlue },
		},
		{
			name: "[ENV] — Punctuation",
			scope: ["keyword.other.template.begin.env","keyword.other.template.end.env","keyword.operator.assignment.env"],
			settings: { foreground: P.orange },
		},
		{
			name: "[JS] — Double Destructure of Object",
			scope: ["variable.object.property"],
			settings: { foreground: P.cyan },
		},
		{
			name: "[JS] — Regex",
			scope: ["string.regexp.js"],
			settings: { foreground: P.magenta },
		},
		{
			name: "[CSV] — Keyword 2",
			scope: ["keyword.rainbow2"],
			settings: { foreground: P.orange },
		},
		{
			name: "[NIM] — Keyword",
			scope: ["keyword.other.nim","keyword.other"],
			settings: { foreground: P.orange },
		},
		{
			name: "[NIM] — boolean",
			scope: ["keyword.boolean"],
			settings: { foreground: P.pink },
		},
		{
			name: "[NIM] — {}",
			scope: ["punctuation.pragma.start.nim","punctuation.pragma.end.nim","entity.name.function.nim"],
			settings: { foreground: P.gold_x2 },
		},
		{
			name: "Deleted",
			scope: ["markup.deleted"],
			settings: { foreground: P.redSoft },
		},
		{
			name: "Inserted",
			scope: ["markup.inserted"],
			settings: { foreground: P.greenBright },
		},
		{
			name: "Underline",
			scope: ["markup.underline"],
			settings: { fontStyle: "underline" },
		},
		{
			name: "[ITALICS] All the awesome italics live here.",
			scope: ["modifier","this","comment","storage.modifier","entity.other.attribute-name","entity.other.attribute-name.html","punctuation.definition.comment","text.html.basic entity.other","entity.other.attribute-name","markup.quote.markdown meta.paragraph.markdown","markup.italic.markdown","text.jade entity.other.attribute-name.tag","keyword.control.from","entity.other.attribute-name.tag.pug"],
			settings: { fontStyle: "italic" },
		},
	],
};
