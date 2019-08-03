var fs = require('fs');

module.exports = function (directory, file_ext, callback) {
  fs.readdir(directory, function(err, files){
    if (err) {
      return callback(err);
    }
    if (!file_ext.startsWith('.')){
      file_ext = '.' + file_ext;
    }
    filtered_files = files.filter(function(file) {
      return file.endsWith(file_ext);
    });
    callback(null, filtered_files);
  });
}
