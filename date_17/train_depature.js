var train_depart =  [10, 15, 7, 20, 5];
var earlier = train_depart[0];
for(var i =0; i<train_depart; i++){
    if (earlier < train_depart[i]){
        earlier = train_depart[i];
        
    }

}
console.log(earlier)