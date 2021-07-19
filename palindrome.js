const palindrome = (word) => {
    const reg = /[\W_]/g;
    const lowRegStr = word.toLowerCase().replace(reg, '');
    const reverseStr = lowRegStr.split('').reverse().join('');
    return reverseStr === lowRegStr;
}

const checkWord = 'madam';

if (palindrome(checkWord)) {
    console.log(true);
}

palindrome(checkWord) ? console.log(true) : console.log(false);