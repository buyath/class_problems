const products = [
    { name: "Apple", price: 10, quantity: 2 },
    { name: "Banana", price: 5, quantity: 5 },
    { name: "Mango", price: 15, quantity: 3 }
]
// let total = products.reduce(num , n => num + n).map(x => x.price * x.quantity);
// console.log(total);
const words = ["hello", "world", "javascript"];
const t = words.map(x =>x.toUpperCase());
console.log(t)