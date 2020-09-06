import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthenticationService } from '../../shared/services/authenticationService';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
  signUpForm: FormGroup;
  verifyCodeForm: FormGroup;
  loading = false;
  submitted = false;
  returnUrl: string;
  error = '';
  codeError = '';
  hide = true;
  confirmEmailHide = true;
  isCodeVerified = false;
  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private authenticationService: AuthenticationService
  ) { }

  ngOnInit(): void {
    this.returnUrl = './login';
    this.signUpForm = this.formBuilder.group({
      firstname: ['', Validators.required],
      lastname: ['', Validators.required],
      dob: [''],
      address: [''],
      city: [''],
      email: ['', Validators.required],
      confirmEmail: ['', Validators.required],
      password: ['', Validators.required],
      confirmPassword: ['', Validators.required]
    });

    this.verifyCodeForm = this.formBuilder.group({
      email: ['', Validators.required],
      verificationCode: ['', Validators.required]      
    });
  }
  // convenience getter for easy access to form fields
  get f() { return this.signUpForm.controls; }
  get fcode() { return this.verifyCodeForm.controls; }

  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.signUpForm.invalid) {
      return;
    }

    this.loading = true;
    this.authenticationService.signUp(this.f.email.value, this.f.password.value, this.f.firstname.value, this.f.lastname.value)
    .then(response => {
      this.isCodeVerified = true; 
      this.loading = false;
      //TODO Create user to DB. Call Api 
      console.log(response);
    })
    .catch(err => {
      this.error = err; 
      this.loading = false
    });        
  }

  onSubmitCode() {
    // stop here if form is invalid
    if (this.verifyCodeForm.invalid) {
      return;
    }

    this.loading = true;
    this.authenticationService.verifyCode(this.fcode.email.value, this.fcode.verificationCode.value)
    .then(response => { 
      this.router.navigate([this.returnUrl]);
    })
    .catch(err => { 
      this.codeError = err.message; 
      this.loading = false;
    });        
  }

  //TODO Remember me - Forgot Password
}
