import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
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
  free: any[] = [];
  paid: any[] = [];
  constructor(
    private route: ActivatedRoute,
    private dialog: MatDialog,
    public router: Router,
    public _location: Location,
    private fs: AngularFirestore
  ) {
    this.tag = this.route.snapshot.paramMap.get('tag') || '';
  }

  async ngOnInit() {
    const freeResources = await this.fs
      .collection('free-resources')
      .get()
      .toPromise();
    const paidResources = await this.fs
      .collection('paid-resources')
      .get()
      .toPromise();
    freeResources.docs.forEach((doc) => {
      const data = doc.data();
      this.free.push(data);
    });
    paidResources.docs.forEach((doc) => {
      const data = doc.data();
      this.paid.push(data);
    });

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
    } else {
    }
  }

  getResources() {}

  handleOpenPaidResource(resource: {
    type: string;
    name: string;
    link: string;
    image: string;
  }) {
    window.open(`${resource.link}${this.tag}`, '_blank');
  }
  handleOpenFreeResource(resource: {
    type: string;
    name: string;
    image: string;
    link?: string;
  }) {
    if (resource.type == 'out') {
      window.open(`${resource.link}${this.tag}`, '_blank');
    }
  }
}
