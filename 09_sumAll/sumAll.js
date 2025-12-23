const sumAll = function(numberOne, numberTwo) {
    let sum = 0
    let min = 0
    let max = 0

    if (!Number.isInteger(numberOne) || !Number.isInteger(numberTwo))
        return "ERROR"

    if (numberOne < 0 || numberTwo < 0)
        return "ERROR"

    if (numberOne > numberTwo) {
        max = numberOne
        min = numberTwo
    } else if (numberOne < numberTwo) {
        max = numberTwo
        min = numberOne
    } else {
        return numberOne
    }

        for (let i = min; i <= max; i++)
            sum += i

    return sum;
};

// Do not edit below this line
module.exports = sumAll;
