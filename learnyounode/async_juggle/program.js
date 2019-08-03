var http = require('http');

var url_one = process.argv[2];
var url_two = process.argv[3];
var url_three = process.argv[4];

var url_results = {
  [url_one]: "",
  [url_two]: "",
  [url_three]: "",
}

var total_completed = 0;

function request_process(response, url) {
  response.setEncoding('utf8');
  response.on('data', function(res){
    url_results[url] += res;
  });
  response.on('error', console.error);
  response.on('end', display_results);
}

function display_results(){
  total_completed += 1;
  if (total_completed != 3){
    return;
  }
  Object.keys(url_results).forEach(function(key){
    console.log(url_results[key]);
  })
}

Object.keys(url_results).forEach(function(key){
  http.get(key, function(response){
    request_process(response, key);
  });
});
