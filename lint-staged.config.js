module.exports = {
	"*.{cjs,js,ts,json,svelte}": [
		//--plugin parameter required to work with pnpm
		"prettier --plugin=./node_modules/prettier-plugin-svelte --write",
		"eslint --fix",
	],
	"*.svelte": ["svelte-check"],
};
