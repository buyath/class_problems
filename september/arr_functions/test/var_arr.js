function check(num){
    var empty = []
    var n = num.length;
    for(var i =0; i<num.length; i++){
        if(num[i] == num[n-i]){
            empty.push(arr[i],arr[j])
            return empty;

        }
        else{
            return -1;
        }

    }
   
}
console.log(check([1,2,2,3,3]));