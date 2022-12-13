//================PROBLEMS==================//

// 9. Palindrome Number
var isPalindrome = function(x) {
    const xReverse = parseInt(x.toString().split('').reverse().join(''));
    return console.log(x === xReverse)
};

// isPalindrome(101);

var longestCommonPrefix = function(strs) {
    return strs[0][0]
};

console.log(longestCommonPrefix(["flower","flow","flight"]))





// var mergeTwoLists = function(list1, list2) {
//     const all = list1.concat(list2)
//     const sort = all.sort((a,b) => a-b)
//     return console.log(sort)
// };

// mergeTwoLists([1, 3], [1, 6])