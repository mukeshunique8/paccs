import { Component } from '@angular/core';
import { SharedModule } from '../../modules/shared.module';
import { LucideIconsModule } from '../../modules/lucide-icons.module';
import { NgPrimeModule } from '../../modules/ngprime.module';
import { TabsModule } from 'primeng/tabs';
import { TabViewModule } from 'primeng/tabview'; // Add this import

@Component({
  selector: 'app-services',
  imports: [SharedModule,LucideIconsModule,NgPrimeModule,TabsModule,TabViewModule],
  templateUrl: './services.component.html',
  styleUrl: './services.component.css'
})
export class ServicesComponent {
financialServices = [
    { 
      name: 'Money Transfer', 
      icon: 'send', 
      color: 'bg-blue-500',
      description: 'Instant domestic and international money transfers at competitive rates'
    },
    { 
      name: 'RD Service', 
      icon: 'piggy-bank', 
      color: 'bg-green-500',
      description: 'Recurring deposit services with flexible tenure options'
    },
    { 
      name: 'Move to Bank', 
      icon: 'banknote', 
      color: 'bg-purple-500',
      description: 'Seamless transfer of funds between wallets and bank accounts'
    },
    { 
      name: 'AEPS', 
      icon: 'fingerprint', 
      color: 'bg-orange-500',
      description: 'Aadhaar Enabled Payment System for cash withdrawal and balance enquiry'
    },
    { 
      name: 'M-ATM', 
      icon: 'smartphone', 
      color: 'bg-red-500',
      description: 'Mobile ATM services for convenient cash withdrawals'
    },
    { 
      name: 'Insurance', 
      icon: 'shield', 
      color: 'bg-teal-500',
      description: 'Comprehensive insurance products for life, health, and assets'
    }
  ];

  governmentServices = [
    { 
      name: 'GST Registration', 
      icon: 'file-text', 
      color: 'bg-indigo-500',
      description: 'Complete GST registration with document collection and submission'
    },
    { 
      name: 'GST Filing', 
      icon: 'file-check', 
      color: 'bg-blue-500',
      description: 'Monthly/quarterly GST return filing with expert verification'
    },
    { 
      name: 'PAN Card', 
      icon: 'credit-card', 
      color: 'bg-yellow-500',
      description: 'New PAN card application and reprint services'
    },
    { 
      name: 'IT Filing', 
      icon: 'file-search', 
      color: 'bg-green-500',
      description: 'Income tax return filing with expert assistance'
    },
    { 
      name: 'Passport', 
      icon: 'book-open', 
      color: 'bg-red-500',
      description: 'Passport application and renewal services'
    },
    { 
      name: 'Digital Signature', 
      icon: 'pen-line', 
      color: 'bg-purple-500',
      description: 'Digital signature certificate issuance and renewal'
    }
  ];

  utilityServices = [
    { 
      name: 'Bill Payment', 
      icon: 'receipt', 
      color: 'bg-blue-500',
      description: 'Pay electricity, water, gas, and other utility bills'
    },
    { 
      name: 'Recharge', 
      icon: 'smartphone-charging', 
      color: 'bg-orange-500',
      description: 'Mobile, DTH, and data card recharge'
    },
    { 
      name: 'Train Booking', 
      icon: 'train', 
      color: 'bg-red-500',
      description: 'IRCTC train ticket booking with PNR status'
    },
    { 
      name: 'Bus Ticket', 
      icon: 'bus', 
      color: 'bg-green-500',
      description: 'State and private bus ticket booking'
    },
    { 
      name: 'Anti Virus', 
      icon: 'shield-alert', 
      color: 'bg-purple-500',
      description: 'Antivirus software subscription and renewal'
    },
    { 
      name: 'Astrology', 
      icon: 'star', 
      color: 'bg-yellow-500',
      description: 'Personalized astrology and horoscope services'
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
