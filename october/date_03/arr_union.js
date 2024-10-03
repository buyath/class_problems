var arr1 = [1,2,3,4,5];
var arr2 = [1,2,3];
for(var i =0; i<arr2.length; i++){
    arr1.push(arr2[i]);
}
var new_arr =new Set(arr1)
console.log(new_arr.size);

