import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-video',
  standalone: true,
  imports: [CommonModule],
  template: `
    <!-- Thumbnail state -->
    <div
      *ngIf="!isPlaying"
      (click)="playVideo()"
      style="
        width:560px;
        height:315px;
        position:relative;
        cursor:pointer;
        background:black;
      "
    >
      <img
        [src]="thumbnailUrl"
        alt="Video thumbnail"
        style="
          width:100%;
          height:100%;
          object-fit:cover;
        "
      />

      <!-- Play button overlay -->
      <div
        style="
          position:absolute;
          top:50%;
          left:50%;
          transform:translate(-50%, -50%);
          width:72px;
          height:72px;
          background:rgba(0,0,0,0.6);
          border-radius:50%;
          display:flex;
          align-items:center;
          justify-content:center;
        "
      >
        <div
          style="
            width:0;
            height:0;
            border-left:22px solid white;
            border-top:14px solid transparent;
            border-bottom:14px solid transparent;
            margin-left:4px;
          "
        ></div>
      </div>
    </div>

    <!-- Iframe state -->
    <iframe
      *ngIf="isPlaying"
      [src]="videoUrl"
      width="560"
      height="315"
      frameborder="0"
      allow="autoplay; encrypted-media"
      allowfullscreen>
    </iframe>
  `
})
export class Video {
  readonly videoId = 'xXG0H0IfC8g';

  videoUrl?: SafeResourceUrl;
  isPlaying = false;

  thumbnailUrl = `https://img.youtube.com/vi/${this.videoId}/hqdefault.jpg`;

  constructor(private sanitizer: DomSanitizer) {}

  playVideo() {
    this.videoUrl = this.sanitizer.bypassSecurityTrustResourceUrl(
      `https://www.youtube.com/embed/${this.videoId}?autoplay=1`
    );

    this.isPlaying = true;
  }
}
