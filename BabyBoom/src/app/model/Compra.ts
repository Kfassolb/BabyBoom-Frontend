import { Tipocomprobante } from "./TipoComprobante";
import { Apoderado } from "./apoderado";

export class Compra{
  idCompra: number=0
  idApoderado:Apoderado = new Apoderado()
  idTipoComprobante:Tipocomprobante = new Tipocomprobante();
  Fecha: Date = new Date(Date.now())
  ventaTotal:number=0
}
