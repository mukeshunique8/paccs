import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MenuItem } from 'primeng/api';
import { AppMenuitem } from './app.menuitem';
import { SharedModule } from '../../modules/shared.module';
import { constants } from '../../constants/enumdata';

@Component({
    selector: 'app-menu',
    standalone: true,
    imports: [CommonModule, AppMenuitem, RouterModule,SharedModule],
    template: `<ul class="layout-menu">
        <ng-container *ngFor="let item of model; let i = index">
            <li app-menuitem *ngIf="!item.separator" [item]="item" [index]="i" [root]="true"></li>
            <li *ngIf="item.separator" class="menu-separator"></li>
        </ng-container>
    </ul>
    <div class="border-t border-gray-300 my-6"></div>

    <section
          class="mb-6 p-6 rounded-xl bg-gradient-to-br from-blue-50 to-indigo-50 shadow-md hover:shadow-lg transition-shadow duration-300 border border-blue-100"
        >
          <!-- Title with gradient accent -->
          <div class="flex items-center mb-6 pb-4 border-b border-blue-200">
            <div
              class="p-2 rounded-full bg-gradient-to-r from-blue-400 to-indigo-500 shadow-sm"
            >
              <lucide-icon
                name="phone"
                class="w-5 h-5 text-white"
              ></lucide-icon>
            </div>
            <h3
              class="font-semibold text-xl ml-3 bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent"
            >
              {{ 'CONTACT_US.TITLE' | translate }}
            </h3>
          </div>

          <!-- Service Detail 1 -->
          <div
            class="mb-6 p-4 rounded-lg bg-white shadow-sm hover:bg-blue-50 transition-colors duration-200 flex items-start"
          >
            <!-- Icon with gradient background -->
            <div
              class="flex-shrink-0 p-2 rounded-full bg-gradient-to-br from-yellow-300 to-yellow-500 shadow-sm"
            >
              <lucide-icon name="star" class="w-5 h-5 text-white"></lucide-icon>
            </div>

            <div class="ml-4">
              <h3 class="text-md font-bold text-gray-800 mb-1">
                {{ 'CONTACT_US.CUSTOMER_SUPPORT' | translate }}
              </h3>
              <p class="text-sm text-gray-600 leading-relaxed">
                {{ constants.customerCare }}
              </p>
            </div>
          </div>

          <!-- Optional: Add more contact methods with different colors -->
          <div
            class="p-4 rounded-lg bg-white shadow-sm hover:bg-blue-50 transition-colors duration-200 flex items-start"
          >
            <div
              class="flex-shrink-0 p-2 rounded-full bg-gradient-to-br from-blue-400 to-blue-600 shadow-sm"
            >
              <lucide-icon name="mail" class="w-5 h-5 text-white"></lucide-icon>
            </div>
            <div class="ml-4">
              <h3 class="text-md font-bold text-gray-800 mb-1">
                {{ 'CONTACT_US.EMAIL' | translate }}
              </h3>
              <p class="text-sm text-gray-600 leading-relaxed">
                {{ constants.supportEmail }}
              </p>
            </div>
          </div>
        </section>
     `
})
export class AppMenu {
    model: MenuItem[] = [];
  constants = constants;

    ngOnInit() {
           this.model = [
            {
              label: 'S_NAV.HOME',

               items: [
      { label: 'S_NAV.TB_TOPUP_HISTORY', icon: 'pi pi-id-card', routerLink: ['/dashboard'] },
      { label: 'S_NAV.TB_STATEMENT', icon: 'pi pi-fw pi-envelope', routerLink: ['/tbstatement'] },
      { label: 'S_NAV.G2C_SERVICES', icon: 'pi pi-cog', routerLink: ['/g2cservices'] },
      { label: 'S_NAV.SUPPORT_TICKET', icon: 'pi pi-ticket', routerLink: ['/support-ticket'] },
      { label: 'S_NAV.USER', icon: 'pi pi-user', routerLink: ['/user'] },
      { label: 'S_NAV.SUPPORT_DETAILS', icon: 'pi pi-info-circle', routerLink: ['/support-details'] },
      { label: 'S_NAV.PACKAGE_SUBSCRIPTION', icon: 'pi pi-box', routerLink: ['/package-subscription'] }
    ]
            },
          
          
            // {
            //     label: 'Miscellaneous',
            //     icon: 'pi pi-fw pi-ellipsis-h',
            //     items: [
            //         {
            //             label: 'Sofware Documentation',
            //             icon: 'pi pi-fw pi-book',
            //            items: [
            //                         { label: 'Submenu 1.1.2', icon: 'pi pi-fw pi-bookmark' },
            //                         { label: 'Submenu 1.1.3', icon: 'pi pi-fw pi-bookmark' }
            //                     ]
            //         },
            //         {
            //             label: 'Contact Us',
            //             icon: 'pi pi-fw pi-envelope',
            //             routerLink: ['/contact']
            //         },
            //         {
            //             label: 'About Us',
            //             icon: 'pi pi-fw pi-info-circle',
            //             routerLink: ['/about']
            //         },
            //         {
            //             label: 'Partners',
            //             icon: 'pi pi-fw pi-users',
            //             routerLink: ['/partners']
            //         }
                   
            //     ]
            // },
            {
                label: 'S_NAV.GET_STARTED',
                items: [
                    {
                        label: 'S_NAV.TUTORIAL',
                        icon: 'pi pi-fw pi-video',
                        routerLink: ['/tutorials']
                    },
                    // {
                    //     label: 'View Source',
                    //     icon: 'pi pi-fw pi-github',
                    //     url: 'https://github.com/primefaces/sakai-ng',
                    //     target: '_blank'
                    // }
                ]
            }
        ];
    }
}
