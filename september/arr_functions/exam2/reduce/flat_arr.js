const arrays = [[1, 2], [3, 4], [5, 6]];
var total = arrays.reduce((sum , n) => {
    return sum.concat(n);
})
console.log(total)