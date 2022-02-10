const path = require('path')
const cl = console

module.exports =  (color = undefined) => {
  const e = new Error();
  const regex = /\((.*):(\d+):(\d+)\)$/
  const match = regex.exec(e.stack.split("\n")[2]);

  const filename = path.basename(match[1])

  cl.log(`|File: ${filename} \n|Line: ${match[2]} \n|Column: ${match[3]}\n`)
}

