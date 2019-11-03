import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { PaymentSystem } from 'src/app/shared/models';

@Component({
  selector: 'app-payment-method',
  templateUrl: './payment-method.component.html',
  styleUrls: ['./payment-method.component.scss']
})
export class PaymentMethodComponent implements OnInit {
  @Input() payments: PaymentSystem[];
  @Output() selected: EventEmitter<any> = new EventEmitter();
  constructor() {}

  ngOnInit() {}

  selectPayment(index: any, id: any) {
    this.selected.emit(id);
    this.payments.forEach(item => (item['selected'] = false));
    this.payments[index]['selected'] = true;
  }
}
