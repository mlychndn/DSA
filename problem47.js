/* Given two arrays a[] and b[] of size n and n respectively. The task is to find union between these two arrays.

/* Union of the two arrays can be defined as the set containing distinct elements from both the arrays.
 If there are repetitions, then only one occurrence of element should be printed in union.*/

 // Input:
// arr1 = [1, 2, 3, 4, 5];
// arr2 = [1, 2, 3]
// unionArr = [1, 2, 3, 4, 5]
// count =5;


function union(arr1, arr2){
    let union = [];
    for(let values of arr1){
        union.push(values);
    }

    for(let values of arr2){
        union.push(values);
    }
  
    console.log(union);

    return [...new Set(union)];

}

console.log(union1([85,25,1,32,54,6,2], [2, 85]));


function union1(arr1, arr2){

    let union = [];
  for(let values of arr1){
      union.push(values);
  }
  console.log(union);

  for(let values of arr2){
      console.log(union.includes(values));
      if(union.includes(values) === false){
        union.push(values);
      }
  }

  return union;
}