import { Bebe } from "./Bebe"
import { Guarderia } from "./Guarderia"
import { Tiposuscripcion } from "./Tiposuscripcion"
import { Usuario } from "./usuario"

export class Apoderado {
  idApoderado: number = 0
  usuario:Usuario = new Usuario()
  bebe:Bebe = new Bebe()
  tiposuscrip:Tiposuscripcion = new Tiposuscripcion()
  guarderia:Guarderia = new Guarderia()
  Nombre:String = ""
  Apellido: String = ""
  CorreoElectronico:String = ""
}
