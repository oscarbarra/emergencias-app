
export class CumunidadesCls {
    static currentId = 0;

    constructor(nombre) {
        this.id = ++CumunidadesCls.currentId;
        this.nombre = nombre;
    }

    obtenerTodo() {
        return this.data;
    }
}

export class PublicacionCls {
    static currentId = 0;

    constructor(usuario, icon, mensaje, imagen, comuna, comentarios=[]) {
        this.id = ++PublicacionCls.currentId;
        this.usuario = usuario;
        this.icon = icon;
        this.mensaje = mensaje;
        this.imagen = imagen || null;
        this.comuna = comuna || null;
        this.comentarios = comentarios;
    }

    obtenerTodo() {
        return this.data;
    }
}

export class ComentarioCls {
    static currentId = 0;

    constructor(text, author, date) {
        this.id = ++ComentarioCls.currentId;
        this.text = text;
        this.author = author;
        this.date = date;
    }

    obtenerTodo() {
        return this.data;
    }
}