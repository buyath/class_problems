function total(money){
    
    var total_money =money.reduce((sum,n) => sum + n);
    return total_money;
}
console.log(total([2000,200,100,500]));