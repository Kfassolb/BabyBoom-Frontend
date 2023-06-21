import { Users } from "./Users";

export class Medico {
  idMedico: number = 0;
  nombre: string = "";
  apellido: string = "";
  especialidad: string = "";
  email: string = "";
  user: Users = new Users();
}
