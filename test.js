// Write a function to generate the first n numbers in the Fibonacci sequence.
// function FibonacciSeries(num){
//      let a=0;
//      let b=1;
//      console.log(a);
//      for(let i=1; i<num; i++){
//         console.log(b);
//         let c=a+b;
//         a=b;
//         b=c;
//      }
// }

// (FibonacciSeries(7));






// Given an array of integers, return indices of the two numbers such that they add up to a specific target.
// function printIndices(arr, target,nextarr,indexfornextarr){
//     for(let i=0; i<arr.length; i++){
//         for(let j=i+1; j<arr.length; j++){
//             if(arr[j]+arr[i]==target){
//                 nextarr[indexfornextarr]=arr[i];
//                 indexfornextarr++;
//                 nextarr[indexfornextarr]=arr[j];
//                 indexfornextarr++;
//             }
//         }
//     }
//     for(let k=0; k<indexfornextarr; k++){
//         console.log(nextarr[k]);
//     }
// }

// printIndices([5,7,2,6],13,[],0);






// Given a string containing just the characters '(', ')', '{', '}', '[' and ']', 
// determine if the input string is valid.


// Given a string, find the length of the longest substring without repeating characters.
// function lengthLargestSubstring(arr){
//     let Length = 2** arr.length;
//     console.log(Length);
// }

// lengthLargestSubstring([5,6,7,3]);


// Given an array 'nums' of n integers where n > 1, return an array output such that output[i] is equal to the product of all the elements of nums except nums[i].
function produAllExcOneIndex(array){
    let product=1;
     for(let i=0; i<array.length; i++){
         for(let j=i; j+1<array.length; j++){
            product*=array[j+1];
         }
     }
}

produAllExcOneIndex([1,7,3,2]);