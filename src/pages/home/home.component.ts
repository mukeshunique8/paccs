import { Component } from '@angular/core';
import { HomeHeroComponent } from '../../ui_components/home-hero/home-hero.component';
import { LandingContentComponent } from '../../ui_components/landing-content/landing-content.component';

@Component({
  selector: 'app-home',
  imports: [HomeHeroComponent, LandingContentComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {}
