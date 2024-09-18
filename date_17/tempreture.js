//we can solve this problem for,while,reduce;
var temperatures =[75, 80, 72, 85, 90];
var highest = temperatures.filter(x => x > 80)
console.log(highest);


function highest_temp(temp){
    var temp2 ="";
    for(var i =0; i<temp.length; i++){
        if (temp[i] > 80){
            temp2 +=temp[i] + " ";
            return temp2;
        }
    }

}
console.log(highest_temp([75, 80, 72, 85, 90]))

//this code has some error !