import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from '../app/components/home/home.component';
import { GameComponent } from '../app/components/game/game.component'

const routes: Routes = [
  {path: 'home', component:HomeComponent},
  {path: 'game', component:GameComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
