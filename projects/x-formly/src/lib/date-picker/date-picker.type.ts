import moment, { Moment } from 'moment';
import { XMatDatePickerComponent, XMatDatePickerDirective } from 'x-material';

import { Component, OnInit, ViewChild } from '@angular/core';

import { FieldType } from '../form-field/field.type';

interface DateRange {
  startDate: Moment;
  endDate: Moment;
}

@Component({
  selector: 'formly-field-mat-date-picker',
  template: `
    <input
      type="text"
      matInput
      xMatDatePicker
      [startKey]="startKey"
      [endKey]="endKey"
      [formControl]="formControl"
      [placeholder]="to.placeholder"
      [locale]="locale"
      [dateLimit]="dateLimit"
      [minDate]="minDate"
      [maxDate]="maxDate"
      [autoApply]="autoApply"
      [isRangePicker]="isRangePicker"
      [showClearButton]="showClearButton"
      [showDropdown]="showDropdown"
      [showWeekNumbers]="showWeekNumbers"
      [showISOWeekNumbers]="showWeekNumbers"
      [showCancel]="showCancel"
      [linkedCalendars]="linkedCalendars"
      [timePicker]="timePicker"
      [timePicker24Hour]="timePicker24Hour"
      [timePickerIncrement]="timePickerIncrement"
      [timePickerSeconds]="timePickerSeconds"
      [firstMonthDayClass]="firstMonthDayClass"
      [lastMonthDayClass]="lastMonthDayClass"
      [emptyWeekRowClass]="emptyWeekRowClass"
      [firstDayOfNextMonthClass]="firstDayOfNextMonthClass"
      [lastDayOfPreviousMonthClass]="lastDayOfPreviousMonthClass"
      [isInvalidDate]="isInvalidDate"
      [isCustomDate]="isCustomDate"
      [addTooltipForDate]="addTooltipForDate"
      [ranges]="ranges"
      [alwaysShowCalendars]="alwaysShowCalendars"
      [keepCalendarOpeningWithRange]="keepCalendarOpeningWithRange"
      [showRangeLabelOnInput]="showRangeLabelOnInput"
      [customRangeDirection]="customRangeDirection"
      [lockStartDate]="lockStartDate"
      [showCustomRangeLabel]="showCustomRangeLabel"
      [positionY]="positionY"
      [positionX]="positionX"
      [closeOnAutoApply]="closeOnAutoApply"
      (change)="change($event)"
    />
  `,
})
export class FormlyFieldDatePicker extends FieldType implements OnInit {
  @ViewChild(XMatDatePickerDirective, { static: true }) pickerDirective: XMatDatePickerDirective;

  picker: XMatDatePickerComponent;

  get startKey() {
    return this.to.datepickerOptions.startKey || null;
  }

  get endKey() {
    return this.to.datepickerOptions.endKey || null;
  }

  get locale() {
    return this.to.datepickerOptions.locale || {};
  }

  get dateLimit() {
    return this.to.datepickerOptions.dateLimit;
  }

  get minDate() {
    return this.to.datepickerOptions.minDate;
  }

  get maxDate() {
    return this.to.datepickerOptions.maxDate;
  }

  get autoApply() {
    return this.to.datepickerOptions.autoApply;
  }

  get isRangePicker() {
    return this.to.datepickerOptions.isRangePicker;
  }

  get showClearButton() {
    return this.to.datepickerOptions.showClearButton;
  }

  get showDropdown() {
    return this.to.datepickerOptions.showDropdown;
  }

  get showWeekNumbers() {
    return this.to.datepickerOptions.showWeekNumbers;
  }

  get showISOWeekNumbers() {
    return this.to.datepickerOptions.showWeekNumbers;
  }

  get showCancel() {
    return this.to.datepickerOptions.showCancel;
  }

  get linkedCalendars() {
    return this.to.datepickerOptions.linkedCalendars;
  }

  get timePicker() {
    return this.to.datepickerOptions.timePicker;
  }

  get timePicker24Hour() {
    return this.to.datepickerOptions.timePicker24Hour;
  }

  get timePickerIncrement() {
    return this.to.datepickerOptions.timePickerIncrement;
  }

  get timePickerSeconds() {
    return this.to.datepickerOptions.timePickerSeconds;
  }

  get firstMonthDayClass() {
    return this.to.datepickerOptions.firstMonthDayClass;
  }

  get lastMonthDayClass() {
    return this.to.datepickerOptions.lastMonthDayClass;
  }

  get emptyWeekRowClass() {
    return this.to.datepickerOptions.emptyWeekRowClass;
  }

  get firstDayOfNextMonthClass() {
    return this.to.datepickerOptions.firstDayOfNextMonthClass;
  }

  get lastDayOfPreviousMonthClass() {
    return this.to.datepickerOptions.lastDayOfPreviousMonthClass;
  }

  get isInvalidDate() {
    return this.to.datepickerOptions.isInvalidDate || (() => false);
  }

  get isCustomDate() {
    return this.to.datepickerOptions.isCustomDate || (() => false);
  }

  get addTooltipForDate() {
    return this.to.datepickerOptions.addTooltipForDate || (() => null);
  }

  get ranges() {
    return this.to.datepickerOptions.ranges;
  }

  get alwaysShowCalendars() {
    return this.to.datepickerOptions.alwaysShowCalendars;
  }

  get keepCalendarOpeningWithRange() {
    return this.to.datepickerOptions.keepCalendarOpeningWithRange;
  }

  get showRangeLabelOnInput() {
    return this.to.datepickerOptions.showRangeLabelOnInput;
  }

  get customRangeDirection() {
    return this.to.datepickerOptions.customRangeDirection;
  }

  get lockStartDate() {
    return this.to.datepickerOptions.lockStartDate;
  }

  get showCustomRangeLabel() {
    return this.to.datepickerOptions.showCustomRangeLabel;
  }

  get positionY() {
    return this.to.datepickerOptions.positionY;
  }

  get positionX() {
    return this.to.datepickerOptions.positionX;
  }

  get closeOnAutoApply() {
    return this.to.datepickerOptions.closeOnAutoApply;
  }

  ngOnInit() {
    this.picker = this.pickerDirective.picker;
  }

  /**
   * If user remove value directly, DOM Event passed in;
   * !FIXME: formControl value will be update to  { startDate: null, endDate: null }
   * !even obviously pass null to the setValue method;
   * like this: this.formControl.setValue(null);
   */
  change(value: DateRange | Event) {
    if (value instanceof Event) {
      this.formControl.setValue({ startDate: moment(), endDate: moment() });
    }
  }
}
