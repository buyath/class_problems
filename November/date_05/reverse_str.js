//Reverse a string without using library functions.
var Name ="Thayub";
var reverse  = "";
for(var i = 1; i<=Name.length; i++){
    reverse  = reverse  + Name[Name.length -i];
}
console.log(reverse);