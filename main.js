'use strict'

require("electron-reload")(__dirname, {electron: require(`${__dirname}/node_modules/electron`)});
const electron = require('electron');
const app = electron.app;
const BrowserWindow = electron.BrowserWindow;
const session = electron.session;
let mainWindow;

app.on('ready', createMainWindow);
app.on('window-all-closed', closeAllWindows);

module.exports.app = app;
module.exports.session = session;
module.exports.mainWindow = mainWindow;
module.exports.openWindow = openWindow;

//***************************************************************************

function createMainWindow() {

  mainWindow = openWindow("views/login/login.html", 900, 600);
  mainWindow.setMaximizable(false);
  mainWindow.setResizable(false);
}

function openWindow(relativeFilePath, xWidth, xHeight) {

  let window = new BrowserWindow({width: xWidth, height: xHeight, autoHideMenuBar: true});
  window.loadURL("file://" + __dirname + "\\" + relativeFilePath);
  window.on('closed', () => { window = null });
  return window;
}

function closeAllWindows() {

  session.defaultSession.clearStorageData();
  app.quit();
}