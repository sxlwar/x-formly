import { X_FORMLY_WRAPPERS } from 'x-formly';

import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormlyFieldConfig, FormlyFormOptions } from '@ngx-formly/core';

@Component({
  selector: 'formly-app-example',
  templateUrl: './app.component.html',
})
export class AppComponent {
  form = new FormGroup({});

  model = {
    investments: [
      { start: 9, end: 10, fee: 0.5 },
      { start: 11, end: 20, fee: 0.4 },
      { start: 21, end: 30, fee: 0.3 },
      { start: 31, end: 40, fee: 0.2 },
      { start: 41, end: 50, fee: 0.1 },
    ],
  };

  options: FormlyFormOptions = {};

  fields: FormlyFieldConfig[] = [
    {
      key: 'investments',
      type: 'repeat',
      fieldGroupClassName: 'statement',
      templateOptions: {
        addText: 'add',
        removeIcon: 'close',
      },
      fieldArray: {
        wrappers: [X_FORMLY_WRAPPERS.STATEMENT_GROUP],
        templateOptions: {
          statement: 'if value between {{start}} - {{end}}, return value {{fee}}.',
        },
        fieldGroupClassName: 'repeat-demo',
        fieldGroup: [
          {
            type: 'input',
            key: 'start',
            templateOptions: {
              required: true,
            },
          },
          {
            type: 'input',
            key: 'end',
            templateOptions: {
              required: true,
            },
          },
          {
            type: 'input',
            key: 'fee',
            templateOptions: {
              required: true,
            },
          },
        ],
      },
    },
  ];
}
