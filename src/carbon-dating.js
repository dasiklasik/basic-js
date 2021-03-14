const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

module.exports = function dateSample(sampleActivity) {
    if (sampleActivity === Number) {
        let k = (0.693 / HALF_LIFE_PERIOD);
        let A = Math.log(MODERN_ACTIVITY / sampleActivity);
        return Math.ceil(A / k);
    } else {
        return false;
    }

};