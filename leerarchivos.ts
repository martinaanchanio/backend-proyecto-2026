import * as fs from 'fs';

const ruta: string = 'data/usuarios.json';

type InfoUsuarios = {
    id: number;
    nombre: string;
    apellido: string;
    username: string;
    email: string;
    foto_perfil: string;
    descripcion: string;
    fecha_registro_usuario: Date;
    restricciones: string[];
}
type DatosUsuarios{
    usuarios: InfoUsuarios
}


const jsonTexto: string = fs.readFileSync("data/usuarios.json", "utf-8");
const datos: InfoUsuarios = JSON.parse(jsonTexto);
const listaUsuarios: InfoUsuarios[] = datos.usuarios;

