var fs = require('fs');

fs.readFile(process.argv[2], 'utf8', file_open_cb);

function file_open_cb(err, data){
    if (!err){
        number_lines = data.toString().split('\n').length -1;
        console.log(number_lines);
    }
}
