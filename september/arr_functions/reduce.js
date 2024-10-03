var arr = [1,2,3,4,5,6,7];
var final =arr.reduce((accum,toa) => toa + accum, 1000);
console.log(final);


var arr2= [['a','b','c'],['c','d','f'],['d','f','g']]
console.log(arr2.flat());