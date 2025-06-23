import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MenuItem } from 'primeng/api';
import { AppMenuitem } from './app.menuitem';
import { SharedModule } from '../../modules/shared.module';
import { constants, roles } from '../../constants/enumdata';
import { MenuService } from '../../service/menu.service';
import { AuthService } from '../../service/auth.service';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [CommonModule, AppMenuitem, RouterModule, SharedModule],
  template: `<ul class="layout-menu">
      <ng-container *ngFor="let item of model; let i = index">
        <li
          app-menuitem
          *ngIf="!item.separator"
          [item]="item"
          [index]="i"
          [root]="true"
        ></li>
        <li *ngIf="item.separator" class="menu-separator"></li>
      </ng-container>
    </ul>
    <div class="border-t border-gray-300 my-6"></div>

    <section class="mb-6 rounded-xl overflow-hidden">
      <!-- Title with gradient accent -->
      <div class="flex items-center mb-4 sm:mb-6 pb-3 sm:pb-4">
        <div
          class="p-2 rounded-full bg-gradient-to-r from-blue-400 to-indigo-500 shadow-sm flex-shrink-0"
        >
          <lucide-icon name="phone" class="w-5 h-5 text-white"></lucide-icon>
        </div>
        <h3
          class="font-semibold text-lg sm:text-xl ml-3 bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent whitespace-nowrap overflow-hidden text-ellipsis"
        >
          {{ 'CONTACT_US.TITLE' | translate }}
        </h3>
      </div>

      <div class="space-y-3 sm:space-y-4">
        <!-- Customer Support Card -->
        <div
          class="p-3 sm:p-4 rounded-lg bg-white/90 backdrop-blur-sm shadow-sm hover:bg-blue-50 transition-colors duration-200 flex items-start min-w-0"
        >
          <div
            class="flex-shrink-0 p-2 rounded-full bg-gradient-to-br from-yellow-300 to-yellow-500 shadow-sm mt-0.5"
          >
            <lucide-icon
              name="star"
              class="w-4 sm:w-5 h-4 sm:h-5 text-white"
            ></lucide-icon>
          </div>
          <div class="ml-3 min-w-0">
            <h3
              class="text-sm sm:text-md font-bold text-gray-800 mb-1 truncate"
            >
              {{ 'CONTACT_US.CUSTOMER_SUPPORT' | translate }}
            </h3>
            <p class="text-xs sm:text-sm text-gray-600 leading-snug break-all">
              {{ constants.customerCare }}
            </p>
          </div>
        </div>

        <!-- Email Card -->
        <div
          class="p-3 sm:p-4 rounded-lg bg-white/90 backdrop-blur-sm shadow-sm hover:bg-blue-50 transition-colors duration-200 flex items-start min-w-0"
        >
          <div
            class="flex-shrink-0 p-2 rounded-full bg-gradient-to-br from-blue-400 to-blue-600 shadow-sm mt-0.5"
          >
            <lucide-icon
              name="mail"
              class="w-4 sm:w-5 h-4 sm:h-5 text-white"
            ></lucide-icon>
          </div>
          <div class="ml-3 min-w-0">
            <h3
              class="text-sm sm:text-md font-bold text-gray-800 mb-1 truncate"
            >
              {{ 'CONTACT_US.EMAIL' | translate }}
            </h3>
            <p class="text-xs sm:text-sm text-gray-600 leading-snug break-all">
              {{ constants.supportEmail }}
            </p>
          </div>
        </div>

        <!-- Optional: Add WhatsApp Card -->
        <div
          class="p-3 sm:p-4 rounded-lg bg-white/90 backdrop-blur-sm shadow-sm hover:bg-blue-50 transition-colors duration-200 flex items-start min-w-0"
        >
          <div
            class="flex-shrink-0 p-2 rounded-full bg-gradient-to-br from-green-400 to-green-600 shadow-sm mt-0.5"
          >
            <lucide-icon
              name="message-circle"
              class="w-4 sm:w-5 h-4 sm:h-5 text-white"
            ></lucide-icon>
          </div>
          <div class="ml-3 min-w-0">
            <h3
              class="text-sm sm:text-md font-bold text-gray-800 mb-1 truncate"
            >
              {{ 'CONTACT_US.WHATSAPP' | translate }}
            </h3>
            <p class="text-xs sm:text-sm text-gray-600 leading-snug break-all">
              {{ constants.whatsappNumber }}
            </p>
          </div>
        </div>
      </div>
    </section> `,
})
export class AppMenu {
  model: MenuItem[] = [];
  constants = constants;
  constructor(
    private menuService: MenuService,
    private authService: AuthService,
  ) {}

  ngOnInit() {
    const userRole = this.authService.getCurrentUserRole() ?? '';
    this.model = this.menuService.getMenuItemsForRole(userRole);
  }
}
