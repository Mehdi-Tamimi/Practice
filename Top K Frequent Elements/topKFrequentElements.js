
function counter() {
    string = string.split('')
    let result = string.reduce((prev,  curr) => {
        if (!prev[curr]) {
            prev[curr] = 1
        }
        else {
            prev[curr] += 1
        }
        return prev
    },{})
    return result
     
    
}

function topFrequent(elements,k) {
    const topFrequents = []
    const count = elements.reduce((prev,  curr) => {
        if (!prev[curr]) {
            prev[curr] = 1
        }
        else {
            prev[curr] += 1
        }
        return prev
    },{})
    
    while (k > 0) {
        let top
        top = undefined
        let topKey
        topKey = undefined
        for (const key in count) {
            if ((top == undefined) || (count[key] > top)) {
                top = count[key]
                topKey = key

            }
        }
        topFrequents.push(topKey)
        delete count[topKey]
        k -= 1
    }
    return topFrequents
    

}
