<template>
  <div>
    <br />
    <b-container class="bv-example-row mb-3">
      <b-row cols="3">
        <b-col>
          <!--FORMULARIO DE USUARIOS-->
          <br />
          <b-card title="usuarios">
            <b-card-text>En el taller de motos:</b-card-text>

            <b-form action="javascript:void(0)" @submit="crearUsuario()">
              <b-form-group label="Tipo Documento">
                <b-form-select v-model="usuarios.tipo_documento" class="mb-3"  :options="opciones_documentos"></b-form-select>
                <b-form-invalid-feedback :state="validacionTipo"></b-form-invalid-feedback>
              </b-form-group>

              <b-form-group label="Documento" label-for="id">
                <b-form-input
                  class="form-control"
                  type="number"
                  v-model="usuarios.documento"
                  required
                  placeholder="Ingrese Documento"
                  id="id"
                />
                <b-form-invalid-feedback :state="validacionId"></b-form-invalid-feedback>
              </b-form-group>

              <b-form-group label="Nombres" label-for="id">
                <b-form-input
                  class="form-control"
                  type="text"
                  v-model="usuarios.nombre"
                  required
                  placeholder="Nombres"
                  id="id"
                />
                <b-form-invalid-feedback :state="validacionNombre"></b-form-invalid-feedback>
              </b-form-group>

              <b-form-group label="Apellidos" label-for="id">
                <b-form-input
                  class="form-control"
                  type="text"
                  v-model="usuarios.apellidos"
                  required
                  placeholder="Apellidos"
                  id="id"
                />
                <b-form-invalid-feedback :state="validacionApellido"></b-form-invalid-feedback>
              </b-form-group>

              <b-form-group label="Celular" label-for="id">
                <b-form-input
                  class="form-control"
                  type="number"
                  v-model="usuarios.celular"
                  required
                  placeholder="Celular"
                  id="id"
                />
                <b-form-invalid-feedback :state="validacionCelular"></b-form-invalid-feedback>
              </b-form-group>

              <b-form-group label="Correo" label-for="id">
                <b-form-input
                  class="form-control"
                  type="email"
                  v-model="usuarios.correo"
                  required
                  placeholder="Correo"
                  id="id"
                />
                <b-form-invalid-feedback :state="validacionCorreo"></b-form-invalid-feedback>
              </b-form-group>

              <b-form-group label="Rol">
                <b-form-select v-model="usuarios.rol" :options="opciones_roles" required>></b-form-select>
                <b-form-invalid-feedback :state="validacionRol"></b-form-invalid-feedback>
              </b-form-group>

              <b-form-group label="Clave" label-for="id">
                <b-form-input
                  class="form-control"
                  type="text"
                  v-model="usuarios.clave"
                  required
                  placeholder="Clave"
                  id="id"
                />
                <b-form-invalid-feedback :state="validacionClave"></b-form-invalid-feedback>
              </b-form-group>

              <b-button type="submit" variant="warning" v-if="!enEdicion">Crear Usuario</b-button>
              <b-button @click="actualizarUsuario()" variant="primary" v-else>Actualizar</b-button>
            </b-form>
          </b-card>
        </b-col>
        <!--COLUMNA DE Acciones-->
        <b-col>
          <br />
          <b-table hover :items="lista_usuarios" class="border border-warning text-center">
            <template v-slot:cell(acciones)="row">
              <b-button
                size="sm"
                @click="cargarUsuario(row)"
                class="mr-2"
                variant="outline-primary"
              >
                <b-img width="20" height="20"></b-img>Modificar
              </b-button>
              <br />
              <br />
              <b-button
                size="sm"
                @click="eliminarUsuario(row)"
                class="mr-2"
                variant="outline-danger"
              >
                <b-img left width="20" height="20"></b-img>Eliminar
              </b-button>
              <br />
            </template>
          </b-table>
        </b-col>
      </b-row>
      <br />
      <br />
    </b-container>
  </div>
</template>


<script src="https://cdn.jsdelivr.net/npm/axios/dist/axios.min.js"></script>
<script src="../assets/usuarios.js"/>