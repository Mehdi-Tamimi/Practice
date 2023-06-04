
function counter(prev,curr) {
    if (!prev[curr]) {
        prev[curr] = 1
    }
    else {
        prev[curr] += 1
    }
    return prev
}
function filter(value) {


}
function isAnagram(str1,str2) {
    const array1 = str1.split('')
    const array2 = str2.split('')
    const counter1 = array1.reduce(counter,{})
    const counter2 = array2.reduce(counter,{})
    if (array1.length != array2.length) {
        return 'not Anagram'
    }
    for (const i of array2) {
        if (!str1.match(i)) {
            return 'not Anagram'
        }
    }
    for (const i of array1) {
        if (!str2.match(i)) {
            return 'not Anagram'
        }
    }
    for (const i of array1) {
        if (!(counter1[i]=counter2[i])) {
            return 'not Anagram'
        }
    }
    return 'anagram'

}
function Anagrams(strings) {
    const anagrams =[]
    const checked = []
    for (const i of strings) {
        if (!checked.includes(i)) {
            checked.push(i)
            const answer = [i]

            for (const str of strings) {
                if ((str != i) && (!checked.includes(str)) && (isAnagram(i,str)==='anagram')) {
                    checked.push(str)
                    answer.push(str)
                }
                
            }
            if (answer.length > 1) {
                anagrams.push(answer)
            }
        }
    }
    return anagrams
}
 console.log(Anagrams(["eat","tea","tan","ate","nat","bat"]))