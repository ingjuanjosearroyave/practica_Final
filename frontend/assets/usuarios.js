import axios from "axios";

export default {
    data() {
        return {
            message: "CRUD USUARIOS",
            enEdicion: false,
            showTable: true,
            validacion: "",
            usuarios: {
                tipo_documento: "",
                documento: "",
                nombre: "",
                apellidos: "",
                celular: "",
                correo: "",
                rol: "",
                clave: "",
                acciones: true
            },
            lista_usuarios: [],
            opciones_documentos: [
                { value: null, text: "Seleccione el tipo de documento", disabled: true },
                { value: "CC", text: "CC" },
                { value: "CE", text: "CE" },
                { value: "NIT", text: "NIT" },
                { value: "Pasaporte", text: "Pasaporte" },
            ],
            opciones_roles: [
                { value: null, text: "Seleccione el rol del usuario", disabled: true },
                { value: "01", text: "01 - Mécanico" },
                { value: "02", text: "02 - Administrador" },
            ],

        };
    },
    created() {
        this.listarUsuarios();
    },
    computed: {
        validacionTipo() {
            return this.validar_condicion(this.usuarios.tipo_documento.length > 0);
        },
        validacionId() {
            return this.validar_condicion(this.usuarios.documento.length > 0);
        },
        validacionNombre() {
            return this.validar_condicion(this.usuarios.nombre.length > 0);
        },
        validacionApellido() {
            return this.validar_condicion(this.usuarios.apellidos.length > 0);
        },
        validacionCelular() {
            return this.validar_condicion(this.usuarios.celular.length > 0);
        },
        validacionCorreo() {
            return this.validar_condicion(this.usuarios.correo.length > 0);
        },
        validacionRol() {
            return this.validar_condicion(this.usuarios.rol.length > 0);
        },
        validacionClave() {
            return this.validar_condicion(this.usuarios.clave.length > 0);
        }
    },
    methods: {
        validar_condicion(bool) {
            if (bool == false) {
                this.validacion = false;
                return false;
            } else {
                this.validacion = true;
                return true;
            }
        },
        listarUsuarios() {
            axios
                .get("http://127.0.0.1:3001/api/v1/usuarios")
                .then(response => {
                    console.log(response);
                    this.lista_usuarios = response.data.info;
                    for (let i in this.lista_usuarios) {
                        this.lista_usuarios[i].acciones = true;
                    }
                    console.log(this.lista_usuarios);
                })
                .catch(error => {
                    console.log(error);
                });
        },
        crearUsuario() {
            if (this.validacion == true) {
                axios
                    .post("http://127.0.0.1:3001/api/v1/usuarios", this.usuarios)
                    .then(response => {
                        this.lista_usuarios.push(response.data.info);
                        this.usuarios = {
                            tipo_documento: "",
                            documento: "",
                            nombre: "",
                            apellidos: "",
                            celular: "",
                            correo: "",
                            rol: "",
                            clave: "",
                            acciones: true
                        };
                        alert("Usuario Registrado Correctamente");
                        //location.reload();
                    })
                    .catch(error => {
                        console.log(error);
                    });
            } else {
                alert("LLene todos los campos correctamente");
            }
        },
        eliminarUsuario({ item }) {
            axios
                .delete(`http://127.0.0.1:3001/api/v1/usuarios/${item.documento}`)
                .then(response => {
                    let posicion = this.lista_usuarios.findIndex(
                        lista_usuarios => lista_usuarios.documento == item.documento
                    );
                    this.lista_usuarios.splice(posicion, 1);
                    alert("Usuario Eliminado");
                })
                .catch(error => {
                    console.log(error);
                });
        },
        cargarUsuario({ item }) {
            axios
                .get(`http://127.0.0.1:3001/api/v1/usuarios/${item.documento}`)
                .then(response => {
                    var array = response.data.info;
                  
                    this.enEdicion = true;
                    this.usuarios.tipo_documento= array[0].tipo_documento;
                    this.usuarios.documento = array[0].documento;
                    this.usuarios.nombre = array[0].nombre;
                    this.usuarios.apellidos = array[0].apellidos;
                    this.usuarios.celular = array[0].celular;
                    this.usuarios.correo = array[0].correo;
                    this.usuarios.rol = array[0].rol;
                    this.usuarios.clave = array[0].clave;
                    this.usuarios.acciones = true;
                })
                .catch(error => {
                    console.log(error);
                });
        },
        actualizarUsuario() {
            if (this.validacion == true) {
                axios
                    .put(
                        `http://127.0.0.1:3001/api/v1/motos/${this.usuarios.documento}`,
                        this.motos
                    )
                    .then(response => {
                        let posicion = this.lista_usuarios.findIndex(
                            usuarios => usuarios.documento == this.usuarios.documento
                        );
                        this.lista_usuarios.splice(posicion, 1, this.usuarios);
                        this.enEdicion = false;
                        this.usuarios = {
                            tipo_documento: "",
                            documento: "",
                            nombre: "",
                            apellidos: "",
                            celular: "",
                            correo: "",
                            rol: "",
                            clave: "",
                            acciones: true
                        };
                        alert("Usuario Actualizado Correctamente");
                    })
                    .catch(error => {
                        console.log(error);
                    });
            } else {
                alert("LLene todos los campos correctamente");
            }
        }
    }
};