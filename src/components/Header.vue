<script setup>
import { ref } from 'vue'
var btnMenuClicked = ref(false)
console.log(btnMenuClicked)
const clicked = () => {
  btnMenuClicked.value === false ? (btnMenuClicked.value = true) : (btnMenuClicked.value = false)
  console.log(btnMenuClicked)
}
</script>
<template>
  <div class="w-full h-auto">
    <header
      class="bg-[#FFE600] w-full flex relative justify-center h-[60px] md:h-[100px] top-0 left-0"
    >
      <div class="w-full md:w-[1540px] flex flex-col mt-0 h-[60px] md:h-[100px] justify-center">
        <div class="h-[60px] md:h-[100px] w-full justify-center flex flex-row mt-0">
          <div
            class="flex flex-col py-0 ml-2 md:ml-0 justify-center md:justify-between md:w-[140px] cursor-pointer md:py-3"
          >
            <!--Insercion de iconos en modo responsivo-->
            <img src="../assets/logomercado.png" class="visible md:hidden w-[90%]" alt="" />
            <img
              class="hidden md:visible md:flex w-0 md:w-[140px]"
              src="../images/logo_large_plus.webp"
              alt=""
            />
            <!--cierre de bloque-->
            <div class="hidden md:visible w-[140px] md:flex flex-row">
              <img class="h-auto w-[20px]" src="../assets/ubicacion.png" alt="ubicacion" />
              <p class="text-[13px] w-full cursor-pointer">Ingresa tu domicilio</p>
            </div>
          </div>
          <div
            class="flex py-3 w-full justify-between flex-col shadow-sm text-[14px] pl-3 placeholder-blue-800 placeholder-opacity-30 focus:border-blue-500 focus:ring-blue-800 focus:outline-1 focus:outline-blue-400"
          >
            <div class="flex w-full flex-row">
              <input
                class="w-fill-available h-[40px] shadow-md pl-5"
                type="text"
                placeholder="Buscar productos, marcas y mas..."
              />
              <img
                src="../images/busqueda.svg"
                class="border-l-2 p-2 cursor-pointer bg-white h-[40px]"
                alt=""
              />
            </div>

            <div class="invisible md:visible flex flex-row text-[13px] justify-center flex-wrap">
              <p class="mr-2 cursor-pointer">Categorias</p>
              <p class="mr-2 cursor-pointer">Ofertas</p>
              <p class="mr-2 cursor-pointer">Historial</p>
              <p class="mr-2 cursor-pointer">Supermercado</p>
              <p class="mr-2 cursor-pointer">Moda</p>
              <p class="mr-2 cursor-pointer">Mercado Play</p>
              <p class="mr-2 cursor-pointer">Vender</p>
              <p class="mr-2 cursor-pointer">Ayuda</p>
            </div>
          </div>
          <!--Icono de menu para el modo responsivo-->
          <div class="w-[100px] md:hidden ml-1 pl-1 flex items-center flex-row">
            <img class="w-[20px]" v-on:click="clicked" src="../assets/menu.png" alt="" />
            <img
              class="w-[20px] h-[20px] ml-1 cursor-pointer"
              src="../assets/carrito.png  "
              alt="carrito"
            />
          </div>

          <div class="hidden md:visible py-3 md:flex flex-col md:w-[380px] justify-between">
            <div>
              <img
                src="../images/disney.webp"
                class="h-auto w-fill-available cursor-pointer ml-10"
                alt=""
              />
            </div>
            <div
              class="flex flex-row w-full items-center flex-wrap justify-center ml-10 text-[13px]"
            >
              <p class="mr-2 flex cursor-pointer">Crea tu cuenta</p>
              <p class="mr-2 flex cursor-pointer">Ingresa</p>
              <p class="mr-2 flex cursor-pointer">Mis compras</p>
              <img class="w-[20px] cursor-pointer" src="../assets/carrito.png  " alt="carrito" />
            </div>
          </div>
        </div>
      </div>
    </header>
  </div>
  <div
    class="md:hidden flex w-full border-[1px] border-gray-300 border-solid"
    v-if="btnMenuClicked"
  >
    <div class="w-full">
      <div class="flex flex-row pl-10 h-[50px] w-[100vh] py-5 mt-5 hover:bg-[#F7F7F7]">
        <div class="flex justify-center items-center">
          <img
            class="w-[20px] h-[20px] flex justify-center items-center"
            src="../assets/casita.png"
            alt="home"
          />
        </div>
        <p class="text-sm flex justify-center items-center ml-5">Inicio</p>
      </div>
      <div class="flex flex-row pl-10 h-[50px] w-[100vh] py-5 hover:bg-[#F7F7F7]">
        <div class="flex justify-center items-center">
          <img
            class="w-[20px] h-[20px] flex justify-center items-center"
            src="../assets/notificacion.png"
            alt="home"
          />
        </div>
        <p class="text-sm flex justify-center items-center ml-5">Notificaciones</p>
      </div>
      <div class="flex flex-row pl-10 h-[50px] w-[100vh] py-5 hover:bg-[#F7F7F7]">
        <div class="flex justify-center items-center">
          <img
            class="w-[20px] h-[20px] flex justify-center items-center"
            src="../assets/tienda.png"
            alt="home"
          />
        </div>
        <p class="text-sm flex justify-center items-center ml-5">Mis Compras</p>
      </div>
      <div class="flex flex-row pl-10 h-[50px] w-[100vh] py-5 hover:bg-[#F7F7F7]">
        <div class="flex justify-center items-center">
          <img
            class="w-[20px] h-[20px] flex justify-center items-center"
            src="../assets/favorito.png"
            alt="home"
          />
        </div>
        <p class="text-sm flex justify-center items-center ml-5">Favoritos</p>
      </div>
      <div class="flex flex-row pl-10 h-[50px] w-[100vh] py-5 hover:bg-[#F7F7F7]">
        <div class="flex justify-center items-center">
          <img
            class="w-[20px] h-[20px] flex justify-center items-center"
            src="../assets/etiqueta.png"
            alt="home"
          />
        </div>
        <p class="text-sm flex justify-center items-center ml-5">Ofertas</p>
      </div>
      <div class="flex flex-row pl-10 h-[50px] w-[100vh] py-5 hover:bg-[#F7F7F7]">
        <div class="flex justify-center items-center">
          <img
            class="w-[20px] h-[20px] flex justify-center items-center"
            src="../assets/adquisitivo.png"
            alt="home"
          />
        </div>
        <p class="text-sm flex justify-center items-center ml-5">Creditos</p>
      </div>
      <div class="flex flex-row pl-10 h-[50px] w-[100vh] py-5 mb-5 hover:bg-[#F7F7F7]">
        <div class="flex justify-center items-center">
          <img
            class="w-[20px] h-[20px] flex justify-center items-center"
            src="../assets/suscripcion.png"
            alt="home"
          />
        </div>
        <p class="text-sm flex justify-center items-center ml-5">Suscripciones</p>
      </div>
    </div>
  </div>
</template>
