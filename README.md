# Clean Up the Web

Firefox extension that cleans up the web.

This is an open source project which uses the [The Hippocratic License][license].

## Development

- `npm start`: Run the extension locally in a browser window
- `npm run lint`: Lint source code
- `npm run build`: Build the extension for production and output `.zip` file in `web-ext-artifacts/` directory
- `npm run sign`: Sign the extension

To sign the extension:

1. Get new JWT tokens: https://addons.mozilla.org/en-US/developers/addon/api/key/
2. Set `AMO_JWT_ISSUER` and `AMO_JWT_SECRET` environment variables
3. Run `sign` script above

## Contributing

If you'd like to contribute, please read the [Code of Conduct][code-of-conduct] and [Contributing instructions][contributing], then fork the repository and use a feature branch. Pull requests are welcome.

[license]: https://firstdonoharm.dev/
[code-of-conduct]: CODE_OF_CONDUCT.md
[contributing]: CONTRIBUTING.md
