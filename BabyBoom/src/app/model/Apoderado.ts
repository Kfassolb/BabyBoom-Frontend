import { Bebe } from "./Bebe";
import { Guarderia } from "./Guarderia";
import { Tiposuscripcion } from "./Tiposuscripcion";
import { Users } from "./Users";

export class Apoderado {
  idApoderado: number = 0;
  user: Users = new Users();
  bebe: Bebe = new Bebe();
  tiposuscrip: Tiposuscripcion = new Tiposuscripcion();
  guarderia: Guarderia = new Guarderia();
  nombre: string = "";
  apellido: string = "";
  email: string = "";
}
