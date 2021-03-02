const greeting = (name) => {
    console.log(`hello my name is ${name}`);
}

const sayHello = (cb) => {
    let name = 'diaz'
    console.log(`my name is ${name}`);
    cb()
}

sayHello(() => {
    console.log(`Hello everybody`);
})

