var number = [10,22,13,30,40,12,42,10];
var count = 0;
for(var i =0; i<number.length; i++){
    if(number[i] % 5 ==0){
        count++;
    }
}
console.log(count);