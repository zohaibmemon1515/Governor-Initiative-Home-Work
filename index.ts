#!/usr/bin/env node

import inquirer from "inquirer"
// const randomnumber = 13
const randomnumber = Math.floor(Math.random()*7+1);
const result = await inquirer.prompt([
{
  name : "userGuessednumber",
  type : "number",
  message : "please Guess a number 1 to 7",
},

]);
if (result.userGuessednumber == randomnumber){
    console.log("congratulation!You Guessed right number.")
}else{
    console.log("You Guessed wrong answer.")
}