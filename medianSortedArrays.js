const merge = (nums1, nums2) => {
    let comA = [], A = [], l1 = nums1.length, l2 = nums2.length, i = 0, j = 0;

    
    if (l1 < 1 && l2 < 1){
        return this;
    }
    while (i < l1 && j < l2) {
        if (nums1[i] < nums2[j]){
            comA.push(nums1.shift());
            i++;
        }
          
        else {
            comA.push(nums2.shift());
            j++;
        }
    }

    comA = comA.concat(nums1.slice().concat(nums2))
    comA.sort((a, b) => {
        return a - b;
    })

    //return comA
    if (comA.length % 2 === 0) {
        //find the two numbers at the middle
        const mid1 = Math.floor(comA.length/2)
        const mid2 = Math.floor((comA.length/2) - 1)

        const median = (comA[mid1] + comA[mid2])/2
        return median;
    }
    // else {
    //     return comA[Math.floor(comA.length/2)]
    // }

    

    
}

//const unsortedArr = merge([2, 5, 10, 57], [9, 12, 13]);
console.log(merge([1,2], [3,4]));
// const mergeSort = arr => {
//     if 


// }

