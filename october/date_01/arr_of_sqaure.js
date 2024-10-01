function square_num(arr,user){
    let user_square = user ** 2;
    for(let i =0; i<arr.length; i++){
        if (user_square == arr[i]){
            return i;
        }
        else{
            return -1;
        }
    }

}
console.log(square_num([1,2,3,4,4,5,6],2));