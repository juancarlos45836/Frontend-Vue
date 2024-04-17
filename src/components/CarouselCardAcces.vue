<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import CardAcces from './CardAcces.vue'
import 'vue3-carousel/dist/carousel.css'
import categories from '../images/categories.svg'
import buy from '../images/buy-protected.svg'
import truck from '../images/truckgiftv4@2x.png'
import lowPrice from '../images/low-price-product.svg'
import paymentMethods from '../images/payment-methods.svg'
import registration from '../images/registration-da.svg'
import storeOfficial from '../images/store-official.svg'
import topSale from '../images/top-sale.svg'
import { Carousel, Slide } from 'vue3-carousel'
const itemToShow = ref(null)
const snapAlign = ref(null)
const resizableElement = ref(null)
const cards = {
  card1: {
    title: 'Ingresa a tu Cuenta',
    image: categories,
    description: 'Disfruta de Compras y Ofertas sin Limites',
    textFooter: 'Ingresa a tu cuenta'
  },
  card2: {
    title: 'Ingresa a tu Cuenta',
    image: buy,
    description: 'Disfruta de Compras y Ofertas sin Limites',
    textFooter: 'Ingresa a tu cuenta'
  },
  card3: {
    title: 'Ingresa a tu Cuenta',
    image: lowPrice,
    description: 'Disfruta de Compras y Ofertas sin Limites',
    textFooter: 'Ingresa a tu cuenta'
  },
  card4: {
    title: 'Ingresa a tu Cuenta',
    image: paymentMethods,
    description: 'Disfruta de Compras y Ofertas sin Limites',
    textFooter: 'Ingresa a tu cuenta'
  },
  card5: {
    title: 'Ingresa a tu Cuenta',
    image: registration,
    description: 'Disfruta de Compras y Ofertas sin Limites',
    textFooter: 'Ingresa a tu cuenta'
  },
  cad6: {
    title: 'Ingresa a tu Cuenta',
    image: storeOfficial,
    description: 'Disfruta de Compras y Ofertas sin Limites',
    textFooter: 'Ingresa a tu cuenta'
  },
  card7: {
    title: 'Ingresa a tu Cuenta',
    image: topSale,
    description: 'Disfruta de Compras y Ofertas sin Limites',
    textFooter: 'Ingresa a tu cuenta'
  },
  card8: {
    title: 'Ingresa a tu Cuenta',
    image: truck,
    description: 'Disfruta de Compras y Ofertas sin Limites',
    textFooter: 'Ingresa a tu cuenta'
  }
}

console.log('itemtoshow2', itemToShow.value)

const breakpoints = {
  // 700px and up
  400: {
    itemsToShow: 2,
    snapAlign: 'start'
  },
  650: {
    itemsToShow: 3,
    snapAlign: 'center'
  },
  1000: {
    itemsToShow: 5,
    snapAlign: 'start'
  },
  1300: {
    itemsToShow: 6,
    snapAlign: 'start'
  }
}
onMounted(() => {
  if (resizableElement.value) {
    const observer = new ResizeObserver((entries) => {
      for (let entry of entries) {
        console.log('Nuevo tamaño:', entry.contentRect.width, 'x', entry.contentRect.height)
        if (entry.contentRect.width < 400) {
          itemToShow.value = 1
          snapAlign.value = 'start'
        } else if (entry.contentRect.width > 400 && entry.contentRect.width < 650) {
          itemToShow.value = 2
          snapAlign.value = 'start'
        } else if (entry.contentRect.width > 650 && entry.contentRect.width < 1000) {
          itemToShow.value = 3
          snapAlign.value = 'start'
        } else if (entry.contentRect.width > 1000 && entry.contentRect.width < 1300) {
          itemToShow.value = 5
          snapAlign.value = 'start'
        } else if (entry.contentRect.width > 1300) {
          itemToShow.value = 6
          snapAlign.value = 'start'
        }
        console.log('itemtoshow2', itemToShow.value)
      }
    })

    observer.observe(resizableElement.value)

    // Limpiar el observador cuando el componente se desmonte
    onUnmounted(() => {
      observer.unobserve(resizableElement.value)
    })
  }
})
</script>
<template>
  <div class="w-full h-auto" ref="resizableElement">
    <Carousel
      :snap-align="snapAlign"
      :items-to-show="itemToShow"
      autoplay="2000"
      :wrap-around="true"
    >
      <Slide v-for="(card, index) in cards" :key="index">
        <div class="text-black rounded-[8px] flex justify-center items-center">
          <CardAcces :card="card"></CardAcces>
        </div>
      </Slide>
    </Carousel>
  </div>
</template>
