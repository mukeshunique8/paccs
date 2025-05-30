import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SharedModule } from '../../modules/shared.module';
import { NgPrimeModule } from '../../modules/ngprime.module';
import { NavbarComponent } from '../../ui_components/navbar/navbar.component';
import { FooterComponent } from '../../ui_components/footer/footer.component';
import { TranslateModule } from '@ngx-translate/core';
import { TopNavbarComponent } from '../../ui_components/top-navbar/top-navbar.component';

@Component({
  selector: 'app-before-login',
  imports: [RouterOutlet, SharedModule,NgPrimeModule, NavbarComponent, FooterComponent,TranslateModule, TopNavbarComponent],

  templateUrl: './before-login.component.html',
  styleUrl: './before-login.component.css'
})
export class BeforeLoginComponent {

}
