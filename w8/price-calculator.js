// Define Prices
const shirtPrice = 15;
const giftWrapPrice = 2;

// Export a Function
export const calculateTotal = function(orderData) {
    console.log('Inside the Calculator');
    let total = orderData.qty * shirtPrice;

    if (orderData.giftWrap) {
    total += giftWrapPrice;
    }
    return {
    totalPrice: total
    }
};