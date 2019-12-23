import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormlyFieldConfig } from '@ngx-formly/core';
import { X_FORMLY_TYPES } from 'x-formly';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'demo';
  model = {};
  form = new FormGroup({});
  fields: FormlyFieldConfig[] = [
    {
      type: X_FORMLY_TYPES.CHECKBOX,
      key: 'isAgree',
      templateOptions: {
        label: '是否同意',
      },
    }
  ];
}
