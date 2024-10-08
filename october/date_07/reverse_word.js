var str = "i.like.this.program.very.much";
var str = str.split('.');
var str2 ="";
for(var i =1; i<=str.length; i++){
    if(i == str.length){
        str2 = str2 + str[str.length-i];
    }
    else{
        str2 = str2 + str[str.length-i] +".";
    }
}
console.log(str2);s