// Calculates points for Household Size based on WikiHow Method 1.
// @param {number} householdMembers - Number of people in the household.

const calculateHouseholdPoints = function(householdMembers) {
    //console.log(householdMembers);
   // if(householdMembers === 1) {
        //return 14;
    // } else if (householdMembers === 2) {
        //return 12;
    // }
//omits block delimiters for single statements
if(householdMembers === 1) return 14;
else if (householdMembers === 2) return 12;
else if (householdMembers === 3) return 10;
else if (householdMembers === 4) return 8;
else if (householdMembers === 5) return 6;
else if (householdMembers > 5) return 4; // 6+ people total
return 0; // Default or invalid input

};

// Calculates points for Home Size based on WikiHow Method 1
// @param {number} homeSquareFootage - Square footage of the home.
// @param {boolean} isApartment - True if dwelling is an apartment.
// @returns {number} Points for home size.

const calculateHomeSizePoints = function(homeSquareFootage, isApartment) {
    if(isApartment) return 2;
    else if(homeSquareFootage > 2000) return 10;
    else if(homeSquareFootage >= 1000) return 7;
    else if(homeSquareFootage > 0) return 4;
    return 0; // Default or invalid input
};

// @param {string} dietType - Type of diet ('meatHeavy', 'average', 'vegetarian', 'vegan')
// @returns {number} Points for diet type.
const calculateFoodDietPoints = function(dietType) {
    switch(dietType) {
        case 'meatHeavy': return 10;
        case 'average': return 8;
        case 'vegetarian': return 4;
        case 'vegan': return 2;
        default: return 0;
    }
};

// Calculates points for Food Packaging based on WikiHow Method 1.
// @param {string} foodPackaging - Type of food packaging ('prepackaged', 'balanced', 'fresh').
// @returns {number} Points for food packaging.
const calculateFoodPackagingPoints = function(foodPackaging) {
    switch(foodPackaging) {
        case 'prepackaged': return 12;
        case 'balanced': return 6;
        case 'fresh': return 2;
        default: return 0;
    }
}

// This module contains the core logic for calculating carbon footprint points.
// Calculate points for each category using our dedicated helper functions
// This function orchestrates calls to the smaller, specialized calculation functions.
// It exports 'calculateFootprint' so other modules (like app.js) can use it.
// Return the breakdown of points for each category, and the total (for now we will just setup a key and return it's value)
// @param {Object} data - An object containing input values for the categories:
// householdMembers (number)
// homeSquareFootage (number)
// isApartment (boolean)
// dietType (string)
// foodPackaging (string)

export const calculateFootprint = function(data) {
    //console.log('inside calculateFootprint function in the calculator.js module')
    const householdPoints = calculateHouseholdPoints(data.householdMembers);
    const homeSizePoints = calculateHomeSizePoints(data.homeSquareFootage, data.isApartment);
    const dietTypePoints = calculateFoodDietPoints(data.dietType);
    const foodPackagingPoints = calculateFoodPackagingPoints(data.foodPackaging);
    // Sum up all category points for the total footprint
    
const totalFootprintPoints = householdPoints + homeSizePoints + dietTypePoints + foodPackagingPoints;

    return {
        totalFootprint: totalFootprintPoints,
        householdFootprint: householdPoints,
        homeSizeFootprint: homeSizePoints,
        dietTypeFootprint: dietTypePoints,
        foodPackagingFootprint: foodPackagingPoints
    };
};