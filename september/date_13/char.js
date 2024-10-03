function character(char,num){
    let str = "";
    for(var i = 1; i<=num; i++){
        str += char ;
    }
    return str;
}
console.log(character("*",8));