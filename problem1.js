/* Write a function called same, which accept two arrays. The function should return true if every value 
in the array has its corresponding value squared in the second array. the frequency of values must be the same

same([1,2, 3], [4, 1, 9])  // true
same([1, 2, 3], [1, 9])    //false
same([1, 2, 1], [4, 4, 1])  //false 
 
[1, 2, 3]  


*/

// solving using inbuilt method of javascript. 

/* function same(param1, param2){

    if(param1.length !== param2.length) return false;
    const arr2 = param1.map(el=> el**2);
    // console.log(arr2);

    arr2.sort((a,b)=>{
        return a-b;
    })
    //  console.log(arr2);

    param2.sort((a,b)=>{
        return a-b;
    })
    // console.log(param2);

    for(let key in arr2){
        if(arr2[key] === param1[key]){
            return true;
        }
    }
    return false;
}

console.log(same([1,2,3], [4, 1, 9]));
console.log(same([1, 2, 3], [1, 9]));
console.log(same([1, 2, 1], [4, 4, 1]));

// time complexity O(nlog(n));

*/

function same1(param1, param2){
    
    let obj1 = {};
    let obj2 = {};

    for(let el of param1){
        obj1[el] = (obj1[el] || 0) +1;
    }
    // console.log(obj1);

    for(let el of param2){
        obj2[el] = (obj2[el] || 0) +1;
    }
    // console.log(obj2);

    for(let key in obj1){
        if(!obj2[key*key]){
            return false;
        }else if(obj1[key] !== obj2[key*key]){
            return false;
        }
    }
    return true;
};

console.log(same1([1,2,3], [1, 4, 9]));
console.log(same1([1,2,3], [4, 1, 9]));
console.log(same1([1, 2, 3], [1, 9]));
console.log(same1([1, 2, 1], [4, 4, 1]));