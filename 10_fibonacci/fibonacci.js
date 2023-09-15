const fibonacci = function(num) {
    if (num < 0){
        return "OOPS";
    }
    let curr = 0;
    let next = 1;
    let total = curr + next;
    let counter = 3;
    while (counter <= num){
        curr = next;
        next = total;
        total = curr + next;
        counter++
    }
    return total;
};


// Do not edit below this line
module.exports = fibonacci;
