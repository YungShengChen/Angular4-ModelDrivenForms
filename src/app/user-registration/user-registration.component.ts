import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators} from '@angular/forms';
import { firstnameValidators } from '../firstnameValidators';
import { lastnameValidators } from '../lastnameValidators';
import { emailValidators } from '../emailValidators';

@Component({
  selector: 'app-user-registration',
  templateUrl: './user-registration.component.html',
  styleUrls: ['./user-registration.component.css']
})
export class UserRegistrationComponent implements OnInit {
 
  
  public form: FormGroup;

  constructor(private fb: FormBuilder) {  
      // Validations
      this.form = this.fb.group({
          firstname: ['', Validators.compose([
                Validators.required,
                firstnameValidators.cannotContainNumber
          ])],
          lastname:  ['', Validators.compose([
                Validators.required,
                lastnameValidators.cannotContainNumber,
                lastnameValidators.cannotContainSpace
          ])],
          email:  ['', Validators.compose([
                Validators.required,
                emailValidators.isEmailFormat
          ])],
          password:  ['', Validators.compose([
                Validators.required,
                Validators.minLength(5)
          ])]
      })
  }


  ngOnInit() {
      
  }

  signup(){
      
      Object.keys(this.form.controls).forEach(key => {
          console.log(key + ":" + this.form.get(key).value);
      });
      console.log(this.form);
  }

}
