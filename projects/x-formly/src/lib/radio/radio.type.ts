import { Component, ViewChild } from '@angular/core';
import { MatRadioGroup } from '@angular/material/radio';

import { FieldType } from '../form-field/field.type';

@Component({
  selector: 'formly-field-mat-radio',
  template: `
    <mat-radio-group [formControl]="formControl" [formlyAttributes]="field" [tabindex]="-1">
      <mat-radio-button
        *ngFor="let option of to.options | formlySelectOptions: field | async; let i = index"
        [id]="id + '_' + i"
        [color]="to.color"
        [labelPosition]="to.labelPosition"
        [value]="option.value"
      >
        {{ option.label }}
      </mat-radio-button>
    </mat-radio-group>
  `,
  styles: [
    `
      :host::ng-deep .mat-radio-group:focus {
        outline: none;
      }
    `,
  ],
})
export class FormlyFieldRadio extends FieldType {
  @ViewChild(MatRadioGroup, { static: false }) radioGroup!: MatRadioGroup;

  defaultOptions = {
    templateOptions: {
      hideFieldUnderline: true,
      floatLabel: 'always',
      options: [],
    },
  };

  onContainerClick(event: MouseEvent): void {
    const isRadioClick = this.radioGroup._radios
      .map(radioButton => radioButton._elementRef.nativeElement as HTMLElement)
      .some(el => el.contains(event.target as Element));

    if (!isRadioClick && this.radioGroup._radios.length && !this.radioGroup.selected) {
      this.radioGroup._radios.first.focus();
    }

    super.onContainerClick(event);
  }
}
