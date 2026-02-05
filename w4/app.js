console.log('Hello from app.js! Your JavaScript is connected and running!');

import * as orderForm from "./order-handler.js";
import * as priceCalculator from './price-calculator.js';


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
};

const init = function () {
    orderFormElement.addEventListener("submit", handleOrderSubmit);
    console.log("App Initialized");
};

document.addEventListener("DOMContentLoaded", init)
