module.exports = function(){
  var data = {
    tipocomprobantes: [
      {
        id: 1,
        nombreComprobante: "Boleta de venta electronica",
      },
      {
        id: 2,
        nombreComprobante: "Factura electrónica",
      },
      {
        id: 3,
        nombreComprobante: "Nota de crédito electrónica",
      },
      {
        id: 4,
        nombreComprobante: "Nota de débito electrónica",
      },
    ],
    Usuario: [
      {
        id: 1,
        Username: "Parka",
        Password: "FUw$^uDnW5&i8c",
      },
      {
        id: 2,
        Username: "Ame",
        Password: "zYP5uP^qmW^$57",
      },
      {
        id: 3,
        Username: "Pablito",
        Password: "PLeR2!7tB8%vzo",
      },
      {
        id: 4,
        Username: "Jachito",
        Password: "GmB!nxcbKV6s9X",
      },
    ],
    Servicio: [
      {
        id:1,
        NombreServicio:"Baño bebe",
      },
      {
        id:2,
        NombreServicio:"Dar comer bebe",
      },
      {
        id:3,
        NombreServicio:"Siesta bebe",
      },
    ],
    Producto: [
      {
        id:1,
        Nombre:"Babero",
        Tipo:"Prenda",
        Cantidad:2,
        PrecioUnitario:10 ,
      },
      {
        id:2,
        Nombre:"Coche",
        Tipo:"Transporte",
        Cantidad:1,
        PrecioUnitario:350,
      },
      {
        id:3,
        Nombre:"Sonaja",
        Tipo:"Juguete",
        Cantidad:5,
        PrecioUnitario:8,

      },
    ],
    TiposEnfermedades: [
      {
        id: 1,
        nombreEnfermedad: "Asma",
        TipoEnfermedad:"Infecciones respiratorias"
      },
      {
        id: 2,
        nombreEnfermedad: "Gastritis",
        TipoEnfermedad:"Infecciones gastrointestinales"
      },
      {
        id: 3,
        nombreEnfermedad: "Bitiligo",
        TipoEnfermedad:"Infecciones de la piel",
      },
      {
        id: 4,
        nombreEnfermedad: "Sordera parcial",
        TipoEnfermedad:"Problemas de oído",
      }
    ],
    TiposSuscripcion: [
      {
        id: 1,
        nombreSuscripcion: "Gratuito",
      },
      {
        id: 2,
        nombreSuscripcion: "Premium mensual",
      },
      {
        id: 3,
        nombreSuscripcion: "Premium anual",
      },
    ],
    Bebes: [
      {
        id: 1,
        nombreBebe: "Pepe",
        fechaBebe:"2000-12-06"
      },
      {
        id: 2,
        nombreBebe: "Antoni",
        fechaBebe:"2000-12-06"
      },
      {
        id: 3,
        nombreBebe: "Rodrigo",
        fechaBebe:"2000-12-06",
      },
      {
        id: 4,
        nombreBebe: "Gustavo",
        fechaBebe:"2000-12-06",
      }
    ],
   Controlvacunacion:[
    {
      id:1,
      fecha:"2023-11-05",
      tipoVacuna:"liquida",
      estadoVacunacion:"hecho",
      nombreVacunador:"Jose Perales",
      lugar:"Hospital",
    },
    {
      id:2,
      fecha:"2021-11-02",
      tipoVacuna:"polvo",
      estadoVacunacion:"en proceso",
      nombreVacunador:"Bernando Perales",
      lugar:"Clinica",
    },
   ],
  }
  return data
}
