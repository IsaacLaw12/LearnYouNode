var net = require('net');
var dateFormat = require('dateformat');

var port_number = process.argv[2];

var server = net.createServer(function (socket) {
  socket.end(current_time() + "\n");
})

server.listen(port_number);

function current_time(){
  // returns a string of the current time in format "YYYY-MM-DD hh:mm"
  var now = new Date();
  return now.getFullYear() + "-" +
    pad(String(now.getMonth()+1)) + "-" +
    pad(now.getDate()) + " " +
    pad(now.getHours()) + ":" +
    pad(now.getMinutes(), 2);
}

function pad(str, length=2, left=true, char='0'){
  result = String(str);
  while (result.length < length){
    if (left){
      result = char + result;
    } else {
      result = result + char;
    }
  }
  return result;
}
