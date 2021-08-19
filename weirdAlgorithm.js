const weird = n => {
    if (n < 0) return n;
    console.log(n)
    while(n != 1) {
        n = n % 2 === 0 ? n / 2 : (n * 3) + 1;
        console.log(n);
    }
}

weird(138367);