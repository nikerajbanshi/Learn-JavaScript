//Function ---> function definition and function calling

//function definition
// function codeX(){
//   console.log("Code is running successfully........");
// }

// codeX(); //function calling

// function greet(){
//   console.log("Namaste!");
//   console.log("Welcome to the Javascript function session");
// }

// greet();

//Create a function to roll a dice and that should always display from 0 to 6.

// function rollDice(){
//   let num=Math.floor(Math.random()*6)+1;
//   console.log(num);
// }
// rollDice();
// rollDice();
// rollDice();
// rollDice();
// rollDice();

//function with arguments---> values we pass to the function
// function name(naam){
//   console.log(`Hello , My name is ${naam}`);
//   console.log(`Hello , My name is ${naam}`);
// }
// name("Nikesh");
// name("Bhuwan");

//create a function that gives the average of three numbers
// function avgNumbers(){
//   let num1=30,num2=10,num3=20;
//   let sum=num1+num2+num3;
//   let avg=sum/3;
//   console.log(`The average of three numbers is ${avg}`);

// }

// avgNumbers();

//same function with arguments
// function avgNumbers(a,b,c){
//   let avg=(a+b+c)/3;
//   console.log(`The average of the three numbers is : ${avg}`);
// }

// avgNumbers(10,20,30);
// avgNumbers(10000,590,3098);

//print multiplication table of n
// function printTable(n){
//   for(let i=n; i<=n*10;i+=n){
//     console.log(i);
//   }
// }
// printTable(2);


// return keyword in function
// function sum(a,b){
//   return a+b;
// }
// let result=sum(2,4); //returns the value from where it is called from
// console.log(result);


// function sum(a,b){
//   return a+b;
//   console.log("I willnot be on the output screen."); //anything written after return keyword will not be executed
// }
// console.log(sum(4,5));

//create a function that prints the sum from 1 to n
// function printSum(n){
//   let sum=0;
//   for(let i=1;i<=n;i++){
//     sum=sum+i;
//   }
//    return sum;
// }
// let res=printSum(100);
// console.log(res);

//------------------------------------------Scope in javascript-----------------------------------------------------------------------------------------------------------------------//
//scope determines the accessibility of variables
//Global scope, Function scope , Block scope  and Lexical scope

//Global scope
// let username="Nikesh"; //Global variable
// let age=19; //Global variable
// let gratitude="Thanks";//Global variable
// function greet(){
//   console.log(`Hello , I am ${username} and I am ${age} years old.`);//Accessible here
// }
// greet();
// console.log(`${gratitude} everyone!`); //Accessible here

//function scope
// function checkScope(){
//   let a=9;
//   // console.log(a);
// }
// console.log(a); //variable a has function scope -->it cannot be access outside the function
// checkScope();

//Block scope--> usually in loops and if else
// if(true){
//   let age=20; //Block scoped
//   let city="biratnagar"; //Block scoped
//   console.log(age);//works here
//   console.log(city);//works here
// } 
// console.log(age);//error
// console.log(city);//error


//lexical scope--nested function 
// function outerFunc(){
//   let x=4;
//   let y=5;//x and y has lexical scope ---> can be used inside another func
//   function innerFunc(){
//     let a=8;//a cannot be used outside this func because a has function scoope
//     console.log(x);
//     console.log(y);
//   }
//   console.log(a);//  value of a will not be printed
//   innerFunc();
// }
// outerFunc();

//Function Expressions-->nameless function but stored in variable and called using var-name
// const printName=function(){
//   console.log("Hi!, I am Nikesh");
// }
// printName();

// const sum=function(a,b){
//   return a-b;
// }
// console.log(sum(10,4));

//Higher Order Functions
//A function that does either,
//1. takes one or more  function as arguments
//or, returns a function

// let greet=function(){
//   console.log("Namaste");
// }
// greet();
// greet();
// greet();
// greet();
//output we need = times function we call

//1. Taking other function as arguments
// let multiGreet=function(haha,n){ //multiGreet is higher order function
//   for(let i=1;i<=n;i++){
//     haha();
//   }
// }

// let greet=function(){
//   console.log("Namaste");
// }

// multiGreet(greet,4);

// multiGreet(function(){console.log("Haha hehe huhu")},5);

//Basic example of HOF taking other func as argument
// let greet=function(){
//   console.log("Hello");
// }

// let highOrderWalaFunc =function (callback){
//   callback();
// }

// highOrderWalaFunc(greet);

//2. returning a function

// function greet(){ //greet is HOF returning a func
//   return function(){
//     console.log("Hello bhaiyo!");
//   }
// }

// let returnedFunc=greet();//returns a inner func
// returnedFunc(); //calls returned func

//===========================Arrow Functons=================================================================================//
const hello=()=>{
  console.log("Hello World!");
}
hello();

// const sum=(a,b)=>{
//   console.log(a+b);
// }
// sum(2,8);

// const cube=(n)=>{
//   return n*n*n;
// }
// let c=cube(2);
// console.log(c);

// const mul=(a,b)=>(a*b);//implicit return by arrow function
// console.log(mul(2,4));

// console.log("Hey programmer!");
// setTimeout(()=>{
//   console.log("Enter 0 to exit");
// },4000);
// console.log("code is running successfully................");
// console.log("code is running successfully................");
// console.log("code is running successfully................");
// console.log("code is running successfully................");
// console.log("code is running successfully................");



// let id=setInterval(()=>{
//    console.log("I will execute multiple times");
// },2000);
// clearInterval(id);
