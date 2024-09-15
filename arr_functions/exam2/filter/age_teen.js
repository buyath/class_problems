const people = [
    { name: 'John', age: 17 },
    { name: 'Jane', age: 21 },
    { name: 'Jack', age: 15 },
    { name: 'Jill', age: 19 }
];
const total = people.filter(x => x.age > 18);
console.log(total);
