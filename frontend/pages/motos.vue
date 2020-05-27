<template>
  <div>
    <br />
    <b-container class="bv-example-row mb-3">
      <b-row>
        <b-col>
          <!--FORMULARIO DE USUARIOS-->
          <br />
          <b-card title="motos">
            <b-card-text>En el taller de motos:</b-card-text>

            <b-form action="javascript:void(0)" @submit="crearMoto()">

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

              <b-form-group label="Estado" label-for="id">
                <b-form-input
                  class="form-control"
                  type="text"
                  required
                  placeholder="Ingrese el estado"
                  id="id"
                />
                <b-form-invalid-feedback :state="validacionEstado"></b-form-invalid-feedback>
              </b-form-group>

              <b-form-group label="Clase" label-for="id">
                <b-form-input
                  class="form-control"
                  type="text"
                  required
                  placeholder="Ingrese la Clase"
                  id="id"
                />
                <b-form-invalid-feedback :state="validacionClase"></b-form-invalid-feedback>
              </b-form-group>

              <b-form-group label="Marca" label-for="id">
                <b-form-input
                  class="form-control"
                  type="text"
                  required
                  placeholder="Ingrese la Marca"
                  id="id"
                />
                <b-form-invalid-feedback :state="validacionMarca"></b-form-invalid-feedback>
              </b-form-group>

              <b-form-group label="Modelo" label-for="id">
                <b-form-input
                  class="form-control"
                  type="text"
                  required
                  placeholder="Ingrese el Modelo"
                  id="id"
                />
                <b-form-invalid-feedback :state="validacionModelo"></b-form-invalid-feedback>
              </b-form-group>

              <b-form-group label="Color" label-for="id">
                <b-form-input
                  class="form-control"
                  type="text"
                  required
                  placeholder="Ingrese el Color"
                  id="id"
                />
                <b-form-invalid-feedback :state="validacionColor"></b-form-invalid-feedback>
              </b-form-group>

              <b-form-group label="Cilindraje" label-for="id">
                <b-form-input
                  class="form-control"
                  type="text"
                  required
                  placeholder="Ingrese el Ciliindraje"
                  id="id"
                />
                <b-form-invalid-feedback :state="validacionCilindraje"></b-form-invalid-feedback>
              </b-form-group>

              <b-form-group label="Propiestario" label-for="id">
                <b-form-input
                  class="form-control"
                  type="number"
                  required
                  placeholder="Ingrese el Id Propietario"
                  id="id"
                />
                <b-form-invalid-feedback :state="validacionIdPropietario"></b-form-invalid-feedback>
              </b-form-group>

               <b-form-group label="Nro. Soat" label-for="id">
                <b-form-input
                  class="form-control"
                  type="number"
                  required
                  placeholder="Ingrese el Número del Soat"
                  id="id"
                />
                <b-form-invalid-feedback :state="validacionNSoat"></b-form-invalid-feedback>
              </b-form-group>

              <b-form-group label="Vencimiento Soat" label-for="id">
                <b-form-input
                  class="form-control"
                  type="text"
                  required
                  placeholder="aaaa/mm/dd"
                  id="id"
                />
                <b-form-invalid-feedback :state="validacionVencimientoSoat"></b-form-invalid-feedback>
              </b-form-group>

              <b-form-group label="Nro. Tecnomecanica" label-for="id">
                <b-form-input
                  class="form-control"
                  type="number"
                  required
                  placeholder="Ingrese el Númer de la Tecnomecanica"
                  id="id"
                />
                <b-form-invalid-feedback :state="validacionNTecnomecanica"></b-form-invalid-feedback>
              </b-form-group>

              <b-form-group label="Vencimiento Tecnomecanica" label-for="id">
                <b-form-input
                  class="form-control"
                  type="text"
                  required
                  placeholder="aaaa/mm/dd"
                  id="id"
                />
                <b-form-invalid-feedback :state="validacionVencimientoSoat"></b-form-invalid-feedback>
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
            :items="lista_seguimiento"
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