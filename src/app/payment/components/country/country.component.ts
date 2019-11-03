import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-country',
  templateUrl: './country.component.html',
  styleUrls: ['./country.component.scss']
})
export class CountryComponent implements OnInit {
  countries: { name: string; code: string }[] = [
    { name: 'Viet Nam', code: 'vn' },
    { name: 'Russia', code: 'ru' }
  ];
  @Output() countryChanged: EventEmitter<any> = new EventEmitter();
  constructor() {}

  ngOnInit() {}

  selectionChange(selected) {
    this.countryChanged.emit({ selected });
  }
}
