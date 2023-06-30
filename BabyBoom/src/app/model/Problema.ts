import { Soportetecnico } from "./Soportetecnico";
import { Apoderado } from "./Apoderado";

  export class Problema{
  idProblema:number = 0;
  soportetecnico:Soportetecnico=new Soportetecnico();
  apoderado:Apoderado=new Apoderado();
  titulo: string=""
  descripcion: string=""
  fechaInicio:Date=new Date(Date.now())
  fechaFin:Date=new Date(Date.now())
}

