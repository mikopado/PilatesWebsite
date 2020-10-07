import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-success-dialog',
  templateUrl: './success-dialog.component.html',
  styleUrls: ['./success-dialog.component.css']
})
export class SuccessDialogComponent implements OnInit {

  constructor( private dialogRef: MatDialogRef<SuccessDialogComponent>,) { }

  ngOnInit(): void {
  }

  ok() {
    this.dialogRef.close();
  }

}
