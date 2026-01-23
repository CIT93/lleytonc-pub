console.log('Hello from app.js! Your JavaScript is connected and running!');
// --- Part 1: Select HTML Elements ----
// We use document.getElementById() to get a reference to an element by its unique ID.
// We store these references in 'const' variables because the elements themselves won't change.
const messageDisplayElement = document.getElementById("output-message");
const updateButton = document.getElementById("update-button");

//These variables will change as the user interacts with the page.
let userName = 'Lleyton';
let clickCount = 0;

// --- Part 2: Define and call the handleButtonClick Function---
// A function is a block of code designed to perform a particular task.

const handleButtonClick = function() {
    // clickCount = clickCount + 1;
    // Increase clickCount by 1 each time the button is clicked
    clickCount += 1;

    // Template strings (literal) to easily combine our variables and text into one message
    let message = `Hello, ${userName}! You have clicked the button ${clickCount} time(s).`;

    // This is basic decision-making in JavaScript!
    // Use a simple 'if' statement to make our page react differently based on clickCount.
    if(clickCount >= 5) {
        // We can even change the style of an HTML element directly with JavaScript!
        // Change text color
        message += ' WOW, you are a super clicker!';
        messageDisplayElement.style.color = 'purple';
    } else {
        messageDisplayElement.style.color = '#333';
    }
    // Update the text content of our paragraph element on the page.
    // This is how JavaScript makes changes visible on the web page!
    messageDisplayElement.textContent = message;

    console.log(`Button Clicked! Current click count: ${clickCount}`)     
};


document.addEventListener('DOMContentLoaded', function(){
    // --- Part 3: Make the Button Clickable (Event Listener) ---
    // This part ensures our JavaScript code runs only AFTER the HTML is fully loaded and parsed.
   // The 'DOMContentLoaded' event is perfect for this. It fires when the HTML document is ready

    console.log('DOM fully loaded and parsed, App is ready for interaction')
    // Attach an event listener to our 'updateButton.
    // When 'updateButton' receives a 'click' event, the 'handleButtonClick' function will execute.
    updateButton.addEventListener('click', handleButtonClick);
    
    messageDisplayElement.textContent = `Welcome, ${userName}! Click the button below to start counting`
})