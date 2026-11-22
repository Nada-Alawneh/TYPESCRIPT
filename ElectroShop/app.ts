// part 1: 
let storeName: string;
let storeDescription: string;
let currency: string;
let availableProducts: number;
let isStoreOpen: boolean = true;


// part 3:
let electronicProducts: string[] = [    
"Smartphone",
"Laptop",
"Tablet",
"Smartwatch",
"Headphones"
];

let productDetails: (string | number | boolean)[] = [
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

let price : number = 149.99; 
if (price > 500) {
    console.log("Expensive Product");
}
else if (price >= 100 && price <= 500) {
    console.log("Medium Price");
}
else {
    console.log("Affordable Product");
}

for (let i: number = 0; i < electronicProducts.length; i++) {
    console.log(electronicProducts[i]);
}

let count : number = 0;
for (let i: number = 1; i <productDetails.length ; i += 3)
{
let price = productDetails[i];
    if (typeof price === "number" && price > 100) {
        count++;
    }
}
console.log(count);


// part 5:
function calculateDiscount(originalPrice: number, discountPercentage: number): number {
    let discountAmount: number = (originalPrice * discountPercentage) / 100;
    let finalPrice: number = originalPrice - discountAmount;
    return finalPrice;
}
console.log(calculateDiscount(100,0.15));


function checkProductAvailability(quantity: number): string {
    if (quantity > 0) {
        return "In Stock";
    } else {
        return "Out of Stock";
    }
}
console.log(checkProductAvailability(100));


function displayStoreMessage(message: string): void {
    console.log(message);
}
displayStoreMessage("hello from the store");


//part 6:
function displayProductInfo(productName: string, productPrice: number,
     productDescription?: string, currency: string = "USD"): void {
    console.log(`Product Name: ${productName}`);
    console.log(`Product Price: ${productPrice} ${currency}`);
    if (productDescription) {
        console.log(`Product Description: ${productDescription}`);
    }
}
displayProductInfo("tv",1000," good tv");
displayProductInfo("tv",1000," good tv","JOD");

// part 7:
function calculateTotalPrice (...num : number[]): number{
    let total: number = 0;

    num.forEach(element => {
        total += element;
    });

    return total;
}
console.log(calculateTotalPrice(100, 200, 50, 100));
console.log(calculateTotalPrice(100, 200));

// 4. Main Practical Requirement – Load Products
interface electronicproducts
{
 name : string,
 description :string,
 price : number
}

let array : electronicproducts[]=[
    {
 name : "Laptop",
 description :"Core i5, 8GB RAM",
 price : 650
    },
    {
 name : "Headphones",
 description :"Wireless Bluetooth headphones",
 price : 75
    },
    {
 name : "Keyboard",
 description :"Mechanical gaming keyboard",
 price : 45

    }
];

function load () : void{
    let heading =document.getElementById("heading")
    let container = document.getElementById("container");

    if (container){
    container.innerHTML="";
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

document.getElementById("btn")?.addEventListener("click",load);