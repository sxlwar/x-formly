import { Component } from '@angular/core';
import { FieldArrayType } from '@ngx-formly/core';

@Component({
  selector: 'formly-field-mat-repeat',
  template: `
    <div *ngFor="let field of field.fieldGroup; let i = index" class="repeat">
      <formly-field [field]="field"></formly-field>

      <button *ngIf="!!to.removeText" mat-raised-button color="warn" (click)="remove(i)" class="remove">
        {{ to.removeText }}
      </button>
      <mat-icon *ngIf="!!to.removeIcon" color="warn" (click)="remove(i)" class="remove">{{ to.removeIcon }}</mat-icon>
    </div>

    <button *ngIf="!!to.addText" mat-raised-button color="primary" (click)="add()" class="add">{{ to.addText }}</button>
    <mat-icon *ngIf="!!to.addIcon" (click)="add()" color="primary" class="add">{{ to.addIcon }}</mat-icon>
  `,
  styles: [
    `
      :host {
        display: flex;
        flex-direction: column;
      }

      .repeat {
        display: flex;
        align-items: center;
      }

      .add,
      .remove {
        cursor: pointer;
      }
    `,
  ],
})
export class FormlyFieldRepeat extends FieldArrayType {}
