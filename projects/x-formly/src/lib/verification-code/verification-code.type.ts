import { Observable, Subject, timer } from 'rxjs';
import { map, startWith, switchMapTo, take } from 'rxjs/operators';

import { Component, OnInit } from '@angular/core';

import { FieldType } from '../form-field/field.type';

@Component({
  selector: 'formly-field-mat-verification-code',
  template: `
    <input
      matInput
      [id]="id"
      [readonly]="to.readonly"
      [errorStateMatcher]="errorStateMatcher"
      [formControl]="formControl"
      [formlyAttributes]="field"
      [tabindex]="to.tabindex || 0"
      [placeholder]="to.placeholder"
      type="text"
    />
    <button mat-stroked-button [disabled]="isTiming | async" [color]="to.color" (click)="onClick($event)">
      {{ text | async }}
    </button>
  `,
  styles: [
    `
      button {
        position: absolute;
        top: 0.25em;
        right: 0;
      }
    `,
  ],
})
export class FormlyFieldVerificationCode extends FieldType implements OnInit {
  /**
   * 是否正在计时
   */
  isTiming: Observable<boolean>;

  /**
   * button text
   */
  text: Observable<string>;

  /**
   * timer trigger
   */
  click$: Subject<boolean> = new Subject();

  /**
   * @ignore
   */
  defaultOptions = {
    templateOptions: {
      timer: {
        text: 'verify',
        activeText: '${remain}s',
        replaceReg: /\${remain}/,
        period: 1000,
        duration: 60,
      },
    },
  };

  /**
   * 计时器
   */
  private timer: Observable<number>;

  /**
   * @ignore
   */
  ngOnInit() {
    this.timer = this.click$.pipe(
      switchMapTo(
        timer(0, this.to.timer.period).pipe(
          take(this.to.timer.duration),
          map(num => this.to.timer.duration - num - 1)
        )
      )
    );

    this.isTiming = this.timer.pipe(map(remain => remain > 0));

    this.text = this.timer.pipe(
      map(remain => {
        if (remain > 0) {
          const label: string = this.to.timer.activeText;

          return label.replace(this.to.timer.replaceReg, String(remain));
        } else {
          return this.to.timer.text;
        }
      }),
      startWith(this.to.timer.text)
    );
  }

  /**
   * @ignore
   */
  onClick(event: MouseEvent): void {
    if (this.to.click) {
      this.to.click(event);
    }
    this.click$.next(true);
  }
}
