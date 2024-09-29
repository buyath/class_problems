var scores = [34,32,24,41,34];
var total = 0;
for(var i =0; i<scores.length; i++){
    total +=scores[i];

}
var average =Math.floor(total / scores.length);
console.log(average);
