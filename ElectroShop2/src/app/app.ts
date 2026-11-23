import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-root',
  standalone: false,
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('ElectroShop2');
// part 1:
  storeName:string=    "ElectroShop";
  storeDescription:string=    "Your favorite electronics store";
  storeAddress:string =    "    Amman, Jordan";
  totalProducts:number=    12;
  isStoreOpen:boolean=true;
  currency:string="USD";

//part 2:
  productNames: string[] = ["Laptop", "Smartphone", "Headphones", "Smartwatch","Keyboard"];
  productPrices: number[] = [750, 450, 80, 120,45];
  featuredProduct: { name: string; price: number; description: string } = {
    name: "Laptop",
    price: 750,
    description: "High-performance laptop for work and play."
  };

  storeStatus: string = "";
  discountPercentage: number = 10;
  finalPrice: number = 0;

  productCount: number = this.productNames.length;
  highestPrice: number = this.productPrices[0];
  lowestPrice: number = this.productPrices[0];
  totalProductsValue: number = 0;

  constructor() {
     if (this.isStoreOpen == true) {
         this.storeStatus = "We Are Open";
       }
      else {
         this.storeStatus = "We Are Closed";
       }

    if (this.discountPercentage > 0) {
      this.finalPrice = this.featuredProduct.price - (this.featuredProduct.price * this.discountPercentage / 100);
    }
     else {
         this.finalPrice = this.featuredProduct.price;
       }

    for (let price of this.productPrices) {
      if (price > this.highestPrice) {
        this.highestPrice = price;
      }
      if (price < this.lowestPrice) {
        this.lowestPrice = price;
      }
      this.totalProductsValue += price;
    }
  }

}
