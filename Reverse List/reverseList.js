

const reverse = (nums) => {
    const revesed = []
    let i = nums.length
    while (i > 0) { 
        i--
        revesed.push(nums[i])
    }
    return revesed
}

console.log(reverse([]))