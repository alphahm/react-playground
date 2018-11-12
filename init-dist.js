var fs = require('fs');

var distJs = "./dist/js"
var distCss = "./dist/css"

// Create dist/js
if(!fs.existsSync(distJs)){
    fs.mkdirSync(distJs);
}

// Create dist/css
if(!fs.existsSync(distCss)){
    fs.mkdirSync(distCss);
}