let days_until_festival = [30, 15, 45, 10, 25];
var lowest = days_until_festival[0];
for(var i =0; i<days_until_festival.length; i++){
    if(days_until_festival[i] < lowest){
        lowest = days_until_festival[i]
    }
}
console.log(lowest);