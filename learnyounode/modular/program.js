var mymodule = require('./mymodule.js')

directory = process.argv[2];
file_ext = process.argv[3];

mymodule(directory, file_ext, function(err, data){
  if (err){
    console.log("error encountered: " + err);
  } else {
    data.forEach(function(element) {
      console.log(element);
    });
  }
});
