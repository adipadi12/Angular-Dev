import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-video-player',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div style="flex:1; padding:20px;">
      <iframe
        *ngIf="videoUrl"
        [src]="videoUrl"
        width="100%"
        height="400"
        frameborder="0"
        allow="autoplay; encrypted-media"
        allowfullscreen>
      </iframe>
    </div>
  `
})
export class VideoPlayer {
  @Input() set videoId(id: string) {
    this.videoUrl = this.sanitizer.bypassSecurityTrustResourceUrl(
      `https://www.youtube.com/embed/${id}?autoplay=1`
    );
  }

  videoUrl?: SafeResourceUrl;

  constructor(private sanitizer: DomSanitizer) {}
}
