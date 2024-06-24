#! /usr/bin/env node

import inquirer from 'inquirer';

async function askTable() {
    const smallTable = await inquirer.prompt([
        {
            message: "Hello, I can provide tables from 2 to 20.",
            type: "list",
            name: "permission",
            choices: ["ok"]
        },
        {
            message: "Select one of the tables you want:",
            type: "list",
            name: "table",
            choices: ["2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "20"],
        }
    ]);

    let tableValue: number = parseInt(smallTable.table);

    if (tableValue >= 2 && tableValue <= 20) {
        for (let i = 1; i <= 10; i++) {
            console.log(`${tableValue} * ${i} = ${tableValue * i}`);
        }
        console.log(`This is a table of ${tableValue}`);
    } else {
        console.log("Invalid table value");
    }

    // Ask again for another table
    askAgain();
}

async function askAgain() {
    const answer = await inquirer.prompt([
        {
            message: "Do you want to select another table?",
            type: "list",
            name: "again",
            choices: ["Yes", "No"]
        }
    ]);

    if (answer.again === "Yes") {
        askTable();
    } else {
        console.log("Goodbye!");
    }
}

// Start the process
askTable();
