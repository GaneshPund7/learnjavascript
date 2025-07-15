// let obj1 = { data: { value: 100 } };
// console.log(obj1)
// let obj2 = obj1;
// console.log(obj2)
// let obj3 = obj1.data;
// console.log(obj3)

// obj2.data.value = 200;

// console.log(obj1);   
// console.log(obj2); 
// console.log(obj3);        

// obj2.data = { value: 300 };

// console.log(obj1.data.value);  
// console.log(obj2.data.value);  
// console.log(obj3.value); 


// function setup() {
//   let obj = { data :{count: 0} };

//   function increment() {
//     obj.data.count++;
//     console.log("Increment:", obj.data.count);
//   }

//   function reset() {
//     obj = {  count: 0 };
//     console.log("Reset");
//   }

//   return [increment, reset];
// }

// const [incA, resetA] = setup();
// const [incB, resetB] = setup();

// incA();     
// incA();     
// incB();     

// resetA();   
// incA();     
// incB();     


// Call call back  in js 

// function data (a, b){
//   console.log( b() + a)
// }

// function greet(){
// let a =0;
// function inner(){
//   return a++
// }
// function inside(){
//   console.log("hello I am from inside")
// }
// return {inner, inside}
// }
// data("Aditya", greet)


// function testCallback(cb) {
//   console.log("Inside testCallback");
//   cb();
// }

// function outer() {
//   console.log("Start outer");

//   testCallback(function() {
//     console.log("Inside callback 1");// start outer  inside testcallback
//                                      //  inside callback 1  
//                                      // inside testcallback then 2 after inner callback
//     testCallback(function() {        // end
//       console.log("Inside callback 2");
//     });
//     console.log("After inner testCallback");
//   });

//   console.log("End outer");
// }

// outer();


// call back hell in js 
// The call back hell in js is one of the problem 


const fs = require('fs');

// fs.writeFile('file.pdf', 'file.txt', (err, data)=>{
//   if(err){
//     console.log(err)
//   }else{
//     console.log(data)
//   }
// });
// fs.readFile('file.txt', 'utf-8', (error, data)=>{
//    if(error){ 
//     console.log('Error')
//    }else{
//     console.log('file read success')
//    }
// })

// fs.readFileSync('file.txt', 'utf-8')

//  if (fs.existsSync('fie.txt')) {
//   console.log('File exists!');
// } else {
//   console.log('File does not exist.');
// }

// fs.mkdir('ses', (err, file)=>{
//  if(err){
// console.log("getting error ")
//  }
//  else{
//   console.log("file created successfuly")
//  }
// })


// fs.deleteFile('mydata', 'utf-8', (error)=>{
//   if(error){
//     console.log('error while delete file')
//   }else{
//      console.log('file deleted success')
//   }
// })

// // longest

// let arr = [22,3,5,6,3,2,22,2,3,6];
// function removeDuplicate(arr){
// let arrs = []
//     for(let i = 0; i<arr.length; i++){
//         if(!arrs.includes(arr[i])){
//             arrs.push(arr[i])
//         }
//     }
//     return arrs
// }

// console.log(removeDuplicate(arr))
// let input = "aaabbbccd";
// // output = "a3b3c2d1i"

// function counts (str){
//     let count = {}
//   let getStr = ''
//     for(key of str) {
//         if(!count[key]){
//           count[key] = 0
//         }
//         count[key]++
//     }
//     console.log()
//     for( key in count){
//         getStr +=key
//         getStr += count[key]
//     }
//     return getStr
// }


// console.log(counts(input))


// Promise.resolve()
//   .then(() => {
//     return Promise.resolve('A');
//   })
//   .then((res) => {
//     console.log(res);
//     return 'B';
//   })
//   .then( Promise.resolve('C'))   
//   .then(console.log);

// async function foo() {
//     console.log('foo start');
//     await new Promise((resolve) => setTimeout(resolve, 0));
//     console.log('foo end');
// }

// console.log('Start');
// setTimeout(() => {
//     console.log('setTimeout 1');
// }, 0);

// foo();

// setTimeout(() => {
//     console.log('setTimeout 2');
// }, 0);
// console.log('End');


// const arr = [1,"hiii", [false, 0, undefined, [null, true]]];
// let result = []
// function removeArr(arr){
// let truthy =[]
// let falsy =[]
//     for(let i=0; i<arr.length; i++){
//         if(Array.isArray(arr[i])){
//             removeArr(arr[i])
//         }
//       else{
//           result.push(arr[i]) 
//       }
//     }
    
//     for(let j=0; j<result.length; j++){
//         if(!result[j]){
//             falsy.push(result[j])
//         }else{
//           truthy.push(result[j])
//         }
//     }
//   return { falsy, truthy}
    
// }
// console.log(removeArr(arr))

//  function countDown(num) {
//   if (num === 0) {
//     // console.log("Done!");
//     return;  
//   }
//   console.log(num)
//       countDown(num - 1);  
// }

// countDown(10);

// let arr = [1, [2, 3, [4, 5, [6]]], 7];
// let newArr =[]
// function count(arr){
    
//     for(let i=0; i<arr.length; i++){
//         if(Array.isArray(arr[i])){
//             count(arr[i])
//         }
//         else{
//             // count(arr[i])
//             newArr.push(arr[i]) 
//         }
//     }
// }
// count(arr)
//     console.log(newArr.length)
// console.log(newArr)

// let arr = [1, [10, 3, [20, 7], 5], 2];
// let result = []
// function data(arr){
//     for(let i =0; i<arr.length; i++){
//         if(Array.isArray(arr[i])){
//             data(arr[i])
//         }else{
//             result.push(arr[i])
//         }
//     }
// }
// data(arr);
// console.log(result)
// 

// let arr = [1, 2, 3, 4, 5, 6, 7];
// // output [5, 6, 7, 1, 2, 3, 4]
// // , d=3

// function reverseEleme(arr, d){
//     let newArr = []
//     let newArr1 = []
    
//     for(let i=d+1; i<=arr.length-1; i++){
//         newArr.push(arr[i]) 
// }
//     for(let i=0; i<d+1; i++){
//         newArr.push(arr[i]) 
//         // newArr1.push(arr[i])
// }
// // [...newArr1, ...newArr]
// // newArr
// // return [...newArr, ...newArr1]
// return newArr
// }
// console.log(reverseEleme(arr, 3))

















