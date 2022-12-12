//================PROBLEMS==================//

// 9. Palindrome Number
var isPalindrome = function(x) {
    const xReverse = parseInt(x.toString().split('').reverse().join(''));
    return console.log(x === xReverse)
};

isPalindrome(101);
