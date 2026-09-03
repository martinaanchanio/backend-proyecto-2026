import * as fs from 'fs';
import {Usuarios} from './types';

const ruta: string = 'data/usuarios.json';

const jsonTexto: string = fs.readFileSync("data/usuarios.json", "utf-8");
const datos: Usuarios[] = JSON.parse(jsonTexto);


const ultimoUsuario = datos[datos.length - 1];
const ultimoId = ultimoUsuario ? parseInt(ultimoUsuario.id, 10): 0;
const nuevoId = ultimoId + 1;
const nuevoIdString = nuevoId.toString().padStart(10, '0');

const nuevoUsuario: Usuarios = {
    id: nuevoIdString,
    nombre: "Juan",
    apellido: "Josefa",
    username: 'juanitapro',
    email: 'lol@gmail',
    foto_perfil: 'fotoox.jpg',
    descripcion: 'soy jucho',
    fecha_registro_usuario: new Date (2026, 8, 7),
    restricciones: ['todas']
  };
  datos.push(nuevoUsuario);
  
  
  const nuevoJsonTexto: string = JSON.stringify(datos, null, 2);
  
  
  fs.writeFileSync(ruta, nuevoJsonTexto, "utf-8");
  
  
  console.log("Bienvenidx " + datos[nuevoId]?.nombre);
  
  
