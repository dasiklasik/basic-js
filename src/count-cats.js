const CustomError = require("../extensions/custom-error");

module.exports = function countCats(matrix) {
    let res = 0;
    let j = [];

    for (let i = 0; i < matrix.length; i++) {
        j = matrix[i];
        for (let r = 0; r < j.length; r++) {
            if (matrix[i][r] === '^^') {
                res += 1;
            }
        }
    }
    return res;
};