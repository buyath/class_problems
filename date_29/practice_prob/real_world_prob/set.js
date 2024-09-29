const set1 = [1, 2, 3, 4];
const set2 = [3, 4, 5, 6];
const unionSet = [...new Set([...set1, ...set2])];
console.log("Union of both sets:", unionSet);
