var seats = [0, 0, 1, 1, 0, 0, 1, 0];
var availble = 0
for(var i = 0;i<seats.length; i++){
    if (seats[i] == 0){
        availble++;
    }
}
console.log(availble);
