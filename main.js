const {app, BrowserWindow, Menu, MenuItem, electron} = require('electron')
const path = require('path')
const url = require('url')

let win

function createWindow () {
  win = new BrowserWindow({width: 800, height: 600,icon:'file://' +  __dirname + 'dist/angular-tour-of-heroes/favicon.ico'})

  // load the dist folder from Angular
  win.loadURL(url.format({
    pathname: path.join(__dirname, 'dist/angular-tour-of-heroes/index.html'),
    protocol: 'file:',
    slashes: true
  }))

  const template = [
    {
      label: 'File',
      submenu: [
        {
          label: 'Dashboard',
          click () {win.webContents.send('navigateTo','dashboard')}
        },
        {
          label: 'Heroes',
          click () { win.webContents.send('navigateTo','heroes')}
        },
        { type: 'separator' },
        {role: 'close'}
      ]
    },
    {
      role: 'help',
      submenu: [
        {
          label: 'About',
          click () {openAboutWindow();}
        },
        {
          label: 'Learn More',
          click () { require('electron').shell.openExternal('www.google.com') }
        }
      ]
    }
  ]

  const menu = Menu.buildFromTemplate(template);
  //Menu.setApplicationMenu(menu);
  win.setMenu(menu);

  var newWindow = null;

 function openAboutWindow() {
  if (newWindow) {
   newWindow.focus()
   return;
 }

 newWindow = new BrowserWindow({
  height: 185,
  resizable: false,
  width: 270,
  title: "",
  minimizable: false,
  fullscreenable: false,
 });

 newWindow.setMenu(null);

 newWindow.loadURL('file://' + __dirname + '/src/about.html');

  newWindow.on('closed', function () {
  newWindow = null;
 });
}

  // Open the DevTools optionally:
  //win.webContents.openDevTools()

  win.on('closed', () => {
    win = null
  })
}

app.on('ready', createWindow)


app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', () => {
  if (win === null) {
    createWindow()
  }
})

app.on('uncaughtException', function (err) {
  console.log("***WHOOPS TIME****"+err);
});


