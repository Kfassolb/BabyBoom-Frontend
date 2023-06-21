import { Soportetecnico } from "./Soportetecnico";
import { Apoderado } from "./apoderado";

  export class Problema{
  idProblema:number = 0;
  soportetecnico:Soportetecnico=new Soportetecnico();
  apoderado:Apoderado=new Apoderado();
  Titulo: string=""
  Descripcion: string=""
  FechaInicio:Date=new Date(Date.now())
  FechaFin:Date=new Date(Date.now())
}

