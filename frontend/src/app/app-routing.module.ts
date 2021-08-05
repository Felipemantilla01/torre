import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeScreenComponent } from './pages/home/ui/home-screen/home-screen.component';
import { LoginScreenComponent } from './pages/login/ui/login-screen/login-screen.component';
import { ResourcesScreenComponent } from './pages/resources/ui/resources-screen/resources-screen.component';
import { StatisticsScreenComponent } from './pages/statistics/ui/statistics-screen/statistics-screen.component';

const routes: Routes = [
  {
    path: 'login',
    component: LoginScreenComponent,
  },
  {
    path: 'home',
    component: HomeScreenComponent,
  },
  {
    path: 'resources/:tag',
    component: ResourcesScreenComponent,
  },
  {
    path: 'statistics',
    component: StatisticsScreenComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
