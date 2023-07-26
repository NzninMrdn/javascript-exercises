const leapYears = function(num) {

    let isLeap = false;

    if(num % 4 === 0 && (num % 100 !== 0 || num % 400 === 0)){
        isLeap =  true;
    }

    return isLeap;
};

// Do not edit below this line
module.exports = leapYears;
