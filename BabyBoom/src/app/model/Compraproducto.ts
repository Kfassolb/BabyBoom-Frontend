import { Producto } from "./Producto";
import { Apoderado } from "./apoderado";

export class Compraproducto{
  idCompraproducto: number = 0
  apoderado:Apoderado = new Apoderado()
  producto:Producto=new Producto();
  Cantidad: number=0
}
