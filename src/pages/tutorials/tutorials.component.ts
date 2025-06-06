import { Component } from '@angular/core';
import {  YoutubePlayerComponent } from '../youtube-player/youtube-player.component';
import { SharedModule } from '../../modules/shared.module';

@Component({
  selector: 'app-tutorials',
  imports: [SharedModule,YoutubePlayerComponent],
  templateUrl: './tutorials.component.html',
  styleUrl: './tutorials.component.css'
})
export class TutorialsComponent {

}
