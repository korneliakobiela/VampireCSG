const electron = require('electron');

const app = electron.app;
const ipc = electron.ipcMain;

const BrowserWindow = electron.BrowserWindow;

let mainWindow;

function createWindow () {

    mainWindow = new BrowserWindow({width: 1200, height: 1000, frame: false});
    mainWindow.loadURL(`file://${__dirname}/index.html`);

    mainWindow.webContents.openDevTools();

    mainWindow.on('closed', function () {

        mainWindow = null;
    });
}

app.on('ready', createWindow);


ipc.on('window-all-closed', function () {

    if (process.platform !== 'darwin') {
        app.quit()
    }
});

app.on('activate', function () {
    if (mainWindow === null) {
        createWindow()
    }
});


