const {readFile, writeFile} = require('fs')
const util = require('util')
const readFilePromise = util.promisify(readFile)
const writeFilePromise = util.promisify(writeFile)

const start = async () => {
    try {
        const first = await readFilePromise('first.txt', 'utf8')
        const second = await readFilePromise('second.txt', 'utf8')
        await writeFilePromise(
            'file.txt', `My name is bibhushan thapa: ${first} ${second}`
            )
        console.log(first, second)
    } catch(error) {
        console.log(error)
    }
}
start()