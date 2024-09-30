var sum1 = 0;
var sum2 = 0;

var arr = [1,2,3,4];
for(var i= 0; i<=(arr.length /2)-1; i++){
    sum1 = sum1 + arr[i];
}
for(var i = (arr.length/2); i<arr.length; i++){
    sum2 = sum2 + arr[i];
}
console.log(sum1,sum2);
var answer = sum1 * sum2;
console.log(answer);
