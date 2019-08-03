var fs = require('fs');

directory = process.argv[2];
file_ext = "." + process.argv[3];

fs.readdir(directory, 'utf8', dir_open_cb);

function dir_open_cb(err, data){
    if (!err){
        for (var i=0;i<data.length;i++){
          if (data[i].endsWith(file_ext)){
            console.log(data[i])
          }
        }
    }
}
