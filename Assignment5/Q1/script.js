"use strict";

const apiData = ["25", "true", "false", "NaN", " ", "100px", "3.14", null, undefined];

let valid = [];
let invalid = [];

for (let value of apiData) {

    let num = Number(value);
    let bool = Boolean(value);
    let str = String(value);

    console.log("Original Value:", value);
    console.log("Number:", num);
    console.log("Boolean:", bool);
    console.log("String:", str);

    // Checking invalid numeric values
    if (Number.isNaN(num) || String(value).trim() === "") {
        invalid.push(value);
        console.log("Status: Invalid Number");
    }
    else {
        valid.push(num);
        console.log("Status: Valid Number");
    }

    console.log("-------------------------");
}

console.log("Valid Numeric Array:", valid);
console.log("Invalid Array:", invalid);