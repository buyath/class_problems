var departures = [10, 15, 7, 20, 5];
var lowest = departures[0];
for(var i =0; i<departures.length; i++){
    if(departures[i] > lowest){
        lowest = departures[i]
    }
}
console.log(lowest);
