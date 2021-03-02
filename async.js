setTimeout(() => {
   console.log(2); 
}, 1000);
console.log(1);

//https://eloquentjavascript.net/img/control-io.svg

const fs = require('fs')

fs.readFile('./sample-2mb-text-file.txt', (err, data) => {
   if (err) {
      console.log(err);
   }
   console.log(data);
})

fs.readFile('./test.txt', (err, data) => {
   if (err) {
      console.log(err);
   }
   console.log(data, '<<<<<<<<, INI test');
})
