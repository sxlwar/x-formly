import moment from 'moment';
import { X_FORMLY_TYPES } from 'x-formly';
import { LocaleConfig } from 'x-material';

import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormlyFieldConfig, FormlyFormOptions } from '@ngx-formly/core';

const locale: LocaleConfig = {
  applyLabel: '确定',
  cancelLabel: '取消',
  daysOfWeek: ['一', '二', '三', '四', '五', '六', '日'],
  monthNames: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'],
  firstDay: 7,
  displayFormat: 'YYYY-MM-DD',
};

@Component({
  selector: 'formly-app-example',
  templateUrl: './app.component.html',
})
export class AppComponent {
  form = new FormGroup({});

  // tslint:disable-next-line:no-any
  model: any = {
    dateRangePicker: {
      startDate: moment('2019-11-18T00:00Z'),
      endDate: moment('2019-11-26T00:00Z'),
    },
  };

  options: FormlyFormOptions = {};

  fields: FormlyFieldConfig[] = [
    {
      key: 'dateRangePicker',
      type: X_FORMLY_TYPES.DATE_PICKER,
      templateOptions: {
        label: 'DateRangePicker',
        placeholder: 'Placeholder',
        description: 'Description',
        required: true,
        appearance: 'outline',
        datepickerOptions: {
          isRangePicker: true,
          showDropdown: true,
          lockStartDate: false,
          customRangeDirection: false,
          locale,
          ranges: true,
          timePicker: true,
          timePickerSeconds: true,
          timePickerIncrement: 15,
          timePicker24Hour: true,
          positionX: 'left',
          showClearButton: true,
        },
      },
    },
  ];
}
