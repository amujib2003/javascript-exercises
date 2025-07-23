const sumAll = function(firstNum, lastNum) {

if (typeof firstNum !== "number" || typeof lastNum !== "number") {
    return "ERROR";
}

if (!Number.isInteger(firstNum) || !Number.isInteger(lastNum)) {
    return "ERROR";
}

if (firstNum < 0 || lastNum < 0) {
    return "ERROR";
}

if (firstNum > lastNum) {
    [firstNum, lastNum] = [lastNum, firstNum];
}

let finalSum = 0;
for (let i = firstNum; i <= lastNum; i++) {
    finalSum += i;
}

return finalSum;

};

// Do not edit below this line
module.exports = sumAll;
