import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { FormlyModule } from '@ngx-formly/core';
import { XFormlyModule } from 'x-formly';

import { ExamplesRouterViewerComponent, SharedModule } from '../shared';
import { AutocompleteAppComponent } from './autocomplete';
import { CheckboxAppComponent, CheckboxExampleConfig } from './checkbox';
import { DatepickerAppComponent, DatepickerExampleConfig } from './datepicker';
import { debugFields } from './debug-fields';
import { InputAppComponent, InputExampleConfig } from './input';
import { NativeSelectAppComponent, NativeSelectExampleConfig } from './native-select';
import { RadioAppComponent, RadioExampleConfig } from './radio';
import { SelectAppComponent, SelectExampleConfig } from './select';
import { SliderAppComponent, SliderExampleConfig } from './slider';
import { TextareaAppComponent, TextareaExampleConfig } from './textarea';
import { ToggleAppComponent, ToggleExampleConfig } from './toggle';

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
    RouterModule.forChild([
      {
        path: '',
        component: ExamplesRouterViewerComponent,
        data: {
          debugFields,
          examples: [
            InputExampleConfig,
            TextareaExampleConfig,
            CheckboxExampleConfig,
            RadioExampleConfig,
            SelectExampleConfig,
            NativeSelectExampleConfig,
            DatepickerExampleConfig,
            ToggleExampleConfig,
            SliderExampleConfig,
          ],
        },
      },
    ]),
  ],
  declarations: [
    InputAppComponent,
    TextareaAppComponent,
    CheckboxAppComponent,
    RadioAppComponent,
    SelectAppComponent,
    NativeSelectAppComponent,
    DatepickerAppComponent,
    ToggleAppComponent,
    SliderAppComponent,
    AutocompleteAppComponent,
  ],
  entryComponents: [
    InputAppComponent,
    TextareaAppComponent,
    CheckboxAppComponent,
    RadioAppComponent,
    SelectAppComponent,
    NativeSelectAppComponent,
    DatepickerAppComponent,
    ToggleAppComponent,
    SliderAppComponent,
    AutocompleteAppComponent,
  ],
})
export class ConfigModule {}
