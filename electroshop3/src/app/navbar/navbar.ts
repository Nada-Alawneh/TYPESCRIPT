import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  standalone: false,
  styleUrl: './navbar.css',
  templateUrl: './navbar.html',
})
export class Navbar {
//navbar req
 selectedPage = 'Home';

  selectPage(page: string): void {
    this.selectedPage = page;}
  

}
