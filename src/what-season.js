const CustomError = require("../extensions/custom-error");

module.exports = function getSeason(date) {
  if(date == undefined) return 'Unable to determine the time of year!'
  date.getTime()

  if ([11, 0, 1].includes(date.getMonth())) return 'winter'
  if ([2, 3, 4].includes(date.getMonth())) return 'spring'
  if ([5, 6, 7].includes(date.getMonth())) return 'summer'
  if ([8, 9, 10].includes(date.getMonth())) return 'autumn'
};
