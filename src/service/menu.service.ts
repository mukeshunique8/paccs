// menu.service.ts
import { Injectable } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { constants, roles } from '../constants/enumdata';

@Injectable({
  providedIn: 'root',
})
export class MenuService {
  constants = constants;

  private allMenuItems: MenuItem[] = [
    {
      label: 'S_NAV.HOME',
      roles: [roles.USER], // Add roles for each menu
      items: [
        {
          label: 'S_NAV.TB_TOPUP_HISTORY',
          icon: 'pi pi-id-card',
          routerLink: ['/dashboard'],
          roles: [roles.USER],
        },
        {
          label: 'S_NAV.TB_STATEMENT',
          icon: 'pi pi-fw pi-envelope',
          routerLink: ['/tbstatement'],
          roles: [roles.USER],
        },
        {
          label: 'S_NAV.G2C_SERVICES',
          icon: 'pi pi-cog',
          routerLink: ['/g2cservices'],
          roles: [roles.USER],
        },
        {
          label: 'S_NAV.SUPPORT_TICKET',
          icon: 'pi pi-ticket',
          routerLink: ['/support-ticket'],
          roles: [roles.USER],
        },
        {
          label: 'S_NAV.USER',
          icon: 'pi pi-user',
          routerLink: ['/user'],
          roles: [roles.SUPER_ADMIN], // Only for ADMIN
        },
        {
          label: 'S_NAV.SUPPORT_DETAILS',
          icon: 'pi pi-info-circle',
          routerLink: ['/support-details'],
          roles: [roles.NORMAL_ACCOUNTANT],
        },
        {
          label: 'S_NAV.PACKAGE_SUBSCRIPTION',
          icon: 'pi pi-box',
          routerLink: ['/package-subscription'],
          roles: [roles.USER],
        },
      ],
    },
    {
      label: 'S_NAV.GET_STARTED',
      roles: [roles.USER],
      items: [
        {
          label: 'S_NAV.TUTORIAL',
          icon: 'pi pi-fw pi-video',
          routerLink: ['/dashboard/tutorials'],
          roles: [roles.USER],
        },
      ],
    },
    {
      label: 'S_NAV.HOME',
      roles: [roles.SUPER_ADMIN],
      items: [
        {
          label: 'S_NAV.DASHBOARD',
          icon: 'pi pi-fw pi-video',
          routerLink: ['/admin/dashboard'],
          roles: [roles.SUPER_ADMIN],
        },
        {
          label: 'S_NAV.ID_CREATION',
          icon: 'pi pi-id-card',
          roles: [roles.SUPER_ADMIN, roles],
          items: [
            {
              label: 'S_NAV.ID_CREATION',
              icon: 'pi pi-id-card',
              routerLink: ['/admin/idcreation'],
              roles: [roles.SUPER_ADMIN],
            },
            {
              label: 'S_NAV.ID_CREATION_HISTORY',
              icon: 'pi pi-history',
              routerLink: ['/admin/idcreation_history'],
              roles: [roles.SUPER_ADMIN],
            },
            // {
            //   label: 'S_NAV.APPROVAL_HISTORY',
            //   icon: 'pi pi-history',
            //   routerLink: ['/admin/approval_history_list'],
            //   roles: [roles.SUPER_ADMIN],
            // },
          ],
        },
        {
          label: 'S_NAV.REPORTS',
          icon: 'pi pi-chart-bar',
          routerLink: ['/admin/reports'],
          roles: [roles.SUPER_ADMIN],
        },
        {
          label: 'S_NAV.SETTINGS',
          icon: 'pi pi-cog',
          routerLink: ['/admin/settings'],
          roles: [roles.SUPER_ADMIN],
        },
        {
          label: 'S_NAV.USER_MANAGEMENT',
          icon: 'pi pi-users',
          routerLink: ['/admin/user-management'],
          roles: [roles.SUPER_ADMIN],
        },
      ],
    },

    // SALES

    {
      label: 'S_NAV.HOME',
      roles: [roles.SALES],
      items: [
        {
          label: 'S_NAV.DASHBOARD',
          icon: 'pi pi-fw pi-video',
          routerLink: ['/sales/dashboard'],
          roles: [roles.SALES],
        },
        {
          label: 'S_NAV.ID_CREATION',
          icon: 'pi pi-id-card',
          roles: [roles.SALES, roles],
          items: [
            {
              label: 'S_NAV.ID_CREATION',
              icon: 'pi pi-id-card',
              routerLink: ['/sales/idcreation'],
              roles: [roles.SALES],
            },
            {
              label: 'S_NAV.ID_CREATION_HISTORY',
              icon: 'pi pi-history',
              routerLink: ['/sales/idcreation_history'],
              roles: [roles.SALES],
            },
          ],
        },
      ],
    },
  ];

  constructor() {}

  getMenuItemsForRole(role: string): MenuItem[] {
    return this.allMenuItems
      .filter((menu) => menu['roles']?.includes(role))
      .map((menu) => ({
        ...menu,
        items: menu.items?.filter((item) => item['roles']?.includes(role)),
      }));
  }

  getContactSection() {
    return {
      customerCare: this.constants.customerCare,
      supportEmail: this.constants.supportEmail,
    };
  }
}
