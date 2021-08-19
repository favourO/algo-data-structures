const maxNum = num => {
    num.sort((a,b) => a-b);

    return num[num.length-1]
}

let checkNumber = [234, 34, 24, 242, 42];
console.log(maxNum(checkNumber));