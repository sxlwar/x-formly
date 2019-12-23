import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatPseudoCheckboxModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatSliderModule } from '@angular/material/slider';
import { FormlyModule } from '@ngx-formly/core';
import { FormlySelectModule } from '@ngx-formly/core/select';

import { FormlyFieldCheckbox } from './checkbox/checkbox.type';
import { FormlyFieldDatepicker } from './datepicker/datepicker.type';
import { FormlyWrapperFormField } from './form-field/form-field.wrapper';
import { FormlyFieldInput } from './input/input.type';
import { FormlyFieldMultiCheckbox } from './multicheckbox/multicheckbox.type';
import { FormlyFieldNativeSelect } from './native-select/native-select.type';
import { FormlyFieldRadio } from './radio/radio.type';
import { FormlyFieldSelect } from './select/select.type';
import { FormlyFieldSlider } from './slider/slider.type';
import { FormlyFieldTextArea } from './textarea/textarea.type';
import { FormlyFieldToggle } from './toggle/toggle.type';
import { xFormlyConfig } from './x-formly.config';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatCheckboxModule,
    MatInputModule,
    MatDatepickerModule,
    MatFormFieldModule,
    FormlySelectModule,
    MatRadioModule,
    MatPseudoCheckboxModule,
    MatSliderModule,
    MatSlideToggleModule,
    MatSelectModule,
    FormlyModule.forChild(xFormlyConfig),
  ],
  declarations: [
    FormlyFieldCheckbox,
    FormlyFieldDatepicker,
    FormlyWrapperFormField,
    FormlyFieldInput,
    FormlyFieldMultiCheckbox,
    FormlyFieldNativeSelect,
    FormlyFieldRadio,
    FormlyFieldSlider,
    FormlyFieldTextArea,
    FormlyFieldToggle,
    FormlyFieldSelect,
  ],
})
export class XFormlyModule {}
