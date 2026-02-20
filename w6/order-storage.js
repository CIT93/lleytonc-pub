// Unique Key
const LOCAL_STORAGE_KEY = 'tshirt_orders_data';

// Export saveOrders Function
export const saveOrders = function (orders) {
    try {
        localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(orders));
        console.log('Orders saved to localStorage successfully');
    } catch (error) {
        console.error(`Error saving orders to local storage: ${error}`);
    }
};

// Export loadOrders function
export const loadOrders = function () {
    try {
        const dataString = localStorage.getItem(LOCAL_STORAGE_KEY);
        if (dataString) {
            return JSON.parse(dataString);
        }

        return [];
    } catch (e) {
        console.error(`Error loading orders from localStorage: ${e}`);
        localStorage.removeItem(LOCAL_STORAGE_KEY);
        return [];
    }
};