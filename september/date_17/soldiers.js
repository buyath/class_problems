var soldiers = [120, 300, 250, 180, 150];
var largest = soldiers[0];
for(var i =0; i<soldiers.length; i++){
    if (soldiers[i] > largest){
        largest = soldiers[i];
    }
}
console.log(largest);
// here we check highest soldiers in the array ;
