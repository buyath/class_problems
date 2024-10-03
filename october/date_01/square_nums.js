function sqaure_num(user){
    var arr = [1,2,3,4,5,6,7];
    var user_square = user ** 2;
    for(var i =0; i<arr.length; i++){
        if (user_square == arr[i]){
            return i;
        }
        else{
            return -1;
        }
    }

}
console.log(sqaure_num(2));



