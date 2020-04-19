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
    investments: [{}],
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
