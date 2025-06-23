import { Component } from '@angular/core';
import { LanguageSwitcherComponent } from '../language-switcher/language-switcher.component';
import { SharedModule } from '../../modules/shared.module';
import { TranslateModule } from '@ngx-translate/core';
import { constants } from '../../constants/enumdata';

@Component({
  selector: 'app-top-navbar',
  imports: [TranslateModule, SharedModule, LanguageSwitcherComponent],

  templateUrl: './top-navbar.component.html',
  styleUrl: './top-navbar.component.css',
})
export class TopNavbarComponent {
  constants = constants;
  // Partner logos (replace with your actual image paths)
  rightSidepartners = [
    // { id: 2, img: '/images/pannerselvam.jpeg', alt: 'pannerselvam' },
    { id: 1, img: '/images/cooplogo.png', alt: 'cooplogo' },
  ];
  leftSidepartners = [
    { id: 3, img: '/images/tamilnadugov.png', alt: 'tn' },
    // { id: 1, img: '/images/mkstalin.jpg', alt: 'mkstalin' },
  ];
}
