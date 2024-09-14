var arr= [10,3,23,23,42,3,542,23,2];
var total = arr.filter(x => x < 10)
console.log(total)


var num  = [ 10,20,30,40,50,60,70,80,90,100];

var result = num.filter(change)
function change(n){
    return n < 100;

}
console.log(result);