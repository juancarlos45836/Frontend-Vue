<script setup>
import { reactive, ref } from 'vue'
import image1 from '../images/imagen.webp'
import image2 from '../images/D_NQ_753526-MLA75624356179_042024-OO.webp'
import image3 from '../images/D_NQ_754276-MLA75466858548_042024-OO.webp'
const arrayImages = reactive([
  {
    image: image1,
    duration: 5000,
    positionImage: 0,
    index: 10,
    visible: 'visible'
  },
  {
    image: image2,
    duration: 5000,
    positionImage: 100,
    index: 20,
    visible: 'hidden'
  },
  {
    image: image3,
    duration: 0,
    positionImage: 200,
    index: 30,
    visible: 'hidden'
  },
  {
    image: image3,
    duration: 0,
    positionImage: 300,
    index: 40,
    visible: 'hidden'
  }
])

setInterval(() => {
  moveLeft()
}, 5000)

const moveLeft = () => {
  for (let index = 0; index < arrayImages.length; index++) {
    if (arrayImages[index].positionImage < 200) {
      arrayImages[index].visible = 'visible'
      arrayImages[index].duration = 5000
    } else {
      arrayImages[index].visible = 'hidden'
      arrayImages[index].duration = 0
    }

    arrayImages[index].positionImage = arrayImages[index].positionImage - 100
    if (arrayImages[index].positionImage === -200) {
      arrayImages[index].positionImage = arrayImages.length * 100 + arrayImages[index].positionImage
      arrayImages[index].visible = 'hidden'
      arrayImages[index].duration = 0
    }

    console.log('imagen', index, '=', arrayImages[index].positionImage)
  }
}
</script>

<template>
  <div class="bg-[#EBEBEB] h-[100vh] relative overflow-x-hidden w-full flex">
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
  </div>
</template>
