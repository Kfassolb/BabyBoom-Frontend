import { Apoderado } from './apoderado';
import { Medico } from './medico';
export class Citamedica {
  idCitaMedica: number = 0;
  medico: Medico = new Medico();
  apoderado: Apoderado = new Apoderado();
  tituloCita: string = '';
  fecha: Date = new Date(Date.now());
  lugar: string = '';
  nombreClinica: string = '';
}
