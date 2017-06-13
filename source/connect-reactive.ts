import {
  Directive,
  Input,
} from '@angular/core';

import {
  NgForm
} from '@angular/forms';

import {FormStore} from './form-store';

import {ConnectBase} from './connect-base';

// For reactive forms (without implicit NgForm)
@Directive({ selector: 'form[connect][formGroup]' })
export class ConnectReactiveDirective extends ConnectBase {
  @Input('formGroup') form;

  constructor(
    protected store: FormStore
  ) {
    super();
  }
}
