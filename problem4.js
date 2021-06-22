// Find the index of a given no in a sorted array.
// Find index of 5
// [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]
// answer should be 4.


// By using indexOf method:


function index(arr, num){
    if(arr.indexOf(num) !== -1){
        console.log(arr.indexOf(num));
    }else{
        console.log('Number is not found in given array');
    }
   
}

//divideAndConqurer([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15],5);

// time complexity of javascript inbuilt indexOf method is 0(n);

// In above code I have used indexof which give the time complexity O(n). Now we use the 
// divide and conqurer method time complexity will be binary O(log(n))

// O(1) --->O(log(n))---> O(n) ---> O(nlog(n)) ---> O(n^2);

// [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]
//                        .
    function searchAlgo(arr, num){
        let min = 0;
        let max = arr.length-1;
    
        while(min <= max){
            let middleIndex = Math.floor((min + max)/2);
            if(arr[middleIndex] < num){
                min = middleIndex + 1;
            }
            else if(arr[middleIndex] > num){
                max = middleIndex -1;
            }
            else{
                return middleIndex;
            }
           
        }
        return 'num not found!';
    
    }
    
    const result = searchAlgo([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15], 5);
    console.log(result);

