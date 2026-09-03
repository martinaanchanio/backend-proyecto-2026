import * as fs from 'fs';
import { Usuarios } from './types';

const ruta: string = 'data/usuarios.json';

// 1. Leer y parsear el archivo
const jsonTexto: string = fs.readFileSync(ruta, 'utf-8');
const datos: Usuarios[] = JSON.parse(jsonTexto);

// 2. ID o criterio del usuario a modificar
const idBuscado = '0000000070'; 

// 3. Buscar la posición del usuario en el array
const index = datos.findIndex(usuario => usuario.id === idBuscado);

if (index !== -1) {
  // 4. Actualizar conservando lo anterior y pisando solo lo que cambia
  datos[index] = {
    ...datos[index],
    nombre: 'anastacia'
  };

  // 5. Convertir a JSON y guardar
  const nuevoJsonTexto: string = JSON.stringify(datos, null, 2);
  fs.writeFileSync(ruta, nuevoJsonTexto, 'utf-8');

  console.log(`Usuario ${datos[index]} modificado con éxito.`);
} else {
  console.log(`No se encontró ningún usuario con el ID: ${idBuscado}`);
}