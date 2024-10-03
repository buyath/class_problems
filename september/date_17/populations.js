var populations = [50, 60, 70, 80, 90];
var n = populations.length;
let total = 0;
for(var i =0; i<n; i++){
    total += populations[i];
}
var average = Math.floor(total / n);
console.log(average);

//NOTE :  if you know  maths mean you can solve this problem easily ;
