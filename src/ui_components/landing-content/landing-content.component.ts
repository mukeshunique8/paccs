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

}
