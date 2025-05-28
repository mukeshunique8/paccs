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
    '/sliders/1.png',
    '/sliders/2.png',
    '/sliders/3.png',
    '/sliders/4.png',
    '/sliders/5.png',
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
