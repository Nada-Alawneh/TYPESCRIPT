import { Component } from '@angular/core';

@Component({
  selector: 'app-product-details',
  standalone: false,
  styleUrl: './product-details.css',
  templateUrl: './product-details.html',
})
export class ProductDetails {
  productName: string = 'Laptop';
  productDescription: string = 'High-performance laptop';
  productPrice: number = 750;
  productImage: string = 'https://www.01net.com/app/uploads/2021/09/Apple-MacBook-Pro-16-Pouces-2019-face.jpg';  
  quantity: number = 1;
  isAvailable: boolean = true;
  discountPercentage: number = 10; 
}
