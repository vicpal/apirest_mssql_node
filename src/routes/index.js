const glob = require('glob')
const path = require('path')

module.exports = router => {
  glob.sync('./src/routes/*.js')
    .forEach(file => {
      if(!file.includes('index.js')) require(path.resolve(file))(router)
    })
}