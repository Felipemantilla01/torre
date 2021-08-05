import { Component, Input, OnInit } from '@angular/core';
import { Resource } from '../../models/Resource';

@Component({
  selector: 'app-resource-icon',
  templateUrl: './resource-icon.component.html',
  styleUrls: ['./resource-icon.component.scss'],
})
export class ResourceIconComponent implements OnInit {
  @Input() item: Resource = {
    image: '',
    name: 'Loading...',
    _id: '',
    external: true,
    link: '',
    type: 'free',
  };

  constructor() {}

  ngOnInit(): void {}
}
