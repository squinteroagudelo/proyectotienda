import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class NavigationService {
  constructor(public router: Router) {}

  public ClientesPage() {
    this.router.navigate(['/clientes']);
  }

  public ProductosPage() {
    this.router.navigate(['/productos']);
  }

  public ProveedoresPage() {
    this.router.navigate(['/proveedores']);
  }
}
