import { Tipocomprobante } from "./TipoComprobante";
import { Apoderado } from "./apoderado";

export class Compra{
  idCompra: number=0
  apoderado:Apoderado = new Apoderado()
  tipocomprobante:Tipocomprobante = new Tipocomprobante();
  fecha: Date = new Date(Date.now())
  ventaTotal:number=0
}
