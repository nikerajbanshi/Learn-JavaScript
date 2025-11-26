//1. Spread Operator with array literals
// let arr=[1,2,3,4,5];
// let minNum=Math.min(...arr);
// console.log(minNum);

// let arr1=[4,7,9,0,3];
// let newArr=[...arr1]; //transforming org arr into new array
// console.log(newArr);

// let even=[2,4,6,8];
// let odd=[1,3,5,7,9];
// let num=[...even,...odd]; //concatenating arrays
// console.log(num);

//spread operator with object literals
// let data={
//   email:"nikeshraj.9800@gmail.com",
//   pass:123908
// };

// let newObj={...data,DOB:2006};
// // console.log(newObj);
// console.log(data);

//storing arrays in terms of obj
// let arr=[1,2,5,8,6];
// const obj={...arr};//key-value
// console.log(obj);

// //storing strings in terms of obj
// let str="nikesh";
// let obj1={...str};
// console.log(obj1);


//2. Rest Operator

// let func=(...args)=>{
//   return args.reduce((res,el)=>res*el);
// };
// let pro=func(2,3,10,8);
// console.log(pro);

// function sum(...args){
//   return args.reduce((res,el)=>res+el);
// }
// let r=sum(1,2,2,3,4);
// console.log(r);

// 3. Destructuring --storing values into multiple variables
//Destructuring arrays
// let names=["nikesh","rupesh","pramish","sanjib"];
// let [winner,loser,...others]=names;
// console.log(winner);
// console.log(loser);
// console.log(others);

//destructuring objects
const std={
  name:"Nikesh",
  class:10,
  age:15,
  subjects:["math","science","nepali","english"],
  city:"Morang",
  password:"456&2"
};

const {name:user,class:grade,password:pass}=std;
console.log(user);
console.log(grade);
console.log(pass);
console.log(std);
