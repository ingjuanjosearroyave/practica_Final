import axios from "axios";

export default {
  //Asigno el layout
  layout: "login",
  data() {
    return {
      url: "http://localhost:3001/api/v1/",
      message: "INICIAR SESIÓN",
      mensaje2: "",
      usuario: {
        tipo_documento: "",
        documento: "",
        nombre: "",
        apellidos: "",
        celular: "",
        correo: "",
        rol: "",
        clave: ""
      }
    };
  },
  computed: {
    validar_id() {
      return this.usuario.documento.length > 0;
    },

    validar_clave() {
      return this.usuario.clave.length > 0;
    }
  },

  //metodos
  
  methods: {
    iniciar() {
      let url = this.url + "login";

      if (this.usuario.documento.length > 0 && this.usuario.clave.length > 0) {
        axios
          .post(url, this.usuario)
          .then(response => {
            let data = response.data;
            console.log("Data:", data);
            localStorage.setItem("token", data.info);
            localStorage.setItem("documento", this.usuario.documento);
            localStorage.setItem("rol", data.rol);
            this.$router.push("/home");
            alert("Usuario Autenticado Correctamente")
          })
          .catch(error => {
            console.log(error);
          });
      }else{
        alert("Llene todos los campos correctamente")
      }
    }
  }
};
