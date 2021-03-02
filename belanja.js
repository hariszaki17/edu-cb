const beli = (uang, obj, cb) => {
    setTimeout(() => {
        uang = uang - obj.harga
        cb(uang)
    }, obj.waktu);
}

beli(20000, { item: 'ayam', harga: 10000, waktu: 1000 }, (uang) => {
    console.log(`kembalian anda sejumlah ${uang}`);
    beli(uang, { item: 'permen', harga: 5000, waktu: 1000 }, (uang) => {
        console.log((`kembalian anda sejumlah ${uang}`));
    })
})