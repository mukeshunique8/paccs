import { Injectable } from '@angular/core';

interface ServiceCategory {
  name: string;
  services: { name: string; icon: string ;color: string ;isActive?: boolean;}[];
  
}

@Injectable({
  providedIn: 'root',
})
export class ServiceCategoryService {
  private serviceCategories: ServiceCategory[] = [
    {
      name: 'UTILITY',
      services: [
        { name: 'BILL_PAYMENT', icon: 'credit-card', color: 'bg-green-500', isActive: true },
        { name: 'RECHARGE', icon: 'zap', color: 'bg-orange-500', isActive: true },
        { name: 'LIC_PREMIUM', icon: 'shield', color: 'bg-teal-500', isActive: true },
        { name: 'ASTROLOGY', icon: 'moon', color: 'bg-indigo-600', isActive: false },
      ],
    },
    {
      name: 'TRAVEL',
      services: [
        { name: 'BUS_BOOKING', icon: 'bus', color: 'bg-green-600', isActive: true },
        { name: 'TRAIN_BOOKING', icon: 'train', color: 'bg-red-500', isActive: true },
        { name: 'PASSPORT', icon: 'briefcase', color: 'bg-gray-500', isActive: true },
        { name: 'HOTEL_BOOKING', icon: 'globe', color: 'bg-blue-500', isActive: false },
        { name: 'FLIGHT_BOOKING', icon: 'globe', color: 'bg-yellow-500', isActive: false },  
      ],
    },
    {
      name: 'GOVERNMENT',
      services: [
        { name: 'GST_REGISTRATION', icon: 'file-plus', color: 'bg-indigo-500', isActive: true },
        { name: 'GST_FILING', icon: 'file-check', color: 'bg-indigo-500', isActive: true },
        { name: 'IT_FILING', icon: 'file-search', color: 'bg-blue-600', isActive: true },
        { name: 'IT_NOTICE', icon: 'file-text', color: 'bg-blue-600', isActive: true },
        { name: 'GST_LEAD', icon: 'user-plus', color: 'bg-indigo-500', isActive: true },
        { name: 'GST_CANCELLATION', icon: 'trash-2', color: 'bg-red-600', isActive: false },
        { name: 'GST_AMENDMENT', icon: 'edit', color: 'bg-yellow-600', isActive: false },
        { name: 'PAN_NSDL', icon: 'credit-card', color: 'bg-yellow-500', isActive: false },
        { name: 'PAN_UTIITSL', icon: 'credit-card', color: 'bg-yellow-500', isActive: true },
        { name: 'NPS_SCHEME', icon: 'edit', color: 'bg-yellow-500', isActive: true },
      ],
    },
    {
      name: 'FINANCIAL',
      services: [
        { name: 'MOVE_TO_BANK', icon: 'arrow-up-right', color: 'bg-blue-300', isActive: true },
        { name: 'M_ATM', icon: 'credit-card', color: 'bg-yellow-400', isActive: true },
        { name: 'AEPS', icon: 'user-check', color: 'bg-purple-500', isActive: true },
        { name: 'MONEY_TRANSFER', icon: 'send', color: 'bg-blue-500', isActive: false },
      ],
    },
    {
      name: 'PRODUCT&SALES',
      services: [
        { name: 'DIGITAL_SIGNATURE', icon: 'file-signature', color: 'bg-pink-500', isActive: true },
        { name: 'ANTI_VIRUS', icon: 'shield-off', color: 'bg-red-400', isActive: false },
        { name: 'PRODUCT_SALE', icon: 'shopping-cart', color: 'bg-indigo-400', isActive: true },
        { name: 'RD_SERVICE', icon: 'calendar', color: 'bg-blue-400', isActive: true },
      ],
    },
    {
      name: 'INSURANCE',
      services: [
        { name: 'INSURANCE', icon: 'umbrella', color: 'bg-teal-500', isActive: true },
      ],
    },
  ];



  constructor() {}

  getServiceCategories(): ServiceCategory[] {
    return this.serviceCategories;
  }
}
