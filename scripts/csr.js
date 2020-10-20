const shell = require('shelljs')

const pagesFiles = [
    'pages/index.js',
    'pages/index_csr.js',
    'pages/index_ssg.js'
]

shell.rm(pagesFiles)

shell.cp('pagesTemplate/index_csr.js', 'pages')

shell.exec('next build && next export')