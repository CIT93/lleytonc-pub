

const quantityInput = document.getElementById("qty");
const giftWrapCheckbox = document.getElementById("gift-wrap");
const sizeRadios = document.querySelectorAll('input[name=size]');

const getSelectedSize = function (radioButtons) {
    for (const radio of radioButtons) {
        if (radio.checked) {
    
    console.log(`${radio.value} has the attribute of ${radio.checked}`);
    return radio.value;
   
        }
    }
}


export const getOrderInputs = function() {
    console.log('Getting order inputs');
    return {
        qty: parseInt(quantityInput.value) || 10,
        size: getSelectedSize(sizeRadios),
        giftWrap: giftWrapCheckbox.checked,
    };  
};
