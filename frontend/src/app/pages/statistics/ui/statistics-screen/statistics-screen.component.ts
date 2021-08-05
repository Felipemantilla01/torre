import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { TagInfoModalComponent } from '../../components/tag-info-modal/tag-info-modal.component';
import { ModalData } from '../../models/ModalData';

@Component({
  selector: 'app-statistics-screen',
  templateUrl: './statistics-screen.component.html',
  styleUrls: ['./statistics-screen.component.scss'],
})
export class StatisticsScreenComponent implements OnInit {
  allItems: Array<string> = [
    'JavaScript',
    'Python',
    'C#',
    '.NET',
    'NodeJS',
    'MongoDB',
    'MySQL',
    'SQL',
    'Firebase',
    'AWS',
    'Kubernetes',
    'Docker',
    'DevOps',
    'Flutter',
    'Vuejs',
    'ReactJS',
    'Angular',
    'React Native',
    'Vue Native',
    'IONIC',
    'Xamarin',
    'Windows Forms',
    'Go'
  ];
  defaultSelectedItems: Array<string> = ['JavaScript', 'Python', 'C#', 'Java', 'Go'];

  constructor(private dialog: MatDialog) {}

  ngOnInit() {}

  handleSelectTag(event: ModalData) {
    console.log(event);
    this.dialog.open(TagInfoModalComponent, {
      data: {
        ...event,
      },
      panelClass: 'dialog-default',
    });
  }
}
