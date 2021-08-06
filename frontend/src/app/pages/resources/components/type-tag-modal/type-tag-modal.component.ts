import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';

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
    public data: any,
    private router: Router
  ) {}

  ngOnInit(): void {}

  handleRedirect(tag: string) {
    this.dialogRef.close(tag)
    this.router.navigate([`/resources/${tag}`]);
  }
}
