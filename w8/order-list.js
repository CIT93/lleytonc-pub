

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
    <td>
        <button class="edit-btn" data-id="${order.id}">Edit</button>
        <button class="delete-btn" data-id="${order.id}">Delete</button>
    </td>
    `;

    return row;
};

const orderTableBody = document.getElementById('order-table-body')

orderTableBody.addEventListener('click', function(event) {
    const target = event.target;
    
    // 1. Get the ID from the button that was clicked
    const id = target.dataset.id;

    // 2. Guard Clause: If they clicked a row (white space) but NOT a button, 
    // there will be no ID. So we stop the function immediately.
    if (!id) return;

    // 3. Temporary Test: Log the ID to prove it works!
    console.log("Clicked button with ID:", id); 
});

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