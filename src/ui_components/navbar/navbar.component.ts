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
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [SharedModule],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  menuItems: { name: any; href: string; subItems: never[]; }[] | undefined;
  constructor(private translate: TranslateService) {}

  isMenuOpen = false;
  ngOnInit() {
  this.translate.stream([
    'NAV.HOME',
    'NAV.PARTNERS',
    'NAV.SERVICES',
    'NAV.ABOUT',
    'NAV.CONTACT',
    'NAV.LOGIN',
    'NAV.DASHBOARD',
  ]).subscribe(translations => {
    this.menuItems = [
      { name: translations['NAV.HOME'], href: '/', subItems: [] },
      { name: translations['NAV.PARTNERS'], href: '/partners', subItems: [] },
      { name: translations['NAV.SERVICES'], href: '/services', subItems: [] },
      { name: translations['NAV.ABOUT'], href: '/about', subItems: [] },
      { name: translations['NAV.CONTACT'], href: '/contact', subItems: [] },
      { name: translations['NAV.LOGIN'], href: '/login', subItems: [] },
      { name: translations['NAV.DASHBOARD'], href: '/dashboard', subItems: [] },
    ];
  });
}



  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }
}