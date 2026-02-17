const orderContainer = document.getElementById('order-summary');

const totalDisplay = orderContainer.querySelector('#display-total');
const qtyDisplay = orderContainer.querySelector('#display-qty');
const sizeDisplay = orderContainer.querySelector('#display-size');
const giftDisplay = orderContainer.querySelector('#display-gift');

// Export a Function
export const displayResults = function(order) {
    totalDisplay.textContent = `${order.totalPrice}`;
    qtyDisplay.textContent = `${order.qty} ${order.size}`;
    giftDisplay.textContent = `${order.giftWrap}`;

    if (order.giftWrap) {
        giftDisplay.textContent = 'Yes';
    }
    else {
        giftDisplay.textContent = 'No';
    }

    orderContainer.style.display = 'block';
};

export const hideResults = function(){
    orderContainer.style.display = 'none';
};