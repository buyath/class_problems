var n = 6;
var  i =1;
while(i <=n){
    let pow = 5 ** i;
    if (pow  > 10000){
        console.log(pow)
    }
    i++;

}
var summ = "Freshworks, Global Infocity, Perungudi, Chennai - 600096";
var result = summ.split(", ");
for(var i = 0; i<result.length; i++){
    console.log(result[i]);
}


var sum = [1,2,3,4,5]
var total = sum.reduce((sum,n) =>sum + n);
console.log(total);

var power =1;
var result = 1;
while(result < 10000){
    result = 2 *
    power ++;
}
console.log(result);