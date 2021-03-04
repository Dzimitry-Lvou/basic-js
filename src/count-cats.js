const CustomError = require("../extensions/custom-error");

module.exports = function countCats(backyard) {
  catsCount = 0;
  backyard.forEach(el => {
    el.forEach(elel => {
      if(elel == '^^') catsCount++;
    });
  });
  return catsCount;
};
