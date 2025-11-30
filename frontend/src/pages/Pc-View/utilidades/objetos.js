
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

    constructor(usuario, icon, mensaje, imagen, comuna) {
        this.id = ++PublicacionCls.currentId;
        this.usuario = usuario;
        this.icon = icon;
        this.mensaje = mensaje;
        this.imagen = imagen || null;
        this.comuna = comuna || null;
    }

    obtenerTodo() {
        return this.data;
    }
}