

function twoSum(numbers,target) {
    const answers = []
    const checked = []
    const list = []
    numbers = numbers.filter((value) => {
        return value < target
    })
    numbers = numbers.filter((value) => {

        if (!(list.includes(value))) {
            list.push(value)
            return value
        } 
    })
    for (const i of numbers) {
        if (!checked.includes(i)) {
            checked.push(i)
            if (numbers.includes(target-i)) {
                checked.push(target-i)
                answers.push([numbers.indexOf(i),numbers.indexOf(target-i)])
            }
        }
        
    }
    return answers
    
}
console.log(twoSum([1,3,5,6,3,6,8,9,7,7],9))