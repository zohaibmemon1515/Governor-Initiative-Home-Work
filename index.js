#!/usr/bin/env node
import inquirer from "inquirer";
const answer = await inquirer.prompt([
    {
        message: "Enter First Number",
        type: "number",
        name: "firstNumber",
    },
    {
        message: "Enter Second Number",
        type: "number",
        name: "secondNumber",
    },
    {
        message: "Select one of the operators to perform operation",
        type: "list",
        name: "operator",
        choices: [
            "Addition",
            "Subtraction",
            "Multiplication",
            "Division",
            "Exponentiation",
            "Modulus",
            "BMI Calculator",
        ],
    },
]);
if (answer.operator === "Addition") {
    console.log("Your value is: ", answer.firstNumber + answer.secondNumber);
}
else if (answer.operator === "Subtraction") {
    console.log("Your value is: ", answer.firstNumber - answer.secondNumber);
}
else if (answer.operator === "Multiplication") {
    console.log("Your value is: ", answer.firstNumber * answer.secondNumber);
}
else if (answer.operator === "Division") {
    console.log("Your value is: ", answer.firstNumber / answer.secondNumber);
}
else if (answer.operator === "Exponentiation") {
    console.log("Your value is: ", Math.pow(answer.firstNumber, answer.secondNumber));
}
else if (answer.operator === "Modulus") {
    console.log("Your value is: ", answer.firstNumber % answer.secondNumber);
}
else if (answer.operator === "BMI Calculator") {
    const bmi = answer.firstNumber / Math.pow(answer.secondNumber, 2);
    console.log("Your value is: ", bmi);
}
else {
    console.log("Please select valid operator");
}
