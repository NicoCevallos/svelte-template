# VS Code configuration

This template comes with a default configuration in `.vscode/settings.json`, so
you don't need to configure anything. You only need to install the those
extensions:

- [Svelte for VS Code](https://marketplace.visualstudio.com/items?itemName=svelte.svelte-vscode)
  to enable syntax highlighting and rich intellisense.
- [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)
  to enable linting while you code.
- [Prettier - Code formatter](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)
  to enable formating on save.
- [EditorConfig for VS Code](https://marketplace.visualstudio.com/items?itemName=EditorConfig.EditorConfig)
  to enable all users use same editor configuration regarding to charset,
  indentation style, EOF, etc

Anyways, you can also use this guide to customize or move this configuration to
your Workspace or User Settings.

## Svelte for VS Code

```jsonc
{
	// ...
	"[svelte]": {
		"editor.defaultFormatter": "svelte.svelte-vscode"
	}
}
```

NOTE: Svelte for VS Code uses Prettier with
[`prettier-plugin-svelte`](https://github.com/sveltejs/prettier-plugin-svelte)
under the hood, so previous configuration can be replaced by this, if you
prefer. Read more below:

```jsonc
{
	// ...
	"editor.defaultFormatter": "esbenp.prettier-vscode"
}
```

## ESLint

```jsonc
{
	// ...
	"eslint.validate": ["svelte", "json", "jsonc"],
	"editor.codeActionsOnSave": {
		"source.fixAll": true
	}
}
```

## Prettier

```jsonc
{
	// ...
	"editor.formatOnSave": true,
	// - This is to use your prettierrc config file instead the default config for all files when there is no config file. Useful if you don't want to use prettier on all projects, so you'll need to add this to Workspace or User Settings
	"prettier.requireConfig": true,
	// - To use prettier in all files known by prettier
	"editor.defaultFormatter": "esbenp.prettier-vscode"
	// - or use it by language
}
```

If you want to use Prettier for all files, use this

```jsonc
{
	// ...
	"editor.defaultFormatter": "esbenp.prettier-vscode"
}
```

or this to specify by language.

```jsonc
{
	// ...
	"[typescript]": {
		"editor.defaultFormatter": "esbenp.prettier-vscode"
	}
}
```
