var http = require('http');

var url = process.argv[2];

var results = [];
var req = http.get(url, function(res) {
  res.setEncoding('utf8');
  res.on('data', function(response){
    results.push(response);
  });
  res.on('error', console.error);
  res.on('end', display_results);
});

function display_results(){
  var results_s = results.join('');
  console.log(results_s.length);
  console.log(results_s);
}
