# Crab Core Extension
It's Google Chrome extension for Scrabble scorer which named CrabCore

## Load the extension
Chrome gives you a quick way of loading up your working directory for
testing. Let's do that now.

- Visit chrome://extensions in your browser
- Ensure that the Developer mode checkbox in the top right-hand corner is
checked.
- Click Load unpacked extension… to pop up a file-selection dialog.
- Navigate to the directory in which your extension files live, and select
it.

Alternatively, you can drag and drop the directory where your extension
files live onto chrome://extensions in your browser to load it.

## Usage
Select the word on page and do right click on it and choose “Score word”
from the context menu, it will make request to scorer service and
display the results in a box in the upper right-hand corner of the
browser window.
The box will disappear after 5 seconds.

## Development

### Dependencies
For build project you'll need [Node.js](https://docs.npmjs.com/getting-started/installing-node)
version over 6.10.

### Install
```sh
npm install
````

### Build
```sh
npm run build
````
