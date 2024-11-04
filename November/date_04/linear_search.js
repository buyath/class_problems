function check(arr,x){
    for(var i = 0; i<arr.length; i++){
        if(arr[i] == x){
            return i;
        }   
    }
    return -1;
}
console.log(check([1,2,3,4,4,5],3));