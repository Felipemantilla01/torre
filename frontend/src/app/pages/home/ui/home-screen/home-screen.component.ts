import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home-screen',
  templateUrl: './home-screen.component.html',
  styleUrls: ['./home-screen.component.scss'],
})
export class HomeScreenComponent implements OnInit {
  menuOptions = [
    {
      image:
        'https://firebasestorage.googleapis.com/v0/b/torre-edc01.appspot.com/o/statistics.svg?alt=media&token=43c56e29-99be-4d2d-bda2-0ff903e55362',
      title: 'Statistics',
      link: 'statistics',
    },
    {
      image:
        'https://firebasestorage.googleapis.com/v0/b/torre-edc01.appspot.com/o/resources.svg?alt=media&token=cf90d021-a1b1-418e-999d-5f83183c7d40',
      title: 'Resources',
      link: 'resources/null',
    },
  ];

  constructor(private router: Router) {}

  ngOnInit(): void {}

  handleRedirect(link: string) {
    this.router.navigate([link]);
  }
}
