import { NgModule } from '@angular/core';
import { HeroDetailComponent } from './hero-detail.component';
import { DashComponent } from './dash.component';
import { HeroComponent } from './hero.component';
import { RouterModule, Routes} from '@angular/router';

const routes: Routes = [
      {
        path: 'heroes',
        component: HeroComponent
      }, {
        path: 'dashboard',
        component: DashComponent
      }, {
        path: '',
        component: DashComponent,
        pathMatch: 'full'
      }, {
        path: 'detail/:id',
        component: HeroDetailComponent
      }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})

export class AppRoutingModule {}
