const sumAll = function(start, end) {
    if (typeof start != "number" || typeof end != "number"){
        return("ERROR");
    }
    if (start < 0 || end < 0){
        return("ERROR");
    }
    if (start > end){
        let oldStart = start;
        start = end;
        end = oldStart;

    }
    let count = 0;
    for(let i = start; i <= end; i++){
        count += i;
    }
    return count;
};

// Do not edit below this line
module.exports = sumAll;
