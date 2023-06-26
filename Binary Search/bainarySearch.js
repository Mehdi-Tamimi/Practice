

const search = (nums, target) => {
    if (nums.includes(target)) {
        return nums.indexOf(target)
    }
    else {
        return -1
    }
}

console.log(search([12,3,4,6,8,45],45))