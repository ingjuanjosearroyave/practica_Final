import axios from "axios";

export default {
  data() {
    return {
      message: "CRUD MOTOS",
      enEdicion: false,
      showTable: true,
     
    };
  },
  created() {
    this.listarMotos();
  },
  computed: {
    validacionId() {
      return this.validar_condicion(this.pu_tarea.id.length > 0);
    },
    validacionNombre() {
      return this.validar_condicion(this.pu_tarea.nombre.length > 0);
    },
    validaciondescripcion() {
      return this.validar_condicion(this.pu_tarea.descripcion.length > 0);
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
    listarMotos() {
     
    },
   
    crearMoto() {
     
    },
    
    eliminarMoto({ item }) {
     
    },

    cargarMoto({ item }) {
    
    },
    actualizarMoto() {
     
    }
  }
};
