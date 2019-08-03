var http = require('http')
var url_parse = require('url')

var port = process.argv[2]

http.createServer(function (request, response) {
  response.writeHead(200, { 'Content-type': 'application/json'})
  parsed_url = url_parse.parse(request.url, true)
  console.log(parsed_url.path)
  if (parsed_url.path.startsWith('/api/parsetime')){
    response.write(parsetime(parsed_url.query))
  } else if (parsed_url.path.startsWith('/api/unixtime')){
    response.write(unixtime(parsed_url.query))
  } else {
    response.writeHead(404)
    response.write("Page not found")
  }
  response.end()
}).listen(port);

function parsetime(query){
   result = ''
   if ('iso' in query) {
     var passed_date = new Date(query.iso)
     return_date = {
       'hour': passed_date.getHours(),
       'minute': passed_date.getMinutes(),
       'second': passed_date.getSeconds(),
     }
     result = JSON.stringify(return_date)
   }
  return String(result)
}

function unixtime(url_obj){
  result = ''
  if ('iso' in query) {
    var passed_date = new Date(query.iso)
    return_date = {
      'unixtime': passed_date.getTime(),
    }
    result = JSON.stringify(return_date)
  }
 return String(result)
}
