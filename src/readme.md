# Theme source & builder

The `themes/*.json` files are **generated**. Do not edit them by hand — edit the
source here and run the build.

```
pnpm install       # one-time
pnpm build         # regenerate themes/*.json from src/
pnpm start         # watch src/ and rebuild on change
```

## Layout

| File | Purpose |
| --- | --- |
| `palette.js` | Every color, named, defined **once**. Change a hex here and it propagates everywhere it's referenced. |
| `themes/dark.js` | `Shades of Purple` — key → palette-name map + `tokenColors`. |
| `themes/super-dark.js` | `Shades of Purple (Super Dark)`. |
| `themes/light.js` | `Shades of Purple (Light)`. |
| `sections.js` | Canonical VS Code Theme Color section order used to lay out the generated `colors` object. |
| `build.js` | Reads the above and writes `themes/*.json`. |

## How it works

Each theme module maps a workbench color key to a **named palette entry**:

```js
const P = require('../palette');
module.exports = {
  name: 'Shades of Purple',
  type: 'dark',
  colors: {
    'editor.background': P.bgEditor,
    'editorCursor.foreground': P.gold,
    // ...
  },
  tokenColors: [ /* scopes → P.<name> */ ],
};
```

`build.js` resolves the names to hex, groups the keys into the canonical API
sections, and writes the JSON. The palette is the single source of truth, so a
recolor is a one-line change plus a rebuild.

## Test locally

```
pnpm build
pnpm dlx @vscode/vsce package --no-dependencies -o /tmp/sop.vsix
code --install-extension /tmp/sop.vsix --force
```

Then reload VS Code and pick a variant via **Preferences ＞ Color Theme**
(Shades of Purple / Super Dark / Light). Or just press **F5** in this repo to
launch an Extension Development Host with the themes loaded.

> `src/` is excluded from the published `.vsix` (see `.vscodeignore`) — only the
> generated `themes/*.json` ship to users.
