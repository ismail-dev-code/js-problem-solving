//1: Reverse a String
function reverseString(str) {
  return str.split("").reverse().join("");
}
// console.log(reverseString("hello"));

//2: Count Vowels in a String
function countVowels(str) {
  let vowels = "aeiouAEIOU";
  let count = 0;
  for (let char of str) {
    if (vowels.includes(char)) count++;
  }
  return count;
}
// console.log(countVowels("ismail"));

//3: Check for Palindrome
function isPalindrome(str) {
  let reversed = str.split("").reverse().join("");
  return str === reversed;
}
// console.log(isPalindrome("madam"));
// console.log(isPalindrome("hello"));

//4: Find the Maximum Number
function findMax(arr) {
  let max = arr[0];
  for (let num of arr) {
    if (num > max) max = num;
  }
  return max;
}
// console.log(findMax([5, 1, 19, 3]));

//5: Remove Duplicates from an array
function removeDuplicates(arr) {
  let result = [];

  for (let i = 0; i < arr.length; i++) {
    if (result.includes(arr[i])) {
    } else {
      result.push(arr[i]);
    }
  }

  return result;
}

// console.log(removeDuplicates([1, 2, 2, 3, 4, 4]));

//6: Sum of All Numbers in an Array
function sumArray(arr) {
  let sum = 0;
  for (let num of arr) {
    sum += num;
  }
  return sum;
}
// console.log(sumArray([1, 2, 3, 4]));

//7: Find Even Numbers in an Array
function findEvenNumbers(arr) {
  return arr.filter((num) => num % 2 === 0);
}
// console.log(findEvenNumbers([1, 2, 3, 4, 5, 6]));

//8: Capitalize First Letter of Each Word
function capitalizeWords(str) {
  return str
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}
// console.log(capitalizeWords("ismail hossain"));

// 9: Find the Factorial of a Number
function factorial(n) {
  let result = 1;
  for (let i = 1; i <= n; i++) {
    result *= i;
  }
  return result;
}
// console.log(factorial(5));

// 10: PingPong Challenge
function pingPong() {
  for (let i = 1; i <= 20; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      console.log("PingPong");
    } else if (i % 3 === 0) {
      console.log("Ping");
    } else if (i % 5 === 0) {
      console.log("Pong");
    } else {
      console.log(i);
    }
  }
}
pingPong();
