type InfoUsuarios = {
    id: number;
    nombre: string;
    apellido: string;
    username: string;
    email: string;
    foto_perfil: string;
    descripcion: string;
    fecha_registro_usuario: string;
    restricciones: string[];
}
type Usuarios = InfoUsuarios

type comentario = {
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
type receta = InfoReceta

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
type post = InfoPost

type InfoMisiones = {
    id: string;
    nombre_mision: string;
    cantidad_necesaria: number;
    recompensa: number;
    cuenta: number;
}
type misiones = InfoMisiones

type InfoMetas = {
    id: string;
    nombre_meta: string;
    filtro_id: string;
    cantidad_necesaria: number;
    recompensa: number;
    cuenta: number;
}
type metas = InfoMetas

type InfoMaestrias = {
    id: string;
    nombre_meta: string;
    filtro_id: string;
    cantidad_necesaria: number;
    nivel: string;
    cuenta: number;
}
type maestrias = InfoMaestrias

type InfoBandejas = {
    id: string;
    id_usuario: number;
    imagen_bandeja: string;
    nombre_bandeja: string;
    filtros: string[];
    recetas_bandeja: string[];
}
type bandejas = InfoBandejas 