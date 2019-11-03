import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { SnackBarComponent } from '.';
import {
  MatSnackBarModule,
  MatSnackBarRef,
  MAT_SNACK_BAR_DATA
} from '@angular/material';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { By } from '@angular/platform-browser';
import { of } from 'rxjs';

describe('SnackBarComponent', () => {
  let component: SnackBarComponent;
  let fixture: ComponentFixture<SnackBarComponent>;
  const snackBarData = { message: 'Test message', action: 'Test action' };
  const matSnackBarRef = jasmine.createSpyObj('MatSnackBar', {
    dismiss: () => {},
    afterDismissed: () => {
      of(null);
    }
  });

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SnackBarComponent],
      imports: [MatSnackBarModule],
      providers: [
        { provide: MatSnackBarRef, useValue: matSnackBarRef },
        { provide: MAT_SNACK_BAR_DATA, useValue: snackBarData }
      ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SnackBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call dismiss() method when click dismiss icon', () => {
    spyOn(component, 'dismiss');
    const dismissIcon = fixture.debugElement.query(By.css('.snack-bar-dismiss'))
      .nativeElement;
    expect(dismissIcon).toBeTruthy();
    dismissIcon.click();
    fixture.detectChanges();
    expect(component.dismiss).toHaveBeenCalled();
  });

  it('should call snackBarRef.dismiss() when click dismiss icon', () => {
    component.dismiss();
    fixture.detectChanges();
    expect(TestBed.get(MatSnackBarRef).dismiss).toHaveBeenCalled();
  });
});
