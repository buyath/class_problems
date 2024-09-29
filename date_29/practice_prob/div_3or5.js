function divisible(num){
    if(num % 3 == 0){
        return "this is divisible by 3";
    }
    else if (num % 5 ==0){
        return "this is divisible by 5";
    }
    else if (num % 3  ==0 && num % 5 ==0){
        return  "Divisible by both 3 and 5";
    }
    else{
        return  "Not divisible by 3 or 5";

    }
}
console.log(divisible(23));
