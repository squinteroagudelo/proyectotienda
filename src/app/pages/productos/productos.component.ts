import { Component, OnInit } from '@angular/core';
import { Producto } from "../../classes/producto/producto";

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.scss'],
})
export class ProductosComponent implements OnInit {
  public lst: Producto[];

  constructor() {
    this.lst = [];
  }

  ngOnInit(): void {
    this.llenarLista();
  }

  private llenarLista() {
    for (let i = 0; i <= 5; i++) {
      var producto = new Producto();
      producto.cod = 'G0215' + i.toString();
      producto.nombre = 'Arroz blanco' + i.toString();
      producto.precio = 2500;
      this.lst.push(producto);
    }
  }
}
