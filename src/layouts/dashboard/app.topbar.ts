import { Component, ElementRef, HostListener, ViewChild } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { Router, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { StyleClassModule } from 'primeng/styleclass';
import { LayoutService } from '../../pages/services/layout.service';
import { LanguageSwitcherComponent } from '../../ui_components/language-switcher/language-switcher.component';
import { THIRUKKURAL_LIST } from '../../constants/thirukkural';
import { LucideIconsModule } from '../../modules/lucide-icons.module';
import { trigger, transition, style, animate } from '@angular/animations';
import { BalanceButton } from './dash_components/balance.button';
import { AuthService } from '../../service/auth.service';
import { roles } from '../../constants/enumdata';

@Component({
  selector: 'app-topbar',
  standalone: true,
  imports: [
    RouterModule,
    CommonModule,
    StyleClassModule,
    LanguageSwitcherComponent,
    LucideIconsModule,
    BalanceButton,
  ],
  animations: [
    trigger('fadeInOut', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('300ms ease-in', style({ opacity: 1 })),
      ]),
      transition(':leave', [animate('300ms ease-out', style({ opacity: 0 }))]),
    ]),
  ],
  template: ` <div class="layout-topbar">
    <div class="layout-topbar-logo-container">
      <button
        class="layout-menu-button layout-topbar-action"
        (click)="layoutService.onMenuToggle()"
      >
        <i class="pi pi-bars"></i>
      </button>
      <a class="layout-topbar-logo" routerLink="/">
        <img
          src="/images/inetlogo.png"
          alt="inetlogo"
          class="h-14 object-contain"
        />
        <!-- <span>PACCS</span> -->
      </a>
    </div>
    <section class="hidden md:flex w-full items-center justify-between p-4">
      <section class="">
        <div
          class="max-w-7xl mx-auto px-6 py-4 flex items-center justify-center"
        >
          <p
            class="text-xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-blue-500 select-none"
          >
            Primary Agricultural Cooperative Credit Societies
          </p>
        </div>
      </section>

      <div class=" items-center hidden md:flex   p-3 space-x-4">
        <app-balance-button *ngIf="walletShow"></app-balance-button>

        <!-- Dropdown / Button for more actions (Optional) -->
        <!-- <button class="bg-yellow-500 text-white px-3 py-1 rounded-md hover:bg-yellow-600 transition">
      Add Funds
    </button> -->
      </div>
    </section>

    <div class="layout-topbar-actions">
      <div class="layout-config-menu">
        <button
          type="button"
          class="layout-topbar-action"
          (click)="toggleDarkMode()"
        >
          <i
            [ngClass]="{
              'pi ': true,
              'pi-moon': layoutService.isDarkTheme(),
              'pi-sun': !layoutService.isDarkTheme(),
            }"
          ></i>
        </button>
        <!-- <div class="relative">
                    <button
                        class="layout-topbar-action layout-topbar-action-highlight"
                        pStyleClass="@next"
                        enterFromClass="hidden"
                        enterActiveClass="animate-scalein"
                        leaveToClass="hidden"
                        leaveActiveClass="animate-fadeout"
                        [hideOnOutsideClick]="true"
                    >
                        <i class="pi pi-palette"></i>
                    </button>
                    <app-configurator />
                </div> -->
      </div>
      <div class="flex justify-center items-center">
        <app-language-switcher></app-language-switcher>
      </div>
      <button
        class="layout-topbar-menu-button layout-topbar-action"
        pStyleClass="@next"
        enterFromClass="hidden"
        enterActiveClass="animate-scalein"
        leaveToClass="hidden"
        leaveActiveClass="animate-fadeout"
        [hideOnOutsideClick]="true"
      >
        <i class="pi pi-ellipsis-v"></i>
      </button>

      <div class="layout-topbar-menu hidden lg:block">
        <div class="layout-topbar-menu-content">
          <!-- <button type="button" class="layout-topbar-action">
                        <i class="pi pi-calendar"></i>
                        <span>Calendar</span>
                    </button>
                    <button type="button" class="layout-topbar-action">
                        <i class="pi pi-inbox"></i>
                        <span>Messages</span>
                    </button> -->
          <div class="relative" #dropdownMenu>
            <!-- Profile Button -->
            <button
              type="button"
              (click)="toggleDropdown()"
              class="layout-topbar-action flex items-center space-x-2 hover:bg-gray-100 px-3 py-2 rounded-md"
            >
              <i class="pi pi-user text-gray-700"></i>
              <span class="text-sm font-medium text-gray-800">Profile</span>
            </button>

            <!-- Dropdown Menu -->
            <div
              *ngIf="isMenuOpen"
              class="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg border border-gray-200 z-50"
            >
              <ul class="py-1 text-sm text-gray-700">
                <li>
                  <a
                    href="dashboard/profile"
                    class="block px-4 py-2 hover:bg-gray-100"
                    >👤 My Profile</a
                  >
                </li>
                <li>
                  <a
                    href="dashboard/forgot-password"
                    class="block px-4 py-2 hover:bg-gray-100"
                    >🔐 Forgot Password</a
                  >
                </li>
                <li>
                  <a
                    href="dashboard/settings"
                    class="block px-4 py-2 hover:bg-gray-100"
                    >⚙️ Settings</a
                  >
                </li>
                <li>
                  <button
                    (click)="logout()"
                    class="w-full text-left px-4 py-2 hover:bg-red-50 text-red-600"
                  >
                    🚪 Logout
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>`,
})
export class AppTopbar {
  items!: MenuItem[];
  kuralList = THIRUKKURAL_LIST.kural;
  walletShow = false;
  isMenuOpen = false;

  currentKural: any;
  currentIndex = 0;
  constructor(
    public layoutService: LayoutService,
    private router: Router,
    private authService: AuthService,
  ) {}
  balance = 1250.5;

  showBalance = false;
  showLoader = false;
  hideTimeout?: any;

  toggleBalance() {
    if (this.showBalance) {
      // Hide balance immediately
      this.clearTimers();
      this.showBalance = false;
      return;
    }

    // Show loader first
    this.showLoader = true;

    setTimeout(() => {
      this.showLoader = false;
      this.showBalance = true;

      // Auto-hide balance after 5 seconds
      this.hideTimeout = setTimeout(() => {
        this.showBalance = false;
      }, 5000);
    }, 2000); // 2-second loader animation
  }

  clearTimers() {
    if (this.hideTimeout) {
      clearTimeout(this.hideTimeout);
      this.hideTimeout = undefined;
    }
  }

  ngOnDestroy() {
    this.clearTimers();
  }
  ngOnInit() {
    this.pickRandomKural();
    const userRole = this.authService.getCurrentUserRole();
    if (userRole === roles.USER) {
      this.walletShow = true;
    }
  }

  pickRandomKural() {
    this.currentIndex = Math.floor(Math.random() * this.kuralList.length);
    this.currentKural = this.kuralList[this.currentIndex];
    // console.log('Current Kural:', this.currentKural);
  }
  toggleDarkMode() {
    this.layoutService.layoutConfig.update((state) => ({
      ...state,
      darkTheme: !state.darkTheme,
    }));
  }

  @ViewChild('dropdownMenu', { static: false }) dropdownMenu!: ElementRef;

  toggleDropdown() {
    this.isMenuOpen = !this.isMenuOpen;
  }

  logout() {
    this.authService.logout();
  }

  @HostListener('document:click', ['$event'])
  onClickOutside(event: Event) {
    if (
      this.isMenuOpen &&
      this.dropdownMenu &&
      !this.dropdownMenu.nativeElement.contains(event.target)
    ) {
      this.isMenuOpen = false;
    }
  }
}
