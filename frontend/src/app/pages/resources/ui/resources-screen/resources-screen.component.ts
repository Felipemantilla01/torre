import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { TypeTagModalComponent } from '../../components/type-tag-modal/type-tag-modal.component';

@Component({
  selector: 'app-resources-screen',
  templateUrl: './resources-screen.component.html',
  styleUrls: ['./resources-screen.component.scss'],
})
export class ResourcesScreenComponent implements OnInit {
  tag: string = '';
  constructor(
    private route: ActivatedRoute,
    private dialog: MatDialog,
    public router: Router,
    public _location: Location
  ) {
    this.tag = this.route.snapshot.paramMap.get('tag') || '';
  }

  ngOnInit(): void {
    if (this.tag === '' || this.tag === 'null') {
      this.dialog
        .open(TypeTagModalComponent, {})
        .afterClosed()
        .subscribe((tag) => {
          if (tag) {
            this.tag = tag;
          } else {
            this.router.navigate(['home']);
          }
        });
    }
  }
}
