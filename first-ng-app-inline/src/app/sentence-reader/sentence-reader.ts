import { Component, Input, OnChanges } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-sentence-reader',
  standalone: true,
  imports: [CommonModule],
  template: `
  <div style="padding:20px; background:#eee; flex:1;">
    <h2>Sentence Reader</h2>
    <p style="font-size:18px; margin:20px 0;">{{ currentSentence }}</p>
    <button (click)="next()" 
    [disabled]="isLastSentence"
    style = "padding: 8px 16px;
           background-color: #ffffff;
           color: #333333;
           border: 1px solid #cccccc;
           border-radius: 4px;
           font-size: 16px;
           cursor: pointer;
           transition: all 0.2s ease;
            "
    >
    Next Sentence</button>
    <p style="margin-top:20px; color:#666;">{{ currentIndex + 1 }} / {{ sentences.length }}</p>
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
