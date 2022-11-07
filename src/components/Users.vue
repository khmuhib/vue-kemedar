<template>

    <div class="">
        <swiper :slidesPerView="'auto'" :spaceBetween="10" :modules="modules" class="mySwiper">
        <swiper-slide>
            <div class="bg-white w-full rounded-lg py-[15px] mx-3">
                <div class="flex flex-col items-center">
                    <img class="h-[30px] w-[30px]" src="../assets/images/icon05.png" alt="Bonnie image" />
                    <h5 class="text-[12px] font-bold text-black">User</h5>
                </div>
            </div>
        </swiper-slide>
        <swiper-slide>
            <div class="bg-white w-full rounded-lg py-[15px] mx-3">
                <div class="flex flex-col items-center">
                    <img class="h-[30px] w-[30px]" src="../assets/images/icon06.png" alt="Bonnie image" />
                    <h5 class="text-[12px] font-bold text-black">User</h5>
                </div>
            </div>
        </swiper-slide>
        <swiper-slide>
            <div class="bg-white w-full rounded-lg py-[15px] mx-3">
                <div class="flex flex-col items-center">
                    <img class="h-[30px] w-[30px]" src="../assets/images/icon07.png" alt="Bonnie image" />
                    <h5 class="text-[12px] font-bold text-black">User</h5>
                </div>
            </div>
        </swiper-slide>
        <swiper-slide>
            <div class="bg-white w-full rounded-lg py-[15px] mx-3">
                <div class="flex flex-col items-center">
                    <img class="h-[30px] w-[30px]" src="../assets/images/icon08.png" alt="Bonnie image" />
                    <h5 class="text-[12px] font-bold text-black">User</h5>
                </div>
            </div>
        </swiper-slide>
        <swiper-slide>
            <div class="bg-white w-full rounded-lg py-[15px] mx-3">
                <div class="flex flex-col items-center">
                    <img class="h-[30px] w-[30px]" src="../assets/images/icon05.png" alt="Bonnie image" />
                    <h5 class="text-[12px] font-bold text-black">User</h5>
                </div>
            </div>
        </swiper-slide>
        <swiper-slide>
            <div class="bg-white w-full rounded-lg py-[15px] mx-3">
                <div class="flex flex-col items-center">
                    <img class="h-[30px] w-[30px]" src="../assets/images/icon06.png" alt="Bonnie image" />
                    <h5 class="text-[12px] font-bold text-black">User</h5>
                </div>
            </div>
        </swiper-slide>
        <swiper-slide>
            <div class="bg-white w-full rounded-lg py-[15px] mx-3">
                <div class="flex flex-col items-center">
                    <img class="h-[30px] w-[30px]" src="../assets/images/icon07.png" alt="Bonnie image" />
                    <h5 class="text-[12px] font-bold text-black">User</h5>
                </div>
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

// import required modules
import { Pagination } from "swiper";
export default {
    name: 'Users',
    components: {
        Swiper,
        SwiperSlide,
    },
    setup() {
        return {
            modules: [Pagination],
        };
    },

}
</script>

<style scoped>
.maroon {
    color: #BA2026;
}

.bg-maroon {
    background-color: #BA2026;
}

.swiper-slide {
  width: 25%;
}

</style>