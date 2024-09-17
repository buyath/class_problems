const fruits = ['apple', 'banana', 'orange', 'apple', 'banana', 'apple'];
var total = fruits.reduce((accum,n)=>{
    if (accum[n]){
        accum[n]++
    }
    else{
        accum[n] =1;
    }
    return accum;

},{});
console.log(total);

var num = ['1','2','3','4','5','1','2','3'];
var sum = num.reduce((sum, n) =>{
    if (sum[n]){
        sum[n] ++
    }
    else{
        sum[n] = 1;
    }
    return sum;


},{})

