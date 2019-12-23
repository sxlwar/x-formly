import { ConfigOption } from '@ngx-formly/core';

import { FormlyFieldCheckbox } from './checkbox/checkbox.type';
import { FormlyFieldDatepicker } from './datepicker/datepicker.type';
import { FormlyWrapperFormField } from './form-field/form-field.wrapper';
import { FormlyFieldInput } from './input/input.type';
import { FormlyFieldMultiCheckbox } from './multicheckbox/multicheckbox.type';
import { FormlyFieldNativeSelect } from './native-select/native-select.type';
import { FormlyFieldRadio } from './radio/radio.type';
import { FormlyFieldSlider } from './slider/slider.type';
import { FormlyFieldTextArea } from './textarea/textarea.type';
import { FormlyFieldToggle } from './toggle/toggle.type';

export enum X_FORMLY_TYPES {
  CHECKBOX = 'checkbox',
  DATEPICKER = 'datepicker',
  INPUT = 'input',
  MULTI_CHECKBOX = 'multicheckbox',
  NATIVE_SELECT = 'native-select',
  RADIO = 'radio',
  SLIDER = 'slider',
  SELECT = 'select',
  TEXTAREA = 'textarea',
  TOGGLE = 'toggle',
}

export enum X_FORMLY_WRAPPERS {
  FORM_FIELD = 'form-field',
}
export const xFormlyConfig: ConfigOption = {
  types: [
    {
      name: X_FORMLY_TYPES.CHECKBOX,
      component: FormlyFieldCheckbox,
      wrappers: [X_FORMLY_WRAPPERS.FORM_FIELD],
    },
    {
      name: X_FORMLY_TYPES.DATEPICKER,
      component: FormlyFieldDatepicker,
      wrappers: [X_FORMLY_WRAPPERS.FORM_FIELD],
    },
    {
      name: X_FORMLY_TYPES.INPUT,
      component: FormlyFieldInput,
      wrappers: [X_FORMLY_WRAPPERS.FORM_FIELD],
    },
    {
      name: X_FORMLY_TYPES.MULTI_CHECKBOX,
      component: FormlyFieldMultiCheckbox,
      wrappers: [X_FORMLY_WRAPPERS.FORM_FIELD],
    },
    {
      name: X_FORMLY_TYPES.NATIVE_SELECT,
      component: FormlyFieldNativeSelect,
      wrappers: [X_FORMLY_WRAPPERS.FORM_FIELD],
    },
    {
      name: X_FORMLY_TYPES.RADIO,
      component: FormlyFieldRadio,
      wrappers: [X_FORMLY_WRAPPERS.FORM_FIELD],
    },
    {
      name: X_FORMLY_TYPES.SLIDER,
      component: FormlyFieldSlider,
      wrappers: [X_FORMLY_WRAPPERS.FORM_FIELD],
    },
    {
      name: X_FORMLY_TYPES.TEXTAREA,
      component: FormlyFieldTextArea,
      wrappers: [X_FORMLY_WRAPPERS.FORM_FIELD],
    },
    {
      name: X_FORMLY_TYPES.TOGGLE,
      component: FormlyFieldToggle,
      wrappers: [X_FORMLY_WRAPPERS.FORM_FIELD],
    },
  ],
  wrappers: [
    {
      name: X_FORMLY_WRAPPERS.FORM_FIELD,
      component: FormlyWrapperFormField,
    },
  ],
  validationMessages: [],
};
