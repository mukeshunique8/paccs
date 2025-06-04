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
    <div class="flex items-center space-x-2">
                <lucide-icon name="wallet" class="w-8 h-8 text-primary mr-3"></lucide-icon>

      <div class="text-sm">
        <p class="font-semibold">My Wallet</p>
        <p class="text-xs">Balance: ₹ 1,250.50</p>
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
