function greaterthan_fifteen(arr){
    var emp = [];
    var num = 0; 
    for(var i = 0; i<arr.length; i++){
        if (arr[i] < 15){
            emp[num] = arr[i];
            num = num + 1;
        }  
    }
    if (emp.length == 0){
        return  "No element less than 15"
    }
    else{
        return emp
    }
};
console.log(greaterthan_fifteen([15, 15, 15, 25, 30]));
