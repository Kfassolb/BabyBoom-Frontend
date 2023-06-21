module.exports = function(){
  var data = {
    TiposComprobantes: [
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
        IDusuario: 1,
        Username: "Parka",
        Password: "FUw$^uDnW5&i8c",
      },
      {
        IDusuario: 2,
        Username: "Ame",
        Password: "zYP5uP^qmW^$57",
      },
      {
        IDusuario: 3,
        Username: "Pablito",
        Password: "PLeR2!7tB8%vzo",
      },
      {
        IDusuario: 4,
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
   BebeVacuna:[
    {
      idBebeVacuna:1,
      controlvacunacion:"caso1"
    },
    {
      idBebeVacuna:1,
      controlvacunacion:"caso2"
    },
   ],
   GuaderiaServicio:[
    {
      idGuarderiaServicio:1,
      servicio:"caso1"
    },
    {
      idGuarderiaServicio:2,
      servicio:"caso2"
    },
   ],
  }
  return data
}

