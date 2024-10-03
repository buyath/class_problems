var num = 1234;
var count = 0;
while(num > 0){
    sum = num + num % 10;
    count ++;
    num = Math.floor(num / 10);
    

}
console.log(count);