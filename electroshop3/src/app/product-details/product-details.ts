import { Component,EventEmitter,Input,Output,signal } from '@angular/core';

@Component({
  selector: 'app-product-details',
  standalone: false,
  styleUrl: './product-details.css',
  templateUrl: './product-details.html',
})
export class ProductDetails {
  @Input() productName: string = '';
  @Input() productDescription: string = '';
  @Input() productPrice: number =0;
  @Input() isAvailable: boolean = false;

  quantity = signal<number>(1);

  increaseQuantity() {
    this.quantity.update((value) => value + 1);
  }
 
  decreaseQuantity() {
    if (this.quantity() > 1) {
      this.quantity.update((value) => value - 1);
    }
  }


   @Output() itemAdded = new EventEmitter<{
   productName: string;
    quantity: number }>();

    
  addToCart(): void {
  this.itemAdded.emit({
    productName: this.productName,
    quantity: this.quantity(),
  });
}
}
