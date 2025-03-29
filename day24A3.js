
const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

const myAge = 25; // My age

rl.question("Enter your age: ", (yourAge) => {
    yourAge = parseInt(yourAge);

    if (!isNaN(yourAge)) {
        if (yourAge > myAge) {
            const difference = yourAge - myAge;
            console.log(`You are ${difference} years older than me.`);
        } else if (yourAge < myAge) {
            const difference = myAge - yourAge;
            console.log(`I am ${difference} years older than you.`);
        } else {
            console.log("We are the same age.");
        }
    } else {
        console.log("Please enter a valid age.");
    }

    rl.close();
});
