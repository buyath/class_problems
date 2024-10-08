function prime(num){
    if (num < 0){
        return "not a prime"
    }
    if (num == 2){
        return "prime number";
    }
    for(let i =2; i<=num; i++){
        if (num % i == 0){
            return "not a prime";
            break;
        }
        return "prime number";
    }

}
console.log(prime(5))

