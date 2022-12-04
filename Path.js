const path = require('path')

data_folder = '/data/'
products_folder = '/products'
products_file = 'products.json'

//join path
const full_path = path.join(data_folder, products_folder, products_file)

//memproses urutan jalur sampai ke dir paling luar
const abs_path = path.resolve(__dirname, 'data', 'products', 'products.json')

//get base name or last path  from full path
products_files = path.basename(full_path)

console.log(products_files) // products.json
console.log(full_path) // /data/products/products.json
console.log(abs_path) // f:\STT SAPTA TARUNA\05 Kuliah\Intro back-end\Paraktikum\data\products\products.json