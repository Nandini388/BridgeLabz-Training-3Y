"use strict";

const transactions = [
    { id: 1, amount: 2000 },
    { id: 2, amount: -500 },
    { id: 3 },
    null
];

let valid = [];
let invalid = [];

for (let transaction of transactions) {

    try {

        // Checking null entries
        if (transaction === null) {
            throw new Error("Null Transaction");
        }

        // Checking missing id or amount
        if (transaction.id === undefined ||
            transaction.amount === undefined) {
            throw new Error("Missing ID or Amount");
        }

        // Checking negative amount
        if (transaction.amount < 0) {
            throw new Error("Negative Amount");
        }

        valid.push(transaction);

        console.log("Valid Transaction:", transaction);

    }
    catch (error) {

        invalid.push(transaction);

        console.log("Error:", error.message);
    }
}

console.log("-------------------------");

console.log("Valid Transactions:", valid);
console.log("Invalid Transactions:", invalid);

console.log("Successful Count:", valid.length);
console.log("Failed Count:", invalid.length);