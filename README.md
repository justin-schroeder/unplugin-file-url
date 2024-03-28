# unplugin-file-url

[![NPM version](https://img.shields.io/npm/v/unplugin-file-url?color=a1b858&label=)](https://www.npmjs.com/package/unplugin-file-url)

This is a simple plugin for Vite, Rollup, esbuild, Webpack, and other [unplugin](https://unplugin.unjs.io/) compatible bundlers. That allows loading modules via file urls like `file:///path/to/file`.

FWIW — file urls should work in ESM, but sometimes bundlers do not resolve them properly.
