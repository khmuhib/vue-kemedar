<template>
    <swiper :slidesPerView="'auto'" :spaceBetween="0" :modules="modules" class="mySwiper">
        <swiper-slide>
            <div class="mx-[10px]">
                <div class="w-full bg-white rounded-xl border-2 border-[#DCD6D6] py-[15px]">
                    <div class="flex flex-col items-center">
                        <div class="bg-[#D9D9D9] rounded-full p-[30px]">
                            <img class="" src="../assets/images/icon19.png" alt="product image">
                        </div>
                        <h5 class="mb-1 text-xl font-bold text-gray-900">Location</h5>
                    </div>

                </div>
            </div>
        </swiper-slide>
        <swiper-slide>
            <div class="mx-[10px]">
                <div class="w-full bg-white rounded-xl border-2 border-[#DCD6D6] py-[15px]">
                    <div class="flex flex-col items-center">
                        <div class="bg-[#D9D9D9] rounded-full p-[30px]">
                            <img class="" src="../assets/images/icon19.png" alt="product image">
                        </div>
                        <h5 class="mb-1 text-xl font-bold text-gray-900">Location</h5>
                    </div>

                </div>
            </div>
        </swiper-slide>
        <swiper-slide>
            <div class="mx-[10px]">
                <div class="w-full bg-white rounded-xl border-2 border-[#DCD6D6] py-[15px]">
                    <div class="flex flex-col items-center">
                        <div class="bg-[#D9D9D9] rounded-full p-[30px]">
                            <img class="" src="../assets/images/icon19.png" alt="product image">
                        </div>
                        <h5 class="mb-1 text-xl font-bold text-gray-900">Location</h5>
                    </div>

                </div>
            </div>
        </swiper-slide>
    </swiper>

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
    name: 'FranchiseOwner',
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

.swiper-slide {
  width: 50%;
}

</style>