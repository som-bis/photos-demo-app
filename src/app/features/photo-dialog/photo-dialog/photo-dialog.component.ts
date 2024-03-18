import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-photo-dialog',
  templateUrl: './photo-dialog.component.html',
  styleUrl: './photo-dialog.component.scss'
})
export class PhotoDialogComponent {

  constructor(@Inject(MAT_DIALOG_DATA) public data: any,
    public dialogRef: MatDialogRef<PhotoDialogComponent>) {
    console.log("Data", data);
  }

  closeDialog(): void {
    this.dialogRef.close();
  }
}
