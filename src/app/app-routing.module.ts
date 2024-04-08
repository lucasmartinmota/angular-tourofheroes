import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeroesListComponent } from './components/heroes-list/heroes-list.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { HeroViewComponent } from './components/hero-view/hero-view.component';

const routes: Routes = [
  {path: 'heroes', component: HeroesListComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'detail/:id', component: HeroViewComponent },
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
