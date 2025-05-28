import { Component } from '@angular/core';
import { SharedModule } from '../../modules/shared.module';
import { LucideIconsModule } from '../../modules/lucide-icons.module';
import { NgPrimeModule } from '../../modules/ngprime.module';

@Component({
  selector: 'app-about',
  imports: [SharedModule,LucideIconsModule,NgPrimeModule],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {
timelineItems = [
    {
      year: '2006',
      title: 'CSC Initiative Launched',
      description: 'The Common Services Centres scheme was launched as part of the National e-Governance Plan'
    },
    {
      year: '2010',
      title: '1 Lakh Centres Operational',
      description: 'Achieved the milestone of 100,000 operational centres across India'
    },
    {
      year: '2015',
      title: 'Digital India Integration',
      description: 'Became a key implementation partner for Digital India program'
    },
    {
      year: '2020',
      title: 'Pandemic Response',
      description: 'Played crucial role in delivering essential services during COVID-19'
    }
  ];

  teamMembers = [
    {
      name: 'Dr. Rajesh Kumar',
      position: 'CEO',
      bio: '20+ years experience in public service delivery',
      image: '/assets/team/rajesh.jpg'
    },
    {
      name: 'Priya Sharma',
      position: 'CTO',
      bio: 'Technology visionary driving digital transformation',
      image: '/assets/team/priya.jpg'
    },
    {
      name: 'Amit Patel',
      position: 'Operations Head',
      bio: 'Manages nationwide network of service centres',
      image: '/assets/team/amit.jpg'
    },
    {
      name: 'Neha Gupta',
      position: 'Service Development',
      bio: 'Leads expansion of service offerings service offerings',
      image: '/assets/team/neha.jpg'
    }
  ];
}
