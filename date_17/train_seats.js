var seats =[1, 0, 1, 1, 0, 0, 1, 0];
let j = 0;
for(var i =0; i<seats.length; i++){
    if(seats[i] == 1){
        j++;
        

    }
}
console.log(j)

//using filter method count seats
var seats =[1, 0, 1, 1, 0, 0, 1, 0];
var result = seats.filter(x => x > 0);
console.log(result.length)
