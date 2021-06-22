// Write a function called average pair. Given a sorted array of integers and a target average.
// Determine if there is a pair of values in the array where the average of the pair equals the target
// average. There may be more than one pair that matches the average target.

// averagePair([1,2,3] 2.5) //true
// averagePair([1,3,3,5,6,7,10,12,19],8) //true
// averagePair([-1,0,3,4,5,6], 4.1) //false
// averagePair([],4) //false

function averagePair(arr, num){
    if(arr.length ===0 && num > 0) return false;
    if(arr.length === 1 && arr[0] === num) return true;
    let right = 0;
    let left = arr.length -1;
    while(right<left){
        let avg = (arr[right] + arr[left])/2;
        if(avg>num){
            left--;
        }else if(avg<num){
            right++
        }else if(avg === num){
            return true;
        }

    }
    return false;
}

console.log(averagePair([1,2,3], 2.5));
console.log(averagePair([1,3,3,5,6,7,10,12,19],8));
console.log(averagePair([-1,0,3,4,5,6], 4.1));
console.log(averagePair([],4));
