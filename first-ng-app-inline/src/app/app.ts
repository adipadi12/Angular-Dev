import { Component } from '@angular/core';
import { Video } from './video/video';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [Video],
  template: `<app-video></app-video>`,
})
export class App {}
