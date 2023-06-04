
function containsDuplicate(numbers) {
    const object = {}
    var result = false
    for (let i of numbers) {
        if (!object[i]) {
            object[i] = 1
        
        }
        else {
            result = true
            break
        }
        
    }
    return result

}

console.log(containsDuplicate([1,2,3,,5,6,9,10,24,'gdh','kmdbstkm',4,5]))