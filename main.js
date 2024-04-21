#! /usr/bin/env node
import inquirer from "inquirer";
let myBalance = 50000;
let myPin = 1234;
let pinAnswer = await inquirer.prompt([
    {
        name: "Q1",
        message: "enter your pin",
        type: 'number'
    }
]);
if (pinAnswer.Q1 === myPin) {
    console.log("Correct Pin Code!!");
    let operationAns = await inquirer.prompt([
        {
            name: "operation",
            message: "Please select required operation",
            type: "list",
            choices: ["Check Account Balance", "Withdraw Cash", "Fast Cash"]
        }
    ]);
    console.log(operationAns);
    if (operationAns.operation === "Withdraw Cash") {
        let amountAns = await inquirer.prompt([
            {
                name: "amount",
                message: "Enter Withdrawal Amount",
                type: "number"
            }
        ]);
        if (amountAns.amount > myBalance) {
            console.log("Insufficient balance");
        }
        else if (amountAns.amount < myBalance) {
            (myBalance -= amountAns.amount);
            console.log("Please receive your cash,Your remaining balance is: " + myBalance);
        }
    }
    else if (operationAns.operation === "Check Account Balance") {
        console.log("Your current balance is:" + myBalance);
    }
    else if (operationAns.operation === "Fast Cash") {
        let fastAmount = await inquirer.prompt([
            {
                name: "fastCash",
                message: "Please select amount",
                type: "list",
                choices: ["5000", "10000", "20000", "30000", "40000", "50000"]
            }
        ]);
        (myBalance -= fastAmount.fastCash);
        console.log("Please receive your cash,Your remaining balance is:" + myBalance);
    }
}
else {
    console.log("Incorrect Pin Code!");
}
;
