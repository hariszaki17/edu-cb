const fs = require('fs')

// const data1 = fs.readFileSync('./sample-2mb-text-file.txt')
// console.log(data1, 'INI data 1 yang besar');
// const data2 = fs.readFileSync('./test.txt')
// console.log(data2, 'INI data 2 yang kecil');


fs.readFile('./sample-2mb-text-fil.txt', (err, data) => {
    if(err) {
        console.log('ini error: ', err);
    } else {
        console.log(data, 'Ini data yang besar');
    }
})
fs.readFile('./test.txt', (err, data) => {
    console.log(data, 'Ini data yang kecil');
})

// let data = fs.readFileSync('./sample-2mb-text-file.txt', 'utf-8')
// console.log('hehe');