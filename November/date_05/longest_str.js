//Given a array of string return the String which has the maximum length. arr = ["Ram", "Abraham", "Peter"] output is Abraham

var  arr = ["Ram", "Abraham", "Peter"];
var initial = arr[0];
for(var i = 0; i<arr.length; i++){
    if (arr[i].length > initial.length){
        initial = arr[i];
    }
}
console.log(initial);