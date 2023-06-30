import { Producto } from "./Producto";
import { Apoderado } from "./Apoderado";

export class Compraproducto{
  idCompraProducto: number = 0
  apoderado:Apoderado = new Apoderado()
  producto:Producto=new Producto();
  cantidad: number=0
}
