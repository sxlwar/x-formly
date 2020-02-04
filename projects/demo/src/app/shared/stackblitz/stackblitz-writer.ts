import { Injectable } from '@angular/core';

import { ExampleType } from '../example-viewer/example-viewer.component';

const STACKBLITZ_URL = 'https://run.stackblitz.com/api/angular/v1';

const TEMPLATE_FILES = {
  core: [
    { file: 'polyfills.ts', filecontent: require('!!raw-loader!@assets/stackblitz/polyfills.ts') },
    { file: 'angular.json', filecontent: require('!!raw-loader!@assets/stackblitz/angular_json') },
    { file: 'main.ts', filecontent: require('!!raw-loader!@assets/stackblitz/main.ts') },
    { file: 'index.html', filecontent: require('!!raw-loader!@assets/stackblitz/index.html') },
  ],
  material: [
    { file: 'styles.scss', filecontent: `@import '~@angular/material/prebuilt-themes/deeppurple-amber.css';` },
  ],
};

const TAGS: string[] = ['angular', 'x-formly', 'material'];
const angularVersion = '^8.0.0';
const materialVersion = '^8.0.0';
const formlyVersion = '^5.0.0';

const dependencies = {
  core: {
    '@angular/common': angularVersion,
    '@angular/compiler': angularVersion,
    '@angular/core': angularVersion,
    '@angular/forms': angularVersion,
    '@angular/platform-browser': angularVersion,
    '@angular/platform-browser-dynamic': angularVersion,
    'core-js': '^2.4.1',
    rxjs: '^6.4.0',
    'zone.js': '^0.9.0',
    tslib: '^1.10.0',
    '@ngx-formly/core': formlyVersion,
  },
};

const componentName = 'AppComponent';
const importStatement = `import { AppComponent } from './app.component';`;
const importDateStatement = `import { MatNativeDateModule } from '@angular/material/core';`;

/**
 * Stackblitz writer, write example files to stackblitz
 *
 * StackBlitz API
 * URL: https://run.stackblitz.com/api/aio/v1/
 * data: {
 *   // File name, directory and content of files
 *   files[file-name1]: file-content1,
 *   files[directory-name/file-name2]: file-content2,
 *   // Can add multiple tags
 *   tags[0]: tag-0,
 *   // Description of stackblitz
 *   description: description,
 *   // Private or not
 *   private: true
 *  // Dependencies
 *  dependencies: dependencies
 * }
 */
@Injectable()
export class StackblitzWriter {
  /**
   * Returns an HTMLFormElement that will open a new stackblitz template with the example data when
   * called with submit().
   */
  constructStackblitzForm(type: string, exampleData: ExampleType): HTMLFormElement {
    const indexFile = `src%2Fapp%2Fapp.component.ts`;
    const form = this._createFormElement(indexFile);

    TAGS.forEach((tag, i) => this._appendFormInput(form, `tags[${i}]`, tag));
    this._appendFormInput(form, 'private', 'true');
    this._appendFormInput(form, 'description', exampleData.title);

    const compName = exampleData.type;
    // tslint:disable-next-line:no-any
    const options: any = { type, name: compName };

    options.includeMaterial = true;
    options.useAnimation = true;

    const deps = {
      ...dependencies.core,
    };

    deps['@angular/animations'] = angularVersion;

    deps['@angular/cdk'] = materialVersion;
    deps['@angular/material'] = materialVersion;

    this._appendFormInput(form, 'dependencies', JSON.stringify(deps));

    [...TEMPLATE_FILES.core, ...TEMPLATE_FILES[options.type]].forEach(data => {
      this._addFileToForm(
        form,
        this._replaceExamplePlaceholderNames(data.file, data.filecontent, options),
        data.file,
        false
      );
    });

    exampleData.files.forEach(data => {
      this._addFileToForm(
        form,
        this._replaceExamplePlaceholderNames(data.file, data.filecontent, options),
        data.file,
        data.file.indexOf('assets') !== 0
      );
    });

    return form;
  }

  /** Constructs a new form element that will navigate to the stackblitz url. */
  _createFormElement(indexFile: string): HTMLFormElement {
    const form = document.createElement('form');
    form.action = `${STACKBLITZ_URL}?file=${indexFile}`;
    form.method = 'post';
    form.target = '_blank';
    return form;
  }

  /** Appends the name and value as an input to the form. */
  _appendFormInput(form: HTMLFormElement, name: string, value: string): void {
    const input = document.createElement('input');
    input.type = 'hidden';
    input.name = name;
    input.value = value;
    form.appendChild(input);
  }

  /**
   * Adds the file text to the form.
   * @param form the html form you are appending to
   * @param data example metadata about the example
   * @param content file contents
   * @param filename file name of the example
   * @param path path to the src
   * @param prependApp whether to prepend the 'app' prefix to the path
   */
  _addFileToForm(form: HTMLFormElement, content: string, filename: string, prependApp = true) {
    if (prependApp) {
      filename = 'app/' + filename;
    }

    if (filename !== 'angular.json') {
      filename = 'src/' + filename;
    }

    this._appendFormInput(form, `files[${filename}]`, this._appendCopyright(filename, content));
  }

  _replaceExamplePlaceholderNames(fileName: string, filecontent: string, options): string {
    const isDatepicker = options.name.indexOf('Datepicker') !== -1;
    if (fileName === 'app.module.ts') {
      filecontent = filecontent.replace(
        `/*import*/`,
        isDatepicker ? `${importDateStatement}\n${importStatement}` : importStatement
      );
      filecontent = filecontent.replace(`/*declarations*/`, componentName);
      filecontent = filecontent.replace(`/*entryComponents*/`, componentName);
      filecontent = filecontent.replace(`/*bootstrap*/`, componentName);

      filecontent = filecontent.replace('/*module*/', isDatepicker ? `MatNativeDateModule,` : '');
    } else if (fileName === 'styles.scss') {
      filecontent = `${filecontent}\nbody { padding: 10px; }`;
    }
    filecontent = filecontent.replace(/_json/g, '.json');
    return filecontent;
  }

  _appendCopyright(filename: string, content: string) {
    return content;
  }
}
