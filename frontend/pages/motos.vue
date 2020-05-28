<template>
  <div>
    <br />
    <b-container>
      <b-row cols="2">
        <b-col>
          <!--FORMULARIO DE USUARIOS-->
          <br />
          <b-card title="Registro de Motos">
            <b-card-text>En el taller de motos:</b-card-text>

            <b-form action="javascript:void(0)" @submit="crearMoto()">

              <b-form-group label="Placa" label-for="id">
                <b-form-input
                  class="form-control"
                  type="text"
                  v-model="motos.placa"
                  required
                  placeholder="Ingrese Placa"
                  id="id"
                />
                <b-form-invalid-feedback :state="validacionPlaca"></b-form-invalid-feedback>
              </b-form-group>

              <b-form-group label="Estado" label-for="id">
                <b-form-input
                  class="form-control"
                  type="text"
                  v-model="motos.estado"
                  required
                  placeholder="Ingrese el estado"
                  id="estado"
                />
                <b-form-invalid-feedback :state="validacionEstado"></b-form-invalid-feedback>
              </b-form-group>

              <b-form-group label="Clase" label-for="id">
                <b-form-input
                  class="form-control"
                  type="text"
                  v-model="motos.clase"
                  required
                  placeholder="Ingrese la Clase"
                  id="clase"
                />
                <b-form-invalid-feedback :state="validacionClase"></b-form-invalid-feedback>
              </b-form-group>

              <b-form-group label="Marca" label-for="id">
                <b-form-input
                  class="form-control"
                  type="text"
                  v-model="motos.marca"
                  required
                  placeholder="Ingrese la Marca"
                  id="marca"
                />
                <b-form-invalid-feedback :state="validacionMarca"></b-form-invalid-feedback>
              </b-form-group>

              <b-form-group label="Modelo" label-for="id">
                <b-form-input
                  class="form-control"
                  type="text"
                  v-model="motos.modelo"
                  required
                  placeholder="Ingrese el Modelo"
                  id="modelo"
                />
                <b-form-invalid-feedback :state="validacionModelo"></b-form-invalid-feedback>
              </b-form-group>

              <b-form-group label="Color" label-for="id">
                <b-form-input
                  class="form-control"
                  type="text"
                  v-model="motos.color"
                  required
                  placeholder="Ingrese el Color"
                  id="color"
                />
                <b-form-invalid-feedback :state="validacionColor"></b-form-invalid-feedback>
              </b-form-group>

              <b-form-group label="Cilindraje" label-for="id">
                <b-form-input
                  class="form-control"
                  type="text"
                  v-model="motos.cilindraje"
                  required
                  placeholder="Ingrese el Ciliindraje"
                  id="cilindraje"
                />
                <b-form-invalid-feedback :state="validacionCilindraje"></b-form-invalid-feedback>
              </b-form-group>

              <b-form-group label="Propietario" label-for="id">
                <b-form-input
                  class="form-control"
                  type="text"
                  v-model="motos.id_propietario"
                  required
                  placeholder="Ingrese el Id Propietario"
                  id="id_propietario"
                />
                <b-form-invalid-feedback :state="validacionIdPropietario"></b-form-invalid-feedback>
              </b-form-group>

               <b-form-group label="Nro. Soat" label-for="id">
                <b-form-input
                  class="form-control"
                  type="text"
                  v-model="motos.nro_soat"
                  required
                  placeholder="Ingrese el Número del Soat"
                  id="nro_soat"
                />
                <b-form-invalid-feedback :state="validacionNSoat"></b-form-invalid-feedback>
              </b-form-group>

              <b-form-group label="Vencimiento Soat" label-for="id">
                <b-form-input
                  class="form-control"
                  type="text"
                  v-model="motos.vencimiento_soat"
                  required
                  placeholder="aaaa/mm/dd"
                  id="vencimiento_soat"
                />
                <b-form-invalid-feedback :state="validacionVencimientoSoat"></b-form-invalid-feedback>
              </b-form-group>

              <b-form-group label="Nro. Tecnomecanica" label-for="id">
                <b-form-input
                  class="form-control"
                  type="text"
                  v-model="motos.nro_tecnomecanica"
                  required
                  placeholder="Ingrese el Númer de la Tecnomecanica"
                  id="nro_tecnomecanica"
                />
                <b-form-invalid-feedback :state="validacionNTecnomecanica"></b-form-invalid-feedback>
              </b-form-group>

              <b-form-group label="Vencimiento Tecnomecanica" label-for="id">
                <b-form-input
                  class="form-control"
                  type="text"
                  v-model="motos.vencimiento_tecnomecanica"
                  required
                  placeholder="aaaa/mm/dd"
                  id="vencimiento_tecnomecanica"
                />
                <b-form-invalid-feedback :state="validacionVencimientoTecno"></b-form-invalid-feedback>
              </b-form-group>


              <b-button type="submit" variant="outline-primary" v-if="!enEdicion">Ingresar Moto</b-button>
              <b-button @click="actualizarMoto()" variant="primary" v-else>Actualizar</b-button>
            </b-form>
          </b-card>
        </b-col>
        <!--COLUMNA DE Motos-->
        <b-col>
          <br />
          <b-table
            striped
            responsive
            hover
            :items="lista_motos"
            class="border border-primary text-center"
          >
            <template v-slot:cell(acciones)="row">
              <b-button
                size="sm"
                @click="cargarMotos(row)"
                class="mr-2"
                variant="outline-primary"
              >
                <b-img width="20" height="20"></b-img>Modificar
              </b-button>
              <br />
              <br />
              <b-button
                size="sm"
                @click="eliminarMoto(row)"
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
<script src="../assets/motos.js"/>