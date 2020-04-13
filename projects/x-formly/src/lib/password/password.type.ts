import { ChangeDetectorRef, Component } from '@angular/core';
import { FormlyTemplateOptions } from '@ngx-formly/core';

import { FieldType } from '../form-field/field.type';

@Component({
  selector: 'formly-field-mat-password',
  template: `
    <input
      matInput
      [id]="id"
      [readonly]="to.readonly"
      [errorStateMatcher]="errorStateMatcher"
      [formControl]="formControl"
      [formlyAttributes]="field"
      [tabindex]="to.tabindex || 0"
      [placeholder]="to.placeholder"
      [type]="isHide ? 'password' : 'text'"
    />
  `,
})
export class FormlyFieldPassword extends FieldType {
  /**
   * hide password or not
   */
  isHide = true;

  /**
   * onClick: handle click event;
   * We need to trigger change detection manually since mutable object here.
   * !FIXME: error below when @ngx-formly/core version > 5.5.10
   * ERROR TypeError: Cannot read property 'id' of undefined
   */
  defaultOptions = {
    templateOptions: {
      addonRight: {
        icon: this.icon,
        onClick: (to: FormlyTemplateOptions): void => {
          this.isHide = !this.isHide;
          to.addonRight.icon = this.icon;
          this.cdf.detectChanges();
        },
      },
    },
  };

  constructor(private cdf: ChangeDetectorRef) {
    super();
  }

  /**
   * @ignore
   */
  get icon() {
    return this.isHide ? 'visibility_off' : 'visibility';
  }
}
