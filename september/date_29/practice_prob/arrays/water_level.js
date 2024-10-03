var  water_levels = [30, 50, 20, 40, 60];
var lowest = water_levels[0];
for(var i =0; i<water_levels.length; i++){
    if(water_levels[i] < lowest){
        lowest = water_levels[i]
    }
}
console.log(lowest);