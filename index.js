var app = require("app")
var bw = require("browser-window")

//var packager = require('electron-packager');
app.on("ready", function () {
     mainWindow = new bw({
        width:640,
        height:340,
        resizable:false
    })
    mainWindow.loadUrl("file://"+__dirname+"/index.html");
  //  mainWindow.setMenu(null);

})