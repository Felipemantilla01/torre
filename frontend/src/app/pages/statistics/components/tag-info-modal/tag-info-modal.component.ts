import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { ModalData } from '../../models/ModalData';
import { Response } from '../../models/Response';
import { StatisticsService } from '../../services/statistics.service';

@Component({
  selector: 'app-tag-info-modal',
  templateUrl: './tag-info-modal.component.html',
  styleUrls: ['./tag-info-modal.component.scss'],
})
export class TagInfoModalComponent implements OnInit {
  deficit: number = 0;
  negative: boolean = false;
  constructor(
    public dialogRef: MatDialogRef<TagInfoModalComponent>,
    @Inject(MAT_DIALOG_DATA)
    public data: ModalData,
    private statisticsService: StatisticsService,
    private router: Router
  ) {}

  async ngOnInit() {
    if (this.data.jobs > this.data.developers) {
      this.negative = false
      this.deficit = 100 - (this.data.developers * 100) / this.data.jobs;
    } else {
      this.negative = true
      this.deficit = (this.data.developers * 100) / this.data.jobs - 100;
    }
  }

  async handleLearn(tag: string) {
    this.router.navigate(['resources', tag])
    this.dialogRef.close()
  }
}
