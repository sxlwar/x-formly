import { Component, ViewChild } from '@angular/core';
import { MatSlideToggle } from '@angular/material/slide-toggle';

import { FieldType } from '../form-field/field.type';



@Component({
  selector: 'formly-field-mat-toggle',
  template: `
    <mat-slide-toggle
      [id]="id"
      [formControl]="formControl"
      [formlyAttributes]="field"
      [tabindex]="to.tabindex || 0">
      {{ to.label }}
    </mat-slide-toggle>
  `,
})
export class FormlyFieldToggle extends FieldType {
  @ViewChild(MatSlideToggle, {static: false}) slideToggle!: MatSlideToggle;
  defaultOptions = {
    templateOptions: {
      hideFieldUnderline: true,
      floatLabel: 'always',
      hideLabel: true,
    },
  };

  onContainerClick(event: MouseEvent): void {
    this.slideToggle.focus();
    super.onContainerClick(event);
  }
}
