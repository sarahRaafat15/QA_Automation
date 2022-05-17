/**
 * function to verify of list of numbers(as numeric values or strings) are correctly sorted 
 * list : the list of numbers to be checked for example: ['1','2','3'] or [1,2,3]
 * order: a parameter passed as 'asc' or 'desc'
 */
exports.verifySortedNumericList = function (list, order) {
    let sortedResults = Array.from(list) //deep copy
    if (order == 'asc')
        sortedResults.sort(function (a, b) {
            return a - b;
        })
    else
        sortedResults.sort(function (a, b) {
            return b - a;
        })
    return (JSON.stringify(list) == JSON.stringify(sortedResults))
}