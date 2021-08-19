const twoSum = (nums, target) => {
    const sumNum = {}
    for (let i = 0; i < nums.length; i++) {
        const complement = target - nums[i];
        if (sumNum.hasOwnProperty(complement)){
            return [sumNum[complement], i]
        }
        sumNum[nums[i]] = i;
    }
}

const arr = [3,2,4], target = 6
console.log(twoSum(arr, target))