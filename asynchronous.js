//Asynchronous Javascript
//call stack

// function hello(){
// console.log("inside hello function");
//   console.log("Hello");
// }

// function demo(){
// console.log("calling hello function");
//   hello();
// }

// console.log("calling demo function");
// demo();
// console.log(" end of the execution of function");

// visualizing call stack
// function one(){
//   return 1;
// }

// function two(){
//   return one()+one();
// }

// function three(){
//   let ans =two()+one();
//   console.log(ans);
// }
// three();


//Callback Hell--> nested callbacks 
// function savetoDB(data,success, failure){
//   let internetSpeed=Math.floor(Math.random()*10)+1;
//   if(internetSpeed>=4){
//     success();
//   }
//   else{
//     failure();
//   }
// }

// savetoDB("apnacollege",
//   ()=>{
//     console.log("success:Your data was saved");
//     savetoDB("haha",()=>{
//       console.log("success2: Your data was saved.");
//       savetoDB("huhu",()=>{
//         console.log("success3: Your data was saved.");
//       },()=>{
//       console.log("failure3:weak connection. data not saved.");

//       })
//     },()=>{
//       console.log("failure2:weak connection. data not saved.");
//     })
//   },
//   ()=>{
//     console.log("Failure:Weak connection . data not saved");
//   }
// );

//Promises---> is an object that represents the completion (success) or failure of the asynchronous operation
//states in promises---> pending, rejected, fulfilled
//resolve and reject 

//Refactoring the old code with promises
//Promise chaining
function savetoDB(data){
  return new Promise((resolve,reject)=>{
    let internetSpeed=Math.floor(Math.random()*10)+1;
    if(internetSpeed>=4){
      resolve("success:data was saved");
    }
    else{
      reject("failure:data was not saved");
    }
  })
}


// savetoDB("haha")
// .then(()=>{
//   console.log("data1 saved");
//   return savetoDB("huhu");
// })
// .then(()=>{
//   console.log("data2 saved");
//   return savetoDB("lala");
// })
// .then(()=>{
//   console.log("data3 saved");
// })
// .catch(()=>{
//   console.log("promise was rejected");
// })

//results and errors in promises
// savetoDB("haha")
// .then((result)=>{
//   console.log("data1 saved");
//   console.log("Result:",result);
//   return savetoDB("huhu");
// })
// .then((result)=>{
//   console.log("data2 saved");
//   console.log("Result:",result);
//   return savetoDB("lala");
// })
// .then((result)=>{
//   console.log("data3 saved");
//   console.log("Result:",result);
// })
// .catch((error)=>{
//   console.log("promise was rejected");
//   console.log("Error:",error);
// })

//async and await

async function greet(){
  return "Hello world";
}

greet()
.then((res)=>{
  console.log("Promise was resolved");
  console.log("Result:",res);
})
.catch((err)=>{
  console.log("Promise was rejected ");
  console.log("Error:",err);
})

//async  with arrow function
let sample=async ()=>{
  return "hahah";
}

function getNum(){
  return new Promise((resolve,reject)=>{
     setTimeout(()=>{
    let num=Math.floor(Math.random()*10)+1;
    console.log(num);
    resolve();
  },1000);
  })
}

async function demo(){
  await getNum();
  await getNum();
  await getNum();
  await getNum();
}
