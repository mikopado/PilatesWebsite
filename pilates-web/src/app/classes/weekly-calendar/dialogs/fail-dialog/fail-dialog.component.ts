import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { threadId } from 'worker_threads';

@Component({
  selector: 'app-fail-dialog',
  templateUrl: './fail-dialog.component.html',
  styleUrls: ['./fail-dialog.component.css']
})
export class FailDialogComponent implements OnInit {

  constructor( private dialogRef: MatDialogRef<FailDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit(): void {
  }

  ok() {
    this.dialogRef.close();
  }
}
