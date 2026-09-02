import * as fs from 'fs';

const ruta: string = './archivo.txt';
const texto: string = 'Hola, mundo en TypeScript';

fs.writeFileSync(ruta, texto, 'utf8');
