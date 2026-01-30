console.log('Hello from app.js! Your JavaScript is connected and running!');

import * as orderForm from "./order-handler.js";

const orderFormElement = document.getElementById("order-form");
const orderSummary = document.getElementById("order-summary");

const handleOrderSubmit = function(event) {
    event.preventDefault();
   const orderData = orderForm.getOrderInputs();
   orderSummary.textContent = (`Ordered ${orderData.qty} ${orderData.size} T-shirts`);
};

const init = function () {
    orderFormElement.addEventListener("submit", handleOrderSubmit);
    console.log("App Initialized");
};

document.addEventListener("DOMContentLoaded", init)
