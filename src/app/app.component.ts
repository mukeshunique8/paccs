import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SharedModule } from '../modules/shared.module';
import { NavbarComponent } from "../ui_components/navbar/navbar.component";
import { FooterComponent } from "../ui_components/footer/footer.component";
import { TopNavbarComponent } from "../ui_components/top-navbar/top-navbar.component";
import { NgPrimeModule } from '../modules/ngprime.module';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, SharedModule,NgPrimeModule, NavbarComponent, FooterComponent, TopNavbarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  providers: [
    MessageService
  ]
})
export class AppComponent {
  title = 'pacss';
}
