const nu = [5,3,4,5];

//const n = nu.filter(e  => e < 5).map(e => e*5)

const n = nu.reduce((a,b) => a + b)
console.log(n)