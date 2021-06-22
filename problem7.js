// Implement a function called countUniquevalues, which accepts a sorted array, and counts the unique values in the
// array. There can be -ve numbers in the array, but it will always be sorted.

// countUniqueValues([1,1,1,1,2]) ====>2
// countUniqueValues([1,2,3,4,4,7,7,12,12,13]) ===>7
// countUniqueValues([-2,-1,-1,0,1]) ===>4

// 1. create a function which take sorted array as input.
// 2. create two pointers and while loop.
// function countUniqueValues(arr){
//     if(arr.length === 0)return 0;
//     let flag1 = 0;
//     let flag2 = 1;
//     let count = 1;
//     while(flag2 < arr.length){
        
        
//         if(arr[flag1] === arr[flag2]){
//            flag2++
//         }else if(arr[flag1] !== arr[flag2]){
//             count++;
//             flag1 = flag2;
//             flag2++;
//         }
//     }
//     return count;

// };



// using two pointers and for loop:-

function countUniqueValues1(arr1){
    if(arr1.length === 0) {return 0
        return;
    }
    let i=0;
    for(let j=1; j<arr1.length; j++){
        if(arr1[i] !== arr1[j]){
            i++;
            arr1[i] = arr1[j]
        }
    }
    return i+1;;
  
}
// console.log(countUniqueValues1([1,1,1,1,2]));
// console.log(countUniqueValues1([1,2,3,4,4,7,7,12,12,13]));
// console.log(countUniqueValues1([-2,-1,-1,0,1]));
// console.log(countUniqueValues1([]));
// console.log(countUniqueValues1([1,1,1,1,1,1,1,1,1,1,1]));

// foe above function also time complexity will be linear.O(n)

// using javascript set datastrucre:

function countUnique(arr){
    const newArr = [...new Set(arr)]
    console.log(newArr.length);
}
countUnique([1,1,1,1,2])
countUnique([1,2,3,4,4,7,7,12,12,13])
countUnique([-2,-1,-1,0,1])
countUnique([])
countUnique([1,1,1,1,1,1,1,1,1,1,1])
console.log('=============================================================================================')

//using inbuilt indexOf method:

function getUnique(arr){
    let b = [];
   for(let i=0; i<arr.length; i++){
       if(b.indexOf(arr[i])=== -1){
         b.push(arr[i])
       }
   }

   console.log(b.length);
}

getUnique([1,1,1,1,2]);
getUnique([1,2,3,4,4,7,7,12,12,13])
getUnique([-2,-1,-1,0,1])
getUnique([])
getUnique([1,1,1,1,1,1,1,1,1,1,1])
