"use strict";
// part 1: 
let storeName;
let storeDescription;
let currency;
let availableProducts;
let isStoreOpen = true;
// part 3:
let electronicProducts = [
    "Smartphone",
    "Laptop",
    "Tablet",
    "Smartwatch",
    "Headphones"
];
let productDetails = [
    "Smartphone", 699.99, true,
    "Laptop", 1299.99, false,
    "Tablet", 499.99, true,
    "Smartwatch", 199.99, true,
    "Headphones", 149.99, false
];
// part 4:
if (isStoreOpen) {
    console.log("The store is open. Welcome!");
}
else {
    console.log("The store is closed. Please come back later.");
}
let price = 149.99;
if (price > 500) {
    console.log("Expensive Product");
}
else if (price >= 100 && price <= 500) {
    console.log("Medium Price");
}
else {
    console.log("Affordable Product");
}
for (let i = 0; i < electronicProducts.length; i++) {
    console.log(electronicProducts[i]);
}
let count = 0;
for (let i = 1; i < productDetails.length; i += 3) {
    let price = productDetails[i];
    if (typeof price === "number" && price > 100) {
        count++;
    }
}
console.log(count);
// part 5:
function calculateDiscount(originalPrice, discountPercentage) {
    let discountAmount = (originalPrice * discountPercentage) / 100;
    let finalPrice = originalPrice - discountAmount;
    return finalPrice;
}
console.log(calculateDiscount(100, 0.15));
function checkProductAvailability(quantity) {
    if (quantity > 0) {
        return "In Stock";
    }
    else {
        return "Out of Stock";
    }
}
console.log(checkProductAvailability(100));
function displayStoreMessage(message) {
    console.log(message);
}
displayStoreMessage("hello from the store");
//part 6:
function displayProductInfo(productName, productPrice, productDescription, currency = "USD") {
    console.log(`Product Name: ${productName}`);
    console.log(`Product Price: ${productPrice} ${currency}`);
    if (productDescription) {
        console.log(`Product Description: ${productDescription}`);
    }
}
displayProductInfo("tv", 1000, " good tv");
displayProductInfo("tv", 1000, " good tv", "JOD");
// part 7:
function calculateTotalPrice(...num) {
    let total = 0;
    num.forEach(element => {
        total += element;
    });
    return total;
}
console.log(calculateTotalPrice(100, 200, 50, 100));
console.log(calculateTotalPrice(100, 200));
let array = [
    {
        name: "Laptop",
        description: "Core i5, 8GB RAM",
        price: 650
    },
    {
        name: "Headphones",
        description: "Wireless Bluetooth headphones",
        price: 75
    },
    {
        name: "Keyboard",
        description: "Mechanical gaming keyboard",
        price: 45
    }
];
function load() {
    let heading = document.getElementById("heading");
    let container = document.getElementById("container");
    if (container) {
        container.innerHTML = "";
        for (let x of array) {
            container.innerHTML += `
                <div>
                    <h1>${x.name}</h1>
                    <p>${x.description}</p>
                    <p>Price: $${x.price}</p>
                    <hr>
                </div>
            `;
        }
    }
}
document.getElementById("btn")?.addEventListener("click", load);
