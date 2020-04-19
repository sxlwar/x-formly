import { X_FORMLY_TYPES, X_FORMLY_WRAPPERS } from 'x-formly';

import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormlyFieldConfig, FormlyFormOptions } from '@ngx-formly/core';

@Component({
  selector: 'formly-app-example',
  templateUrl: './app.component.html',
  styles: [
    `
      ::ng-deep .statement span {
        font-weight: bold;
      }
    `,
  ],
})
export class AppComponent {
  form = new FormGroup({});

  // tslint:disable-next-line:no-any
  model: any = {};

  options: FormlyFormOptions = {};

  fields: FormlyFieldConfig[] = [
    {
      key: 'statement',
      templateOptions: {
        label: 'Input',
        placeholder: 'Placeholder',
        description: 'Description',
        required: true,
        appearance: 'outline',
        statement: 'if value between {{start}} - {{end}}, return value {{fee}}.',
      },
      wrappers: [X_FORMLY_WRAPPERS.STATEMENT_GROUP],
      fieldGroupClassName: 'statement',
      fieldGroup: [
        {
          key: 'start',
          type: X_FORMLY_TYPES.INPUT,
          templateOptions: {
            type: 'number',
          },
        },
        {
          key: 'end',
          type: X_FORMLY_TYPES.INPUT,
          templateOptions: {
            type: 'number',
          },
        },
        {
          key: 'fee',
          type: X_FORMLY_TYPES.INPUT,
          templateOptions: {
            type: 'number',
          },
        },
      ],
    },
  ];
}
