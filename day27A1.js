// const firstParagraph = document.querySelector('p');
// console.log(firstParagraph.textContent);
// //1. Get the first paragraph using document.querySelector(tagname)
const firstParagraph = document.querySelector('p');
console.log(firstParagraph.textContent); // Output: First Paragraph

// 2. Get each paragraph using document.querySelector('#id') by their ID
const paragraph1 = document.querySelector('#para1');
const paragraph2 = document.querySelector('#para2');
const paragraph3 = document.querySelector('#para3');
const paragraph4 = document.querySelector('#para4');

console.log(paragraph1.textContent); // Output: First Paragraph
console.log(paragraph2.textContent); // Output: Second Paragraph
console.log(paragraph3.textContent); // Output: Third Paragraph
console.log(paragraph4.textContent); // Output: Fourth Paragraph

// 3. Get all the p elements as a NodeList using document.querySelectorAll(tagname)
const allParagraphs = document.querySelectorAll('p');

// 4. Loop through the NodeList and log the text content of each paragraph
allParagraphs.forEach(paragraph => {
    console.log(paragraph.textContent);
});

// 5. Set a new text content to the fourth paragraph
paragraph4.textContent = 'Updated Fourth Paragraph';
console.log(paragraph4.textContent); // Output: Updated Fourth Paragraph

// 6. Create a timer function that shows the message "Time out" after 5 seconds
setTimeout(() => {
    console.log('Time out'); // Output after 5 seconds: Time out
}, 5000);
