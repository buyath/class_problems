function dailyIncrease(init,days){
    let result = init;
    for ( let i = 1; i < days; i++){
        result+=2;
    }
    return result + "%";
}
console.log(dailyIncrease(6,10));

let n = 5; // height of the triangle

for (let i = 1; i <= n; i++) {
  let row = " ";
  for (let j = 1; j <= i; j++) {
    row += "* ";
  }
  console.log(row);
}