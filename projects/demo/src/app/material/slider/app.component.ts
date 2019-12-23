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
  model: any = {};
  options: FormlyFormOptions = {};
  fields: FormlyFieldConfig[] = [
    {
      key: 'Slider',
      type: X_FORMLY_TYPES.SLIDER,
      templateOptions: {
        label: 'Slider label',
        // placeholder: 'Slider Placeholder',
        description: 'Slider Description',
        required: true,
      },
    },
  ];
}
