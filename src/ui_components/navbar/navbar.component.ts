// navbar.component.ts
import { Component } from '@angular/core';
import { 
  LucideAngularModule, 
  Menu, 
  X, 
  ShoppingCart, 
  User, 
  Search,
  ChevronDown
} from 'lucide-angular';
import { SharedModule } from '../../modules/shared.module';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [SharedModule],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  isMenuOpen = false;
  
  // Menu items
  menuItems = [
    { name: 'Home', href: '/', subItems: [] },
    // { name: 'Products', href: '/products', subItems: [
    //   { name: 'Product 1', href: '/products/1' },
    //   { name: 'Product 2', href: '/products/2' }
    // ]},
    { name: 'Partners', href: '/partners', subItems: [] },
    { name: 'Services', href: '/services', subItems: [] },
    { name: 'About', href: '/about', subItems: [] },
    { name: 'Contact', href: '/contact', subItems: [] }
  ];

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }
}