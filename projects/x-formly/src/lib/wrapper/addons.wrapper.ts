import { AfterViewInit, Component, TemplateRef, ViewChild } from '@angular/core';
import { FieldWrapper } from '@ngx-formly/core';

@Component({
  selector: 'formly-wrapper-addons',
  template: `
    <ng-template #matPrefix>
      <span
        *ngIf="to.addonLeft"
        [ngStyle]="{ cursor: to.addonLeft.onClick ? 'pointer' : 'inherit' }"
        (click)="addonLeftClick($event)"
      >
        <mat-icon *ngIf="to.addonLeft.icon">{{ to.addonLeft.icon }}</mat-icon>
        <span *ngIf="to.addonLeft.text">{{ to.addonLeft.text }}</span>
      </span>
    </ng-template>

    <ng-container #fieldComponent></ng-container>

    <ng-template #matSuffix>
      <span
        *ngIf="to.addonRight"
        [ngStyle]="{ cursor: to.addonRight.onClick ? 'pointer' : 'inherit' }"
        (click)="addonRightClick($event)"
      >
        <mat-icon *ngIf="to.addonRight.icon">{{ to.addonRight.icon }}</mat-icon>
        <span *ngIf="to.addonRight.text">{{ to.addonRight.text }}</span>
      </span>
    </ng-template>
  `,
})
export class FormlyWrapperAddons extends FieldWrapper implements AfterViewInit {
  // tslint:disable-next-line:no-any
  @ViewChild('matPrefix', { static: false }) matPrefix: TemplateRef<any>;

  // tslint:disable-next-line:no-any
  @ViewChild('matSuffix', { static: false }) matSuffix: TemplateRef<any>;

  ngAfterViewInit() {
    if (this.matPrefix) {
      Promise.resolve().then(() => (this.to.prefix = this.matPrefix));
    }

    if (this.matSuffix) {
      Promise.resolve().then(() => (this.to.suffix = this.matSuffix));
    }
  }

  /**
   * handle suffix click event;
   */
  addonRightClick($event: MouseEvent): void {
    if (this.to.addonRight.onClick) {
      this.to.addonRight.onClick(this.to, this, $event);
    }
  }

  /**
   * handle prefix click event;
   */
  addonLeftClick($event: MouseEvent): void {
    if (this.to.addonLeft.onClick) {
      this.to.addonLeft.onClick(this.to, this, $event);
    }
  }
}
