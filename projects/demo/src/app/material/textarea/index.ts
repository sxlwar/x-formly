import { AppComponent as TextareaAppComponent } from './app.component';

const TextareaExampleConfig = {
  title: 'Textarea type',
  component: TextareaAppComponent,
  type: 'TextareaAppComponent',
  debug: true,
  files: [
    {
      file: 'app.component.html',
      content: require('!!highlight-loader?raw=true&lang=html!./app.component.html'),

      filecontent: require('!!raw-loader!./app.component.html'),
    },
    {
      file: 'app.component.ts',
      content: require('!!highlight-loader?raw=true&lang=typescript!./app.component.ts'),
      filecontent: require('!!raw-loader!./app.component.ts'),
    },
    {
      file: 'app.module.ts',
      content: require('!!highlight-loader?raw=true&lang=typescript!../../app.module.ts'),
      filecontent: require('!!raw-loader!../stackblitz-app.module.ts'),
    },
  ],
};

export { TextareaAppComponent, TextareaExampleConfig };
