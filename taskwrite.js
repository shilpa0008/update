var fs = require('fs');

fs.writeFile('input.txt', 'L AND T  is an engineering services company based in Vadodara ', function (err) {
  if (err) throw err;
  console.log('Replaced!');
});
