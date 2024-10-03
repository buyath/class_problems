var expenses = [
    { rent: 1000, groceries: 500, utilities: 200 },
    { rent: 800, groceries: 400, utilities: 150 },
];
var marks = [];
for(var i =0; i<expenses.length; i++){
    var total = expenses[i].rent + expenses[i].groceries + expenses[i].utilities;
    marks.push(total);

}
console.log(marks);

