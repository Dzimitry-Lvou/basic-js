const CustomError = require("../extensions/custom-error");

module.exports = function calculateHanoi(disksNumber, turnsSpeed) {
  let minTurns = findMinTurns(disksNumber)
  let minTime = Math.floor(minTurns * 3600 / turnsSpeed)

  return { turns: minTurns, seconds: minTime}
};

function findMinTurns (diskNumber) {
  if (diskNumber == 1) {
    return 1
  } else {
    return 2 * findMinTurns(diskNumber - 1) + 1
  }
}