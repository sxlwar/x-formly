import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormlyModule } from '@ngx-formly/core';
import { XFormlyModule } from 'x-formly';

/*import*/

@NgModule({
  imports: [
    BrowserAnimationsModule,
    ReactiveFormsModule,
    XFormlyModule,
    FormlyModule.forRoot({
      validationMessages: [
        {
          name: 'required',
          message: (err, field) => `${field.templateOptions.label} 为必填项`,
        },
      ],
    }),
  ],
  declarations: [
    /*declarations*/
  ],
  entryComponents: [
    /*entryComponents*/
  ],
})
export class AppModule {}
