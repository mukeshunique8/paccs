import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MenuItem } from 'primeng/api';
import { AppMenuitem } from './app.menuitem';

@Component({
    selector: 'app-menu',
    standalone: true,
    imports: [CommonModule, AppMenuitem, RouterModule],
    template: `<ul class="layout-menu">
        <ng-container *ngFor="let item of model; let i = index">
            <li app-menuitem *ngIf="!item.separator" [item]="item" [index]="i" [root]="true"></li>
            <li *ngIf="item.separator" class="menu-separator"></li>
        </ng-container>
    </ul> `
})
export class AppMenu {
    model: MenuItem[] = [];

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
