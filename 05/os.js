const os = require('os')


const arch = os.arch()

console.log(arch)

const freeMemory = os.freemem()

console.log(`${freeMemory /1024/1024/1024}`)

