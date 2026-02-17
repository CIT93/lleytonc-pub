console.log('Hello from app.js! Your JavaScript is connected and running!');

import * as orderForm from "./order-handler.js";
import * as priceCalculator from './price-calculator.js';
import * as resultsDisplay from './results-display.js';

const orderFormElement = document.getElementById("order-form");
//const orderSummary = document.getElementById("order-summary");

const orders = [];

const handleOrderSubmit = function(event) {
    event.preventDefault();
   const orderData = orderForm.getOrderInputs();
   const priceData = priceCalculator.calculateTotal(orderData);

   const newOrder = {
    ...orderData,
    ...priceData,
    timestamp: new Date().toISOString()
   }

   orders.push(newOrder);
   console.log(orders);

   resultsDisplay.displayResults(newOrder);
};

const handleClearForm = function() {
    orderForm.clearForm();
    console.log('reset button clicked');
    resultsDisplay.hideResults();
};
    

const init = function () {
    console.log("App Initialized");
    orderFormElement.addEventListener("submit", handleOrderSubmit);
    orderFormElement.addEventListener("reset", handleClearForm);
};

document.addEventListener("DOMContentLoaded", init)
