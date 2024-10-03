var arr = [1,2,3,4,5,6];
var min = arr[0];
for(var i =0; i<arr.length; i++){
    if(arr[i] < min){
        min = arr[i]

    
    }
}
var max = arr[0];
for(var j =0; j<arr.length; j++){
    if (arr[j] > max){
        max = arr[j];
    }

}
console.log(min);
console.log(max);
