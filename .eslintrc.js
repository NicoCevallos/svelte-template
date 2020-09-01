const eslintSveltePreprocess = require("eslint-svelte3-preprocess");
const svelteConfig = require("./svelte.config");

module.exports = {
	root: true,
	env: {
		node: true,
		browser: true,
	},
	parser: "@typescript-eslint/parser",
	parserOptions: {
		createDefaultProgram: true,
		ecmaVersion: 2019,
		sourceType: "module",
	},
	extends: ["eslint:recommended"],
	plugins: ["svelte3", "@typescript-eslint", "prettier"],
	overrides: [
		{
			files: ["*.svelte"],
			processor: "svelte3/svelte3",
		},
		{
			files: ["*.ts", "*.json"],
			extends: [
				"plugin:@typescript-eslint/recommended",
				"plugin:prettier/recommended",
				"prettier/@typescript-eslint",
			],
		},
	],
	settings: {
		"svelte3/preprocess": eslintSveltePreprocess(svelteConfig.preprocess),
	},
};
