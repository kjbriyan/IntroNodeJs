const fs = require('fs')
//text in file
const data = 'This is my Hello World file'
//create file
fs.writeFile('info.txt', data, 'utf-8', (err) => {
    console.log('File created')
})
//read file
const info = fs.readFile('info.txt', 'utf-8', (err, data) => {
    if (err)
        console.log(err)
    else
        console.log(data)
})