const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
    if (typeof members !== 'object' || members === null) {
        return false;
    }
    let res = '';
    let part = '';

    for (let i = 0; i < members.length; i++) {
        if (typeof members[i] === 'string') {
            part = members[i].toString();
            part = part.replace(/\s+/g, '');
            res += part[0].toUpperCase();
        }

    }
    return res.split('').sort().join('');
};