import * as fs from 'fs';

const ruta: string = 'data/usuarios.json';

type InfoUsuarios = {
    id: string;
    nombre: string;
    apellido: string;
    username: string;
    email: string;
    foto_perfil: string;
    descripcion: string;
    fecha_registro_usuario: Date;
    restricciones: string[];
}
type DatosUsuarios = {
    usuarios: InfoUsuarios
}


const jsonTexto: string = fs.readFileSync("data/usuarios.json", "utf-8");
const datos: DatosUsuarios = JSON.parse(jsonTexto);
const listaUsuarios: InfoUsuarios[] = datos.usuarios;


const ultimoUsuario = datos.usuarios[datos.usuarios.length - 1];
const ultimoId = ultimoUsuario ? parseInt(ultimoUsuario.id, 10): 0;
const nuevoId = ultimoId + 1;
const nuevoIdString = nuevoId.toString().padStart(10, '0');

const nuevoUsuario: InfoUsuarios = {
    id: nuevoIdString,
    nombre: "Pepe",
    apellido: "Pepo",
    username: 'pepito67',
    email: 'pepito@gmail.com',
    foto_perfil: 'foto.jpg',
    descripcion: 'soi pepe',
    fecha_registro_usuario: new Date (2026, 4, 7),
    restricciones: ['veganx', 'diabeticx']
  };
  datos.usuarios.push(nuevoUsuario);
  
  
  const nuevoJsonTexto: string = JSON.stringify(datos, null, 2);
  
  
  fs.writeFileSync(ruta, nuevoJsonTexto, "utf-8");
  
  
  console.log("Bienvenida " + listaUsuarios[nuevoId]?.nombre);
  
  
