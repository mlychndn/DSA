// An array contains both positive and negative numbers in random order. Rearrange the array elements so that all 
// negative numbers appear before all positive numbers.

// input = [-12, 11, -13, -5, 6, -7, 5, -3, -6]
// output = -12 -13 -5 -7 -3 -6 11 6 5


// input = [9,0,8,7,-2,6,-3,-5,-4]

function rearrange(arr){
    let i=0;
    let j = 1;

    while(j<arr.length){
        if(arr[i]<0){
            i++;
            j++;
            console.log(i,j)
        }else if(arr[i]>=0 && arr[j]<0){
            [arr[j], arr[i]] = [arr[i], arr[j]]
            i++;
            j++;
            console.log(i,j);
        }else if(arr[i]>=0 && arr[j]>=0){
            j++;
            console.log(i,j);
        };
    };

   return arr.join(' ');
}


console.log(rearrange([-12, 11, -13, -5, 6, -7, 5, -3, -6]));
console.log(rearrange([9, 0, 8, 7, -2, 6, -3, -5, -4]));
