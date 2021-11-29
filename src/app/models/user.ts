export interface User {
    /* example of the site jsonplaceholder.typicode -> comments API
    Fake Online REST API for Testing and Prototyping  */
    nombre: string;
    correo: string;
    cedula: string;
    valorSolicitado?: string;
    fechaPagar?: Date;
    estadoCredito?: boolean;
    pagoCredito?: boolean;
  }
  