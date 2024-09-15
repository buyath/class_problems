const names = ["Alice", "Bob", "Andrew", "Alex", "George"];
const start = names.filter(x => x.startsWith('A'));
console.log(start.length)

function count(n){
    let num = n.filter(x => x.startsWith('A'));
    return num.length;
}
console.log(count(["Alice", "Bob", "Andrew", "Alex", "George"]))