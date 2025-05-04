import { Routes } from '@angular/router';
import {HomeComponent} from './components/home/home.component';
import {AdicionarComponent} from './components/adicionar/adicionar.component';
import {ListarComponent} from './components/listar/listar.component';
import {ExcluirComponent} from './components/excluir/excluir.component';

export const routes: Routes = [
  { path: 'home', component: HomeComponent },
  {path: 'adicionar', component: AdicionarComponent},
  {path: 'listar', component: ListarComponent},
  {path: 'buscar', component: ListarComponent},
  {path: 'listar', component: ListarComponent},
  {path: 'gerenciar', component: ExcluirComponent},
];
