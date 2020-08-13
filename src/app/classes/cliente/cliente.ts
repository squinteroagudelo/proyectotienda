export class Cliente {
  public id: string;
  public nombre: string;
  public tel: string;
  public fecha_nac: Date;

  constructor() {
    this.id = "";
    this.nombre = "";
    this.tel = "";
    this.fecha_nac = new Date();
  }
}