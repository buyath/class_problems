function multiple(a, n){
    let str = "";
    for(let i = 11; i<=22; i++){
        if ( i % 5 == 0 ){
            str = str + i + " "
        }
       
    }
    return str;
}
console.log(multiple(10,30));