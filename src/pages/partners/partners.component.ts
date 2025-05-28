import { Component } from '@angular/core';
import { SharedModule } from '../../modules/shared.module';
import { NgPrimeModule } from '../../modules/ngprime.module';
import { LucideIconsModule } from '../../modules/lucide-icons.module';

@Component({
  selector: 'app-partners',
  imports: [SharedModule,NgPrimeModule,LucideIconsModule],
  templateUrl: './partners.component.html',
  styleUrl: './partners.component.css'
})
export class PartnersComponent {
responsiveOptions = [
    {
      breakpoint: '1024px',
      numVisible: 4,
      numScroll: 1
    },
    {
      breakpoint: '768px',
      numVisible: 2,
      numScroll: 1
    },
    {
      breakpoint: '560px',
      numVisible: 1,
      numScroll: 1
    }
  ];

  // partners = [
  //   { name: 'TechCorp', logo: 'assets/partners/techcorp.png', industry: 'Technology' },
  //   { name: 'InnoSoft', logo: 'assets/partners/innosoft.png', industry: 'Software' },
  //   { name: 'DataSystems', logo: 'assets/partners/datasystems.png', industry: 'Data Analytics' },
  //   { name: 'CloudNine', logo: 'assets/partners/cloudnine.png', industry: 'Cloud Services' },
  //   { name: 'SecureNet', logo: 'assets/partners/securenet.png', industry: 'Cybersecurity' },
  //   { name: 'DigitalEdge', logo: 'assets/partners/digitaledge.png', industry: 'Digital Marketing' },
  //   { name: 'WebWorks', logo: 'assets/partners/webworks.png', industry: 'Web Development' },
  //   { name: 'AI Solutions', logo: 'assets/partners/aisolutions.png', industry: 'Artificial Intelligence' }
  // ];

  // testimonials = [
  //   {
  //     quote: "Our partnership has opened doors to markets we couldn't have accessed alone. The support and resources provided are exceptional.",
  //     name: "Sarah Johnson",
  //     position: "CEO",
  //     company: "TechCorp",
  //     avatar: "assets/avatars/avatar1.jpg"
  //   },
  //   {
  //     quote: "The revenue sharing model is truly mutually beneficial. We've seen a 40% increase in our service offerings since partnering.",
  //     name: "Michael Chen",
  //     position: "Director of Partnerships",
  //     company: "InnoSoft",
  //     avatar: "assets/avatars/avatar2.jpg"
  //   },
  //   {
  //     quote: "Being part of this partner network has given us credibility and visibility in the industry that would have taken years to build on our own.",
  //     name: "David Rodriguez",
  //     position: "Founder",
  //     company: "DataSystems",
  //     avatar: "assets/avatars/avatar3.jpg"
  //   }
  // ];

  partners = [
  { 
    name: 'TechCorp', 
    logo: 'https://logo.clearbit.com/techcorp.com', 
    industry: 'Technology' 
  },
  { 
    name: 'InnoSoft', 
    logo: 'https://logo.clearbit.com/innosoft.com', 
    industry: 'Software' 
  },
  { 
    name: 'DataSystems', 
    logo: 'https://logo.clearbit.com/datasystems.com', 
    industry: 'Data Analytics' 
  },
  { 
    name: 'CloudNine', 
    logo: 'https://logo.clearbit.com/cloudnine.com', 
    industry: 'Cloud Services' 
  },
  { 
    name: 'SecureNet', 
    logo: 'https://logo.clearbit.com/securenet.com', 
    industry: 'Cybersecurity' 
  },
  { 
    name: 'DigitalEdge', 
    logo: 'https://logo.clearbit.com/digitaledge.com', 
    industry: 'Digital Marketing' 
  },
  { 
    name: 'WebWorks', 
    logo: 'https://logo.clearbit.com/webworks.com', 
    industry: 'Web Development' 
  },
  { 
    name: 'AI Solutions', 
    logo: 'https://logo.clearbit.com/aisolutions.com', 
    industry: 'Artificial Intelligence' 
  }
];

testimonials = [
  {
    quote: "Our partnership has opened doors to markets we couldn't have accessed alone. The support and resources provided are exceptional.",
    name: "Sarah Johnson",
    position: "CEO",
    company: "TechCorp",
    avatar: "https://randomuser.me/api/portraits/women/44.jpg"
  },
  {
    quote: "The revenue sharing model is truly mutually beneficial. We've seen a 40% increase in our service offerings since partnering.",
    name: "Michael Chen",
    position: "Director of Partnerships",
    company: "InnoSoft",
    avatar: "https://randomuser.me/api/portraits/men/32.jpg"
  },
  {
    quote: "Being part of this partner network has given us credibility and visibility in the industry that would have taken years to build on our own.",
    name: "David Rodriguez",
    position: "Founder",
    company: "DataSystems",
    avatar: "https://randomuser.me/api/portraits/men/75.jpg"
  }
];
}
