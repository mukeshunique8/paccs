import { Component } from '@angular/core';
import { SharedModule } from '../../modules/shared.module';
import { PSidebarComponent } from "./p-sidebar/p-sidebar.component";
import { PNavbarComponent } from "./p-navbar/p-navbar.component";
import { PFooterComponent } from "./p-footer/p-footer.component";

@Component({
  selector: 'app-paccs-dashboard',
  imports: [SharedModule, PSidebarComponent, PNavbarComponent, PFooterComponent],
  templateUrl: './paccs-dashboard.component.html',
  styleUrl: './paccs-dashboard.component.css'
})
export class PaccsDashboardComponent {
 sidebarCollapsed = false;
  activeMenuItem = 'dashboard';

  menuItems = [
    { label: 'Dashboard', icon: 'pi pi-home', route: 'dashboard' },
    { label: 'Analytics', icon: 'pi pi-chart-bar', route: 'analytics' },
    { label: 'Projects', icon: 'pi pi-folder', route: 'projects' },
    { label: 'Calendar', icon: 'pi pi-calendar', route: 'calendar' },
    { label: 'Messages', icon: 'pi pi-envelope', route: 'messages' },
    { label: 'Settings', icon: 'pi pi-cog', route: 'settings' }
  ];

  toggleSidebar() {
    this.sidebarCollapsed = !this.sidebarCollapsed;
  }

  setActive(menuItem: string) {
    this.activeMenuItem = menuItem;
  }
}
