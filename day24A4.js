const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Define the function to determine grade
function getGrade(score) {
    if (score >= 80 && score <= 100) {
        return 'A';
    } else if (score >= 70 && score <= 79) {
        return 'B';
    } else if (score >= 60 && score <= 69) {
        return 'C';
    } else if (score >= 50 && score <= 59) {
        return 'D';
    } else if (score >= 0 && score <= 49) {
        return 'F';
    } else {
        return 'Invalid score';
    }
}

// Take user input
rl.question("Enter the student's score: ", function(studentScore) {
    studentScore = parseInt(studentScore); // Convert input to a number
    if (isNaN(studentScore)) {
        console.log("Invalid input. Please enter a valid number.");
    } else {
        console.log(`The grade is: ${getGrade(studentScore)}`);
    }
    rl.close(); // Close the interface
});

