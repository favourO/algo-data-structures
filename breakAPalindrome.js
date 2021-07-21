/**
 * @param {string} palindrome
 * @return {string}
 * @param isSameWord
 */

const isPalindrome = require('./isPalindrome');
const palindrome = "abccba";
let left = 0, right = palindrome.length - 1, i=0;
var breakPalindrome = function(palindrome) {
    let checkWord = palindrome;
    if (checkWord.length === 1){
        return palindrome = '';
    }

    if (isSameWord(palindrome, right)){
        const ascii = palindrome.charCodeAt(0);
        const diff = ascii + 1;
        const changeChar = String.fromCharCode(diff)
        palindrome = palindrome.replace(palindrome.charAt(right), changeChar);
        return palindrome;
    }

    if(isPalindrome(palindrome)) {           
        while(left <= right) {
            if (palindrome[left] === palindrome[left+1]){
                left++;
                console.log(palindrome[left])
                break;
            }
            // else {
                
                
            // }  
        }
        //return palindrome[1];
      //return palindrome = palindrome.replace(palindrome.charAt(left+1), palindrome.charAt(left));;  
    }
    
};

// const isSameWord = (word, len) => {
//     let sameWord;
//     for (i = 0; i <= len; i++){
//         if (word[i] === word[i+1]) {
//             sameWord =+ word[i];
//         }else {
//             break;
//         }
//     }
//     return true;
// }

const checkWord = 'aaca';

// let len = checkWord.length -1;
// //var n = isSameWord(checkWord, len)
// len = checkWord.charCodeAt(checkWord[0]);
// len=len +1;
//console.log(breakPalindrome(palindrome));
//console.log(checkWord.charAt(2));