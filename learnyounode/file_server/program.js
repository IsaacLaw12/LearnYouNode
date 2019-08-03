var http = require('http');
var fs = require('fs');

var port_number = process.argv[2];
var file_name = process.argv[3];

var server = http.createServer(function(request, response){
  fs.createReadStream(file_name).pipe(response);
});

server.listen(port_number);
