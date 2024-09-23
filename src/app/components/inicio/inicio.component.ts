import { Component } from '@angular/core';
import { PedidosComponent } from '../pedidos/pedidos.component';

@Component({
  selector: 'app-inicio',
  standalone: true,
  imports: [PedidosComponent],
  templateUrl: './inicio.component.html',
  styleUrl: './inicio.component.css'
})
export class InicioComponent {

}
