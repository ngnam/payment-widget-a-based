import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PaymentRoutingModule } from './payment-routing.module';
import { PaymentPageComponent } from './payment-page/payment-page.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '../matterial/matterial.module';
import { CountryComponent } from './components/country/country.component';
import { PaymentMethodComponent } from './components/payment-method/payment-method.component';
import { PaymentMethodFormComponent } from './components/payment-method-form/payment-method-form.component';

@NgModule({
  declarations: [
    PaymentPageComponent,
    CountryComponent,
    PaymentMethodComponent,
    PaymentMethodFormComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MaterialModule,
    PaymentRoutingModule
  ]
})
export class PaymentModule {}
