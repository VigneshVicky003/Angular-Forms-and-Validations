import {FormControl} from '@angular/forms';

export class EmailValidator {

  static validEmail(fc: FormControl){
    if(fc.value !== '' && !fc.value.match('[a-zA-Z0-9._+-]+[a-zA-Z0-9]+@[a-zA-Z0-9.-]+[a-zA-Z0-9]+\\.[a-z]{2,3}')){
      return ({validEmail: true});
    } else {
      return null;
    }
  }
}
