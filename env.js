const path = require('path')
const fs = require('fs')

const filePath = path.join(__dirname, '.todos')

try {
  fs.mkdirSync(filePath)
} catch (err) {
  if (err.code !== 'EEXIST') {
    console.log(err)
  }
}

const env = {}

env.filePath = filePath
module.exports = env
