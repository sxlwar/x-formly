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
      key: 'Password',
      type: X_FORMLY_TYPES.PASSWORD,
      templateOptions: {
        label: 'Password',
        placeholder: 'Please input your password',
        description: 'Password description',
        required: true,
        appearance: 'outline',
      },
    },
  ];
}
