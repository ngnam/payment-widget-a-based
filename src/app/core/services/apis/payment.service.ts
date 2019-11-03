import { Injectable } from '@angular/core';
import { DataService } from './data.service';
import { mapToHttpParamsQuery, fmt } from 'src/app/shared/helpers/utilities';

const router = {
  paymentSystem: '/api/payment-systems/'
};

@Injectable({ providedIn: 'root' })
export class PaymentService {
  constructor(private httpService: DataService) {}
  loadPaymentSystem(
    key: string,
    requestParam?: {
      country_code?;
      currency_converted?;
      include_pricepoints?;
      sign_version?;
      sign?;
    }
  ) {
    const params = mapToHttpParamsQuery(requestParam);
    return this.httpService.get(`${router.paymentSystem}?key=${key}`, params);
  }
}
