var names= ["Geek", "Geeks", "Geeksfor", "GeeksforGeek", "GeeksforGeeks"]
var largest = names[0];
for(var i =0; i<names.length; i++){
    if(names[i].length > largest.length){
        largest = names[i];
    }
}
console.log(largest);