import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CarListComponent } from './shared/car-list/car-list.component';
import { CarEditComponent } from './shared/car-edit/car-edit.component';
import { PersonListComponent } from './shared/person-list/person-list.component';
import { OktaCallbackComponent } from '@okta/okta-angular';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'car-list', component: CarListComponent},
  { path: 'car-add', component: CarEditComponent},
  { path: 'car-edit/:id', component: CarEditComponent},
  { path: 'implicit/callback', component: OktaCallbackComponent},
  { path: 'home', component: HomeComponent},
  { path: 'person-list', component: PersonListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
