const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, options) {
  if (options.separator === undefined) options.separator = '+'
  if (options.additionSeparator === undefined) options.additionSeparator = '|'
  if (options.repeatTimes === undefined ) {
    options.repeatTimes = 1 
  } 
  if (options.addition === undefined) {
    options.additionRepeatTimes = 0
  } else if (options.additionRepeatTimes === undefined) {
    options.additionRepeatTimes = 1
  }

  str = String(str)
  options.addition = String(options.addition)

  if (options.additionRepeatTimes > 0) {
    for (let i = options.additionRepeatTimes; i > 0; i--) {
      str += options.addition;
      if (i != 1 && typeof(options.additionSeparator) == 'string') {
        str += options.additionSeparator
      }      
    }
  }

  let res = new Array(options.repeatTimes)
  return res.fill(str).join(options.separator)
};
  
