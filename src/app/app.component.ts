import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SharedModule } from '../modules/shared.module';
import { NgPrimeModule } from '../modules/ngprime.module';
import { MessageService } from 'primeng/api';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, SharedModule, NgPrimeModule, TranslateModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  providers: [MessageService],
})
export class AppComponent {
  constructor(private translate: TranslateService) {}

  title = 'Paccs';
}
