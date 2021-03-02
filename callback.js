function membeliSayur(uang, callback){
    let sayur = 4000;
    uang = uang - sayur
    console.log(`Maria membeli Sayur Rp.${sayur}`)
    console.log(`uang sisa: ${uang}`);
    callback(uang)
 }
 

function membeliIkan(uang){
    let ikan = 5000
    uang = uang - ikan
    console.log(`Setelah membeli sayur maria langsung membeli ikan Rp.${ikan}`)
    console.log(`Sisa uang maria Rp.${uang}`)
}
 
membeliSayur(10000, membeliIkan)