import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import videoData from '../assets/module-videos.json';

import { ModuleList } from './module-list/module-list';
import { VideoPlayer } from './video-player/video-player';

import sentenceData from '../assets/modules-sentences.json';
import { SentenceReader } from './sentence-reader/sentence-reader';

const videos = videoData as Record<string, string>;
const sentencesMap = sentenceData as Record<string, string[]>;

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, ModuleList, VideoPlayer, SentenceReader],
  template: `
    <div style="display:flex; height:100vh;">
      <app-module-list
        [modules]="modules"
        [selected]="selectedModule"
        (moduleSelected)="onModuleSelect($event)"
      ></app-module-list>

      <div style="flex:1;">
        <div style="padding:10px; border-bottom:1px solid #ccc;">
          <button (click)="viewMode='video'"
          style = "padding: 8px 16px;
           background-color: #ffffff;
           color: #333333;
           border: 1px solid #cccccc;
           border-radius: 4px;
           font-size: 16px;
           cursor: pointer;
           transition: all 0.2s ease;
            "
          >Video</button>
          <button (click)="viewMode='sentence'"
          style = "padding: 8px 16px;
           background-color: #ffffff;
           color: #333333;
           border: 1px solid #cccccc;
           border-radius: 4px;
           font-size: 16px;
           cursor: pointer;
           transition: all 0.2s ease;
            "
          >Sentence</button>
        </div>

        <app-video-player
          *ngIf="viewMode === 'video'"
          [videoId]="selectedVideoId"
        ></app-video-player>

        <app-sentence-reader
          *ngIf="viewMode === 'sentence'"
          [sentences]="currentSentences"
        ></app-sentence-reader>
      </div>
    </div>
  `
})
export class App implements OnInit {
  modules = Object.keys(videos);
  selectedModule = this.modules[0];
  selectedVideoId = videos[this.selectedModule];
  viewMode: 'video' | 'sentence' = 'video';
  currentSentences = sentencesMap[this.selectedModule];

  ngOnInit() {}

  onModuleSelect(module: string) {
  this.selectedModule = module;
  this.selectedVideoId = videos[module];
  this.currentSentences = sentencesMap[module];
}
}
