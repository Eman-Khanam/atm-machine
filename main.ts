#!/usr/bin/env node

import inquirer from "inquirer";

// Initialize user balance and pin code

let myBalance = 50000; 
let myPin = 3344; 
// Print welcome message
console.log("welcome to code with Eman - ATM Machine");

let pinAnswer = await inquirer.prompt([
    {
        name: "pin",
        type: "number",
        message: "Enter your Pin code:"
    }
])
if (pinAnswer.pin === myPin){
    console.log("Pin is Correct, Login Successfully!");
} else{
    console.log("Pin is incorrect, Try Again!");
}   
    //console.log('Current Account Balance is ${myBalance}')

    let operationAns = await inquirer.prompt([
    {
        name: "operation",
        type: "list",
        message: "Select an operation:",
        choices: ["Withdraw Amount", "Check Balance", "Fast Cash"]
      }
    ])

    if(operationAns.operation === "Withdraw Amount"){
        let amountAns = await inquirer.prompt([
            {
                name: "amount",
                type: "number",
                message: "Enter the amount to withdraw:"
            }
        ])
        if (amountAns.amount > myBalance){
            console.log("Insufficient Balance");
        }
        else{
            myBalance -= amountAns.amount;
            console.log("Your remaing balance is:" + myBalance);
           // console.log('Your Remaining Balance is: ${myBalance}');
        }
    }
else if (operationAns.operation === "Check Balance"){
    console.log("Your Account Balance is:" + myBalance);
} else if(operationAns.operation === "Fast Cash"){
    let FastCash = await inquirer.prompt(
        {
            name: "cashResult",
            message: "Choose amount between these options",
            type: "list",
            choices: ["500", "1000", "2000", "5000", "10000"],
        }
    )

    myBalance = myBalance - FastCash.cashResult
    console.log("Your Remainig Balance is:" + " " + myBalance);
}   