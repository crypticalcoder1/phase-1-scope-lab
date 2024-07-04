// Write your solution in this file!
var customerName = 'bob';

function upperCaseCustomerName() {
    customerName = customerName.toUpperCase();
}

var bestCustomer;

function setBestCustomer() {
    bestCustomer = 'not bob'; // Assign 'not bob' to the global variable bestCustomer
}

function overwriteBestCustomer() {
    bestCustomer = 'maybe bob'; // Assigns a new value to the already defined bestCustomer
}

const leastFavoriteCustomer = 'Alice';

function changeLeastFavoriteCustomer() {
    leastFavoriteCustomer = 'John'; // Attempting to reassign a constant will throw an error in strict mode
}

// Exporting functions for testing purposes
module.exports = {
    upperCaseCustomerName,
    setBestCustomer,
    overwriteBestCustomer,
    changeLeastFavoriteCustomer
};
