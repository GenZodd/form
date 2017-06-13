import {
  Directive,
  Input,
} from '@angular/core';

import {
  NgForm
} from '@angular/forms';


import {FormStore} from './form-store';
import {State} from './state';
import {ConnectBase} from './connect-base';


// For template forms (with implicit NgForm)
@Directive({ selector: 'form[connect]:not([formGroup])' })
export class ConnectTemplateDirective extends ConnectBase {

  constructor(
    protected store: FormStore,
    protected form: NgForm
  ) {
    super();
  }
}
