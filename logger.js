const fs = require('fs');

function Logger(contents)

{  this.contents = contents;
   this.loggerFile = 'Logs.txt';
   this.createLog = function() {
    fs.writeFile(this.loggerFile, contents, function(err) {
                if(err) console.log('error', err);
              });  
   }; 
}


module.exports = Logger;