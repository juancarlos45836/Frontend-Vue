<script setup></script>
<template>
  <div class="w-full h-auto">
    <header class="bg-[#FFE600] w-full flex relative justify-center h-[100px] top-0 left-0">
      <div class="w-[1540px] flex flex-col mt-0 h-[100px] justify-center">
        <div class="h-[100px] w-full justify-center flex flex-row mt-0">
          <div class="flex flex-col justify-between w-[140px] cursor-pointer py-3">
            <img class="w-[140px]" src="../images/logo_large_plus.webp" alt="" />
            <div class="w-[140px] flex flex-row">
              <img class="w-[20px]" src="../assets/ubicacion.png" alt="ubicacion" />
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

            <div class="flex flex-row text-[13px] justify-center flex-wrap">
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

          <div class="py-3 flex flex-col w-[380px] justify-between">
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
</template>
>
