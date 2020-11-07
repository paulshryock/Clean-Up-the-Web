# Clean Up the Web

Hi! 👋 Thanks for checking out this Firefox Add-On made by [Paul Shryock](https://github.com/paulshryock). I made this Add-On for myself, and I added it to the [Firefox Add-On directory](https://addons.mozilla.org/en-US/android/addon/clean-up-the-web/) so that I could easily install it on multiple devices. I hope you find it useful!

**Clean Up the Web** (CUTW) removes HTML content from websites which matches [certain CSS selectors](https://github.com/paulshryock/Clean-Up-the-Web/issues/1#issuecomment-723356971). These would typically be ads, cookie policy banners, and certain visual elements which in my opinion lend toward an unpleasant user experience. Like walking down the street and seeing trash on the sidewalk. 🗑️

I plan to add small enhancements to CUTW which improve the accessibility, performance, or user experience of websites (nicely and unobtrusively), if and when time permits. I want to keep this Add-On lightweight and simple, so it's probably not as robust as other similar Add-Ons. I'm aiming for "Less is more".

Any future versions of this Add-On will include detailed release notes with a full Changelog of any changes in behavior.

Cheers,
Paul

---

This is an open source project which uses the [The Hippocratic License][license].

## Development

Main Add-On functionality is in `main.js`.

### Requirements

1. Node and Node Package Manager (npm)
    - Check if Node is installed: `node --version`
    - If Node is installed, you will see a version number, such as `v14.2.0`
    - If Node isn't installed, you can download and install it from [nodejs.org](https://nodejs.org/en/download/), or use a Node version manager such as [n](https://github.com/tj/n) or [nvm](https://github.com/nvm-sh/nvm)

### npm scripts

- `npm start`: Run the extension locally in a browser window
- `npm run lint`: Lint source code
- `npm run build`: Build the extension for production and output `.zip` file in `web-ext-artifacts/` directory
- `npm run sign`: Sign the extension

### Signing the extension for distribution

1. Get new JWT tokens: https://addons.mozilla.org/en-US/developers/addon/api/key/
2. Set `AMO_JWT_ISSUER` and `AMO_JWT_SECRET` environment variables
3. Run `npm run sign`

## Contributing

If you'd like to contribute, please read the [Code of Conduct][code-of-conduct] and [Contributing instructions][contributing], then fork the repository and use a feature branch. Pull requests are welcome.

[license]: https://firstdonoharm.dev/
[code-of-conduct]: CODE_OF_CONDUCT.md
[contributing]: CONTRIBUTING.md
