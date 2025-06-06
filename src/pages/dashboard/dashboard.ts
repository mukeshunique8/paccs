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
import { NgxFastMarqueeModule } from 'ngx-fast-marquee';
import { THIRUKKURAL_LIST } from '../../constants/thirukkural';
import { HeaderMarqueeComponent } from "../../ui_components/header-marquee/header-marquee.component";
import {
  trigger,
  transition,
  style,
  animate,
  keyframes,
} from '@angular/animations';

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
    NgxFastMarqueeModule,
    HeaderMarqueeComponent
],

  styleUrl: './dashboard.css',
  template: `
  
 <section class="p-4 flex flex-col md:flex-row w-full gap-4 items-stretch">
  <!-- Left Column - Marquee -->
  <div class="w-full md:w-1/2 min-w-0 flex items-center ">
    <app-header-marquee class="w-full"></app-header-marquee>
  </div>
  
  <!-- Right Column - ID and Image Cards -->
  <div class="w-full md:w-1/2 flex flex-col sm:flex-row gap-4">
    <!-- ID Card - Now with equal height -->
    <div class="flex-1 card-bg rounded-lg shadow-sm p-4 flex flex-col items-center justify-center min-h-[80px] border-l-4 border-blue-500">
  <!-- ID Number -->
  <p class="text-center font-bold text-sm mb-1">ID: TN4848585858</p>
  
  <!-- Name Display -->
  <div class="text-center">
    <p class="font-semibold text-lg ">
      UdayaKumar S
    </p>
    <p class="text-xs text-gray-500 mt-1">
      Registered User
    </p>
  </div>
</div>
    <!-- Image Card - Improved alignment -->
    <div class="flex-1 card-bg rounded-lg shadow-sm flex items-center justify-center p-2 min-h-[80px]">
      <img 
        src="/images/cooplogo.png" 
        alt="PACs" 
        class="h-full max-h-[80px] w-auto object-contain"
      >
    </div>
  </div>
</section>
 <section class="p-4 flex flex-col md:flex-row w-full gap-4">
  <!-- Left Cards Section - Now more responsive -->
  <div class="w-full md:w-3/4 min-w-0"> <!-- Added min-w-0 to prevent shrinking -->
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6"> <!-- Adjusted gaps -->
      <div
        *ngFor="let card of cards; let i = index"
        class="relative p-4 md:p-6 rounded-xl overflow-hidden transition-all duration-300 hover:shadow-lg min-w-0 flex-shrink"
        [ngClass]="[
          'bg-gradient-to-br',
          i % 4 === 0 ? 'from-blue-500 to-blue-400' :
          i % 4 === 1 ? 'from-purple-500 to-purple-400' :
          i % 4 === 2 ? 'from-green-500 to-green-400' :
          'from-amber-500 to-amber-400'
        ]"
      >
        <!-- Background pattern -->
        <div class="absolute inset-0 opacity-10">
          <div class="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgdmlld0JveD0iMCAwIDYwIDYwIj48Y2lyY2xlIGN4PSIxMiIgY3k9IjEyIiByPSIxMiIgZmlsbD0id2hpdGUiIGZpbGwtb3BhY2l0eT0iMC4yIi8+PC9zdmc+')]"></div>
        </div>

        <!-- Card content - made more compact for mobile -->
        <div class="relative z-10 flex items-center justify-between min-w-0">
          <!-- Left: Icon and Text -->
          <div class="flex items-center space-x-2 md:space-x-4 min-w-0">
            <div class="p-2 md:p-3 rounded-lg  bg-opacity-20 backdrop-blur-sm flex-shrink-0">
              <lucide-icon [name]="card.icon" class="w-5 h-5 md:w-6 md:h-6 text-white"></lucide-icon>
            </div>
            <div class="min-w-0">
              <h3 class="font-semibold text-white text-sm md:text-lg truncate">{{ card.title }}</h3>
              <p class="text-white text-opacity-80 text-xs md:text-sm truncate">{{ card.value }}</p>
            </div>
          </div>

          <!-- Right: Change Indicator -->
          <div class="text-xl md:text-2xl font-bold ml-2 flex-shrink-0"
            [ngClass]="{
              'text-green-200': card.change.startsWith('+'),
              'text-red-200': card.change.startsWith('-')
            }">
            {{ card.change }}
          </div>
        </div>

        <!-- Subtle hover effect -->
        <div class="absolute inset-0 bg-white opacity-0 hover:opacity-10 transition-opacity duration-300"></div>
      </div>
    </div>
  </div>

  <!-- Right Side Section - Improved layout -->
  <div class="w-full md:w-1/4 flex flex-col gap-4 min-w-[250px]"> <!-- Added min-width -->
   
    

    

    <!-- Third Card (Add your content here) -->
    <div class="bg-amber-50 rounded-lg shadow-md p-5 flex-1 border-l-4 border-amber-400">
  <div class="flex flex-col h-full space-y-3">
    <!-- Header with decorative elements -->
    <div class="flex items-center justify-between">
      <h3 class="font-semibold text-xl text-amber-800">
        திருக்குறள் #{{currentKural?.Number}}
      </h3>
      <div class="text-amber-600">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
        </svg>
      </div>
    </div>

    <!-- Kural text with Tamil-optimized typography -->
    <div class="bg-white p-4 rounded-md shadow-inner border border-amber-100">
      <p class="text-lg leading-relaxed text-gray-800 text-center font-tamil">
        {{currentKural?.Line1}}<br>
        {{currentKural?.Line2}}
      </p>
    </div>

    <!-- Optional footer with explanation -->
    <!-- <div class="mt-auto pt-2 border-t border-amber-100">
      <p class="text-sm text-amber-700">
        <span class="font-medium">அதிகாரம்:</span> {{currentKural?.Chapter}}
      </p>
    </div> -->
  </div>
</div>
  </div>
</section>
    <!-- <div class="border-t border-gray-300 my-6"></div> -->


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
            class="category-cards grid grid-cols-1 sm:grid-cols-2  lg:grid-cols-6 gap-4"
          >
           <div
  *ngFor="let service of category.services"
  (click)="service.isActive && goToServicePage(service?.name)"
  class="popular-service-card card-bg rounded-lg p-4 text-center shadow-sm hover:shadow-md cursor-pointer transition-shadow duration-300 animate-fade-in-up"
  [style.animation-delay]="0.1 * category.services.indexOf(service) + 's'"
  [class.opacity-40]="!service.isActive"
  [class.pointer-events-none]="!service.isActive"
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
      </div>
      <div class="w-full h-fit md:w-1/4  ">
    <section class="mb-6 bg-white rounded-lg shadow-sm p-6 border border-gray-100 max-w-[320px] mx-auto">
  <p class="font-semibold text-xl mb-6 text-blue-600 flex items-center">
    <i class="pi pi-info-circle mr-3"></i>News & Updates
  </p>

  <div class="h-[380px] overflow-hidden relative">
    <div class="marquee-content">
      <div *ngFor="let item of newsItems" class="news-item p-3 mb-3 rounded-lg bg-gray-50 hover:bg-blue-50 transition-colors duration-200 border-l-4 border-blue-400 w-full flex space-x-3">
        <div class="p-1.5 rounded-full mt-0.5 flex-shrink-0 text-blue-600 text-sm flex items-center justify-center">
          <i [class]="'pi ' + item.icon"></i>
        </div>

        <div class="flex-1 min-w-0 break-words flex flex-col">
          <p class="text-sm font-semibold text-gray-800 mb-1 truncate">
            {{ item.title }}
          </p>
          <div class="text-xs text-gray-600 mb-1.5 whitespace-normal break-words">
            {{ item.description }}
          </div>
          <span class="text-[10px] text-gray-500 block">
            {{ item.date | date: 'shortDate' }}
          </span>
        </div>
      </div>
    </div>
  </div>
</section>


      </div>
    </section>
    <div class="fixed bottom-6 right-6 z-50">
      <!-- Main WhatsApp Card -->
      <div
        class="bg-white rounded-lg shadow-xl overflow-hidden w-64 whatsappCard hidden transition-all duration-300 transform hover:scale-105"
      >
        <!-- Card Header -->
        <div class="bg-green-500 p-3 flex items-center">
          <div class="bg-white p-1 rounded-full mr-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="#25D366"
            >
              <path
                d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"
              />
            </svg>
          </div>
          <h3 class="text-white font-semibold">Chat with Us</h3>
        </div>

        <!-- Card Body -->
        <div class="p-4">
          <p class="text-gray-600 text-sm mb-3">
            Have questions? Our team is here to help!
          </p>

          <a
            href="https://wa.me/7200022100"
            target="_blank"
            class="block w-full bg-green-500 hover:bg-green-600 text-white text-center py-2 px-4 rounded-md transition duration-200"
          >
            Start Chat
          </a>

          <p class="text-xs text-gray-500 mt-2">
            Typically replies within minutes
          </p>
        </div>
      </div>

      <!-- Floating Button (alternative) -->
      <div class="mt-3 flex justify-end">
        <button
          (click)="toggleWhatsAppCard()"
          class="bg-green-500 cursor-pointer text-white p-3 rounded-full shadow-lg hover:bg-green-600 transition"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="white"
          >
            <path
              d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"
            />
          </svg>
        </button>
      </div>
    </div>

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
  constants = constants;

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
  newsItems = [
    {
      title: 'System Maintenance Scheduled',
      description:
        'Planned maintenance this Saturday from 2:00 AM to 4:00 AM. Services may be temporarily unavailable.',
      date: new Date(),
      icon: 'pi-wrench',
    },
    {
      title: 'New Feature Released',
      description:
        "We've added new reporting tools to help you analyze your transactions more effectively.",
      date: new Date('2023-06-15'),
      icon: 'pi-star',
    },
    {
      title: 'Mobile App Update',
      description:
        'Version 2.5 of our mobile app is now available with improved performance and new UI.',
      date: new Date('2023-06-10'),
      icon: 'pi-mobile',
    },
    {
      title: 'Holiday Schedule',
      description:
        'Our customer support will have limited availability during the upcoming national holidays.',
      date: new Date('2023-06-05'),
      icon: 'pi-calendar',
    },
  ];
      kuralList = THIRUKKURAL_LIST.kural;
    
  currentKural: any;
    currentIndex = 0;
  ngOnInit(): void {
    this.pickRandomKural();

    this.serviceCategories = this.serviceCategoryService.getServiceCategories();
  }
   pickRandomKural() {
    this.currentIndex = Math.floor(Math.random() * this.kuralList.length);
    this.currentKural = this.kuralList[this.currentIndex];
    // console.log('Current Kural:', this.currentKural);
  }

  // Safely navigate with lowercased category name
  goToServicePage(categoryName: string): void {
    if (typeof categoryName === 'string') {
      this.router.navigate([`/services/${categoryName.toLowerCase()}`]);
    } else {
      console.error('Category name is not a string:', categoryName);
    }
  }
  toggleWhatsAppCard() {
    const card = document.querySelector('.whatsappCard');
    if (card) {
      card.classList.toggle('hidden');
    }
  }
}
