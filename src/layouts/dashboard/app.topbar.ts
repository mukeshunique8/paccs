import { Component } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { StyleClassModule } from 'primeng/styleclass';
import { LayoutService } from '../../pages/services/layout.service';
import { AppConfigurator } from './app.configurator';
import { LanguageSwitcherComponent } from '../../ui_components/language-switcher/language-switcher.component';
import { THIRUKKURAL_LIST } from '../../constants/thirukkural';
import { HeaderMarqueeComponent } from "../../ui_components/header-marquee/header-marquee.component";
import { LucideIconsModule } from '../../modules/lucide-icons.module';
import { trigger, transition, style, animate } from '@angular/animations';

@Component({
  selector: 'app-topbar',
  standalone: true,
  imports: [
    RouterModule,
    CommonModule,
    StyleClassModule,
    AppConfigurator,
    LanguageSwitcherComponent,
    HeaderMarqueeComponent,LucideIconsModule
],
 animations: [
    trigger('fadeInOut', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('300ms ease-in', style({ opacity: 1 })),
      ]),
      transition(':leave', [
        animate('300ms ease-out', style({ opacity: 0 })),
      ]),
    ]),
  ],
  template: ` 
  
  
  <div class="layout-topbar">
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
   <section class="flex w-full items-center justify-end p-4">
     
      <div class=" items-center hidden md:flex   p-3 space-x-4">
  

<div
  class="flex items-center space-x-3 bg-gradient-to-r from-blue-50 to-blue-100 border border-blue-300 rounded-md px-3 py-2 max-w-xs mx-auto shadow-md"
>
  <!-- Icon Button -->
  <button
    (click)="toggleBalance()"
    aria-label="Toggle Wallet Balance"
    class="flex items-center justify-center w-8 h-8 rounded-full border border-blue-400 bg-white hover:bg-blue-100 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-400"
  >
    <ng-container *ngIf="showLoader">
      <lucide-icon
        name="loader2"
        class="w-5 h-5 text-blue-600 animate-spin"
      ></lucide-icon>
    </ng-container>

    <ng-container *ngIf="!showLoader && !showBalance">
      <lucide-icon
        name="eye"
        class="w-5 h-5 text-blue-600 hover:text-blue-800 transition-colors"
      ></lucide-icon>
    </ng-container>

    <ng-container *ngIf="!showLoader && showBalance">
      <lucide-icon
        name="eye-off"
        class="w-5 h-5 text-blue-600 hover:text-blue-800 transition-colors"
      ></lucide-icon>
    </ng-container>
  </button>

  <!-- Text Content -->
  <div class="flex flex-col">
    <p class="text-base font-semibold text-blue-900 tracking-tight leading-none">
      My Wallet
    </p>

    <p
      class="text-xs text-blue-700 font-mono mt-0.5"
      [class.tracking-widest]="!showBalance || showLoader"
    >
      Balance:
      <span *ngIf="showBalance && !showLoader" class="text-blue-800 font-semibold">
        ₹ {{ balance | number: '1.2-2' }}
      </span>
      <span *ngIf="!showBalance || showLoader" class="select-none">
        ●●●●●●●
      </span>
    </p>
  </div>
</div>


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
          <button type="button" class="layout-topbar-action">
            <i class="pi pi-user"></i>
            <span>Profile</span>
          </button>
        </div>
      </div>
    </div>
  </div>`,
})
export class AppTopbar {
  items!: MenuItem[];
    kuralList = THIRUKKURAL_LIST.kural;
   

currentKural: any;
  currentIndex = 0;
  constructor(public layoutService: LayoutService) {}
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
  
}
