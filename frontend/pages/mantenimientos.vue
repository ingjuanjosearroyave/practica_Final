<template>
  <div>
    <br />
    <b-container class="bv-example-row mb-3">
      <b-row>
        <b-col>
          <!--FORMULARIO DE USUARIOS-->
          <br />
          <b-card title="Gestión de Mantenimientos">
            <b-card-text>En el taller de mantenimientos:</b-card-text>

            <b-form action="javascript:void(0)" @submit="crearMantenimiento()">

               <b-form-group label="Placa" label-for="id">
                <b-form-input
                  class="form-control"
                  type="text"
                  v-model="mantenimientos.placa"
                  required
                  placeholder="Ingrese Placa"
                  id="id"
                />
                <b-form-invalid-feedback :state="validacionPlaca"></b-form-invalid-feedback>
              </b-form-group>

       
              <b-form-group label="Id Mecanico" label-for="id">
                <b-form-input
                  class="form-control"
                  type="text"
                  v-model="mantenimientos.id_mecanico"
                  required
                  placeholder="Ingrese Id Mecanico"
                  id="id"
                />
                <b-form-invalid-feedback :state="validacionMecanico"></b-form-invalid-feedback>
              </b-form-group>

              <b-form-group label="Fecha" label-for="id">
                <b-form-input
                  class="form-control"
                  type="text"
                  v-model="mantenimientos.fecha"
                  required
                  placeholder="aaaa/mm/dd"
                  id="fecha"
                />
                <b-form-invalid-feedback :state="validacionFecha"></b-form-invalid-feedback>
              </b-form-group>

               <b-form-textarea
                v-model="mantenimientos.trabajos_realizados"
                id="Comentario"
                size="lg"
                placeholder="Trabajos Realizados"
              ></b-form-textarea>
              <b-form-invalid-feedback :state="validacionTrabajos"></b-form-invalid-feedback>
              <br />

              <b-form-group label="Horas Invertidas" label-for="id">
                <b-form-input
                  class="form-control"
                  type="number"
                 v-model="mantenimientos.horas_invertidas"
                  required
                  placeholder="Ingrese las horas invertidas"
                  id="id"
                />
                <b-form-invalid-feedback :state="validacionHorasInvertidas"></b-form-invalid-feedback>
              </b-form-group>

              <b-button
                type="submit"
                variant="outline-primary"
                v-if="!enEdicion"
              >Ingresar Mantenimiento</b-button>
              <b-button @click="actualizarMantenimiento()" variant="primary" v-else>Actualizar</b-button>
            </b-form>
          </b-card>
        </b-col>
        <!--COLUMNA DE ACCIONES-->
        <b-col>
          <br />
          <b-table
            striped
            responsive
            hover
            :items="lista_mantenimientos"
            class="border border-primary text-center"
          >
            <template v-slot:cell(acciones)="row">
              <b-button
                size="sm"
                @click="cargarMantenimiento(row)"
                class="mr-2"
                variant="outline-primary"
              >
                <b-img width="20" height="20"></b-img>Modificar
              </b-button>
              <br />
              <br />
              <b-button
                size="sm"
                @click="eliminarMantenimiento(row)"
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
<script src="../assets/mantenimientos.js"/>