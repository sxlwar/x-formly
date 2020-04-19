import { XFormlyModule } from 'x-formly';
import { XMatDatePickerModule, XMatPasswordModule } from 'x-material';

import { NgModule, Type } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { FormlyModule } from '@ngx-formly/core';

import { ExamplesRouterViewerComponent, SharedModule } from '../shared';
import { AutocompleteAppComponent, AutocompleteExampleConfig } from './autocomplete';
import { CheckboxAppComponent, CheckboxExampleConfig } from './checkbox';
import { DateRangePickerComponent, DateRangePickerExampleConfig } from './date-range-picker';
import { DatepickerAppComponent, DatepickerExampleConfig } from './datepicker';
import { debugFields } from './debug-fields';
import { InputAppComponent, InputExampleConfig } from './input';
import { NativeSelectAppComponent, NativeSelectExampleConfig } from './native-select';
import { PasswordAppComponent, PasswordExampleConfig } from './password';
import { RadioAppComponent, RadioExampleConfig } from './radio';
import { RepeatAppComponent, RepeatExampleConfig } from './repeat';
import { SelectAppComponent, SelectExampleConfig } from './select';
import { SliderAppComponent, SliderExampleConfig } from './slider';
import { StatementGroupAppComponent, StatementGroupExampleConfig } from './statement-group';
import { TextareaAppComponent, TextareaExampleConfig } from './textarea';
import { ToggleAppComponent, ToggleExampleConfig } from './toggle';
import { VerificationCodeAppComponent, VerificationCodeExampleConfig } from './verification-code';

// tslint:disable-next-line:no-any
const configs: Type<any>[] = [
  AutocompleteAppComponent,
  CheckboxAppComponent,
  DateRangePickerComponent,
  DatepickerAppComponent,
  InputAppComponent,
  NativeSelectAppComponent,
  PasswordAppComponent,
  RadioAppComponent,
  SelectAppComponent,
  StatementGroupAppComponent,
  SliderAppComponent,
  TextareaAppComponent,
  ToggleAppComponent,
  VerificationCodeAppComponent,
  RepeatAppComponent,
];

@NgModule({
  imports: [
    SharedModule,
    ReactiveFormsModule,
    SharedModule,
    FormlyModule.forRoot({
      validationMessages: [
        {
          name: 'required',
          message: (err, field) => `${field.templateOptions.label} 为必填项`,
        },
      ],
    }),
    XFormlyModule,
    XMatPasswordModule,
    XMatDatePickerModule.forRoot({
      applyLabel: 'OK',
      firstDay: 0,
    }),
    RouterModule.forChild([
      {
        path: '',
        component: ExamplesRouterViewerComponent,
        data: {
          debugFields,
          examples: [
            AutocompleteExampleConfig,
            CheckboxExampleConfig,
            DateRangePickerExampleConfig,
            DatepickerExampleConfig,
            InputExampleConfig,
            NativeSelectExampleConfig,
            PasswordExampleConfig,
            RadioExampleConfig,
            SelectExampleConfig,
            SliderExampleConfig,
            TextareaExampleConfig,
            ToggleExampleConfig,
            VerificationCodeExampleConfig,
            StatementGroupExampleConfig,
            RepeatExampleConfig,
          ],
        },
      },
    ]),
  ],
  declarations: configs,
  entryComponents: configs,
})
export class ConfigModule {}
