// Node.js - Курс по Node.js для Начинающих (https://youtu.be/egoMqpY2myQ)

// // Working with functions of different priorities - Order 1
// function timestamp() {
//     return performance.now().toFixed(2)
// }

// console.log('Program start', timestamp())

// // Timeoutes
// setTimeout(() => console.log('Timeout 1', timestamp()), 0)
// setTimeout(() => {
//     process.nextTick(() => console.log('Next tick 2', timestamp()))
//     console.log('Timeout 2', timestamp())
// }, 10)

// // Close events
// fs.writeFile('./text.txt', 'Hello Node.js', () => console.log('File written', timestamp()))

// // Promises
// Promise.resolve().then(() => console.log('Promise 1', timestamp()))

// // Next tick
// process.nextTick(() => console.log('Next tick 1', timestamp()))

// // setImmediate (Check)
// setImmediate(() => console.log('Immediate 1', timestamp()))

// // Input/Output ivents
// dns.lookup('google.com', (err, address, family) => {
//     console.log('DNS 1 google.com', ' ', address, ' ', timestamp())
// })
// dns.lookup('localhost', (err, address, family) => {
//     console.log('DNS 2 localhost', ' ', address, ' ', timestamp())
// })

// console.log('Program end', timestamp())





// // Working with functions of different priorities - Order 2
// function timestamp() {
//     return performance.now().toFixed(2)
// }

// console.log('Program start', timestamp())

// // Close events
// fs.writeFile('./text.txt', 'Hello Node.js', () => console.log('File written', timestamp()))

// // Promises
// Promise.resolve().then(() => console.log('Promise 1', timestamp()))

// // Next tick
// process.nextTick(() => console.log('Next tick 1', timestamp()))

// // setImmediate (Check)
// setImmediate(() => console.log('Immediate 1', timestamp()))

// // Timeoutes
// setTimeout(() => console.log('Timeout 1', timestamp()), 0)
// setTimeout(() => {
//     process.nextTick(() => console.log('Next tick 2', timestamp()))
//     console.log('Timeout 2', timestamp())
// }, 100)

// // Intervals
// let intervalCount = 0
// const intervalId = setInterval(() => {
//     console.log(`Interval ${intervalCount += 1}`, timestamp())
//     if (intervalCount === 2) clearInterval(intervalId)
// }, 50)

// // Input/Output ivents
// dns.lookup('google.com', (err, address, family) => {
//     console.log('DNS 1 google.com', ' ', address, ' ', timestamp())
// })
// dns.lookup('localhost', (err, address, family) => {
//     console.log('DNS 2 localhost', ' ', address, ' ', timestamp())
//     Promise.resolve().then(() => console.log('Promise 2', timestamp()))
//     process.nextTick(() => console.log('Next tick 3', timestamp()))
// })

// console.log('Program end', timestamp())



// // оптимизация кода Working with functions of different priorities - Order 2
// function info(text) {
//     console.log(text, performance.now().toFixed(2))
// }

// console.log('Program start')

// // Close events
// fs.writeFile('./text.txt', 'Hello Node.js', () => info('File written'))

// // Promises
// Promise.resolve().then(() => info('Promise 1'))

// // Next tick
// process.nextTick(() => info('Next tick 1'))

// // setImmediate (Check)
// setImmediate(() => info('Immediate 1'))

// // Timeoutes
// setTimeout(() => info('Timeout 1'), 0)
// setTimeout(() => {
//     process.nextTick(() => info('Next tick 2'))
//     info('Timeout 2')
// }, 100)

// // Intervals
// let intervalCount = 0
// const intervalId = setInterval(() => {
//     info(`Interval ${intervalCount += 1}`)
//     if (intervalCount === 2) clearInterval(intervalId)
// }, 50)

// // Input/Output ivents
// dns.lookup('google.com', (err, address, family) => {
//     info('DNS 1 google.com' + ' ' + address + ' ')
// })
// dns.lookup('localhost', (err, address, family) => {
//     info('DNS 2 localhost' + ' ' + address + ' ')
//     Promise.resolve().then(() => info('Promise 2'))
//     process.nextTick(() => info('Next tick 3'))
// })

// info('Program end')




// // Блокировка цикла событий
// let isRunning = true
// setTimeout(() => isRunning = false, 10)
// process.nextTick(() => console.log('Next tick'))
// while (isRunning) {
//     console.log('while loop is running...')
// }


// // Неблокирующий вариант цикла
// let isRunning = true
// setTimeout(() => isRunning = false, 10)
// process.nextTick(() => console.log('Next tick'))

// function setImmediatePromise() {
//     return new Promise((resolve, reject) => {
//         setImmediate(() => resolve())
//         // // with resolve() we stay on the same event loop iteration
//         // resolve()
//     })
// }

// async function whileLoop() {
//     while (isRunning) {
//         console.log('while loop is running...')
//         await setImmediatePromise()
//     }
// }
// whileLoop().then(() => console.log('While loop ended'))



// Добавление асинхронности в рекурсивную функцию вычисляющую 
// число фибоначи по порядковому номеру
// функция блокирует щсновной поток
// setTimeout(() => console.log('Timeout'), 0)
// function fib(n) {
//     return new Promise((resolve, reject) => {
//         if (n === 0 || n === 1) {
//             return resolve(n)
//         }
//         Promise.all([fib(n - 1), fib(n - 2)])
//             .then(([fib1, fib2]) => resolve(fib1 + fib2))
//     })
// }
// // При больших значениях, передаваемых в функцию fib()
// // происходит переполнение памяти
//fib(20).then((res) => console.log(res))


// // Добавление setImmediate позволяет неблокировать основной поток
// setTimeout(() => console.log('Timeout'), 0)
// function fib(n) {
//     return new Promise((resolve, reject) => {
//         if (n === 0 || n === 1) {
//             return resolve(n)
//         }
//         setImmediate(() =>
//             Promise.all([fib(n - 1), fib(n - 2)])
//                 .then(([fib1, fib2]) => resolve(fib1 + fib2))
//         )
//     })
// }
// // При больших значениях, передаваемых в функцию fib()
// // происходит переполнение памяти
// fib(20).then((res) => console.log(res))


// // Оптимизация функции fib()
// setTimeout(() => console.log('Timeout'), 0)
// // создаём и используем кеш для кеширования найденных чисел
// const cache = new Map()
// function fib(n) {
//     return new Promise((resolve, reject) => {
//         if (n === 0 || n === 1) {
//             return resolve(n)
//         }
//         if (cache.has(n)) {
//             return resolve(cache.get(n))
//         }
//         setImmediate(() =>
//             Promise.all([fib(n - 1), fib(n - 2)])
//                 .then(([fib1, fib2]) => {
//                     cache.set(n, fib1 + fib2)
//                     resolve(fib1 + fib2)
//                 })
//         )
//     })
// }
// fib(10).then((res) => console.log(res))


// // Дополнительная оптимизация функции fib()
// setTimeout(() => console.log('Timeout'), 0)
// const cache = new Map()
// function fib(n) {
//     return new Promise((resolve, reject) => {
//         if (n === 0 || n === 1) {
//             return resolve(n)
//         }
//         if (cache.has(n)) {
//             return resolve(cache.get(n))
//         }
//         // переписываем колбэк, который передаётся в setImmediate
//         setImmediate(() => fib(n - 1).then((fib1) => fib(n - 2).then((fib2) => {
//                 cache.set(n, fib1 + fib2)
//                 console.log(process.memoryUsage())
//                 resolve(fib1 + fib2)
//             }))
//         )
//     })
// }
// fib(100).then((res) => console.log(res))

// // моделирование утечки памяти и её мониторинг с помощью process.memoryUsage
// const leakArray = [];
// setInterval(() => {
//     leakArray.push(new Array(1000000).fill('*')); // Consumes memory continuously
//     console.log(process.memoryUsage());
// }, 1000);