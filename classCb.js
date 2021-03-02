class AnakEmak{
    constructor(){
        this.name = 'Maria'
        this.uang = 12000
    }
    membeliSayur(callback){
        let sayur = 4000
        let sisaUang = this.uang - sayur
        console.log(`${this.name} membeli sayur Rp.${sayur}`)
        callback(sisaUang)
    }
    membeliIkan(sisaUang){
        let ikan = 5000
        sisaUang = sisaUang - ikan
        console.log(`setelah membeli sayur, maria lanjut membeli ikan Rp.${ikan}`)
        console.log(`sisa uang maria Rp.${sisaUang}`)
    }
  }
 let budi = new AnakEmak()

 budi.membeliSayur(budi.membeliIkan)