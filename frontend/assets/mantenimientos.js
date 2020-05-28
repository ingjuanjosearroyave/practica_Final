import axios from "axios";

export default {
    data() {
        return {
            message: "CRUD MANTENIMIENTOS",
            enEdicion: false,
            showTable: true,
            validacion: "",
            mantenimientos: {
                id_mecanico: "",
                placa: "",
                fecha: "",
                trabajos_realizados: "",
                horas_invertidas: "",
                acciones: true
            },
            lista_mantenimientos: [],
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
        this.listarMantenimientos();
    },
    computed: {
        validacionPlaca() {
            return this.validar_condicion(this.mantenimientos.placa.length > 0);
        },
        validacionMecanico() {
            return this.validar_condicion(this.mantenimientos.id_mecanico.length > 0);
        },
        validacionFecha() {
            return this.validar_condicion(this.mantenimientos.fecha.length > 0);
        },
        validacionTrabajos() {
            return this.validar_condicion(this.mantenimientos.trabajos_realizados.length > 0);
        },
        validacionHorasInvertidas() {
            return this.validar_condicion(this.mantenimientos.horas_invertidas.length > 0);
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
        listarMantenimientos() {
            axios
                .get("http://127.0.0.1:3001/api/v1/mantenimientos")
                .then(response => {
                    console.log(response);
                    this.lista_mantenimientos = response.data.info;
                    for (let i in this.lista_mantenimientos) {
                        this.lista_mantenimientos[i].acciones = true;
                    }
                    console.log(this.lista_mantenimientos);
                })
                .catch(error => {
                    console.log(error);
                });
        },
        crearMantenimiento() {
            if (this.validacion == true) {
                axios
                    .post("http://127.0.0.1:3001/api/v1/mantenimientos", this.mantenimientos)
                    .then(response => {
                        this.lista_mantenimientos.push(response.data.info);
                        this.mantenimientos = {
                            id_mecanico: "",
                            placa: "",
                            fecha: "",
                            trabajos_realizados: "",
                            horas_invertidas: "",
                            acciones: true
                        };
                        alert("Mantenimiento Registrado");
                        //location.reload();
                    })
                    .catch(error => {
                        console.log(error);
                    });
            } else {
                alert("LLene todos los campos correctamente");
            }
        },
        eliminarMantenimiento({ item }) {
            axios
                .delete(`http://127.0.0.1:3001/api/v1/mantenimientos/${item.placa}`)
                .then(response => {
                    let posicion = this.lista_mantenimientos.findIndex(
                        lista_mantenimientos => lista_mantenimientos.placa == item.placa
                    );
                    this.lista_mantenimientos.splice(posicion, 1);
                    alert("Mantenimiento Eliminado");
                })
                .catch(error => {
                    console.log(error);
                });
        },
        cargarMantenimiento({ item }) {
            axios
                .get(`http://127.0.0.1:3001/api/v1/mantenimientos/${item.placa}`)
                .then(response => {
                    var array = response.data.info;

                    this.enEdicion = true;
                    this.mantenimientos.id_mecanico = array[0].id_mecanico;
                    this.mantenimientos.placa = array[0].placa;
                    this.mantenimientos.fecha = array[0].fecha;
                    this.mantenimientos.horas_invertidas = array[0].horas_invertidas;
                    this.mantenimientos.trabajos_realizados = array[0].trabajos_realizados;
                    this.mantenimientos.acciones = true;
                })
                .catch(error => {
                    console.log(error);
                });
        },
        actualizarMantenimiento() {
            if (this.validacion == true) {
                axios
                    .put(
                        `http://127.0.0.1:3001/api/v1/mantenimientos/${this.mantenimientos.placa}`,
                        this.motos
                    )
                    .then(response => {
                        let posicion = this.lista_mantenimientos.findIndex(
                            mantenimientos => mantenimientos.placa == this.mantenimientos.placa
                        );
                        this.lista_mantenimientos.splice(posicion, 1, this.mantenimientos);
                        this.enEdicion = false;
                        this.mantenimientos = {
                            id_mecanico: "",
                            placa: "",
                            fecha: "",
                            trabajos_realizados: "",
                            horas_invertidas: "",
                            acciones: true
                        };
                        alert("Mantenimiento Actualizado Correctamente");
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