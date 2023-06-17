import { Tipoenfermedad } from './Tipoenfermedad';
import { Bebe } from './Bebe';
export class Enfermedadbebe {
  id: number = 0;
  tipoenfermedad=new Tipoenfermedad ();
  bebe=new Bebe();
  sintomasEnfermedad_bebe: string = "";

}
