import inquirer from "inquirer";
let todos = [];
let condition = "true";
while (condition) {
    let todoQuestions = await inquirer.prompt([
        {
            name: "firstQuestion",
            type: "input",
            message: "what you want to add in todos?",
        },
        {
            name: "secondQuestion",
            type: "confirm",
            message: "Do you want to add?",
            default: "true",
        }
    ]);
    todos.push(todoQuestions.firstQuestion);
    console.log(todos);
    if (todoQuestions.secondQuestion) {
        console.log("exiting");
        break;
    }
}
