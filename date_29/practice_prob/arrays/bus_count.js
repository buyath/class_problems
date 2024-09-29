var  students_per_route = [45, 55, 30, 60, 40];
var buses =0;
for(var i =0; i<students_per_route.length; i++){
    if(students_per_route[i] < 50){
        buses++;
    }
    
}
console.log(buses);