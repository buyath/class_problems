var lastdigit = 0;
var num = 153;
var dum = num;
var revers_num = 0
var arm = 0;
while(num > 0){
    lastdigit = num % 10;
    arm = arm + (lastdigit * lastdigit * lastdigit);
    num = Math.floor(num/10);
}
if (arm == dum){
    console.log("this is armstrong number ");
}
else{
    console.log("this is not armstrong number");
}
