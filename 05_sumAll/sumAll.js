const sumAll = function(first, last) {

    if(!Number.isInteger(first) || !Number.isInteger(last)){
        return "ERROR";
    }

    if (first < 0 || last < 0) return "ERROR";

    let sum = first + last;

    if(first < last){
        for(let i = first+1 ; i<last; i++){
            sum += i;
        }
    } else{
        for(let i = last+1 ; i<first; i++){
            sum += i;
        } 
    }


    return sum;
    
};

// Do not edit below this line
module.exports = sumAll;
