const stoneGame = piles => {
    let i = 0, x, A = 0, L = 0, lenPiles = piles.length;
    
    for (i; i < lenPiles; i++) {
        x = Math.max(...piles);
        A = A + x
        piles.splice(piles.indexOf(x), 1)
        L = L + Math.max(...piles);
    }
    if (A > L) return true;
};
const nu = [5,3,4,5];
console.log(stoneGame(nu))
stoneGame(nu)