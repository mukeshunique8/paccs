import { Component, OnInit } from '@angular/core';
import { NotificationsWidget } from './components/notificationswidget';
import { StatsWidget } from './components/statswidget';
import { BestSellingWidget } from './components/bestsellingwidget';
import { RecentSalesWidget } from './components/recentsaleswidget';
import { RevenueStreamWidget } from './components/revenuestreamwidget';
import { DailyKuralComponent } from './components/daily-kural/daily-kural.component';
import { SharedModule } from '../../modules/shared.module';
import { NgPrimeModule } from '../../modules/ngprime.module';
import { ServiceCategoryService } from '../../service/service-category.service';
import { Router } from '@angular/router';
import { LucideIconsModule } from '../../modules/lucide-icons.module';
import { TranslateModule } from '@ngx-translate/core';
import { constants } from '../../constants/enumdata';

@Component({
  selector: 'app-dashboard',
  imports: [
    StatsWidget,
    RecentSalesWidget,
    BestSellingWidget,
    RevenueStreamWidget,
    NotificationsWidget,
    DailyKuralComponent,
    LucideIconsModule,
    SharedModule,
    NgPrimeModule,
    TranslateModule,
  ],
  styleUrl: './dashboard.css',
  template: `
    <section class="p-4">
      <!-- Main Section Grid Layout with Adjusted Width for Secondary Div -->
      <div class="grid grid-cols-1 md:grid-cols-5 gap-6">
        <!-- Card Section (Takes 4/5 of the width on larger screens) -->
        <div
          class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:col-span-4"
        >
          <div
            *ngFor="let card of cards"
            class="card-bg p-6 rounded-lg flex items-center justify-between space-x-4"
          >
            <!-- Left: Icon and Title -->
            <div class="flex items-center space-x-4">
              <lucide-icon [name]="card.icon" class="w-8 h-8"></lucide-icon>
              <div>
                <h3 class="font-semibold text-lg">{{ card.title }}</h3>
                <p class="text-sm">{{ card.value }}</p>
              </div>
            </div>

            <!-- Right: Change/Amount -->
            <div class="text-2xl font-bold">
              {{ card.change }}
            </div>
          </div>
        </div>

        <!-- Secondary Div (Takes 1/5 of the width on larger screens) -->
        <div class="flex flex-col card-bg md:col-span-1">
          <!-- ID Display -->
          <div class="flex justify-center items-center py-3 rounded-t-lg">
            <p class="text-center font-bold text-lg">ID: TN4848585858</p>
          </div>

          <!-- PACs Image Display -->
          <div class="flex justify-center items-center py-4 rounded-b-lg">
            <img
              src="/images/pacs.png"
              alt="PACs"
              class="max-w-full h-[150px] rounded-xl shadow-lg"
            />
          </div>
        </div>
      </div>
    </section>
    <div class="border-t border-gray-300 my-6"></div>

    <section class="p-4 flex flex-col md:flex-row w-full gap-4">
      <div class=" w-full md:w-3/4">
        <div
          *ngFor="let category of serviceCategories"
          class="category-section mb-8"
        >
          <h2 class="font-bold mb-4 uppercase">
            {{ 'CATEGORIES.' + category.name | translate }}
          </h2>

          <div
            class="category-cards grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"
          >
            <div
              *ngFor="let service of category.services"
              (click)="goToServicePage(service?.name)"
              class="popular-service-card card-bg rounded-lg p-4 text-center shadow-sm hover:shadow-md transition-shadow duration-300 animate-fade-in-up"
              [style.animation-delay]="
                0.1 * category.services.indexOf(service) + 's'
              "
            >
              <div
                [ngClass]="service.color"
                class="p-3 rounded-full w-12 h-12 mx-auto mb-3 flex items-center justify-center"
              >
                <lucide-icon
                  [name]="service.icon"
                  class="w-6 h-6 text-white"
                ></lucide-icon>
              </div>
              <h3 class="font-medium text-sm">
                {{ 'SERVICES.' + service.name | translate }}
              </h3>
            </div>
          </div>
        </div>
        adsf
      </div>
      <div class="w-full h-fit md:w-1/4 p-6  card-bg rounded-lg shadow-2xl ">
        <section class="mb-6">
          <!-- Title -->
          <h3 class="font-semibold text-lg mb-4 flex items-center">
            <lucide-icon
              name="phone"
              class="w-6 h-6 mr-3 text-blue-500"
            ></lucide-icon>
            {{ 'CONTACT_US.TITLE' | translate }}
          </h3>

          <!-- Service Detail 1 -->
          <div class="mb-6 flex items-start">
            <!-- Icon for Heading 1 -->
            <div class="flex-shrink-0">
              <lucide-icon
                name="star"
                class="w-6 h-6 text-yellow-400"
              ></lucide-icon>
            </div>

            <div class="ml-4">
              <h3 class="text-md font-bold"> {{ 'CONTACT_US.CUSTOMER_SUPPORT' | translate }}</h3>
              <p class="text-sm text-gray-600">
                {{constants.customerCare}}
              </p>
            </div>
          </div>
        </section>
        <div class="border-t border-gray-300 my-3"></div>

        <section class="mb-6 ">
          <h3 class="font-semibold text-lg mb-4">New Content Section</h3>

          <div class="mb-6">
            <h4 class="text-md font-bold">Heading 1</h4>
            <p class="text-sm text-gray-600">
              Description or some important information.
            </p>
          </div>
        </section>
      </div>
    </section>

    <!-- <div class="grid grid-cols-12 gap-8">
            <app-stats-widget class="contents" />
            <div class="col-span-12 xl:col-span-6">
                <app-recent-sales-widget />
                <app-best-selling-widget />
            </div>
            <div class="col-span-12 xl:col-span-6">
                <app-recent-sales-widget />
                <app-best-selling-widget />
            </div>
            <div class="col-span-12 xl:col-span-6">
                <app-revenue-stream-widget />
                <app-notifications-widget />
            </div>
        </div> -->
  `,
})
export class Dashboard implements OnInit {
  serviceCategories: any[] = [];
  constants = constants

  constructor(
    private serviceCategoryService: ServiceCategoryService,
    private router: Router,
  ) {}
  cards = [
    {
      title: "Today's Transactions",
      value: '₹ 12,350',
      change: '+15%',
      color: 'bg-blue-500',
      icon: 'wallet',
    },
    {
      title: 'Overall Transactions',
      value: '₹ 98,000',
      change: '+8%',
      color: 'bg-green-500',
      icon: 'credit-card',
    },
    {
      title: 'Pending Transactions',
      value: '₹ 2,540',
      change: '+5%',
      color: 'bg-yellow-500',
      icon: 'clock',
    },
    {
      title: 'Total Balance',
      value: '₹ 50,000',
      change: '₹ 50K',
      color: 'bg-indigo-500',
      icon: 'indian-rupee',
    },
    {
      title: 'New Users',
      value: '25 New',
      change: '+10%',
      color: 'bg-purple-500',
      icon: 'user-plus',
    },
    {
      title: 'Total Orders',
      value: '120 Orders',
      change: '+6%',
      color: 'bg-teal-500',
      icon: 'shopping-cart',
    },
  ];
  ngOnInit(): void {
    this.serviceCategories = this.serviceCategoryService.getServiceCategories();
  }

  // Safely navigate with lowercased category name
  goToServicePage(categoryName: string): void {
    if (typeof categoryName === 'string') {
      this.router.navigate([`/services/${categoryName.toLowerCase()}`]);
    } else {
      console.error('Category name is not a string:', categoryName);
    }
  }
}
