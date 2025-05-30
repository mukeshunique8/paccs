import { Component } from '@angular/core';
import { SharedModule } from '../../modules/shared.module';
import { LucideIconsModule } from '../../modules/lucide-icons.module';
import { NgPrimeModule } from '../../modules/ngprime.module';

@Component({
  selector: 'app-landing-content',
  imports: [SharedModule,LucideIconsModule,NgPrimeModule],
  templateUrl: './landing-content.component.html',
  styleUrl: './landing-content.component.css'
})
export class LandingContentComponent {
testimonials =[
  {
    quote: "This platform has transformed how we handle our business transactions. The GST filing service saves us hours every month!",
    name: "Rajesh Kumar",
    position: "CEO",
    company: "Kumar Traders",
    avatar: "https://randomuser.me/api/portraits/men/32.jpg"
  },
  {
    quote: "As a frequent traveler, the train and bus booking services have made my life so much easier. Highly recommended!",
    name: "Priya Sharma",
    position: "Sales Manager",
    company: "Global Solutions",
    avatar: "https://randomuser.me/api/portraits/women/44.jpg"
  },
  {
    quote: "The money transfer feature has helped us serve our rural customers better with instant AEPS transactions.",
    name: "Amit Patel",
    position: "Branch Manager",
    company: "Janata Bank",
    avatar: "https://randomuser.me/api/portraits/men/65.jpg"
  }
]

features = [
  {
    icon: 'zap',
    color: 'bg-blue-100',
    iconColor: 'text-blue-600',
    titleKey: 'FEATURES.FAST_TRANSACTIONS.TITLE',
    descKey: 'FEATURES.FAST_TRANSACTIONS.DESCRIPTION'
  },
  {
    icon: 'shield-check',
    color: 'bg-green-100',
    iconColor: 'text-green-600',
    titleKey: 'FEATURES.SECURITY.TITLE',
    descKey: 'FEATURES.SECURITY.DESCRIPTION'
  },
  {
    icon: 'smartphone',
    color: 'bg-purple-100',
    iconColor: 'text-purple-600',
    titleKey: 'FEATURES.MOBILE.TITLE',
    descKey: 'FEATURES.MOBILE.DESCRIPTION'
  },
  {
    icon: 'headphones',
    color: 'bg-orange-100',
    iconColor: 'text-orange-600',
    titleKey: 'FEATURES.SUPPORT.TITLE',
    descKey: 'FEATURES.SUPPORT.DESCRIPTION'
  },
  {
    icon: 'badge-percent',
    color: 'bg-red-100',
    iconColor: 'text-red-600',
    titleKey: 'FEATURES.DISCOUNTS.TITLE',
    descKey: 'FEATURES.DISCOUNTS.DESCRIPTION'
  },
  {
    icon: 'refresh-cw',
    color: 'bg-indigo-100',
    iconColor: 'text-indigo-600',
    titleKey: 'FEATURES.AUTO_PAY.TITLE',
    descKey: 'FEATURES.AUTO_PAY.DESCRIPTION'
  }
];
 statsData = [
  {
    icon: 'smile',
    value: '50K+',
    titleKey: 'happyCustomers',
    iconColor: 'text-green-400',
  },
  {
    icon: 'grid',
    value: '120+',
    titleKey: 'servicesOffered',
    iconColor: 'text-yellow-400',
  },
  {
    icon: 'headphones',
    value: '24/7',
    titleKey: 'customerSupport',
    iconColor: 'text-white',
  },
  {
    icon: 'credit-card',
    value: '10M+',
    titleKey: 'transactionsMonthly',
    iconColor: 'text-pink-400',
  },
];



}
