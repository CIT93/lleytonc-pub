
const LOCAL_STORAGE_KEY = 'carbonFootprintEntries';

export const saveEntries = function(entries) {

    // localStorage can only store strings. We must convert our JavaScript array of objects
    // into a JSON string using JSON.stringify() before saving.
    // Try Catch Block - Error Checking
    try {
        localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(entries));
        console.log('Data saved to localStorage Sucessfully!');
    } catch (error) {
        console.error(`Error saving data to localStorage: ${error} `)
    };
};
export const generateUniqueId = function () {
    return Date.now().toString();
};

// Loads all carbon footprint entries from localStorage.
// @returns {Array} An array of carbon footprint entry objects. Returns an empty array if no data is found or if parsing fails.

export const loadEntries = function () {
    try {
        const dataString = localStorage.getItem(LOCAL_STORAGE_KEY);
        if (dataString) {
            return JSON.parse(dataString);
        }
        return [];

    } catch (e) {
        console.error(`Error loading entries from localStorage: ${e}`);
        localStorage.removeItem(LOCAL_STORAGE_KEY);
    }

};
// Clear all data from localStorage for our app.
// This function removes the specific key used by our app from localStorage.
export const clearAllEntries = function() {
    localStorage.removeItem(LOCAL_STORAGE_KEY);
    console.log('All entries clear from localStorage');
}