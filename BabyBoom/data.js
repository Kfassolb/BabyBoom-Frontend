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
    Comunidad: [
      {
        idComunidad: 1,
        NombreComunidad:"Piura",
        Contenido:"Mayor",
        FechaInicio:"2022-09-10",
      },
      {
        idComunidad: 2,
        NombreComunidad:"Lima",
        Contenido:"Reservado",
        FechaInicio:"2019-02-10",
      },
      {
        idComunidad: 3,
        NombreComunidad:"pucallpa",
        Contenido:"Igual",
        FechaInicio:"2015-08-12",
      },
    ],

  }
  return data
}
