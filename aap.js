//__________ Q-01 ________________________//

// function getSum(arr) {
//   let sum = 0;
//   for (let num of arr) {
//     sum += num;
//   }
//   return sum;
// }


//__________Q-02 Reverse a String ________________//

// function reverseString(str) {
//   return str.split("").reverse().join("");
// }
// console.log(reverseString("hello"));

//__________Q-03. Find Largest Number in Array ______________//

// function findLargest(arr) {
//   let largest = arr[0];
//   for (let num of arr) {
//     if (num > largest) {
//       largest = num;
//     }
//   }
//   return largest;
// }
// console.log(findLargest("5"))

//_____________Q-04. Count Vowels in a String _____________//

// function countVowels(str) {
//   var count = 0;
//   var vowels = "aeiouAEIOU";
//   for (var char of str) {
//     if (vowels.includes(char)) {
//       count++;
//     }
//   }
//   return count;
// }
// console.log(countVowels("aeiou"))

//______________Q-05. Remove Duplicates from Array_____________//

// function removeDuplicates(arr) {
//   var unique = [];
//   for (let i = 0; i < arr.length; i++) {
//     if (!unique.includes(arr[i])) {
//       unique.push(arr[i]);
//     }
//   }
//   return unique;
// }
// console.log(removeDuplicates("arry.lenth"));

//________________Q-06. Capitalize First Letter of Each Word______________//

// function capitalizeWords(str) {
//   var words = str.split(" ");
//   var capitalized = words.map(function(word) {
//     return word.charAt(0).toUpperCase() + word.slice(1);
//   });
//   return capitalized.join(" ");
// }
// console.log(capitalizeWords("word.chart"));

