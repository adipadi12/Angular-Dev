import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-module-list',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div style="width:250px; border-right:1px solid #ccc;">
      <div
        *ngFor="let module of modules"
        (click)="select(module)"
        [style.background]="module === selected ? '#ddd' : 'transparent'"
        style="padding:12px; cursor:pointer;"
      >
        {{ module }}
      </div>
    </div>
  `
})
export class ModuleList {
  @Input() modules: string[] = [];
  @Input() selected!: string;
  @Output() moduleSelected = new EventEmitter<string>();

  select(module: string) {
    this.moduleSelected.emit(module);
  }
}
