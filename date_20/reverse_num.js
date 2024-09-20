var num= 1234;
var revers_num = 0;
var lastdigit = 0;
while(num > 0){
    lastdigit = num % 10;
    num = Math.floor(num / 10);
    revers_num = (revers_num * 10) + lastdigit;
}
console.log(revers_num);