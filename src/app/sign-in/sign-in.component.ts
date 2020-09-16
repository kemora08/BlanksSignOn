import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {

  formSubmit: FormGroup;
  inputEmail: FormControl = new FormControl('', Validators.email);
  inputPassword: FormControl = new FormControl('', Validators.required); )
  validLogin = true;

  get inputPasswordInvalid(): boolean {
    return !this.inputPassword.valid && this.inputPassword.touched;
  }

  get inputPasswordInvalid(): boolean {
    return !this.formSubmit.controls.inputPassword.valid &&
    this.formSubmit.controls.inputPassword.touched;
  }
  constructor(private formBuilder: FormBuilder) {
    private authService: AuthService; )

this.formSubmit = this.formBuilder.group({
      inputEmail: ['', Validators.email],
      inputPassword: ['', Validators.required]
    });
   }

ngOnInit(); : void {
  };

submit(); : void {
  console.log(this.formSubmit.value);

  this.validLogin = this.authService.login(this.formSubmit.controls.inputEmail.value,
    this.formSubmit.controls.inputPassword.value);

    const user: IUser = {
     username: this.inputEmail.value,
     password: this.inputPassword.value
    };

  if(this.validLogin); {
    this.router.navigate(['/userProfile']);
  }


}
