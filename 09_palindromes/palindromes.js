const palindromes = function (str) {
    let filtered = str.toLowerCase().replace(/[^a-z0-9]/g, "");
    //everything is now lowercase and unwanted characters are removed
    var len = filtered.length;
    for (let i = 0; i < len/2; i++){
        if (filtered[i]!==filtered[len-1-i]){
            return false
        }
    }
    return true;
};

const palindromes2 = function (str) {
    let re = /[^a-z0-9]/g;
    let filtered = str.toLowerCase().replace(re, '');
    let reversed = filtered.split('').reverse().join('');
    return filtered == reversed;
}

// Do not edit below this line
module.exports = palindromes;
