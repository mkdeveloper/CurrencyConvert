#! /usr/bin/env node
import chalk from "chalk";
import inquirer from "inquirer";
import convert from "./helper/convert_to.js";
import exchangeRates from "./helper/exchangeRates.js";
import { exit } from "process";
import welcome from "./helper/welcome.js";
let msg = `
******************************************
     Welcome To Mk Currency Converter
******************************************
`;
await welcome(msg);
async function main() {
    const { amount, to, from } = await inquirer.prompt([
        {
            name: "from",
            type: "list",
            choices: Object.keys(exchangeRates),
            message: "From which currency: ",
        },
        {
            name: "to",
            type: "list",
            choices: Object.keys(exchangeRates),
            message: "To which currency: ",
        },
        {
            name: "amount",
            type: "number",
            message: "Please Enter amount",
        },
    ]);
    const convertTo = convert(to);
    const convertFrom = convert(from);
    if (!isNaN(amount)) {
        const result = (convertTo * amount) / convertFrom;
        console.log(result.toFixed(4));
        const { restart } = await inquirer.prompt({
            name: "restart",
            type: "list",
            choices: ["Yes", "No"],
            message: "Do you want to use currency coverter again?",
        });
        if (restart === "Yes") {
            await main();
        }
        else {
            msg = `
*********************************************
  Thank you for using Mk Currency Converter
*********************************************
`;
            await welcome(msg);
            exit(0);
        }
    }
    else {
        console.log(chalk.redBright("Wrong Entry"));
        await main();
    }
}
main();
