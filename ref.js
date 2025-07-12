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

