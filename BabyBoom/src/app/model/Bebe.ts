import { Tipoenfermedad } from './Tipoenfermedad';
export class Bebe {
  id: number = 0;
  nombreBebe: string = "";
  fechaBebe: Date = new Date(Date.now());
  tipoenfermedad=new Tipoenfermedad ();

}
