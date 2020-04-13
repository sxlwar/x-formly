import { ConfigOption } from '@ngx-formly/core';

import { FormlyFieldAutoComplete } from './autocomplete/autocomplete.type';
import { FormlyFieldCheckbox } from './checkbox/checkbox.type';
import { FormlyFieldDatePicker } from './date-picker/date-picker.type';
import { FormlyWrapperFormField } from './form-field/form-field.wrapper';
import { FormlyFieldInput } from './input/input.type';
import { FormlyFieldMultiCheckbox } from './multi-checkbox/multi-checkbox.type';
import { FormlyFieldNativeSelect } from './native-select/native-select.type';
import { FormlyFieldPassword } from './password/password.type';
import { FormlyFieldRadio } from './radio/radio.type';
import { FormlyFieldSelect } from './select/select.type';
import { FormlyFieldSlider } from './slider/slider.type';
import { FormlyFieldTextArea } from './textarea/textarea.type';
import { FormlyFieldToggle } from './toggle/toggle.type';
import { FormlyFieldVerificationCode } from './verification-code/verification-code.type';
import { addonsExtension } from './wrapper/addons.extension';
import { FormlyWrapperAddons } from './wrapper/addons.wrapper';

export enum X_FORMLY_TYPES {
  AUTOCOMPLETE = 'autocomplete',
  CHECKBOX = 'checkbox',
  DATE_PICKER = 'date-picker',
  INPUT = 'input',
  MULTI_CHECKBOX = 'multi-checkbox',
  NATIVE_SELECT = 'native-select',
  PASSWORD = 'password',
  RADIO = 'radio',
  SELECT = 'select',
  SLIDER = 'slider',
  TEXTAREA = 'textarea',
  TOGGLE = 'toggle',
  VERIFICATION_CODE = 'verification-code',
}

export enum X_FORMLY_WRAPPERS {
  FORM_FIELD = 'form-field',
  ADDONS = 'addons',
}

export const xFormlyConfig: ConfigOption = {
  types: [
    {
      name: X_FORMLY_TYPES.AUTOCOMPLETE,
      component: FormlyFieldAutoComplete,
      wrappers: [X_FORMLY_WRAPPERS.FORM_FIELD],
    },
    {
      name: X_FORMLY_TYPES.CHECKBOX,
      component: FormlyFieldCheckbox,
      wrappers: [X_FORMLY_WRAPPERS.FORM_FIELD],
    },
    {
      name: X_FORMLY_TYPES.DATE_PICKER,
      component: FormlyFieldDatePicker,
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
    {
      name: X_FORMLY_TYPES.SELECT,
      component: FormlyFieldSelect,
      wrappers: [X_FORMLY_WRAPPERS.FORM_FIELD],
    },
    {
      name: X_FORMLY_TYPES.PASSWORD,
      component: FormlyFieldPassword,
      wrappers: [X_FORMLY_WRAPPERS.FORM_FIELD],
    },
    {
      name: X_FORMLY_TYPES.VERIFICATION_CODE,
      component: FormlyFieldVerificationCode,
      wrappers: [X_FORMLY_WRAPPERS.FORM_FIELD],
    },
  ],
  wrappers: [
    {
      name: X_FORMLY_WRAPPERS.FORM_FIELD,
      component: FormlyWrapperFormField,
    },
    { name: X_FORMLY_WRAPPERS.ADDONS, component: FormlyWrapperAddons },
  ],
  validationMessages: [],
  extensions: [{ name: X_FORMLY_WRAPPERS.ADDONS, extension: { onPopulate: addonsExtension } }],
};
