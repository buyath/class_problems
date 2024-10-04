var date = 8;
var car_numbers = [2222, 2223, 2224];
var fine = [200, 300, 400];

if(date % 2 ==0){
    var odd_fine = 0;
    for(var i = 0; i<car_numbers.length; i++){
        if(car_numbers[i] % 2 !=0){
            odd_fine +=fine[i];
        }

    }
}
else{
    var even_fine = 0;
    for(var i = 0; i<car_numbers.length; i++){
        if(car_numbers[i] ==0){
            even_fine += even_fine[i];
        }
    }
}


console.log(odd_fine);
