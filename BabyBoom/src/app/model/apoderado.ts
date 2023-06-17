import { Tiposuscripcion } from "./Tiposuscripcion";
import { User } from "./usuario";

export class Apoderado {
  idApoderado: number = 0;
  user: User = new User();
  bebe: Bebe = new Bebe();
  tiposuscrip: Tiposuscripcion = new Tiposuscripcion();
  guarderia: Guarderia = new Guarderia();
  nombre: string = "";
  apellido: string = "";
  email: string = "";
}
