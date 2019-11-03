import { Component, Inject } from '@angular/core';
import { MAT_SNACK_BAR_DATA, MatSnackBarRef } from '@angular/material';
import { MatSnackData } from './snack-bar.service';

@Component({
  selector: 'app-snack-bar',
  templateUrl: './snack-bar.component.html',
  styleUrls: ['./snack-bar.component.scss']
})
export class SnackBarComponent {
  constructor(
    private snackBarRef: MatSnackBarRef<SnackBarComponent>,
    @Inject(MAT_SNACK_BAR_DATA) public data: MatSnackData
  ) {}

  dismiss(): void {
    this.snackBarRef.dismiss();
  }

  onAfterDismiss() {
    this.snackBarRef.afterDismissed().subscribe();
  }
}
