function even_number(nums){
    var count = 0;
    for(var i =0; i<nums.length; i++){
        if (nums[i] % 2 ==0){
            count++;
        }
    }
    return count;
}
console.log(even_number([31,23,12,10,8,3,2,2]));