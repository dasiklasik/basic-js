const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
    if (typeof members !== 'object' || members === null) {

    }
    let array = arr;
    let res = [];
    let part = [];


    for (let i = 0; i < array.length; i++) {
        if (array[i] === '--discard-next') {
            if (i !== array.length - 1) {
                array.splice(i + 1, 1);
                array.splice(i, 1);

            }
        } else if (array[i] === '--discard-prev') {
            if (i !== 0) {
                res.pop();
                array.splice(i, 1);
                i -= 1;
            }
        } else if (array[i] === '--double-next') {
            if (i !== array.length - 1) {
                res.push(array[i + 1]);
                res.push(array[i + 1]);
                array.splice(i, 1);

            }
        } else if (array[i] === '--double-prev') {
            if (i !== 0) {
                res.push(array[i - 1]);
                array.splice(i, 1);
                i -= 1;
            }
        } else {
            res.push(array[i]);
        }
    }
    return res;
};