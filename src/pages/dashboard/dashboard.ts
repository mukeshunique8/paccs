import { Component } from '@angular/core';
import { NotificationsWidget } from './components/notificationswidget';
import { StatsWidget } from './components/statswidget';
import { BestSellingWidget } from './components/bestsellingwidget';
import { RecentSalesWidget } from './components/recentsaleswidget';
import { RevenueStreamWidget } from './components/revenuestreamwidget';
import { DailyKuralComponent } from './components/daily-kural/daily-kural.component';

@Component({
  selector: 'app-dashboard',
  imports: [
    StatsWidget,
    RecentSalesWidget,
    BestSellingWidget,
    RevenueStreamWidget,
    NotificationsWidget,
    DailyKuralComponent,
  ],
  template: `
    <section class="grid grid-cols-1 md:grid-cols-2 gap-4 p-4">
  <!-- Left: Kural Component -->
  <section>
    <app-daily-kural></app-daily-kural>
  </section>

  <!-- Right: Orders Card + Image -->
  <section>
    <div class="flex flex-col sm:flex-row gap-4 items-stretch">
      
      <!-- Orders Card -->
     <div class="flex-1 bg-gradient-to-r from-indigo-500 to-purple-600 text-white rounded-xl shadow p-5">
  <div class="flex justify-between items-center mb-4">
    <!-- Wallet Info -->
    <div>
      <span class="block text-sm opacity-80">Wallet Balance</span>
      <div class="text-2xl font-semibold mt-1">₹12,450.00</div>
    </div>

    <!-- Refresh Button -->
    <button
      class="bg-white/10 hover:bg-white/20 p-2 rounded-full transition"
      
      title="Refresh Balance"
    >
      <i class="pi pi-refresh text-white text-lg"></i>
    </button>
  </div>

  <!-- Sub info -->
  <div class="text-sm opacity-80 flex items-center gap-2">
    <i class="pi pi-wallet text-white/70"></i>
    Last updated: just now
  </div>
</div>


      <!-- Image -->
      <div class="flex-1 flex items-center justify-center">
        <img src="/images/pacs.png" alt="PACs" class="max-w-full h-[150px] rounded-xl shadow" />
      </div>
      
    </div>
  </section>
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
export class Dashboard {}
