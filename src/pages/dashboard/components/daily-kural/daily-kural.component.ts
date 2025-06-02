import { Component, ElementRef, ViewChild } from '@angular/core';
import { THIRUKKURAL_LIST } from '../../../../constants/thirukkural';
import { NgxFastMarqueeModule } from 'ngx-fast-marquee';
import { SharedModule } from '../../../../modules/shared.module';
import { NgPrimeModule } from '../../../../modules/ngprime.module';

@Component({
  selector: 'app-daily-kural',
  imports: [SharedModule,NgPrimeModule, NgxFastMarqueeModule],
  templateUrl: './daily-kural.component.html',
  styleUrl: './daily-kural.component.css'
})
export class DailyKuralComponent {
 @ViewChild('cardFront') cardFront!: ElementRef;
  kuralList = THIRUKKURAL_LIST.kural;
  currentKural: any;
  currentIndex = 0;
  isFlipped = false;

  ngOnInit() {
    this.pickRandomKural();
  }

  toggleFlip() {
    this.isFlipped = !this.isFlipped;
  }

  pickRandomKural() {
    this.currentIndex = Math.floor(Math.random() * this.kuralList.length);
    this.currentKural = this.kuralList[this.currentIndex];
    this.resetCard();
    // console.log('Current Kural:', this.currentKural);
  }

  nextKural() {
    this.currentIndex = (this.currentIndex + 1) % this.kuralList.length;
    this.currentKural = this.kuralList[this.currentIndex];
    this.resetCard();
  }

  previousKural() {
    this.currentIndex = (this.currentIndex - 1 + this.kuralList.length) % this.kuralList.length;
    this.currentKural = this.kuralList[this.currentIndex];
    this.resetCard();
  }

  resetCard() {
    this.isFlipped = false;
  }
}
