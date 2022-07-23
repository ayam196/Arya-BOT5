global.owner = ['6285892910131','6281288779173'] // Put your number here
global.mods = [] // Want some help?
global.prems = ['6281288779173','6285892910131'] // Premium user has unlimited limit
global.APIs = { // API Prefix
  // name: 'https://website'
  nrtm: 'https://nurutomo.herokuapp.com',
  xteam: 'https://api.xteam.xyz'
}
global.APIKeys = { // APIKey Here
  // 'https://website': 'apikey'
  'https://api.xteam.xyz': 'Masukkan_Apikey'
}

// Sticker WM
global.packname = 'I hope you\'Subscribe'
global.author = 'Reina RBX'

global.multiplier = 69 // The higher, The harder levelup

let fs = require('fs')
let chalk = require('chalk')
let file = require.resolve(__filename)
fs.watchFile(file, () => {
  fs.unwatchFile(file)
  console.log(chalk.redBright("Update 'config.js'"))
  delete require.cache[file]
  require(file)
})
