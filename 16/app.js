console.log("first")


// const dragon =  () => {
//     for (let i = 0; i < 100000; i ++) {
//         console.log(`hello ${i}`)
//     }
// }

// dragon()


setTimeout(() => {
    for (let i = 0; i < 100000; i ++) {
                console.log(`hello ${i}`)
            }
}, 2000)


console.log("third")