var  products = [
    { name: "Laptop", price: 800 },
    { name: "Phone", price: 500 },
];
var sum = 0;
for(var i =0; i<products.length;i++){
    sum = sum + products[i].price;

}
console.log(sum);