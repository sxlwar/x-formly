import { Component, HostBinding, OnInit } from '@angular/core';
import { FieldWrapper, FormlyFieldConfig } from '@ngx-formly/core';

@Component({
  selector: 'formly-wrapper-statement-group',
  template: `
    <ng-container *ngFor="let item of list">
      <span>{{ item.label }}</span>
      <formly-field *ngIf="item.field" [field]="item.field"></formly-field>
    </ng-container>
  `,
  styles: [
    `
      :host {
        display: flex;
        align-items: center;
      }
      span {
        white-space: nowrap;
      }
    `,
  ],
})
export class FormlyWrapperStatementGroup extends FieldWrapper implements OnInit {
  @HostBinding('class') get fieldGroupClassName() {
    return this.field.fieldGroupClassName || '';
  }

  list: { label: string; field: FormlyFieldConfig }[] = [];

  ngOnInit() {
    const labelsReg = /\{{2}[\d\w\s]{1,}\}{2}/;
    // The RegExp commented below works in Chrome but not in other browsers;
    // const keysReg = /(?<=\{{2})([\d\w]{1,})(?=\}{2})/g;
    const keysReg = /{{\s*[\w\.]+\s*}}/g;
    const statement = this.to.statement;
    const labels: string[] = statement.split(labelsReg);
    const keys: string[] = statement.match(keysReg).map((str: string) => str.match(/[\w\.]+/)[0]);

    this.list = labels.map((label: string, index: number) => {
      const field = this.field.fieldGroup.find(item => item.key === keys[index]);

      return { label, field };
    });
  }
}
