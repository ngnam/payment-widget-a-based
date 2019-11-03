import { Component, OnInit } from '@angular/core';
import { SnackBarService } from 'src/app/core/components/snack-bar';
import { Observable } from 'rxjs';
import { PaymentService } from 'src/app/core/services/apis/payment.service';
import { EnvironmentService } from 'src/app/core';

@Component({
  selector: 'app-payment-page',
  templateUrl: './payment-page.component.html',
  styleUrls: ['./payment-page.component.scss']
})
export class PaymentPageComponent implements OnInit {
  paymentSubmit: any = null;
  payments$: Observable<any>;
  // &country_code=RU&sign_version=2&sign=[SIGNATURE]
  countryCode = 'RU';
  signVersion = 2;
  sign = '[SIGNATURE]';

  constructor(
    private notifyService: SnackBarService,
    private paymentService: PaymentService,
    private envService: EnvironmentService
  ) {}

  ngOnInit() {
    this.loadPayment();
  }

  onPayment(formData) {
    console.log(formData);
    this.paymentSubmit = formData;
    // call API payment
    this.notifyService.showSuccess(formData.amount);
  }

  paymentSelected(payment) {
    console.log('payment selected: ', payment);
  }

  countryChanged($event) {
    this.countryCode = $event.selected;
    this.loadPayment();
  }

  private loadPayment() {
    this.payments$ = this.paymentService.loadPaymentSystem(
      this.envService.PROJECT_KEY,
      {
        country_code: this.countryCode,
        sign: this.sign,
        sign_version: this.signVersion
      }
    );
  }
}
