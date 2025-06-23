import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { TranslateService } from '@ngx-translate/core';
import { SharedModule } from '../../modules/shared.module';

@Component({
  selector: 'app-news-ticker',
  templateUrl: './news-ticker.component.html',
  styleUrls: ['./news-ticker.component.css'],
  imports: [SharedModule],
})
export class NewsTickerComponent implements OnInit {
  newsItems: any[] = [];
  isLoading = true;
  apiError = false;
  fallbackNewsItems: any[] = [];

  constructor(
    private http: HttpClient,
    public translate: TranslateService,
  ) {}

  ngOnInit() {
    this.initializeFallbackItems();
    this.fetchNewsFromAPI();
    this.translate.onLangChange.subscribe(() => {
      this.initializeFallbackItems();
      if (this.apiError || this.newsItems.length === 0) {
        this.newsItems = [...this.fallbackNewsItems];
      }
    });
  }

  private initializeFallbackItems() {
    this.fallbackNewsItems = [
      {
        title: this.translate.instant('NEWS.MAINTENANCE.TITLE'),
        description: this.translate.instant('NEWS.MAINTENANCE.DESCRIPTION'),
        date: new Date(),
        icon: 'pi-wrench',
      },
      {
        title: this.translate.instant('NEWS.NEW_FEATURE.TITLE'),
        description: this.translate.instant('NEWS.NEW_FEATURE.DESCRIPTION'),
        date: new Date(),
        icon: 'pi-star',
      },
      {
        title: this.translate.instant('NEWS.MOBILE_UPDATE.TITLE'),
        description: this.translate.instant('NEWS.MOBILE_UPDATE.DESCRIPTION'),
        date: new Date(),
        icon: 'pi-mobile',
      },
    ];
  }

  fetchNewsFromAPI() {
    this.isLoading = true;
    this.apiError = false;

    this.http.get<any[]>('https://api.yourservice.com/news').subscribe({
      next: (data) => {
        if (data && data.length > 0) {
          this.newsItems = this.processApiData(data);
        } else {
          // If API returns empty array, use fallback
          this.newsItems = [...this.fallbackNewsItems];
        }
        this.isLoading = false;
      },
      error: (err) => {
        console.error('Failed to fetch news:', err);
        this.apiError = true;
        // On error, use fallback items instead of showing error message
        this.newsItems = [...this.fallbackNewsItems];
        this.isLoading = false;
      },
    });
  }

  private processApiData(apiData: any[]): any[] {
    return apiData.map((item) => ({
      title: item.title,
      description: item.description,
      date: new Date(item.publishedDate),
      icon: this.getIconForType(item.type),
    }));
  }

  private getIconForType(type: string): string {
    const icons: { [key: string]: string } = {
      maintenance: 'pi-wrench',
      feature: 'pi-star',
      update: 'pi-mobile',
      holiday: 'pi-calendar',
      default: 'pi-info-circle',
    };
    return icons[type] || icons['default'];
  }
}
