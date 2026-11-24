import { Component } from '@angular/core';

@Component({
  selector: 'app-product-list',
  standalone: false,
  styleUrl: './product-list.css',
  templateUrl: './product-list.html',
})
export class ProductList {
  products = [
    {name: 'Laptop', description: 'High-performance laptop', price: 750,imageUrl: 'https://www.01net.com/app/uploads/2021/09/Apple-MacBook-Pro-16-Pouces-2019-face.jpg', available: true},
    {name: 'Smartphone', description: 'Latest smartphone', price: 450,imageUrl: 'https://storage.googleapis.com/bfile-prod-assets-img/a2z/asin/B09G9FB7LV-large.jpg', available: true},
    {name: 'Headphones', description: 'Wireless headphones', price: 80,imageUrl: 'https://sony.cdn-nhncommerce.com/Mall-No-A3ju/20230224/153859.385284000/109924761_1.png', available: true},
    {name: 'SmartWatch', description: 'Smart fitness watch', price: 120,imageUrl: 'https://m.media-amazon.com/images/I/61KUCtwFklL.jpg', available: true},
    {name: 'Keyboard', description: 'Mechanical keyboard', price: 45,imageUrl: 'https://i.ebayimg.com/images/g/yvUAAOSwuTVlsge3/s-l1200.jpg', available: false}
  ];

  alert(message: string) {
    window.alert(message);
  }
}
