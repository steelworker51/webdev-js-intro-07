"use strict";

// Define the elements from the DOM
const submissionBtn = document.getElementById("submission-btn");
const remainderElement = document.getElementById("remainder");
const checkIfEvenElement = document.getElementById("check-if-even");
const lostNumbersElement = document.getElementById("lost-numbers");

// Define the lostNumbers array
const lostNumbers = [4, 8, 15, 16, 23, 42];

// Function to return the remainder of two numbers
function returnTheRemainder(a, b) {
    return a % b;
}

// Function to check if a number is even
function checkIfEven(num) {
    return num % 2 === 0;
}

// Function to get the fourth element of the lostNumbers array
function getTheFourthElement(arr) {
    return arr[3]; // Index 3 corresponds to the 4th element
}

// Event listener for the submit button
submissionBtn.addEventListener("click", function() {
    // Get the result of returnTheRemainder with 5 and 4
    const remainderResult = returnTheRemainder(5, 4);
    remainderElement.textContent = remainderResult;

    // Get the result of checkIfEven with 47
    const checkIfEvenResult = checkIfEven(47);
    checkIfEvenElement.textContent = checkIfEvenResult;

    // Get the result of getTheFourthElement
    const fourthElement = getTheFourthElement(lostNumbers);
    lostNumbersElement.textContent = fourthElement;
});
