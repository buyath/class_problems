//In an array of string, return all the string which start with the letter 'a' (Case insensitive) for eg arr = ["apple", "Ali", "mango","Brush"] it should print apple, Ali
var Names = arr = ["apple", "Ali", "mango","Brush"];
for(var  i = 0; i<Names.length; i++){
    if (Names[i][0] == 'A' ||Names[i][0] == 'a'){
        console.log(Names[i]);
    } 
}
