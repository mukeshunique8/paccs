import { Routes } from '@angular/router';
import { HomeHeroComponent } from '../ui_components/home-hero/home-hero.component';
import { HomeComponent } from '../pages/home/home.component';
import { NotfoundComponent } from '../ui_components/notfound/notfound.component';
import { ContactComponent } from '../pages/contact/contact.component';
import { AboutComponent } from '../pages/about/about.component';
import { PartnersComponent } from '../pages/partners/partners.component';
import { ServicesComponent } from '../pages/services/services.component';

export const routes: Routes = [
  { path: '', component: HomeComponent }, // default route
//   { path: 'products', component: ProductsComponent },
//   { path: 'products/:id', component: ProductDetailComponent },
  { path: 'services', component: ServicesComponent },
  { path: 'partners', component:PartnersComponent },
  { path: 'about', component: AboutComponent },
  { path: 'contact', component: ContactComponent },
  { path: '**', component: NotfoundComponent } // 404 fallback
];
