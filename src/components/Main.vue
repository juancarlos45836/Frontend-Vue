<script setup>
import CardAcces from './CardAcces.vue'
import CarouselNews from './CarouselNews.vue'
import categories from '../images/categories.svg'
import buy from '../images/buy-protected.svg'
import truck from '../images/truckgiftv4@2x.png'
import lowPrice from '../images/low-price-product.svg'
import paymentMethods from '../images/payment-methods.svg'
import registration from '../images/registration-da.svg'
import storeOfficial from '../images/store-official.svg'
import topSale from '../images/top-sale.svg'

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
</script>
<template>
  <div class="w-[100vw] bg-[#E7E7E7] h-[100vh]">
    <CarouselNews></CarouselNews>
    <CardAcces :card="cards.card1"></CardAcces>
  </div>
</template>
