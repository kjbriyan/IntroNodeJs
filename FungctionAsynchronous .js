const fs = require('fs')

const info = fs.readFile('info.txt', 'utf-8', (err, data) => {
    console.log(data)
})
console.log('The file has been read')
