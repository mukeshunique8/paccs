import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterLinkActive, RouterModule } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { LucideIconsModule } from './lucide-icons.module';
import { CarouselModule } from 'primeng/carousel';
import { TranslateModule } from '@ngx-translate/core';
import { LanguageSwitcherComponent } from '../ui_components/language-switcher/language-switcher.component';
import { NgPrimeModule } from './ngprime.module';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';

@NgModule({
  imports: [
    TranslateModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    RouterLinkActive,
    LucideIconsModule,
    // UI modules
    ButtonModule,
    CarouselModule,
    LanguageSwitcherComponent,SweetAlert2Module
  ],
  exports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
LucideIconsModule,
    // UI modules
    ButtonModule,
    CarouselModule,
    LanguageSwitcherComponent,TranslateModule,NgPrimeModule,SweetAlert2Module
    
    
  ]
})
export class SharedModule { }
