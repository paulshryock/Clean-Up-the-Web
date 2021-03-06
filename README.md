<h1 align="center">Clean Up the Web</h1>

<p align="center"><a href="https://addons.mozilla.org/en-US/android/addon/clean-up-the-web/">Install on Firefox</a></p><br><br>

**Clean Up the Web** removes [certain HTML elements](https://github.com/paulshryock/Clean-Up-the-Web/issues/8) from websites which provide an unpleasant user experience.

[Here is a roadmap of planned enhancements](https://github.com/paulshryock/Clean-Up-the-Web/issues?q=is%3Aopen+is%3Aissue+label%3Aenhancement) which will aim to improve the accessibility, security, performance, user experience, and user privacy of websites (nicely and unobtrusively). Future versions of this extension will include detailed release notes with a full Changelog of any changes in behavior.

This browser extension is made by [Paul Shryock](https://github.com/paulshryock).  
👋 I hope you find it useful! 

---

This is an open source project which uses the [The Hippocratic License][license].

## Latest release

### Install

- [Firefox Add-On](https://addons.mozilla.org/en-US/android/addon/clean-up-the-web/) from the Firefox Add-On directory

### Download

- [Binary and source code](https://github.com/paulshryock/Clean-Up-the-Web/releases/latest) from GitHub

## Contributing

Please read the [Code of Conduct][code-of-conduct].

You can report a bug, request a feature, ask a question, or offer feedback by creating a [New Issue](https://github.com/paulshryock/Clean-Up-the-Web/issues/new).

If you'd like to contribute code, please read the [Code of Conduct][code-of-conduct] and [Contributing instructions][contributing], then fork the repository and use a feature branch. Pull requests are welcome.

## Development

Main Add-On functionality is in `main.js`.

### Requirements

1. Node and Node Package Manager (npm)
    - Check if Node is installed: `node --version`
    - If Node is installed, you will see a version number, such as `v14.2.0`
    - If Node isn't installed, you can download and install it from [nodejs.org](https://nodejs.org/en/download/), or use a Node version manager such as [n](https://github.com/tj/n) or [nvm](https://github.com/nvm-sh/nvm)
		
#### Dependencies

See [package.json](https://github.com/paulshryock/Clean-Up-the-Web/blob/main/package.json).

### npm scripts

- `npm start`: Lint source code and run extension in a browser window
- `npm run run`: Run extension in a browser window
- `npm run lint`: Lint source code
- `npm run build`: Build extension `.zip` to `web-ext-artifacts/`
- `npm run sign`: Sign the extension

### Signing the extension for distribution

1. Get new JWT tokens: https://addons.mozilla.org/en-US/developers/addon/api/key/
2. Set `AMO_JWT_ISSUER` and `AMO_JWT_SECRET` environment variables
3. Run `npm run sign`

[license]: https://firstdonoharm.dev/
[code-of-conduct]: CODE_OF_CONDUCT.md
[contributing]: CONTRIBUTING.md
