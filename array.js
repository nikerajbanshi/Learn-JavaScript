//array in JS
//can store multiple values under a single variable name
//also we can store different data types in an array in JS


// let students=["Nikesh","Alok","Piyush","Denish"];
// let mixedArr=["mango",63,2.0];
// console.log(students[0]);
// console.log(students[3]);
// console.log(mixedArr[2]);
// console.log(students.length);

//arrays are mutable ( original array can be changed )
// let arr=["apple", "mango", "orange"];
// arr[1]="papaya";
// console.log(arr);

//strings are immutable-->changes cannot be made to strings (old string remains same)
// let str="haha";
// str[0]="d";
// console.log(str);

//Array methods

//push,pop,unshift,shift
// let fruits=["apple","banana","mango","orange"];
// fruits.push("guava");//push-->adds at the end 
// fruits.pop();//pop-->removes from the end
// fruits.unshift("Pineapple");//unshift-->adds at the start
// fruits.shift("apple");//shift-->removes from the start
// console.log(fruits);

//indexof and includes method
// let names=["Nikesh","Rahul","Januka"];
// let a=names.indexOf("Januka");
// let b=names.includes("Kunal");//includes --> search for a value if yes(true) and if no(false)
// console.log(a);
// console.log(b);

//concat and reverse method
// let a=[1,2,3,4,5];
// let b=["a","b","c"];
// console.log(a.concat(b));//merges two arrays 
// console.log(b.concat(a));

// console.log(a.reverse());//revers an array elements
// console.log(b.reverse());

//slice and splice method
// let rainbowColors=["violet","indigo","green","blue","yellow","orange","red"];
// console.log(rainbowColors.slice(3));
// console.log(rainbowColors.slice(2,6));
// console.log(rainbowColors.slice(-4));

// console.log(rainbowColors.splice(3));
// console.log(rainbowColors.splice(2,5));
// console.log(rainbowColors.splice(2,5,"not color","just adding"));
// console.log(rainbowColors);


//sort method
// let check=["d","m","a","f"];
// console.log(check.sort());//arranges in ascending order (works only with string)

//Nested array-->array inside array(multidimensional array)
// let nums=[[1,2],[3,4],[5,6]];
//accessing array elements
// console.log(nums[0]);
// console.log(nums[2]);
// console.log(nums[0][1]); //2
// console.log(nums[2][0]);//5

//Example of nested array to represent the state of the tic-tac-toe game
// let game=[["X",null,"O"],[null,"x",null],["O",null,"X"]];
// console.log(game[0][1]);
// game[0][1]="O";
// console.log(game);

//Array Methods//

//1.forEach--->works same as for-of-loop
// let num=[1,2,3,4,5];
// num.forEach(function(el){
//   console.log(el);
// });
//or,
// let num=[1,2,3,4,5];
// num.forEach((el)=>{
//   console.log(el);
// });

//2.map
// let arr=[1,2,3,4,5];
// let dbl=arr.map((el)=>{ //returns an array of same size as the original size of array
//   return el*el;
// });
// console.log(dbl);

//3. filter
// let num=[1,3,5,7,8,10,13,12,6];
// let even=num.filter((el)=>{
//   return el%2==0;
// });
// console.log(even);

// let num=[2,5,3,4,8,9];
// let lt=num.filter((el)=>{
//   return el>5;
// });
// console.log(lt);

// 4. every and some

// [2,4,6,10].every((el)=>(el%2==0));//returns true if condition satisfies for all element (AND)
// [2,4,6,3].some((el)=>(el%2==0));//returns true if condition satisfies for some element (OR)

//5. reduce
// let num=[1,2,3,4,5];
// let finVal=num.reduce((res,el)=>res+el); //returns a single value
// console.log(finVal);

//finding maximum in an array with reduce method

// let arr=[1,4,3,10,8];
// let mx=arr.reduce((res,el)=>{
//   if(res<el){
//     return  el;
//   }
//   else{
//     return res;
//   }
// });
// console.log(mx);


//practice questions
//check if every element is multiples of 5
// let arr=[2,10,5,3,15,12];
// let val=arr.every((el)=>el%5==0);
// console.log(val);





