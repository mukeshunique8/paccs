import { Routes } from '@angular/router';
import { HomeHeroComponent } from '../ui_components/home-hero/home-hero.component';
import { HomeComponent } from '../pages/home/home.component';
import { NotfoundComponent } from '../ui_components/notfound/notfound.component';
import { ContactComponent } from '../pages/contact/contact.component';
import { AboutComponent } from '../pages/about/about.component';
import { PartnersComponent } from '../pages/partners/partners.component';
import { ServicesComponent } from '../pages/services/services.component';
import { BeforeLoginComponent } from '../layouts/before-login/before-login.component';
import { IdpLoginComponent } from '../pages/idp-login/idp-login.component';
import { AppLayout } from '../layouts/dashboard/app.layout';
import { Dashboard } from '../pages/dashboard/dashboard';

export const routes: Routes = [
   {
    path: '',
    component: BeforeLoginComponent,
    children: [
      { path: '', component: HomeComponent }, // default
      { path: 'services', component: ServicesComponent },
      { path: 'partners', component: PartnersComponent },
      { path: 'about', component: AboutComponent },
      { path: 'contact', component: ContactComponent },
    ]
  },
  
  { path: 'login', component:IdpLoginComponent  },
  { path: 'dashboard', component:AppLayout ,   children: [
            { path: '', component: Dashboard },
            // { path: 'uikit', loadChildren: () => import('./app/pages/uikit/uikit.routes') },
            // { path: 'documentation', component: Documentation },
            // { path: 'pages', loadChildren: () => import('./app/pages/pages.routes') }
        ] },
  { path: '**', component: NotfoundComponent } // 404 outside layout
];


// https://idp.inetcsc.com/auth/realms/inetcsc/protocol/openid-connect/auth?response_type=code&client_id=inetcsc&state=80739