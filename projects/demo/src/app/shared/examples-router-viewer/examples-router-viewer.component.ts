import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'formly-examples-viewer',
  template: `
    <ng-container *ngIf="route.data | async as data">
      <formly-example-viewer
        *ngFor="let exampleData of data.examples"
        [type]="'material'"
        [debugFields]="data.debugFields"
        [exampleData]="exampleData"
      >
      </formly-example-viewer>
    </ng-container>
  `,
})
export class ExamplesRouterViewerComponent {
  constructor(public route: ActivatedRoute) {}
}
