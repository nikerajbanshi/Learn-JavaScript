// Variables in JS --> let const var 

//using var
// var name="Nikesh";
// name="Rupesh";//re-assigned
// var name="Pramish";//re-declared
// console.log(name);

// //using let--> we can re-assign but we cannot re-declared
// let age=20;
// age =90; // re-assignment
// console.log(age);

// //using const --> we cannot re-assign and re-declared
// const g=9.8;
// console.log(g);

// //Data types in JS
// let num=20;
// let firstName="suntali";
// let isLoggedin=true;
// let x;
// const user=null;
// console.log(typeof(num));
// console.log(typeof(firstName));
// console.log(typeof(isLoggedin));
// console.log(typeof(x));
// console.log(typeof(user));

//Operators in JS
//Arithmetic operators
// const a=25;
// const b=10;
// const sum=a+b;
// console.log(`The sum is : ${sum}`);
// const diff=a-b;
// console.log(`The diff is : ${diff}`);
// const pro=a*b;
// const div=a/b
// const rem=a%b;
// const power=b**2;

// Example
// let price=1200;
// const tax=0.18;
// let finalPrice=price+tax*price;
// console.log(`The total price of the item is : ${finalPrice}`);

//Comparision Operators
// console.log(9>4);
// console.log(10>20);
// console.log(9>=9);
// console.log(9<=10);
// console.log(4==4);
// console.log(9=="9");//checks only value
// console.log(9===9);
// console.log(9==="9");//checks both value and type 


// //Example
// let num1=25;
// let num2=80;
// if(num1>num2){
//   console.log("num1 is greater");
// }
// else{
//   console.log("num2 is greater")
// }

//Assignment operators
// let a=9;
// console.log("value 9 is assigned to a");
// let balance=1000;
// // balance=balance+500;
// balance+=500;//first add and assigned
// console.log("Your current balance is:","Rs." ,balance);
// let points=900;
// points-=100;
// console.log("Points remaining :", points);

//Logical Operators
// let age=21;
// let haveDegree=false;
// if(age>=18 && haveDegree){
//   console.log("You can apply for a job.");
// }
// else{
//   console.log("You can't apply to job.")
// }

//Unary operator
// let a=100;
// // b=++a;
// // b=a++;
// console.log("value of a and b is", a,b);

//Ternary operator
// let age=14;
// let res=age<=18?"Minor":"Adult";
// console.log(res);

//prompt and alerts
// let name=prompt("Enter your name:");
// console.log(name);
// let warn=alert("You are in danger");

//Type conversion
// let check="5"+2;
// console.log(check);
// console.log(typeof(check));


// let check3="5"*2;
// console.log(check3);
// console.log(typeof(check3));

// let check4="20"-2;
// console.log(check4);
// console.log(typeof(check4));

// let inStr="5200";
// let inNum=Number(inStr);
// console.log(inNum);
// console.log(typeof(inNum));

// let inNum=1000;
// let inStr=String(inNum);
// console.log(inStr);
// console.log(typeof(inNum));
// console.log(typeof(inStr));

//Example
// let age=prompt("Enter your age :");
// age=Number(age);
// if(age>=18){
//   console.log("Adult");
// }
// else{
//   console.log("Minor");
// }

// Truthy and Falsy
// let value=true;
// if(value){
//   console.log("executed when true");
// }
// else{
//   console.log("excuted when false");
// }


// if(!false){
//   console.log("haha");
// }
// else{
//   console.log("huhu");
// }