/**
 * @param {string} palindrome
 * @return {string}
 */

const isPalindrome = require('./isPalindrome');

var breakPalindrome = function(palindrome) {
    let checkWord = palindrome;
    if (checkWord.length === 1){
        return palindrome = '';
    }

    if(isPalindrome(palindrome)) {
        let left = 0, right = palindrome.length - 1, i=0;
           
        while(left <= right) {
            if (palindrome[left] === palindrome[left+1]){
                left++;
            }
            else {
                palindrome = palindrome.replace(palindrome.charAt(left+1), palindrome.charAt(left));
                break;
            }  
        }
      return palindrome;  
    }
    
};

const checkWord = 'madam';
console.log(breakPalindrome(checkWord));