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
                label: 'Home',
                items: [{ label: 'Dashboard', icon: 'pi pi-fw pi-home', routerLink: ['/'] }]
            },
            {
                label: 'My Account',
                icon: 'pi pi-fw pi-user',
                items: [
                    { label: 'TB Statement', icon: 'pi pi-fw pi-id-card', routerLink: ['/uikit/formlayout'] },
                    {
                        label: 'Profile',
                        icon: 'pi pi-fw pi-user-edit',
                        items: [
                            {
                                label: 'Edit Profile',
                                icon: 'pi pi-fw pi-pencil',
                                routerLink: ['/auth/login']
                            },{
                                label: 'Change Password',
                                icon: 'pi pi-fw pi-lock',           
                                routerLink: ['/auth/login']
                            }
                            
                        ]
                    },
                 
                ]
            },
          
            {
                label: 'Miscellaneous',
                icon: 'pi pi-fw pi-ellipsis-h',
                items: [
                    {
                        label: 'Sofware Documentation',
                        icon: 'pi pi-fw pi-book',
                       items: [
                                    { label: 'Submenu 1.1.2', icon: 'pi pi-fw pi-bookmark' },
                                    { label: 'Submenu 1.1.3', icon: 'pi pi-fw pi-bookmark' }
                                ]
                    },
                    {
                        label: 'Contact Us',
                        icon: 'pi pi-fw pi-envelope',
                        routerLink: ['/contact']
                    },
                    {
                        label: 'About Us',
                        icon: 'pi pi-fw pi-info-circle',
                        routerLink: ['/about']
                    },
                    {
                        label: 'Partners',
                        icon: 'pi pi-fw pi-users',
                        routerLink: ['/partners']
                    }
                   
                ]
            },
            {
                label: 'Get Started',
                items: [
                    {
                        label: 'Tutorials',
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
