// TBody
const orderTableBody = document.getElementById('order-table-body')

// Date
const formatDateForDisplay = function (timestamp) {
    const date = new Date(timestamp);
    return date.toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'short',
        day: 'numeric'
    });
};

const createTableRow = function (order) {
    const row = document.createElement('tr');

    row.innerHTML = `
    <td>${formatDateForDisplay(order.timestamp)}</td>
    <td>${order.qty}</td>
    <td>${order.size}</td>
    <td>${order.totalPrice}</td>
    `;

    return row;
};

export const renderOrders = function (orders) {
    orderTableBody.innerHTML = '';
    console.log('inside orderList')

    if (orders.length === 0) {
        return;
    }


    for (const order of orders) {
        console.log(`${order}`)
        const rowElement = createTableRow(order);
        orderTableBody.appendChild(rowElement);
    }

};