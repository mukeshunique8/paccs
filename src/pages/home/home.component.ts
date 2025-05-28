import { Component } from '@angular/core';
import { HomeHeroComponent } from "../../ui_components/home-hero/home-hero.component";
import { HomeSlidersComponent } from "../../ui_components/home-sliders/home-sliders.component";
import { LandingContentComponent } from "../../ui_components/landing-content/landing-content.component";
import { MapLocationComponent } from "../../ui_components/map-location/map-location.component";

@Component({
  selector: 'app-home',
  imports: [HomeHeroComponent, HomeSlidersComponent, LandingContentComponent, MapLocationComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
