import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Project } from '../../../interfaces/project.interface';
import { TranslatePipe } from '@ngx-translate/core';

/**
 * Modal dialog component for displaying detailed project information.
 *
 * Handles:
 * - Overlay click to close the dialog
 * - Event propagation control inside the dialog
 * - Navigation to the next project
 */
@Component({
  selector: 'app-dialog',
  imports: [CommonModule, TranslatePipe],
  templateUrl: './dialog.html',
  styleUrl: './dialog.scss',
})
export class Dialog {
  /**
   * Project currently displayed inside the dialog.
   */
  @Input() project!: Project;

  /**
   * Emitted when the dialog should be closed.
   */
  @Output() close = new EventEmitter<void>();

  /**
   * Emitted when the next project should be shown.
   */
  @Output() next = new EventEmitter<void>();

  /**
   * Handles clicks on the overlay and triggers dialog close.
   */
  onOverlayClick(): void {
    this.close.emit();
  }

  /**
   * Prevents overlay click handling when clicking inside the dialog.
   *
   * @param event - Mouse click event
   */
  onDialogClick(event: MouseEvent): void {
    event.stopPropagation();
  }

  /**
   * Emits a request to navigate to the next project.
   *
   * @param event - Mouse click event
   */
  onNextClick(event: MouseEvent): void {
    event.stopPropagation();
    this.next.emit();
  }
}
