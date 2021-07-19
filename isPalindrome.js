const isPalindrome = (word) => {
    const reg = /[\W_]/g;
    const lowRegStr = word.toLowerCase().replace(reg, '');
    const reverseStr = lowRegStr.split('').reverse().join('');
    return reverseStr === lowRegStr;
}

const checkWord = 'madam'
isPalindrome(checkWord) ? console.log(true) : console.log(false);

module.exports = isPalindrome;