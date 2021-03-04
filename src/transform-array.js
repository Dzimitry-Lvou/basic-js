const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
  let res = arr.slice(0)
  const commands = ['--discard-next', '--discard-prev', '--double-next', '--double-prev']
  for (let i = 0; i < res.length; i++) {
    switch (res[i]) {
      case '--discard-next':
        if (i != res.length - 1) {
          res.splice(i + 1, 1)
        }
        break;
      case '--discard-prev':
        if (i != 0) {
          res.splice(i - 1, 1)
        }
        break;
      case '--double-next':
        if (i != res.length - 1){
          res.splice(i, 1, res[i + 1])
        }        
        break
      case '--double-prev':
        if (i != 0){
          res.splice(i, 1, res[i - 1])
        }  
        break
      default:
        break;
    }
  }
  return res.filter(el => !commands.includes(el))
};
