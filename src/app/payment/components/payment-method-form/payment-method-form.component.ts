import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import {
  FormGroup,
  FormBuilder,
  Validators,
  FormControl,
  FormGroupDirective,
  NgForm
} from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material';
export class PamentErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(
    control: FormControl | null,
    form: FormGroupDirective | NgForm | null
  ): boolean {
    const isSubmitted = form && form.submitted;
    return !!(
      control &&
      control.invalid &&
      (control.dirty || control.touched || isSubmitted)
    );
  }
}
@Component({
  selector: 'app-payment-method-form',
  templateUrl: './payment-method-form.component.html',
  styleUrls: ['./payment-method-form.component.scss']
})
export class PaymentMethodFormComponent implements OnInit {
  formData: FormGroup;
  @Output() OnSubmit: EventEmitter<any> = new EventEmitter<any>();
  matcher = new PamentErrorStateMatcher();
  constructor(private formBuiler: FormBuilder) {}

  ngOnInit() {
    this.initializeForm();
  }

  onSubmit() {
    if (this.formData.valid) {
      this.OnSubmit.emit(this.formData.value);
    }
  }

  private initializeForm() {
    this.formData = this.formBuiler.group({
      amount: ['', [Validators.required, Validators.pattern('[0-9]+')]],
      cardHolderName: ['', [Validators.required, Validators.pattern('[0-9]+')]],
      cardNumber: ['', [Validators.required, Validators.pattern('[0-9]+')]],
      expDate: ['', null],
      cvvNumber: ['', [Validators.required, Validators.pattern('[0-9]+')]]
    });
    setTimeout(() => {
      this.formData.controls['amount'].setValue('');
      this.formData.controls['cardHolderName'].setValue('');
      this.formData.controls['cardNumber'].setValue('');
      this.formData.controls['expDate'].setValue(null);
      this.formData.controls['cvvNumber'].setValue('');
      this.formData.reset();
    }, 500);
  }
}
