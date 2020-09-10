_Looking for a shareable component template? Go here -->
[sveltejs/component-template](https://github.com/sveltejs/component-template)_

---

# svelte app (TypeScript + ESLint + Prettier)

This is a project template for [Svelte](https://svelte.dev) apps. It lives at
https://github.com/NicoCevallos/svelte-template.

From time to time you will need to update some packages and/or configuration.
Check out the [How to update template](HOW_TO_UPDATE_TEMPLATE.md) guide.

## Goals

- [x] TypeScript
- [x] ESLint supporting Svelte files with TypeScript (using patch until
      [PR 62](https://github.com/sveltejs/eslint-plugin-svelte3/pull/62) is
      accepted )
- [x] Prettier supporting Svelte
- [x] Prettier plugin for ESLint
- [x] Default VS Code configuration
- [ ] Add ESLint plugin for LESS/SASS/SCSS/Stylus

## Before starting

To create a new project based on this template using
[degit](https://github.com/Rich-Harris/degit):

```bash
npx degit NicoCevallos/svelte-template svelte-app
cd svelte-app
```

_Note that you will need to have [Node.js](https://nodejs.org) installed._

Alternatively, you can use GitHub's template feature with the
[svelte-template](https://github.com/NicoCevallos/svelte-template)

## Get started

Install the dependencies...

```bash
cd svelte-app
npm install
```

...then start [Rollup](https://rollupjs.org):

```bash
npm run dev
```

Navigate to [localhost:5000](http://localhost:5000). You should see your app
running. Edit a component file in `src`, save it, and reload the page to see
your changes.

By default, the server will only respond to requests from localhost. To allow
connections from other computers, edit the `sirv` commands in package.json to
include the option `--host 0.0.0.0`.

## Building and running in production mode

To create an optimised version of the app:

```bash
npm run build
```

You can run the newly built app with `npm run start`. This uses
[sirv](https://github.com/lukeed/sirv), which is included in your package.json's
`dependencies` so that the app will work when you deploy to platforms like
[Heroku](https://heroku.com).

## Single-page app mode

By default, sirv will only respond to requests that match files in `public`.
This is to maximise compatibility with static fileservers, allowing you to
deploy your app anywhere.

If you're building a single-page app (SPA) with multiple routes, sirv needs to
be able to respond to requests for _any_ path. You can make it so by editing the
`"start"` command in package.json:

```js
"start": "sirv public --single"
```

## Using TypeScript

This template comes with a script to set up a TypeScript development
environment, you can run it immediately after cloning the template with:

```bash
node scripts/setupTypeScript.js
```

Or remove the script via:

```bash
rm scripts/setupTypeScript.js
```

## Deploying to the web

### With [Vercel](https://vercel.com)

Install `vercel` if you haven't already:

```bash
npm install -g vercel
```

Then, from within your project folder:

```bash
cd public
vercel deploy --name my-project
```

### With [surge](https://surge.sh/)

Install `surge` if you haven't already:

```bash
npm install -g surge
```

Then, from within your project folder:

```bash
npm run build
surge public my-project.surge.sh
```
