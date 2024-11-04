var arr = [4, 5, 1, 2, 5, 3];
var max = arr[0];
var index ;
for(var i = 0; i<arr.length; i++){
    if (arr[i] > max){
        max = arr[i]
        index = i;
}
};
console.log(index);