import { Component, OnInit } from '@angular/core';
import { Cliente } from '../../classes/cliente/cliente';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.scss'],
})
export class ClientesComponent implements OnInit {
  public lst: Cliente[];

  constructor() {
    this.lst = [];
  }

  ngOnInit(): void {
    this.llenarLista();
  }

  private llenarLista() {
    for (let i = 0; i <= 5; i++) {
      var cliente = new Cliente();
      cliente.id = "1036132191" + i.toString();
      cliente.nombre = "Samuel Ricardo Quintero Agudelo" + i.toString();
      cliente.tel = "3207101960" + i.toString();
      cliente.fecha_nac = new Date(new Date().setDate(i));
      this.lst.push(cliente);
    }
  }
}
