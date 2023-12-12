# Loop-Meet Chrome Extension  

This planned chrome extension build-out is designed to help people connect.  Whether online, by phone, or in person, we want to help you find the time to meet.

# Installing and Running  

## Procedures  

1. Check if your [Node.js](https://nodejs.org/) version is >= **18**.
2. Run `npm install` to install dependencies.
3. Run `npm start`
4. Load your extension on Chrome following:
   1. Access `chrome://extensions/`
   2. Check `Developer mode`
   3. Click on `Load unpacked extension`
   4. Select the `build` folder.

## Structure  

All your extension's code must be placed in the `src` folder.

## Webpack auto-reload and HRM

To make your workflow much more efficient this project uses the [webpack server](https://webpack.github.io/docs/webpack-dev-server.html) to development (started with `npm start`) with auto reload feature that reloads the browser automatically every time that you save some file in your editor.

You can run the dev mode on other port if you want. Just specify the env var `port` like this:

```
$ PORT=6002 npm run start
```

## Packing

After the development, run the command `$ NODE_ENV=production npm run build` to prepare the `build` folder for submission to the Chrome Web Store.

## Resources:

- [Webpack documentation](https://webpack.js.org/concepts/)
- [Chrome Extension documentation](https://developer.chrome.com/extensions/getstarted)
- [React Chrome Extension boilderplate] (https://github.com/lxieyang/chrome-extension-boilerplate-react)
