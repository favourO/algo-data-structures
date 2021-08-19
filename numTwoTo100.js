function printNos(n)
    {let twoA = [];
        //console.log(2)
        if(n > 0)
        {
            printNos(n - 10);
            twoA.push(n+2)
            //console.log(n + 2 + " ");
        }
        return twoA;
    }
     
printNos(100);