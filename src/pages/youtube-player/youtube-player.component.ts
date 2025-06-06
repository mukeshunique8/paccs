import { Component, ViewChild, ElementRef, AfterViewInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-youtube-player',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './youtube-player.component.html',
  styleUrls: ['./youtube-player.component.css']
})
export class YoutubePlayerComponent implements AfterViewInit, OnDestroy {
  @ViewChild('youtubeContainer') youtubeContainer!: ElementRef<HTMLDivElement>;
  
  player: any;
  YT: any;
  apiLoaded = true;
  
  videoList = [
    {
      id: 'mM8p_MzJjxY',
      title: 'First Video',
      thumbnail: 'https://i.ytimg.com/vi/mM8p_MzJjxY/hqdefault.jpg',
      duration: '10:30',
      publishedAt: '2023'
    },
    {
      id: 'xRDhWYVTYow',
      title: 'Second Video',
      thumbnail: 'https://i.ytimg.com/vi/xRDhWYVTYow/hqdefault.jpg',
      duration: '15:45',
      publishedAt: '2023'
    },
    {
      id: 'io2Eecb_0FM',
      title: 'Third Video',
      thumbnail: 'https://i.ytimg.com/vi/io2Eecb_0FM/hqdefault.jpg',
      duration: '8:20',
      publishedAt: '2023'
    },
    {
      id: 'mM8p_MzJjxY',
      title: 'First Video',
      thumbnail: 'https://i.ytimg.com/vi/mM8p_MzJjxY/hqdefault.jpg',
      duration: '10:30',
      publishedAt: '2023'
    },
    {
      id: 'xRDhWYVTYow',
      title: 'Second Video',
      thumbnail: 'https://i.ytimg.com/vi/xRDhWYVTYow/hqdefault.jpg',
      duration: '15:45',
      publishedAt: '2023'
    },
    {
      id: 'io2Eecb_0FM',
      title: 'Third Video',
      thumbnail: 'https://i.ytimg.com/vi/io2Eecb_0FM/hqdefault.jpg',
      duration: '8:20',
      publishedAt: '2023'
    }, {
      id: 'mM8p_MzJjxY',
      title: 'First Video',
      thumbnail: 'https://i.ytimg.com/vi/mM8p_MzJjxY/hqdefault.jpg',
      duration: '10:30',
      publishedAt: '2023'
    },
    {
      id: 'xRDhWYVTYow',
      title: 'Second Video',
      thumbnail: 'https://i.ytimg.com/vi/xRDhWYVTYow/hqdefault.jpg',
      duration: '15:45',
      publishedAt: '2023'
    },
    {
      id: 'io2Eecb_0FM',
      title: 'Third Video',
      thumbnail: 'https://i.ytimg.com/vi/io2Eecb_0FM/hqdefault.jpg',
      duration: '8:20',
      publishedAt: '2023'
    }, {
      id: 'mM8p_MzJjxY',
      title: 'First Video',
      thumbnail: 'https://i.ytimg.com/vi/mM8p_MzJjxY/hqdefault.jpg',
      duration: '10:30',
      publishedAt: '2023'
    },
    {
      id: 'xRDhWYVTYow',
      title: 'Second Video',
      thumbnail: 'https://i.ytimg.com/vi/xRDhWYVTYow/hqdefault.jpg',
      duration: '15:45',
      publishedAt: '2023'
    },
    {
      id: 'io2Eecb_0FM',
      title: 'Third Video',
      thumbnail: 'https://i.ytimg.com/vi/io2Eecb_0FM/hqdefault.jpg',
      duration: '8:20',
      publishedAt: '2023'
    }, {
      id: 'mM8p_MzJjxY',
      title: 'First Video',
      thumbnail: 'https://i.ytimg.com/vi/mM8p_MzJjxY/hqdefault.jpg',
      duration: '10:30',
      publishedAt: '2023'
    },
    {
      id: 'xRDhWYVTYow',
      title: 'Second Video',
      thumbnail: 'https://i.ytimg.com/vi/xRDhWYVTYow/hqdefault.jpg',
      duration: '15:45',
      publishedAt: '2023'
    },
    {
      id: 'io2Eecb_0FM',
      title: 'Third Video',
      thumbnail: 'https://i.ytimg.com/vi/io2Eecb_0FM/hqdefault.jpg',
      duration: '8:20',
      publishedAt: '2023'
    }
  ];

  currentVideoId = this.videoList[0].id;

  ngAfterViewInit(): void {
    if (!(window as any).YT) {
      const tag = document.createElement('script');
      tag.src = 'https://www.youtube.com/iframe_api';
      document.body.appendChild(tag);
    }

    (window as any).onYouTubeIframeAPIReady = () => {
      this.YT = (window as any).YT;
      this.apiLoaded = true;
      this.initPlayer();
    };

    if ((window as any).YT) {
      setTimeout(() => {
        this.YT = (window as any).YT;
        this.apiLoaded = true;
        this.initPlayer();
      }, 100);
    }
  }

  ngOnDestroy(): void {
    if (this.player) {
      this.player.destroy();
    }
  }

  initPlayer(): void {
    this.player = new this.YT.Player(this.youtubeContainer.nativeElement, {
      width: '100%',
      height: '100%',
      videoId: this.currentVideoId,
      playerVars: {
        autoplay: 0,
        modestbranding: 1,
        rel: 0,
        fs: 1,
        controls: 1
      },
      events: {
        'onReady': () => this.onPlayerReady(),
        'onStateChange': (event: any) => this.onPlayerStateChange(event)
      }
    });
  }

  onPlayerReady(): void {
    // Player is ready
  }

  onPlayerStateChange(event: any): void {
    // Handle state changes
  }

  changeVideo(videoId: string): void {
    this.currentVideoId = videoId;
    if (this.player && this.apiLoaded) {
      this.player.loadVideoById(videoId);
    }
  }

  getCurrentVideo() {
    return this.videoList.find(v => v.id === this.currentVideoId);
  }
}