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
export type Usuarios = InfoUsuarios

export type comentario = {
    texto: string[];
    fecha: string;
}

type InfoReceta = {
    id: string;
    id_usuario: number;
    imagen_receta: string;
    descripcion: string;
    fecha_receta: string;
    likes_receta: number;
    comentarios_receta: number;
    comentarios: comentario[];
}
export type receta = InfoReceta

type InfoPost = {
    id: string;
    id_usuario: number;
    imagen_post: string;
    link_receta: string;
    descripcion: string;
    fecha_post: string;
    likes_post: number;
    comentarios_post: number;
    comentarios: comentario[];
}
export type post = InfoPost

type InfoMisiones = {
    id: string;
    nombre_mision: string;
    cantidad_necesaria: number;
    recompensa: number;
    cuenta: number;
}
export type misiones = InfoMisiones

type InfoMetas = {
    id: string;
    nombre_meta: string;
    filtro_id: string;
    cantidad_necesaria: number;
    recompensa: number;
    cuenta: number;
}
export type metas = InfoMetas

type InfoMaestrias = {
    id: string;
    nombre_meta: string;
    filtro_id: string;
    cantidad_necesaria: number;
    nivel: string;
    cuenta: number;
}
export type maestrias = InfoMaestrias

type InfoBandejas = {
    id: string;
    id_usuario: number;
    imagen_bandeja: string;
    nombre_bandeja: string;
    filtros: string[];
    recetas_bandeja: string[];
}
export type bandejas = InfoBandejas 

