// Problem 1: Reverse a String
function reverseString(str) {
  return str.split("").reverse().join("");
}
// console.log(reverseString("hello")); 

// Problem 2: Count Vowels in a String
function countVowels(str) {
  let vowels = "aeiouAEIOU";
  let count = 0;
  for (let char of str) {
    if (vowels.includes(char)) count++;
  }
  return count;
}
console.log(countVowels("ismail"));
