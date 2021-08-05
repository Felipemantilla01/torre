import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-type-tag-modal',
  templateUrl: './type-tag-modal.component.html',
  styleUrls: ['./type-tag-modal.component.scss'],
})
export class TypeTagModalComponent implements OnInit {
  tag: string = '';
  constructor(
    public dialogRef: MatDialogRef<TypeTagModalComponent>,
    @Inject(MAT_DIALOG_DATA)
    public data: any
  ) {}

  ngOnInit(): void {}
}
