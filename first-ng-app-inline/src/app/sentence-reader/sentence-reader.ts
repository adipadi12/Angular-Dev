import { Component, Input, OnChanges } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-sentence-reader',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div style="flex:1; padding:20px;">
      <h2>Sentence Reader</h2>

      <p style="font-size:22px; min-height:80px;">
        {{ currentSentence }}
      </p>

      <button (click)="next()">
        {{ isLastSentence ? 'Next Module' : 'Next Sentence' }}
      </button>
    </div>
  `
})
export class SentenceReader implements OnChanges {
  @Input() sentences: string[] = [];

  currentIndex = 0;

  ngOnChanges() {
    // Reset when module changes
    this.currentIndex = 0;
  }

  get currentSentence() {
    return this.sentences[this.currentIndex];
  }

  get isLastSentence() {
    return this.currentIndex === this.sentences.length - 1;
  }

  next() {
    if (!this.isLastSentence) {
      this.currentIndex++;
    }
  }
}
