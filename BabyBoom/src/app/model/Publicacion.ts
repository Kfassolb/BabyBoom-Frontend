import { Comunidad } from "./Comunidad";

export class Publicacion{
  id:number=0;
  comunidad= new Comunidad;
  apoderado=new Apoderado;
  tituloPublicacion: string="";
  comentarioPublicacion: string="";
}
