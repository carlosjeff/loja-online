import { ContatoComponent } from './contato/contato.component';
import { TitleComponent } from './products/title/title.component';
import { ListComponent } from './products/list/list.component';
import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path:'home',
    component: HomeComponent
  },
  {
    path:'titulos',
    component: ListComponent
  },
  {
    path:'titulo',
    component: TitleComponent
  },
  {
    path:'contato',
    component: ContatoComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
