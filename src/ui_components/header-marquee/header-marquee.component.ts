import { Component } from '@angular/core';
import { SharedModule } from '../../modules/shared.module';
import { THIRUKKURAL_LIST } from '../../constants/thirukkural';
import { NgxFastMarqueeModule } from "ngx-fast-marquee";

@Component({
  selector: 'app-header-marquee',
  imports: [SharedModule, NgxFastMarqueeModule],
  templateUrl: './header-marquee.component.html',
  styleUrl: './header-marquee.component.css'
})
export class HeaderMarqueeComponent {
  kuralList = THIRUKKURAL_LIST.kural;
  currentKural: any;
  showMarquee = true;

  ngOnInit() {
    this.pickRandomKural();
  }

  pickRandomKural() {
    const index = Math.floor(Math.random() * this.kuralList.length);
    this.currentKural = this.kuralList[index];
    console.log('Selected Kural:', this.currentKural);
    // Hide the marquee temporarily to reset it
    this.showMarquee = false;
    
    // Force a re-render of the marquee
    setTimeout(() => {
      this.showMarquee = true;
      
      // Schedule the next Kural after this one finishes scrolling
      // Adjust the timeout based on your marquee speed and content length
      setTimeout(() => this.pickRandomKural(), 15000); // Adjust this time as needed
    }, 50);
  }
}