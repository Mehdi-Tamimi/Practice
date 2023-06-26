
const Open = ['(','[','{']
const Close = [')',']','}']

function valid(s) {
    let index = 0
    let i = undefined

    while ( index < s.length) {
        let element = s[index]
        
        console.log(index)
        if (Open.includes(element)) {
            
            i = index
            console.log(i)
            O = Open.indexOf(element)
            
        }
        if ((index === i+1) && (Close.includes(element)) && (Close.indexOf(element) === O)) {
            
            s = s.substring(0, index - 1) + s.substring(index+1,s.length)
            console.log(s)
            index = -1    
            i = undefined
        }
        index++
        
    }
    return s
    
    
}
const isValid = (s) => {
    if (s.length%2 != 0) {
        return false
     }
     else {
        s = valid(s)
        if (s) {
            return false
        }
        return true

     }
     
}

    console.log(isValid('()))'))
