var glob = require('glob');
var fs = require('fs');
var Path = require('path');

glob('images/*.{gif,png,jpg,jpeg}', function (err, files) {
  // read the folder or folders if you want: example json/**/*.json
  if (err) {
    console.log('cannot read the folder, something goes wrong with glob', err);
  }

  const jsonFilePath = Path.resolve(__dirname, '../', 'imagelist.json');
  fs.writeFileSync(jsonFilePath, JSON.stringify(files, null, 2));
  // files.forEach(function (file) {
  //   console.log(file);
  // });
});
