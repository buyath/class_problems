const numbers = [175,50,25];
const total = numbers.reduce(myfunc);
function myfunc(sum,n){
    return sum - n 

}
console.log(total)