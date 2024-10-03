function times(num){
    var dump = ""
    for(var i = 1; i<=num; i++){
        if( i== num){
            dump +=i;
        }
        else{
            dump += num + " ";
        }
    }
    return dump;
}
console.log(times(5));
