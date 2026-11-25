import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-root',
  standalone: false,
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('electroshop3');
 productName = signal<string>('Wireless Headphones');
productDescription = signal<string>('Bluetooth Headphones');
productPrice = signal<number>(120);
isAvailable = signal<boolean>(true);

  selectedItem: { productName: string; quantity: number } | null = null;
}
