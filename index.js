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
// console.log(countVowels("ismail"));

// Problem 3: Check for Palindrome
function isPalindrome(str) {
  let reversed = str.split("").reverse().join("");
  return str === reversed;
}
// console.log(isPalindrome("madam"));
// console.log(isPalindrome("hello")); 

// Problem 4: Find the Maximum Number
function findMax(arr) {
  let max = arr[0];
  for (let num of arr) {
    if (num > max) max = num;
  }
  return max;
}
// console.log(findMax([5, 1, 19, 3]));

// Problem 5: Remove Duplicates from an Array
function removeDuplicates(arr) {
  return [...new Set(arr)];
}
console.log(removeDuplicates([1, 2, 2, 3, 4, 4]));


// Problem 6: Sum of All Numbers in an Array
function sumArray(arr) {
  let sum = 0;
  for (let num of arr) {
    sum += num;
  }
  return sum;
}
// console.log(sumArray([1, 2, 3, 4])); 
