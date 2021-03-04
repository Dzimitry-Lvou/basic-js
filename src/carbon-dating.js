const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;
const LN2 = 0.693;

module.exports = function dateSample(sampleActivity) {
  if(typeof(sampleActivity) != 'string') return false;
  let res = Math.ceil(Math.log(MODERN_ACTIVITY / sampleActivity) / (LN2 / HALF_LIFE_PERIOD));
  if (!Number.isSafeInteger(res) || res < 0) {
    return false;
  }
  return res;
};
