import { X_FORMLY_TYPES } from 'x-formly';

import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormlyFieldConfig, FormlyFormOptions } from '@ngx-formly/core';

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
      key: 'datePicker',
      type: X_FORMLY_TYPES.DATE_PICKER,
      templateOptions: {
        label: 'DatePicker',
        placeholder: 'Placeholder',
        description: 'Description',
        required: true,
        appearance: 'outline',
        datepickerOptions: {
          showDropdown: true,
          lockStartDate: false,
          customRangeDirection: false,
          local: {
            applyLabel: '确定',
            cancelLabel: '取消',
            daysOfWeek: ['一', '二', '三', '四', '五', '六', '日'],
            monthNames: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'],
            firstDay: 7,
          },
        },
      },
    },
  ];
}
