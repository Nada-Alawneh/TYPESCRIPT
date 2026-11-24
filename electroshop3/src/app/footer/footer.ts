import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  standalone: false,
  styleUrl: './footer.css',
  templateUrl: './footer.html',
})
export class Footer {
  storeName: string = "Nada's Store";
  storeAddress: string = "123 Main Street, Irbid, Jordan";
  contactEmail: string = "info@nadasstore.com";
  copyrightMessage: string = "© 2024 Nada's Store. All rights reserved.";
}
