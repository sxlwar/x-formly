import { FormlyFieldConfig } from '@ngx-formly/core';



export const debugFields: FormlyFieldConfig[] = [
  {
    key: 'templateOptions',
    fieldGroupClassName: 'row',
    fieldGroup: [
      {
        key: 'label',
        type: 'input',
        className: 'col-md-6',
        templateOptions: { label: 'label' },
      },
      {
        key: 'hideLabel',
        className: 'col-md-6',
        type: 'checkbox',
        templateOptions: { label: 'hideLabel' },
      },
      {
        key: 'required',
        className: 'col-md-6',
        type: 'checkbox',
        templateOptions: { label: 'required' },
      },
      {
        key: 'hideRequiredMarker',
        className: 'col-md-6',
        type: 'checkbox',
        templateOptions: { label: 'hideRequiredMarker' },
      },
      {
        key: 'description',
        className: 'col-md-6',
        type: 'input',
        templateOptions: { label: 'description' },
      },
    ],
  },
];


