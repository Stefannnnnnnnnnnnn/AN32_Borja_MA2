/*
For lines 4-6 of this code, I declared the store name, location, and capacity
I set their values accordingly with string for the name and location and integer for capacity
*/
const storeName = "One Outs";
const storeLocation = "Los Banos, Laguna";
const storeCapacity = 350;

// Placeholder for product name, price, and quantity
let name;
let price;
let quantity;

//Declaration of Object Array according to instruction
let productItems = [
    {name: "Laptop", price: 18999, quantity: 50},
    {name: "Smartphone", price: 9999, quantity: 100},
    {name: "Tablet", price: 12999, quantity: 80}
];

/*
After declaration of array, the following lines of code are for the computations
Let keyword was used because the values will be updated before output to console
*/
let totalNumberProducts = 0;

for (let products of productItems) {
    totalNumberProducts += products.quantity;
}

let totalInventoryValue = 0;

//This is for computing the total value of inventory
for (let products of productItems) {
    totalInventoryValue += products.price * products.quantity;
}

const addLaptop = 10;
productItems[0].quantity += addLaptop;

let highestPriceProductName = ""; //Placeholder for highest value product
let highestPrice = 0; //Initialization of highest price 

//This block of code is for determining which is the highest value product
for (let products of productItems) {
    if (products.price > highestPrice) {
        highestPrice = products.price;  
        highestPriceProductName = products.name;  
    }
}

//This is where the script is output to console
console.log("Store Name: ", storeName);
console.log("Store Location: ", storeLocation);
console.log("Total Number of Products: ", totalNumberProducts);
console.log("Total Inventory Value: ", totalInventoryValue);
console.log("Updated Laptop Quantity: ", productItems[0].quantity);
console.log("Most Expensive Product: ", highestPriceProductName);
