<script setup>
import { reactive, ref, onMounted, onBeforeUnmount, nextTick } from 'vue'
import { Carousel, Slide } from 'vue3-carousel'
import 'vue3-carousel/dist/carousel.css'
import image1 from '../images/imagen.webp'
import image2 from '../images/D_NQ_753526-MLA75624356179_042024-OO.webp'
import image3 from '../images/D_NQ_754276-MLA75466858548_042024-OO.webp'
import image4 from '../images/D_NQ_775725-MLA75466823050_042024-OO.webp'
import image5 from '../images/D_NQ_914495-MLA75022630140_032024-OO.webp'
import image6 from '../images/D_NQ_963244-MLA75666766491_042024-OO.webp'

import flecha from '../assets/flecha.png'
import flechaderecha from '../assets/flechaderecha.png'
const myCarousel = ref(null)
const myDiv = ref(null)
const size = ref({ height: 0 })
const arrayImages = reactive([image1, image2, image3, image4, image5, image6])
let intersectionObserver
let resizeObserver

onMounted(() => {
  intersectionObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          let image = arrayImages.find((img) => img.image === entry.target.src)
          if (image) {
            image.visible = true
          }
        }
      })
    },
    {
      rootMargin: '50px',
      threshold: 0.01
    }
  )

  arrayImages.forEach((img) => {
    intersectionObserver.observe(document.querySelector(`img[src="${img}"]`))
  })

  resizeObserver = new ResizeObserver((entries) => {
    updateHeight()
  })
  resizeObserver.observe(myDiv.value)

  updateHeight()
})
function updateHeight() {
  if (myDiv.value) {
    size.value.height = myDiv.value.offsetHeight
    console.log(size.value.height)
  }
}
console.log(size.value.height)

// Methods are available in this reference

// setInterval(() => {
//   moveLeft()
// }, 5000)

// const moveLeft = () => {
//   for (let index = 0; index < arrayImages.length; index++) {
//     if (arrayImages[index].positionImage < 200) {
//       arrayImages[index].visible = 'visible'
//       arrayImages[index].duration = 5000
//     } else {
//       arrayImages[index].visible = 'hidden'
//       arrayImages[index].duration = 0
//     }

//     arrayImages[index].positionImage = arrayImages[index].positionImage - 100
//     if (arrayImages[index].positionImage === -200) {
//       arrayImages[index].positionImage = arrayImages.length * 100 + arrayImages[index].positionImage
//       arrayImages[index].visible = 'hidden'
//       arrayImages[index].duration = 0
//     }

//     console.log('imagen', index, '=', arrayImages[index].positionImage)
//   }
// }
</script>

<template>
  <!-- <div class="bg-[#EBEBEB] h-[100vh] relative overflow-x-hidden w-full flex">
    <div class="relative flex justify-center">
      <div
        v-for="(image, index) in arrayImages"
        :key="index"
        :class="`w-[100vw] absolute top-0 left-0  flex justify-center`"
        :style="{
          transform: `translateX(${image.positionImage}%)`,
          transition: `transform 1s`
        }"
      >
        <img
          :src="image.image"
          alt="Imagen con degradado"
          class="mask"
          :style="{
            visibility: `${image.visible}`
          }"
        />
      </div>
    </div>

  </div> -->
  <div class="relative w-[100vw] gradient h-auto">
    <div class="gradient relative mask-top h-auto z-0" ref="myDiv">
      <Carousel
        class="h-auto gradient justify-center w-full items-center"
        ref="myCarousel"
        autoplay="3000"
        :wrap-around="true"
        transition="500"
        mouse-drag="true"
        touch-drag="true"
        pauseAutoplayOnHover="true"
      >
        <Slide
          class="flex justify-center w-full items-center"
          v-for="(image, index) in arrayImages"
          :key="index"
        >
          <img
            class="w-full sm:w-[100vw] mask h-auto flex justify-center items-center"
            :src="image"
            :alt="image"
          />
        </Slide>
      </Carousel>
    </div>

    <div
      class="w-[100vw] absolute top-0 left-0 flex-row items-center flex justify-between z-10"
      :style="{
        height: `${size.height}px`
      }"
    >
      <button
        class="laptop:h-[20%] w-[7%] h-[30%] laptop:w-[5%] md:w-[7%] md:h-[25%] relative z-10 top-0 right-0 shadow-lg rounded-r-full bg-white"
        @click="myCarousel.next()"
      >
        <img class="md:w-10 md:h-10 w-6 h-6 md:rl-4 mr-2" :src="flecha" alt="" />
      </button>
      <button
        class="laptop:h-[20%] laptop:w-[5%] w-[7%] h-[30%] md:w-[7%] md:h-[25%] relative z-10 top-0 left-0 shadow-lg rounded-l-full bg-white"
        @click="myCarousel.prev()"
      >
        <img class="w-6 h-6 md:w-10 md:h-10 md:ml-4 sm:ml-2 ml-1" :src="flechaderecha" alt="" />
      </button>
    </div>
  </div>
</template>

<style>
.carousel__item {
  min-height: 200px;
  width: 100vw;
  background-color: var(--vc-clr-primary);
  color: var(--vc-clr-white);
  font-size: 20px;
  display: flex;
}

.carousel__prev,
.carousel__next {
  box-sizing: content-box;
  border: 5px solid white;
}
</style>
