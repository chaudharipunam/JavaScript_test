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







// Given an array 'nums' of n integers where n > 1, return an array output such that output[i] is equal to the product of all the elements of nums except nums[i].
// function produAllExcOneIndex(array){
//     let a=[];
//     p=0;
//      for(let i=0; i<array.length; i++){
//         let product=1;
//          for(let j=0; j<array.length; j++){
//             if(j!=i){
//               product*=array[j];
//             }
//          }
//          a[p]=product;
//          p++;
//      }
//      for(let k=0; k<p; k++){
//         console.log(a[k]);
//      }
// }
// produAllExcOneIndex([1,7,3,2]);



// Find the kth largest element in an unsorted array.
function kthLargestEle(arr,kthNo){
    for(let i=0; i<arr.length; i++){
        for(let j=0; j<arr.length-1-i; j++){
            if(arr[j]>arr[j+1]){
                let temp=arr[j];
                arr[j]=arr[j+1];
                arr[j+1]=temp;
            }
        }
    }
    let p=arr.length-kthNo;
        console.log(arr[p]);
}
kthLargestEle([23, 45, 21, 78, 7, 99, 47],4);
