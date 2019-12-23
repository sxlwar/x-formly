import { Component, ViewChild } from '@angular/core';
import { MatSlider } from '@angular/material/slider';

import { FieldType } from '../form-field/field.type';



@Component({
  selector: 'formly-field-mat-slider',
  template: `
    <mat-slider
      [id]="id"
      [style.width]="'100%'"
      [formControl]="formControl"
      [formlyAttributes]="field"
      [tabindex]="to.tabindex || 0"
      [color]="to.color">
    </mat-slider>
  `,
})
export class FormlyFieldSlider extends FieldType {
  @ViewChild(MatSlider, {static: false}) slider!: MatSlider;
  defaultOptions = {
    templateOptions: {
      hideFieldUnderline: true,
      floatLabel: 'always',
    },
  };

  onContainerClick(event: MouseEvent): void {
    this.slider.focus();
    super.onContainerClick(event);
  }
}
