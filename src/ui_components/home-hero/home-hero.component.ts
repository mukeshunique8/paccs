import { Component } from '@angular/core';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { SharedModule } from '../../modules/shared.module';
import { LanguageSwitcherComponent } from '../language-switcher/language-switcher.component';
import { HomeSlidersComponent } from "../home-sliders/home-sliders.component";
import { CATEGORY_ICONS, SERVICE_ICONS } from '../../constants/service-icons';
import { NgxFastMarqueeModule } from 'ngx-fast-marquee';

@Component({
  selector: 'app-home-hero',
  imports: [TranslateModule, SharedModule, HomeSlidersComponent,NgxFastMarqueeModule],
  templateUrl: './home-hero.component.html',
  styleUrl: './home-hero.component.css'
})
export class HomeHeroComponent {
  constructor(public translate: TranslateService) {}
 // In your component.ts file
 categories = [
    {
      name: 'UTILITY',
      services: ['BILL_PAYMENT', 'RECHARGE', 'AEPS', 'MONEY_TRANSFER'],
      color: 'bg-blue-50',
      border: 'border-blue-100',
      text: 'text-blue-900'
    },
    {
      name: 'BOOKING',
      services: ['BUS_TICKET_BOOKING', 'TRAIN_BOOKING'],
      color: 'bg-purple-50',
      border: 'border-purple-100',
      text: 'text-purple-900'
    },
    {
      name: 'GOVERNMENT',
      services: ['GST_REGISTRATION', 'GST_FILING', 'PASSPORT', 'PAN_NSDL', 'PAN_UTIITSL'],
      color: 'bg-green-50',
      border: 'border-green-100',
      text: 'text-green-900'
    },
    {
      name: 'FINANCIAL',
      services: ['LIC_PREMIUM', 'RD_SERVICE', 'INSURANCE', 'MOVE_TO_BANK', 'M_ATM'],
      color: 'bg-yellow-50',
      border: 'border-yellow-100',
      text: 'text-yellow-900'
    },
    {
      name: 'DIGITAL',
      services: ['DIGITAL_SIGNATURE', 'ANTI_VIRUS', 'PRODUCT_SALE'],
      color: 'bg-red-50',
      border: 'border-red-100',
      text: 'text-red-900'
    },
    {
      name: 'OTHER',
      services: ['ASTROLOGY', 'IT_FILING', 'IT_NOTICE', 'GST_LEAD', 'GST_CANCELLATION', 'GST_AMENDMENT'],
      color: 'bg-indigo-50',
      border: 'border-indigo-100',
      text: 'text-indigo-900'
    }
  ];
 getServiceIcon(service: string): string {
    return SERVICE_ICONS[service] || 'circle';
  }

  getCategoryIcon(category: string): string {
    return CATEGORY_ICONS[category] || 'folder';
  }

}
