import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ClienteListComponent } from './components/cliente-list/cliente-list.component';
import { ClienteCreateComponent } from './components/cliente-create/cliente-create.component';
import { clienteResolver } from './resolver/cliente.resolver';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'prefix',
    redirectTo: 'home',
  },
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'cliente-list',
    component: ClienteListComponent,
  },
  {
    path: 'cliente',
    component: ClienteCreateComponent,
    resolve: { cliente: clienteResolver }
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
