function sum_even(num){
    let sumEven = 0;
    for(let i = 1; i<=num; i++){
        if(i % 2 == 0){
            sumEven +=i;
        }
        
    }
    return sumEven;
}
console.log(sum_even(10));