console.log('Hello from app.js! Your JavaScript is connected and running!');

import * as orderForm from "./order-handler.js";
import * as priceCalculator from './price-calculator.js';
import * as orderStorage from './order-storage.js';
import * as orderList from './order-list.js';

const orderFormElement = document.getElementById("order-form");
//const orderSummary = document.getElementById("order-summary");

const orders = [];

const handleOrderSubmit = function (event) {
    event.preventDefault();

    const orderData = orderForm.getOrderInputs();
    const priceData = priceCalculator.calculateTotal(orderData);

    const orderId = document.getElementById('order-id').value;

    if (orderId) {
        const indexToUpdate = orders.findIndex(function (order) {
            return order.id === orderId;
        });

        if (indexToUpdate !== -1) {
            orders[indexToUpdate] = {
                ...orders[indexToUpdate],
                ...orderData,
                ...priceData
            };
        }

    } else {
        const newOrder = {
            id: Date.now().toString(),
            ...orderData,
            ...priceData,
            timestamp: new Date().toISOString()
        };

        orders.push(newOrder);
    }

    orderStorage.saveOrders(orders);

    orderList.renderOrders(orders, {
        onDelete: handleDelete,
        onEdit: handleEdit
    });

    document.getElementById('order-id').value = '';
    orderFormElement.reset();
};

const handleClearForm = function () {
    orderForm.clearForm();
    console.log('reset button clicked');
};

const handleDelete = function (id) {
    console.log("App.js: Requesting delete for order", id);

    const indexToDelete = orders.findIndex(function (order) {
        return order.id === id;
    });

    if (indexToDelete !== -1) {
        orders.splice(indexToDelete, 1);
    }

    orderStorage.saveOrders(orders);
    orderList.renderOrders(orders, {
        onDelete: handleDelete,
        onEdit: handleEdit
    });
};

const handleEdit = function (id) {
    console.log("App.js: Requesting edit for order", id);

    const orderToEdit = orders.find(function (order) {
        return order.id === id;
    });

    if (orderToEdit) {
        document.getElementById('qty').value = orderToEdit.qty
        const sizeRadios = document.querySelectorAll('input[name="size"]')
        for (const radio of sizeRadios) {
            if (radio.value === orderToEdit.size) {
                radio.checked = true;
            }
        }

        document.getElementById('gift-wrap').checked = orderToEdit.giftWrap;
        document.getElementById('order-id').value = orderToEdit.id;


    }
};


const init = function () {
    console.log("App Initialized");
    const loadedOrders = orderStorage.loadOrders();
    if (loadedOrders.length > 0) {
        orders.push(...loadedOrders);
        console.log('Orders loaded');

        orderList.renderOrders(orders, {
            onDelete: handleDelete,
            onEdit: handleEdit
        });
    }
    orderFormElement.addEventListener("submit", handleOrderSubmit);
    orderFormElement.addEventListener("reset", handleClearForm);
};

document.addEventListener("DOMContentLoaded", init)
