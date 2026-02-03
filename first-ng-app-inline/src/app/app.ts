import { Component, OnInit } from '@angular/core';
import videoData from '../assets/module-videos.json';

import { ModuleList } from './module-list/module-list';
import { VideoPlayer } from './video-player/video-player';
@Component({
  selector: 'app-root',
  standalone: true,
  template: `
    <div style="display:flex; height:100vh;">
      <app-module-list
        [modules]="modules"
        [selected]="selectedModule"
        (moduleSelected)="onModuleSelect($event)"
      ></app-module-list>

      <app-video-player
        [videoId]="selectedVideoId"
      ></app-video-player>
    </div>
  `,
  imports: [ModuleList, VideoPlayer]
})
export class App implements OnInit {
  modules = Object.keys(videoData);
  selectedModule = this.modules[0];
  selectedVideoId = videoData[this.selectedModule as keyof typeof videoData];

  ngOnInit() {}

  onModuleSelect(module: string) {
    this.selectedModule = module;
    this.selectedVideoId = videoData[module as keyof typeof videoData];
  }
}
