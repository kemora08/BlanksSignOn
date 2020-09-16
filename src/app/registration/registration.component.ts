import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, ValidationErrors, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  [x: string]: any;
  formSubmit: FormGroup;

  get inputPasswordInvalid(): boolean {
    return !this.formSubmit.controls.ConfirmPasswordInvalid.valid &&
    this.formSubmit.controls.confirmPassword.touched;
  }

  get confirmPasswordInvalid(): boolean {
    return !this.formSubmit.controls.inputPassword.valid &&
    this.formSubmit.controls.inputPassword.touched;
  }

  get passwordError(): boolean {
   return this.formSubmit.hasError('passwordError');
  }

  constructor(private formBuilder: FormBuilder,
              private router: Router,
              authService: AuthService) {

    this.formSubmit = this.formBuilder.group({
      inputEmail: ['', Validators.email],
      inputPassword: ['', Validators.compose([Validators.required,
      Validators.maxLength(10)])],
      confirmPassword: ['', Validators.compose([Validators.required,
         Validators.maxLength(10)])]
    },
    {validators: this.passwordValidator});
   }

  ngOnInit(): void {
  }

  submit(): void {
    console.log(this.formSubmit.value);
    this.authService.register(this.formSubmit.controls.username.value,
       this.formSubmit.controls.inputpassword.value);
    this.router.navigate(['/signin']);
  }

  passwordValidator(control: AbstractControl): ValidationErrors {
    const password = control.get('inputPassword');
    const confirm = control.get('confirmPassword');

    if (confirm.value !== '' && password.value !== confirm.value) {
      return {passwordError: true};
    }

    return null;
  }


}
