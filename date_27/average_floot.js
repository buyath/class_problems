var float =[12.3,43.2,34.1,55.9,27.3];
var result = float.reduce((sum,n) => sum +n);
var average =Math.floor( result / float.length);
console.log(average);



