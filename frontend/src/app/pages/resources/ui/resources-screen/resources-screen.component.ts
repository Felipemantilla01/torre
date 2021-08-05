import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { TypeTagModalComponent } from '../../components/type-tag-modal/type-tag-modal.component';
import { Resource } from '../../models/Resource';
import { ResourcesService } from '../../services/resources.service';

@Component({
  selector: 'app-resources-screen',
  templateUrl: './resources-screen.component.html',
  styleUrls: ['./resources-screen.component.scss'],
})
export class ResourcesScreenComponent implements OnInit {
  tag: string = '';
  free: Resource[] = [];
  paid: Resource[] = [];
  constructor(
    private route: ActivatedRoute,
    private dialog: MatDialog,
    public router: Router,
    public _location: Location,
    private resourcesService: ResourcesService
  ) {
    this.tag = this.route.snapshot.paramMap.get('tag') || '';
  }

  async ngOnInit() {
    const result = (await this.resourcesService
      .getResources()
      .toPromise()) as Array<Resource>;

    result.forEach((resource) => {
      if (resource.type === 'free') {
        this.free.push(resource);
      } else {
        this.paid.push(resource);
      }
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

  handleOpenPaidResource(resource: Resource) {
    window.open(`${resource.link}${this.tag}`, '_blank');
  }
  handleOpenFreeResource(resource: Resource) {
    if (resource.external) {
      window.open(`${resource.link}${this.tag}`, '_blank');
    }
  }
}
