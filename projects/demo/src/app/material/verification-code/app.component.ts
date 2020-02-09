import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormlyFieldConfig, FormlyFormOptions } from '@ngx-formly/core';
import { X_FORMLY_TYPES } from 'x-formly';

@Component({
  selector: 'formly-app-example',
  templateUrl: './app.component.html',
})
export class AppComponent {
  form = new FormGroup({});

  // tslint:disable-next-line:no-any
  model: any = {};

  options: FormlyFormOptions = {};

  fields: FormlyFieldConfig[] = [
    {
      key: 'VerificationCode',
      type: X_FORMLY_TYPES.VERIFICATION_CODE,
      templateOptions: {
        label: 'Verification Code',
        placeholder: 'Please input code',
        description: 'Click the button to get verification code',
        required: true,
        appearance: 'outline',
        timer: {
          text: '点击获取',
          activeText: '${remain}s后重新获取',
        },
      },
    },
  ];
}
