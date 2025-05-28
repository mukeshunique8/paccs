import { Component, OnInit } from '@angular/core';
import * as L from 'leaflet';
import { SharedModule } from '../../modules/shared.module';
import indiaGeoJSON from '../../constants/india-states.json'; // Adjust path

@Component({
  selector: 'app-map-location',
  imports: [SharedModule],
  templateUrl: './map-location.component.html',
  styleUrl: './map-location.component.css'
})
export class MapLocationComponent {
  private map: any;
  private highlightedStates = [
    "Tamil Nadu", "Uttar Pradesh", "Maharashtra", "Karnataka", "Kerala"
  ];

  ngOnInit(): void {
    this.initMap();
  }

  private initMap(): void {
    // Initialize map centered on India
    this.map = L.map('india-map').setView([20.5937, 78.9629], 5);

    // Add OpenStreetMap tiles
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '© OpenStreetMap'
    }).addTo(this.map);

    // Highlight selected states
    L.geoJSON((indiaGeoJSON as any).features, {
      style: (feature) => this.getStateStyle(feature),
      onEachFeature: (feature, layer) => {
        if (this.highlightedStates.includes(feature.properties.NAME_1)) {
          layer.bindPopup(`<b>${feature.properties.NAME_1}</b>`);
        }
      }
    }).addTo(this.map);
  }

  private getStateStyle(feature: any): L.PathOptions {
    const isHighlighted = this.highlightedStates.includes(feature.properties.NAME_1);
    return {
      fillColor: isHighlighted ? '#fa6908' : '#fa6908',
      weight: 1,
      opacity: 1,
      color: 'white',
      fillOpacity: isHighlighted ? 0.8 : 0.3
    };
  }
}
