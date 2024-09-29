let amount = [{ principal : 10000, rateOfInterest : 5, noOfYears: 4},
{ principal : 15000, rateOfInterest : 4, noOfYears: 3},
];
var intrest =[];
for(var i =0; i<amount.length; i++){
    let res = amount[i].principal * amount[i].rateOfInterest * amount[i].noOfYears / 100;
    intrest.push(res);

}
console.log(intrest);