import { Comunidad } from "./Comunidad"
import { Apoderado } from "./apoderado";

export class Publicacion{
  idPublicacion:number=0;
  comunidad= new Comunidad;
  apoderado=new Apoderado;
  tituloPublicacion: string="";
  comentarioPublicacion: string="";
}
