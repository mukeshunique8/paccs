import { Component } from '@angular/core';
import { SharedModule } from '../../modules/shared.module';

@Component({
  selector: 'app-home-sliders',
  imports: [SharedModule],
  templateUrl: './home-sliders.component.html',
  styleUrl: './home-sliders.component.css',
})
export class HomeSlidersComponent {
  images = [
    '/images/hero/1.jpg',
    '/images/hero/2.jpg',
    '/images/hero/3.jpg',
    '/images/hero/4.jpg',
    '/images/hero/5.jpg',
    '/images/hero/6.jpg',
    '/images/hero/8.jpg',
    '/images/hero/9.jpg',
    '/images/hero/10.jpg',
    // '/images/hero/4.png',
    // '/images/hero/5.png',
  ];

  responsiveOptions = [
    {
      breakpoint: '1024px',
      numVisible: 1,
      numScroll: 1,
    },
    {
      breakpoint: '768px',
      numVisible: 1,
      numScroll: 1,
    },
    {
      breakpoint: '560px',
      numVisible: 1,
      numScroll: 1,
    },
  ];
}
