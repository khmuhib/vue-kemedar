<template>
    <div class="mt-[80px]">
        <swiper :spaceBetween="0" :centeredSlides="true" :autoplay="{
            delay: 2500,
            disableOnInteraction: false,
        }" :pagination="{
    clickable: true,
}" :navigation="false" :modules="modules" class="mySwiper">
            <swiper-slide>
                <div class="w-full h-auto text-center">
                    <img src="../assets/images/banner2.png" alt="" class="block m-auto h-[350px] w-full">
                    <p class="mt-[8px] mb-[20px]">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                </div>
            </swiper-slide>
            <swiper-slide>
                <div class="w-full h-auto text-center">
                    <img src="../assets/images/banner2.png" alt="" class="block m-auto h-[350px] w-full">
                    <p class="mt-[8px] mb-[20px]">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                </div>
            </swiper-slide>
            <swiper-slide>
                <div class="w-full h-auto text-center">
                    <img src="../assets/images/banner2.png" alt="" class="block m-auto h-[350px] w-full">
                    <p class="mt-[8px] mb-[20px]">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                </div>
            </swiper-slide>
            <swiper-slide>
                <div class="w-full h-auto text-center">
                    <img src="../assets/images/banner2.png" alt="" class="block m-auto h-[350px] w-full">
                    <p class="mt-[8px] mb-[20px]">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                </div>
            </swiper-slide>
        </swiper>

    </div>
</template>

<script>

// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from "swiper/vue";

// Import Swiper styles
import "swiper/css";

import "swiper/css/pagination";
import "swiper/css/navigation";

//import "./style.css";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";

export default {
    components: {
        Swiper,
        SwiperSlide,
    },
    setup() {
        return {
            modules: [ Autoplay, Pagination, Navigation],
        };
    },
};
</script>

<style lang="scss" scoped>

</style>