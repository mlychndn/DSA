function minSubArrayLen(nums,sum){
    let total = 0;
    let start = 0;
    let end = 0;
    let minLen = Infinity;

    while(start< nums.length){
        console.log(total);
        console.log('======================') // [2,3,1,2,4,3]
        if(total<sum && end < nums.length){
            total = total + nums[end];
            end++
            console.log(`total:${total}`);
        }else if(total >=sum){
            minLen = Math.min(minLen, end-start);
            console.log(`min: ${minLen}`)
            total = total - nums[start];
            start++;
        }else{
            break;
        }
    }
    return minLen === Infinity?0:minLen;
}


console.log(minSubArrayLen([2,3,1,2,4,3], 7)) // 2  because [4, 3] is the smallest array.
// console.log(minSubArrayLen([2,1,6,5,4], 9)) // 2  because [5, 4] is the smallest array.
// console.log(minSubArrayLen([3, 1, 7, 11, 2, 9, 8, 21, 62, 33, 19], 52)) //1 because [62] is greter than 1
// console.log(minSubArrayLen([1, 4, 16, 22, 5, 7, 8, 9, 10], 39)) //3
// console.log(minSubArrayLen([1, 4, 16, 22, 5, 7, 8, 9, 10], 55)) //5
// console.log(minSubArrayLen([4, 3, 3, 8, 1, 2, 3], 11)) // 2
// console.log(minSubArrayLen([1,4,16,22,5,7,8,9,10], 95)) //0
