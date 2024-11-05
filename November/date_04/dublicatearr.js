function check_dublicate(arr){
    var num = 0;
    var emp = [];
    for(var i  = 0; i<arr.length; i++){
        for(var j = 0; j<i; j++){
            if (arr[i] == arr[j]){
                emp[num] = arr[i];
                num++;
                
            }
        }
    }   
    if (emp){
        return emp.sort();
    }
    else{
        return [];
    }
}
console.log(check_dublicate([15,13, 13, 3, 2, 1, 0, 16,4, 12, 14, 5, 11, 6, 16, 7, 9, 3, 10, 2 ,14, 8]));

function check_duplicate(arr) {
    let duplicates = new Set();
    let seen = new Set();

    for (let i = 0; i < arr.length; i++) {
        if (seen.has(arr[i])) {
            duplicates.add(arr[i]);
        } else {
            seen.add(arr[i]);
        }
    }

    // Convert the Set of duplicates to an array and sort it
    return Array.from(duplicates).sort((a, b) => a - b);
}

console.log(check_duplicate([15, 13, 13, 3, 2, 1, 0, 16, 4, 12, 14, 5, 11, 6, 16, 7, 9, 3, 10, 2, 14, 8]));


