const repeatString = function(word, repeats) {
    if (repeats < 0){
        return 'ERROR'
    }
    let returnString = ""
    for(let i = 1; i <= repeats; i++){
        returnString += word;
    }
    return returnString;
};

// Do not edit below this line
module.exports = repeatString;
