import { Tipoenfermedad } from './Tipoenfermedad';
export class Bebe {
  idBebe: number = 0;
  nombreBebe: string = "";
  fechaBebe: Date = new Date(Date.now());
  tipoEnfermedad:Tipoenfermedad =new Tipoenfermedad();

}
