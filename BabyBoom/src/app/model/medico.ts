import { User } from "./usuario";

export class Medico {
  idMedico: number = 0;
  nombre: string = "";
  apellido: string = "";
  especialidad: string = "";
  email: string = "";
  user: User = new User();
}
