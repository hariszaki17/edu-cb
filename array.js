const arr  = [2, 3, 5, 8]

const arrFilterGt3 = (element) => {
    if (element >= 3) {
        console.log(element, 'ini lebih dari 3');
    }
}

const even = (el) => {
    if (el % 2 === 0) {
        console.log(el);
    }
}

const arrOperator = (arr, cb) => {
    for (let i = 0; i < arr.length; i++) {
        cb(arr[i])        
    }
}