function ArraySum(arr) {
    if(arr.length === 0) return 0
 // Recursive case: Sum the first element and the sum of the rest of the array.
    return arr[0] + ArraySum(arr.slice(1))
}