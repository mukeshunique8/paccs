import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterLinkActive, RouterModule } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { LucideIconsModule } from './lucide-icons.module';
import { CarouselModule } from 'primeng/carousel';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    RouterLinkActive,

    LucideIconsModule,
    // UI modules
    ButtonModule,
    CarouselModule
  ],
  exports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
LucideIconsModule,
    // UI modules
    ButtonModule,
    CarouselModule
    
  ]
})
export class SharedModule { }
