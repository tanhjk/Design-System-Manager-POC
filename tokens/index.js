const { readdirSync, statSync } = require("fs")
const { join } = require("path")
const path = require("path")
const dirs = p => readdirSync(p).filter(f => statSync(join(p, f)).isDirectory())
const fname = p =>
  readdirSync(__dirname).filter(fname => {
    return path.extname(fname).toLowerCase() === ".json"
  })
module.exports = fname(path.parse(__filename).name)
