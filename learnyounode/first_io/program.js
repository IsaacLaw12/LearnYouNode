var fs = require('fs');

var file_name = process.argv[2];
var buf = fs.readFileSync(file_name);
var str = buf.toString();
var box = str.split('\n')
console.log(box.length -1)
