const colors = require('./colors.js')
const cl = console
let index = 0

module.exports = (text = undefined, color = undefined) => {
  let notExistsColor = true
  if (text !== undefined) {
    if (color !== undefined) {
      Object.entries(colors).map(([key, value]) => {
        if (key === color) {
          console.log(`${value}%s\x1b[0m`, text);
          notExistsColor = false 
        }
      })
      if (notExistsColor === true) cl.log(text)
    }else {
      cl.log(text)
    }
  } else {
    cl.log('show-log ', index)
    index++
    return index;
  }
}
