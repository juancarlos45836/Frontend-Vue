<script setup>
defineProps({
  card: Object
})
</script>

<template>
  <div class="w-[185px] h-[285px] rounded-md bg-white flex flex-col items-center justify-center">
    <div class="w-[185px] h-[50px] flex justify-center">
      <p class="text-[16px]">{{ card.title }}</p>
    </div>
    <div class="h-[100px] w-[185px] flex justify-center">
      <img class="h-[100px] w-[185px]" :src="card.image" alt="" />
    </div>
    <div class="h-[70px] w-[185px] flex items-center justify-center">
      <p class="w-[150px] text-[13px] text-center flex">
        {{ card.description }}
      </p>
    </div>
    <div class="h-[20px] w-[150px] rounded-md bg-[#D9E7FA] flex justify-center">
      <a
        href="https://www.mercadolibre.com.mx/ofertas?price=0.0-500.0&amp;container_id=MLM779363-1&amp;search_mode=collapsed&amp;cart_mode=default&amp;navigationcp_mode=default&amp;bar_left_button_style=back&amp;back_action=close&amp;authentication_mode=optional&amp;webkit-engine=2#da_id=low_price_products&amp;da_position=1&amp;id_origin=/home/dynamic_access&amp;da_sort_algorithm=static"
        class="text-[12px] text-[#3483fa] font-bold"
        >{{ card.textFooter }}</a
      >
    </div>
  </div>
</template>
