import { Component, EventEmitter, Input, Output } from '@angular/core';
import { SharedModule } from '../../../modules/shared.module';

@Component({
  selector: 'app-p-sidebar',
  imports: [SharedModule],
  templateUrl: './p-sidebar.component.html',
  styleUrl: './p-sidebar.component.css'
})
export class PSidebarComponent {
@Input() collapsed = false;
  @Input() menuItems: any[] = [];
  @Input() activeItem = '';
  @Output() toggleCollapse = new EventEmitter<void>();
  @Output() itemSelected = new EventEmitter<string>();

  selectItem(item: string) {
    this.itemSelected.emit(item);
  }
}
