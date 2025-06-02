import { Component } from '@angular/core';
import { SharedModule } from '../../../modules/shared.module';

@Component({
  selector: 'app-p-footer',
  imports: [SharedModule],
  templateUrl: './p-footer.component.html',
  styleUrl: './p-footer.component.css'
})
export class PFooterComponent {
 currentYear = new Date().getFullYear();
}
