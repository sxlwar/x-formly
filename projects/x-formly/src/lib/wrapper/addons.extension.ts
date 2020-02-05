import { FormlyFieldConfig } from '@ngx-formly/core';

// tslint:disable-next-line
export function addonsExtension(field: FormlyFieldConfig): void {
  if (!field.templateOptions || (field.wrappers && field.wrappers.indexOf('addons') !== -1)) {
    return;
  }

  if (field.templateOptions.addonLeft || field.templateOptions.addonRight) {
    field.wrappers = [...(field.wrappers || []), 'addons'];
  }
}
