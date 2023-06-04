

function arrayProduct(numbers) {
    function multiple(prev,curr,index) {
        let product = 1
        for (let item in numbers) {
            if (item != index) {
                product *= numbers[item]
            
            }
        }
        
        prev[index] = product
        return prev
    }
    
    return numbers.reduce(multiple,[])

}

console.log(arrayProduct([-1,1,0,-3,3]))