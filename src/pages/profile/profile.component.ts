import { Component, Input } from '@angular/core';
import { UserProfile } from '../../interfaces/user_profile';
import { SharedModule } from '../../modules/shared.module';

@Component({
  selector: 'app-profile',
  imports: [SharedModule],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css'
})
export class ProfileComponent {
@Input() user!: UserProfile;
  @Input() isLoading: boolean = false;
 demoUser: UserProfile = {
    id: '123',
    name: 'Alex Johnson',
    username: 'alexj',
    email: 'alex@example.com',
    avatar: 'https://randomuser.me/api/portraits/men/32.jpg',
    coverImage: 'https://images.unsplash.com/photo-1519681393784-d120267933ba',
    bio: 'Frontend Developer | Angular Specialist | UI/UX Enthusiast',
    location: 'San Francisco, CA',
    website: 'https://alexjohnson.dev',
    joinedDate: new Date(2020, 5, 15),
    skills: ['Angular', 'TypeScript', 'Tailwind CSS', 'UI/UX', 'Node.js'],
    stats: {
      posts: 142,
      followers: 1243,
      following: 562
    },
    socialLinks: {
      twitter: 'https://twitter.com/alexj',
      github: 'https://github.com/alexj',
      linkedin: 'https://linkedin.com/in/alexj'
    },
    availableForHire: true
  };

  ngOnInit(): void {
   
    if (!this.user) {
      this.user = this.demoUser; // Use demo user data if no input is provided
    }
  }
  getJoinedDate(): string {
    return this.user.joinedDate.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long'
    });
  }
}
