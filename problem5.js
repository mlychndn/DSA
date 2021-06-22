// Given two strings, Write a function to determine, if second string is an anagram of the first.
//An anagram is a word, phrase or name formed by rearranging the letters of another. such as cinema
// formed from iceman.

// validanagram('', '') =====> true
// validanagram('aaz', 'zza') ====> false
// validanagram('rat', 'car')  ====> false
// validanagram('awesome', 'awesom') ====> false
// validanagram('qwerty', 'qeywrt') ====> true
// validanagram('textwisttime', 'timewisttext') ====> true


// 1. Using inbuil javascript method.
/* function validanagram(param1, param2){
    if(param1.length !== param2.length){
        return false;
    }
   let str1 = param1.split('').sort().join('');
   let str2 = param2.split('').sort().join('');

   if(str1 === str2){
       return 'Valid Anagram'
   }else{
       return 'Not a Anagram'
   }

}

// time complexity will be O(nlog(n));
console.log(validanagram('', ''));
console.log(validanagram('aaz', 'zza'));
console.log(validanagram('rat', 'car')); 
console.log(validanagram('awesome', 'awesom')); 
console.log(validanagram('qwerty', 'qeywrt')); 
console.log(validanagram('textwisttime', 'timewisttext')); 
*/

// Method 2:
// By using frequency counter


// Difference between for..in and for.. of in javascript.
/* function classification(arrIterate){
     for(let key in arrIterate){
         // for.. in iterates over all the keys of an iterable object.
         console.log(key);
     }

     for(let values of arrIterate){
         // for.. of iterates over all of the values of an iterable object.\
         console.log(values);
     }
    }

  classification(['el1', 'el2', 'el3', 'el4', 'el5']); */

/* function test(){
    let obj1 = {
        firstName: "malay",
        lastName: "chandan",
        age:"12",
        peoficiency: "javaScript"
    }
  
    for(let key in obj1){
        console.log(key)
    }
}
  

  // It will not run because obj1 is not iterable. iterable objects are array, strings, nodelist etc.
//   for(let values of obj1){
//       console.log(values)
//   }

test();
*/

/* function strTest(){
   let str= 'MALAY';

   for(let key in str){
       console.log(key);
   }

   for(let values of str){
       console.log(values);
   }
}

strTest();*/

function validAnagram(param1, param2){
   if(param1.length === param2.length) return false;

    // initializing the two objects;
    let obj1 = {};
    let obj2 = {};

    // defining keys and values of obj1
    for(let el of param1){
        obj1[el] = (obj1[el] || 0) +1;
     }
     console.log(obj1);
    for(let el of param2){
         obj2[el] = (obj2[el] || 0) +1;
     }
     console.log(obj2);
     for(let key in obj1){
         if(!obj2[key]){
            return false;
         }else if(obj1[key] !== obj2[key]){
             return false;
         }
     }

}

console.log(validAnagram('Malay', 'chandan'));
console.log(validAnagram('', ''));
console.log(validAnagram('aaz', 'zza'));
console.log(validAnagram('rat', 'car')); 
console.log(validAnagram('awesome', 'awesom')); 
console.log(validAnagram('qwerty', 'qeywrt')); 
console.log(validAnagram('textwisttime', 'timewisttext'));