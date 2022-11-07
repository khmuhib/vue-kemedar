<template>
    <swiper :slidesPerView="'auto'" :spaceBetween="0" :modules="modules" class="mySwiper">
        <swiper-slide>
            <div class="mx-[10px]">
                <div class="w-full bg-white rounded-xl border-2 border-[#DCD6D6] py-[15px]">
                    <div class="flex flex-col items-center">
                        <a href="#">
                            <img class="mb-3 w-[70px] h-[70px]"
                                src="../assets/images/fran01.png"
                                alt="product image">
                        </a>
                        <h5 class="mb-1 text-xl font-bold text-gray-900">Company</h5>
                        <div class="px-5">
                            <div class="flex justify-center items-center mt-2.5 gap-x-2">
                                <img class="h-[25px] w-[25px]" src="../assets/images/icon16.png" alt="">
                                <img class="h-[25px] w-[25px]" src="../assets/images/icon17.png" alt="">
                                <img class="h-[25px] w-[25px]" src="../assets/images/icon15.png" alt="">
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </swiper-slide>
        <swiper-slide>
            <div class="mx-[10px]">
                <div class="w-full bg-white rounded-xl border-2 border-[#DCD6D6] py-[15px]">
                    <div class="flex flex-col items-center">
                        <a href="#">
                            <img class="mb-3 w-[70px] h-[70px]"
                                src="../assets/images/fran02.png"
                                alt="product image">
                        </a>
                        <h5 class="mb-1 text-xl font-bold text-gray-900">Company</h5>
                        <div class="px-5">
                            <div class="flex justify-center items-center mt-2.5 gap-x-2">
                                <img class="h-[25px] w-[25px]" src="../assets/images/icon16.png" alt="">
                                <img class="h-[25px] w-[25px]" src="../assets/images/icon17.png" alt="">
                                <img class="h-[25px] w-[25px]" src="../assets/images/icon15.png" alt="">
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </swiper-slide>
        <swiper-slide>
            <div class="mx-[10px]">
                <div class="w-full bg-white rounded-xl border-2 border-[#DCD6D6] py-[15px]">
                    <div class="flex flex-col items-center">
                        <a href="#">
                            <img class="mb-3 w-[70px] h-[70px]"
                                src="../assets/images/fran01.png"
                                alt="product image">
                        </a>
                        <h5 class="mb-1 text-xl font-bold text-gray-900">Company</h5>
                        <div class="px-5">
                            <div class="flex justify-center items-center mt-2.5 gap-x-2">
                                <img class="h-[25px] w-[25px]" src="../assets/images/icon16.png" alt="">
                                <img class="h-[25px] w-[25px]" src="../assets/images/icon17.png" alt="">
                                <img class="h-[25px] w-[25px]" src="../assets/images/icon15.png" alt="">
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </swiper-slide>
        <swiper-slide>
            <div class="mx-[10px]">
                <div class="w-full bg-white rounded-xl border-2 border-[#DCD6D6] py-[15px]">
                    <div class="flex flex-col items-center">
                        <a href="#">
                            <img class="mb-3 w-[70px] h-[70px]"
                                src="../assets/images/fran02.png"
                                alt="product image">
                        </a>
                        <h5 class="mb-1 text-xl font-bold text-gray-900">Company</h5>
                        <div class="px-5">
                            <div class="flex justify-center items-center mt-2.5 gap-x-2">
                                <img class="h-[25px] w-[25px]" src="../assets/images/icon16.png" alt="">
                                <img class="h-[25px] w-[25px]" src="../assets/images/icon17.png" alt="">
                                <img class="h-[25px] w-[25px]" src="../assets/images/icon15.png" alt="">
                            </div>
                        </div>
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
    name: 'RecentShop',
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