// function proses1() {
//     setTimeout(() => {
//         console.log(1);
//     }, 3000);
// }
// function proses2() {
//     setTimeout(() => {
//         console.log(2);
//     }, 500);
// }

// proses1()
// proses2()

const arr = []

for(let i = 0 ; i < 10000000000; i++) {
    arr.push(i)
}

const result = arr.filter(el => el >= 5)

console.log(result);