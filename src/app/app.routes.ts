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
import { ProfileComponent } from '../pages/profile/profile.component';
import { TutorialsComponent } from '../pages/tutorials/tutorials.component';
import { AdminDashboardComponent } from '../pages/ADMIN/admin-dashboard/admin-dashboard.component';
import { IdCreationComponent } from '../pages/ADMIN/id-creation/id-creation.component';
import { IdCreationHistoryComponent } from '../pages/ADMIN/id-creation-history/id-creation-history.component';
import { AuthGuard } from '../service/auth.guard';
import { RoleGuard } from '../service/role.guard';
import { roles } from '../constants/enumdata';
import { CustomLoginComponent } from '../pages/custom-login/custom-login.component';

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
    ],
  },

  { path: 'login', component: CustomLoginComponent },
  {
    path: 'dashboard',
    component: AppLayout,
    children: [
      { path: '', component: Dashboard },
      { path: 'tutorials', component: TutorialsComponent },
      { path: 'profile', component: ProfileComponent },
    ],
    canActivate: [RoleGuard],
    data: { expectedRoles: [roles.USER] },
  },
  {
    path: 'admin',
    component: AppLayout,
    children: [
      { path: 'dashboard', component: AdminDashboardComponent },
      { path: 'idcreation', component: IdCreationComponent },
      { path: 'idcreation_history', component: IdCreationHistoryComponent },
      { path: 'approval_history_list', component: IdCreationHistoryComponent },
    ],
    canActivate: [RoleGuard],
    data: { expectedRoles: [roles.SUPER_ADMIN] }, // Only allow ADMIN role
  },
  {
    path: 'sales',
    component: AppLayout,
    children: [
      { path: 'dashboard', component: AdminDashboardComponent },
      { path: 'idcreation', component: IdCreationComponent },
      { path: 'idcreation_history', component: IdCreationHistoryComponent },
      { path: 'approval_history_list', component: IdCreationHistoryComponent },
    ],
    canActivate: [RoleGuard],
    data: { expectedRoles: [roles.SALES] }, // Only allow ADMIN role
  },
  { path: '**', component: NotfoundComponent }, // 404 outside layout
];

// https://idp.inetcsc.com/auth/realms/inetcsc/protocol/openid-connect/auth?response_type=code&client_id=inetcsc&state=80739
