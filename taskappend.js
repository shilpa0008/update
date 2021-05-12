var fs = require('fs');

fs.appendFile('test.txt', ' Bangalore is famous being the Silicon Valley of India ', function (err) {
  if (err) throw err;
  console.log('Updated!');
});