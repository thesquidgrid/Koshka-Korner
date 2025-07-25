const fs = require('node:fs');
var convert = require('xml-js');


var xml = require('fs').readFileSync('./_site/feed.xml', 'utf8');

var result = convert.xml2json(xml, {compact: true, spaces: 4});

try {
  fs.writeFileSync('./_site/feed.json', result);
  // file written successfully
} catch (err) {
  console.error(err);
}