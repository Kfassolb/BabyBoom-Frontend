import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { BebevacunaComponent } from './components/bebevacuna/bebevacuna.component';
import { BebevacunaCreaeditaComponent } from './components/bebevacuna/bebevacuna-creaedita/bebevacuna-creaedita.component';
const routes: Routes = [
  {
    path: '',
    redirectTo: 'login', pathMatch: 'full'
  },
  {
    path: 'login', component: LoginComponent
  },
  {
    path: 'pages',
    loadChildren: () => import('./components/pages.module').then((m) => m.PagesModule),
  },



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
