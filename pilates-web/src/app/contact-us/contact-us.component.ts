import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SpinnerService } from '../core/spinner.service';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class ContactUsComponent implements OnInit {

  submitted: boolean = false;
  error = '';
  contactForm: FormGroup;
  constructor(private formBuilder: FormBuilder,
    public spinnerService: SpinnerService) { }

  ngOnInit(): void {
    this.contactForm = this.formBuilder.group({     
      name: ['', Validators.required],
      email: ['', Validators.required],
      message: ['', Validators.required]
    });
  }
  get f() { return this.contactForm.controls; };
  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.contactForm.invalid) {
      return;
    }
  }

}
