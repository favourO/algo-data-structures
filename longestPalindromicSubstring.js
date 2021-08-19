//needs review
const longestPalindrome = (word) => {
    if (word === null || word.length < 1){
        return "";
    }
    let start = 0, end = 0;

    for (let i = 0; i < word.length - 1; i++) {
        const len1 = expandAroundCenter(word, i, i);
        const len2 = expandAroundCenter(word, i, i + 1);

        const len = Math.max(len1, len2);
        if (len > end - start) {
            start = i - (len - 1) / 2;
            end = i + len / 2;
        }
    }
    return word.substring(start, end + 1);
}


const expandAroundCenter = (word, left, right) => {
    let L = left, R = right;

    while (L >= 0 && R < word.length && word.charAt(L) === word.charAt(R)) {
        L--;
        R++;
    }
    return R-L-1;
}

const checkWord = "cbbd";
console.log(longestPalindrome(checkWord));