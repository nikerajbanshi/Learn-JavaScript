//if statement
// let age=45;
// if(age>=18){
//   console.log("You can definitely vote");
// }

// if statement ---> Traffic Light System
// let color="yellow";
// if(color==="red"){
//   console.log("Stop! , You cannot go ahead");
// }
// if(color==="yellow"){
//   console.log("Slow down! , Yellow Light");
// }
// if(color==="green"){
//   console.log("GO! , You can go now.");
// }


//if-else statement
// let khana = "masu";
// if (khana === "masu") {
//   console.log("Mummy khana khane!");
// }
// else{
//   console.log("Mummy khana nakhane!");
// }

//popcorn prices based on the size of bucket
// let size="l";
// if(size==="xl"){
//   console.log("The price of popcorn is : Rs.550");
// }
// else if(size==="l"){
//   console.log("The price of popcorn is: Rs. 450");
// }
// else if (size==="m"){
//   console.log("The price of popcorn is Rs. 350");
// }
// else{
//   console.log("The price of popcorn is Rs. 250");
// }

//Questions--> is a good string if starts with a and has length >3
//Implementing if-else using logical operators
// let str="ant";
// if(str[0]==="a" && str.length>3){
//   console.log("is a good string");
// }
// else{
//   console.log("Not a good string");
// }

//Nested if-else statement
// let isMember=false;
// let purchaseAmount=1500;
// if(isMember){
//   if(purchaseAmount>1000){
//     console.log("You get 10% discount.");
//   }
//   else{
//     console.log("You get 5% discount.");
//   }
// }
// else{
//   console.log("Please fill up the membership form to get discount on the items purchased.");
// }

//Real life example of Authentication and Authorization
// let username="Nikesh";
// let password= "97055424";
// if(username==="Nikesh"){
//   if(password==="97055424"){
//     console.log("Login successful!");
//   }
//   else{
//     console.log("Invalid password");
//   }
// }
// else{
//   console.log("username not found");
// }

//Switch statement-->checks using === operator with each case
// let option=2;
// switch(option){
//   case 1:
//     console.log("checking the balance ............");
//     break;
//   case 2:
//     console.log("Withdraw money...");
//     break;
//   case 3:
//     console.log("Deposit money.....");
//     break;
//   default:
//     console.log("Invalid option! , Please try again");
// }

// 2. Loops in JS
//for loop
// for(let i=1; i<=10; i++){
//   console.log("Hello world!......");
// }
//prints number from 1 to 10
// for(let i=1; i<=10; i++){
//   console.log(i);
// }

//print odd numbers from 1 to 15
// for(let i=1; i<=15; i+=2){
//   console.log(i);
// }
// //prints even number from 1 to 15
// for(let i=2; i<=15; i+=2){
//   console.log(i);
// }

//Nested for loop
// for(let i=0;i<=3;i++){
//   for(let j=1;j<=3;j++){
//     console.log(j);
//   }
// }

//While loop
// let i=2;
// while(i<=5){
//   console.log("haha hehe huhu");
//   i++;
// }

//implementing while loop concept
//ask your friend to guess your fav movie
// const favMovie="kohi mil gaya";
// let userGuess=prompt("Guess my favourite movie");
// while(userGuess!==favMovie && userGuess!=="quit" ){
//   console.log("Wrong guess.Please try again!");
//   userGuess=prompt("Guess again!");
// }
// if(userGuess===favMovie){
//   console.log("Congrats!🙌");
// }
// else{
//   console.log("You quit the game.");
// }

//printing array elements using for loop
// let fruits=["apple","banana","coconut","orange"];
// for(let i=0;i<fruits.length;i++){
//   console.log(i,fruits[i]);
// }

//printing array elements using for of loop
// let fruits=["apple","banana","coconut","orange"];
// for (fruit of fruits){
//   console.log(fruit);
// }

//printing elements of nested array  using for of loop
// let colors=[["red","green"],["yellow","orange"],["blue","purple"]];
// for(color of colors){
//   for(list of color){
//     console.log(list);
//   }
  
// }
