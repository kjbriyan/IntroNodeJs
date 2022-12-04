const fs = require('fs')

//Before run one fungction, comment another fungction

//copy file
fs.copyFile('info.txt', 'info2.txt', (err) => {
    if (err) return console.error(err)
    console.log('File copied')
})

//create folder
fs.mkdir('data', (err) => {
    console.log('Data folder created')
})

//list file in folder
fs.readdir('.', (err, files) => {
    console.log(files)
})

//rename file
fs.rename('info2.txt', 'data.txt', (err) => {
    if (err) return console.log(err)
    console.log('File renamed')
})