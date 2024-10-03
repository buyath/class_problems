var fruits = [4,6,2,3,1,1,3,5,7,8,4,3];
const fruitcount = fruits.reduce((accumlator,current) => {
    if (accumlator[current]){
        accumlator[current]++;
    }
    else{
        accumlator[current] = 1;

    }
    return accumlator
},{});
console.log(fruitcount);