const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
  if (!Array.isArray(members)) return false;
  let name = []
  members.forEach(el => {
    if (typeof(el) == 'string') name.push(el.trim().toUpperCase().charAt(0))
  });
  return name.sort().join('');
};
