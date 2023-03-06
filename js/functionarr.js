let nums = [6,7]
function sum(x) {
    let sum = 0
    for (i = 0; i < x.length; i++){
        sum = sum + x[i]
    }
    return sum
}
console.log(sum(nums))