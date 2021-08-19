<<<<<<< HEAD
// const A = [0, 2, 3, 4, 1, 1, 1, 3, 1];

// function solution(A) {
//     // write your code in JavaScript (Node.js 8.9.4)
    
//     // write your code in JavaScript (Node.js 8.9.4)
//     let x = A[4], a1, i, a2, a3, a4, a5, diff, mi, mx, a6, a7, a8, a9, A1, A2, A3, A4 = [], sum1, sum2, sum3;

//     A1 = A.slice(0,3)
//     A2 = A.slice(3,6)
//     A3 = A.slice(6)
//     sum1 = A1.reduce((a, b) => a+b, 0)
//     sum2 = A2.reduce((a, b) => a+b, 0);
//     sum3 = A3.reduce((a, b) => a+b, 0)

//     A4 = [sum1, sum2, sum3]
//     mx = Math.max(sum1, sum2, sum3);
//     mi = Math.min(sum1, sum2, sum3);
//     diff = mx - mi

//     for (i = 0; i < A4)

//     if (mx != sum)
//     // a1 = x + a;
//     // a2 = x - b - a;
//     // a3 = x + b;
//     // a4 = x - a + b;
//     // a5 = x;
//     // a6 = x + a - b;
//     // a7 = x - b;
//     // a8 = x + a + b;
//     // a9 = x - a;

//     //A1.push(a1, a2, a3, a4, a5, a6, a7, a8, a9);

//     return A3;

// }
// const n = A.reduce((a, b) => a + b, 0);
// console.log(solution(A));


// try {
//     const n = 1
// const m = n+ z;
// console.log(m)
// } catch (error) {
//     console.log(error.name)
// }

// const user = {
//     hello: 'Welcome turing',
//     sayWelcome() {
//         console.log(this.hello);
//     }
// }
// setTimeout(user.sayWelcome(), 1000)

const duplicateNames = names => {
    let unique = [];
    for (const element of names) {
        if (unique.indexOf(element) == -1) {
            unique.push(element);
        }
    } 
    return unique;
}

let checknames = ["twitter", "linkedIn", "devto", "twitter", "instagram", "devto", "al", "siam", "alsiam", "alsiamworld"];

console.log(duplicateNames(checknames));
=======
const nu = [5,3,4,5];

//const n = nu.filter(e  => e < 5).map(e => e*5)

const n = nu.reduce((a,b) => a + b)
console.log(n)
>>>>>>> 9eb5430549824e358390419e0494863a2f10c346
