import { Component, OnInit } from '@angular/core';
import { Proveedor } from "../../classes/proveedor/Proveedor";

@Component({
  selector: 'app-proveedores',
  templateUrl: './proveedores.component.html',
  styleUrls: ['./proveedores.component.scss'],
})
export class ProveedoresComponent implements OnInit {
  public lst: Proveedor[];

  constructor() {
    this.lst = [];
  }

  ngOnInit(): void {
    this.llenarLista();
  }

  private llenarLista() {
    for (let i = 0; i <= 5; i++) {
      var proveedor = new Proveedor();
      proveedor.id = '1036131305' + i.toString();
      proveedor.nombre = 'Evelin Marcela Quintero Agudelo' + i.toString();
      proveedor.tel = '3104574220' + i.toString();
      this.lst.push(proveedor);
    }
  }
}
