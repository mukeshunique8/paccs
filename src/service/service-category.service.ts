import { Injectable } from '@angular/core';

interface ServiceCategory {
  name: string;
  services: { name: string; icon: string ;color: string }[];
}

@Injectable({
  providedIn: 'root',
})
export class ServiceCategoryService {
 private serviceCategories: ServiceCategory[] = [
  {
    name: 'UTILITY',
    services: [
      { name: 'BILL_PAYMENT', icon: 'credit-card', color: 'bg-green-500' },
      { name: 'RECHARGE', icon: 'zap', color: 'bg-orange-500' },
      { name: 'AEPS', icon: 'user-check', color: 'bg-purple-500' },
      { name: 'MONEY_TRANSFER', icon: 'send', color: 'bg-blue-500' },
    ],
  },
  {
    name: 'BOOKING',
    services: [
      { name: 'BUS_BOOKING', icon: 'bus', color: 'bg-green-600' },
      { name: 'TRAIN_BOOKING', icon: 'train', color: 'bg-red-500' },
    ],
  },
  {
    name: 'GOVERNMENT',
    services: [
      { name: 'GST_REGISTRATION', icon: 'file-plus', color: 'bg-indigo-500' },
      { name: 'GST_FILING', icon: 'file-check', color: 'bg-indigo-500' },
      { name: 'PASSPORT', icon: 'briefcase', color: 'bg-gray-500' },
      { name: 'PAN_NSDL', icon: 'credit-card', color: 'bg-yellow-500' },
      { name: 'PAN_UTIITSL', icon: 'credit-card', color: 'bg-yellow-500' },
    ],
  },
  {
    name: 'FINANCIAL',
    services: [
      { name: 'LIC_PREMIUM', icon: 'shield', color: 'bg-teal-500' },
      { name: 'RD_SERVICE', icon: 'calendar', color: 'bg-blue-400' },
      { name: 'INSURANCE', icon: 'umbrella', color: 'bg-teal-500' },
      { name: 'MOVE_TO_BANK', icon: 'arrow-up-right', color: 'bg-blue-300' },
      { name: 'M_ATM', icon: 'credit-card', color: 'bg-yellow-400' },
    ],
  },
  {
    name: 'DIGITAL',
    services: [
      { name: 'DIGITAL_SIGNATURE', icon: 'file-signature', color: 'bg-pink-500' },
      { name: 'ANTI_VIRUS', icon: 'shield-off', color: 'bg-red-400' },
      { name: 'PRODUCT_SALE', icon: 'shopping-cart', color: 'bg-indigo-400' },
    ],
  },
  {
    name: 'OTHER',
    services: [
      { name: 'ASTROLOGY', icon: 'moon', color: 'bg-indigo-600' },
      { name: 'IT_FILING', icon: 'file-search', color: 'bg-blue-600' },
      { name: 'IT_NOTICE', icon: 'file-text', color: 'bg-blue-600' },
      { name: 'GST_LEAD', icon: 'user-plus', color: 'bg-indigo-500' },
      { name: 'GST_CANCELLATION', icon: 'trash-2', color: 'bg-red-600' },
      { name: 'GST_AMENDMENT', icon: 'edit', color: 'bg-yellow-600' },
    ],
  },
];



  constructor() {}

  getServiceCategories(): ServiceCategory[] {
    return this.serviceCategories;
  }
}
