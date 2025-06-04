import { Component } from '@angular/core';
import { SharedModule } from '../../modules/shared.module';
import { LucideIconsModule } from '../../modules/lucide-icons.module';
import { NgPrimeModule } from '../../modules/ngprime.module';
import { TabsModule } from 'primeng/tabs';
import { TabViewModule } from 'primeng/tabview'; // Add this import
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-services',
  imports: [SharedModule,LucideIconsModule,NgPrimeModule,TabsModule,TabViewModule,TranslateModule],
  templateUrl: './services.component.html',
  styleUrl: './services.component.css'
})
export class ServicesComponent {
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
    services: ['BUS_BOOKING', 'TRAIN_BOOKING'],
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
  popularServices = [
    { name: 'Money Transfer', icon: 'send', color: 'bg-blue-500' },
    { name: 'Bill Payment', icon: 'receipt', color: 'bg-green-500' },
    { name: 'Recharge', icon: 'smartphone-charging', color: 'bg-orange-500' },
    { name: 'GST Filing', icon: 'file-check', color: 'bg-indigo-500' },
    { name: 'PAN Card', icon: 'credit-card', color: 'bg-yellow-500' },
    { name: 'Train Booking', icon: 'train', color: 'bg-red-500' },
    { name: 'AEPS', icon: 'fingerprint', color: 'bg-purple-500' },
    { name: 'Insurance', icon: 'shield', color: 'bg-teal-500' },
    { name: 'Bus Ticket', icon: 'bus', color: 'bg-green-600' },
    { name: 'IT Filing', icon: 'file-search', color: 'bg-blue-600' }
  ];
}
