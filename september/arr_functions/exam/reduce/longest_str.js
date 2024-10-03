// var str = ["thayub","naveen","buyath","one","two","venkat"];
// var longest = str.reduce((total, n) => total > n);
// console.log(longest);

const words = ['apple', 'banana', 'cherry', 'watermelon'];

const longestWord = words.reduce((longest, currentWord) => {
  return currentWord.length > longest.length ? currentWord : longest;
}, '');

console.log(longestWord); 