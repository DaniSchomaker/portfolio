import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Project } from '../../../interfaces/project.interface';
import { TranslatePipe } from '@ngx-translate/core';

/**
 * Modal dialog for displaying a project.
 */
@Component({
  selector: 'app-dialog',
  imports: [CommonModule, TranslatePipe],
  templateUrl: './dialog.html',
  styleUrl: './dialog.scss',
})
export class Dialog {
  /** Project displayed in the dialog. */
  @Input() project!: Project;

  /** Emits when the dialog should be closed. */
  @Output() close = new EventEmitter<void>();

  /** Emits when the next project is requested. */
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
