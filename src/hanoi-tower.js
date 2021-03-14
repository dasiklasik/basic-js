const CustomError = require("../extensions/custom-error");

module.exports = function calculateHanoi(disksNumber, turnsSpeed) {
    let turnsNumber = (2 ** disksNumber) - 1;
    let turnsInOneSecond = turnsSpeed / 3600;

    let secondsNumber = turnsNumber / turnsInOneSecond;
    secondsNumber = Math.floor(secondsNumber);
    let answer = new Object();

    return answer = {
        turns: turnsNumber,
        seconds: secondsNumber
    };

};