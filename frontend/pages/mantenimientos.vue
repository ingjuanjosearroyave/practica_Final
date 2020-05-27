<template>
  <div>
    <br />
    <b-container class="bv-example-row mb-3">
      <b-row>
        <b-col>
          <!--FORMULARIO DE USUARIOS-->
          <br />
          <b-card title="mantenimientos">
            <b-card-text>En el taller de mantenimientos:</b-card-text>

            <b-form action="javascript:void(0)" @submit="crearMantenimiento()">

               <b-form-group label="Placa" label-for="id">
                <b-form-input
                  class="form-control"
                  type="text"
                  required
                  placeholder="Ingrese Placa"
                  id="id"
                />
                <b-form-invalid-feedback :state="validacionPlaca"></b-form-invalid-feedback>
              </b-form-group>

               <b-form-group label="Placa" label-for="id">
                <b-form-input
                  class="form-control"
                  type="text"
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
                  required
                  placeholder="Ingrese Id Mecanico"
                  id="id"
                />
                <b-form-invalid-feedback :state="validacionMecanico"></b-form-invalid-feedback>
              </b-form-group>

              <b-form-group
                label-cols-sm="3"
                label="Trabajos Realizados"
                label-align-sm="right"
                label-for="comentario"
              >
                <b-form-textarea
                  id="textarea-large"
                  size="lg"
                  placeholder="Ingrese los trabajos realizados"
                ></b-form-textarea>
              </b-form-group>

              <b-form-group label="Horas Invertidas" label-for="id">
                <b-form-input
                  class="form-control"
                  type="number"
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
            :items="lista_seguimiento"
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