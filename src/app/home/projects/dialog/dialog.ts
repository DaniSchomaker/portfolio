import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Project } from '../../../interfaces/project.interface';

@Component({
  selector: 'app-dialog',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './dialog.html',
  styleUrl: './dialog.scss',
})
export class Dialog {
  @Input() project!: Project;
  @Output() close = new EventEmitter<void>();
  @Output() next = new EventEmitter<void>();  

  onOverlayClick() {
    this.close.emit();
  }

  onDialogClick(event: MouseEvent) {
    event.stopPropagation();
  }

  onNextClick(event: MouseEvent) {
    event.stopPropagation();   
    this.next.emit();
  }
}

