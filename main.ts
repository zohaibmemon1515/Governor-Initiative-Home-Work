import inquirer from "inquirer"

const currency:any = {
    USD : 1,
    EUP : 0.91,
    GPB : 0.76,
    INR : 74.57,
    PKR : 280,
};
let user_Answer = await inquirer.prompt(
    [
        {
            name : "from",
            message : "Enter from currency",
            type : "list",
            choices : ['USD' , 'EUP' , 'GPB' , 'INR' ,'PKR']
            
        },
        {
            name : "To",
            message : "Enter to currency",
            type : "list",
            choices: ['USD' , 'EUP' , 'GPB' , 'INR' ,'PKR']
        },
        {
            name : "amount",
            message : "Enter your amount",
            type : "number",
        }
    ]
)
let fromAmount = currency[user_Answer.from]
let toAmount = currency[user_Answer.To]
let amount = user_Answer.amount
let baseAmount = amount/fromAmount 
let convertedAmount = baseAmount*toAmount
console.log(convertedAmount)
