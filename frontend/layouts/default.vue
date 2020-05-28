<template>
  <div>
    <div>
      <b-navbar toggleable="lg" type="dark" variant="dark">
        <b-navbar-brand href=".">
          <b-img left src="@/static/images/motos.jpg" width="220" height="60"></b-img>
        </b-navbar-brand>

        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

        <b-collapse id="nav-collapse" is-nav>
          <!-- Right aligned nav items -->
          <b-navbar-nav class="ml-auto">
            <b-nav-item-dropdown text="Navegación" right>
             <b-dropdown-item class="a" href="home">Principal</b-dropdown-item>
              <b-dropdown-item class="a" href="motos">Registro de Motos</b-dropdown-item>
              <b-dropdown-item class="a" href="mantenimientos">Gestión de Mantenimientos</b-dropdown-item>
              <b-dropdown-item class="a" href="usuarios">Gestión de Usuarios</b-dropdown-item>
               <b-dropdown-item class="a" href="">Consultas</b-dropdown-item>
            </b-nav-item-dropdown>
          </b-navbar-nav>
        </b-collapse>
      </b-navbar>
    </div>
    <nuxt />
  </div>
</template>


<script>
import Vue from "vue";
import { BootstrapVue, BootstrapVueIcons } from "bootstrap-vue";
Vue.use(BootstrapVue);
Vue.use(BootstrapVueIcons);
export default {};
</script>

<style src="../css/estilos.css" />