# single-spa-portal-example
The goal of this project is to provide an example of how to build a portal like app which consists of multiple single page applications (SPA's). Each SPA should be self contained with its own build process. It should be individually deployable without the need to deploy the whole application if there are changes to any individual app.

This example is based on [simple-single-spa-webpack-example](https://github.com/joeldenning/simple-single-spa-webpack-example/blob/master/README.md) but will provide further features like:

- [x] Isolate SPA's with their own build process
- [x] Load SPA's on demand with SystemJS
- [ ] Support multiple Angular versions without zone.js conflicts
- [ ] Provide a way to communicate between each SPA


## How to use it
1. Clone this project
2. Jump into each folder and do:
2.1 `npm install`
2.2. `npm run watch`
4. Open up http://localhost:9000 in a web browser.
