function sumof_five(num){
    let sum   = 0;
    for(var i = 1; i<=num; i++){
        sum += (i * 5);

    } 
    return sum;

}
console.log(sumof_five(5));