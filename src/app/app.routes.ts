import { Routes } from '@angular/router';
import { TelaEscolherEntregadorComponent } from './components/tela-escolher-entregador/tela-escolher-entregador.component';
import { PedidosComponent } from './components/pedidos/pedidos.component';
import { InicioComponent } from './components/inicio/inicio.component';

export const routes: Routes = [
    { path: 'inicio', component: InicioComponent },
    { path: 'escolher-entregador', component: TelaEscolherEntregadorComponent },
    { path: '', redirectTo: '/inicio', pathMatch: 'full' }
];
