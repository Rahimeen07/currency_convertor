import inquirer from "inquirer";
let Conversion = {
    "PKR": {
        "USD": 0.0044,
        "GBP": 0.0037,
        "PKR": 1
    },
    "GBP": {
        "USD": 1.21,
        "PKR": 271.79,
        "GBP": 1
    },
    "USD": {
        "PKR": 225.50,
        "GBP": 0.83,
        "USD": 1
    }
};
const answer = await inquirer.prompt([
    {
        type: "list",
        name: "From",
        choices: ["PKR", "GBP", "USD"],
        message: "select your currency",
    },
    {
        type: "list",
        name: "to",
        choices: ["PKR", "GBP", "USD"],
        message: "select your conversion currency :",
    },
    {
        type: "number",
        name: "amount",
        message: "Enter your conversion amount :",
    }
]);
const { from, to, amount } = answer;
if (from && to && amount) {
    let result = Conversion[from][to] * amount;
    console.log(`Your conversion from $(from)to $(to)`);
}
else {
    console.log("Invalid inputs");
}
