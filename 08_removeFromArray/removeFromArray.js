const removeFromArray = function(arr, ...args) {

    return arr.filter(function(arrItem) {
        if (!args.includes(arrItem))
            return true
    })
};

// Do not edit below this line
module.exports = removeFromArray;
