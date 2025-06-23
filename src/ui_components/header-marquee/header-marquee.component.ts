import { Component } from '@angular/core';
import { SharedModule } from '../../modules/shared.module';
import { THIRUKKURAL_LIST } from '../../constants/thirukkural';
import { NgxFastMarqueeModule } from 'ngx-fast-marquee';

@Component({
  selector: 'app-header-marquee',
  imports: [SharedModule, NgxFastMarqueeModule],
  templateUrl: './header-marquee.component.html',
  styleUrl: './header-marquee.component.css',
})
export class HeaderMarqueeComponent {
  kuralList = THIRUKKURAL_LIST.kural;
  currentKural: any;
  showMarquee = true;
}
