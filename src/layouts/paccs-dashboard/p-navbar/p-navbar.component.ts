import { Component, EventEmitter, Output } from '@angular/core';
import { SharedModule } from '../../../modules/shared.module';
import { NgPrimeModule } from '../../../modules/ngprime.module';

@Component({
  selector: 'app-p-navbar',
  imports: [SharedModule,NgPrimeModule],
  templateUrl: './p-navbar.component.html',
  styleUrl: './p-navbar.component.css'
})
export class PNavbarComponent {
 @Output() toggleSidebar = new EventEmitter<void>();
  searchQuery = '';
  notifications = [
    { id: 1, message: 'New project assigned', read: false },
    { id: 2, message: 'System update available', read: false }
  ];
}
