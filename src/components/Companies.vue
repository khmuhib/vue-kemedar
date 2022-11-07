<template>

    <div class="">
        <swiper :slidesPerView="'auto'" :spaceBetween="10" :modules="modules" class="mySwiper">
            <swiper-slide>
                <div class="bg-white rounded-lg m-3 h-[100px]">
                    <div class="flex justify-center items-center px-[10px] gap-x-2">
                        <div class="">
                            <div class="w-[60px] h-[60px] rounded-full bg-[#E9E9E9] flex justify-center items-center">
                                <img class="" src="../assets/images/icon03.png" alt="">
                            </div>
                        </div>
                        <div class="font-medium dark:text-white text-left m-2 flex-1">
                            <div class="maroon font-bold">4.6K</div>
                            <div class="text-[10px] font-light text-gray-500 dark:text-gray-400">Technicians & Finishing
                                companies,
                            </div>
                            <div class="pt-2">
                                <div class="w-full bg-gray-200 rounded-full h-1.5 mb-4 dark:bg-gray-700">
                                    <div class="h-1.5 rounded-full bg-maroon" style="width: 45%"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </swiper-slide>
            <swiper-slide>
                <div class="bg-white rounded-lg m-3 h-[100px]">
                    <div class="flex justify-center items-center px-[10px] gap-x-2">
                        <div class="">
                            <div class="w-[60px] h-[60px] rounded-full bg-[#E9E9E9] flex justify-center items-center">
                                <img class="" src="../assets/images/icon03.png" alt="">
                            </div>
                        </div>
                        <div class="font-medium dark:text-white text-left m-2 flex-1">
                            <div class="maroon font-bold">4.6K</div>
                            <div class="text-[12px] font-light text-gray-500 dark:text-gray-400">Technicians & Finishing
                                companies,
                            </div>
                            <div class="pt-2">
                                <div class="w-full bg-gray-200 rounded-full h-1.5 mb-4 dark:bg-gray-700">
                                    <div class="h-1.5 rounded-full bg-maroon" style="width: 45%"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </swiper-slide>
            <swiper-slide>
                <div class="bg-white rounded-lg m-3 h-[100px]">
                    <div class="flex justify-center items-center px-[10px] gap-x-2">
                        <div class="">
                            <div class="w-[60px] h-[60px] rounded-full bg-[#E9E9E9] flex justify-center items-center">
                                <img class="" src="../assets/images/icon03.png" alt="">
                            </div>
                        </div>
                        <div class="font-medium dark:text-white text-left m-2 flex-1">
                            <div class="maroon font-bold">4.6K</div>
                            <div class="text-[12px] font-light text-gray-500 dark:text-gray-400">Technicians & Finishing
                                companies,
                            </div>
                            <div class="pt-2">
                                <div class="w-full bg-gray-200 rounded-full h-1.5 mb-4 dark:bg-gray-700">
                                    <div class="h-1.5 rounded-full bg-maroon" style="width: 45%"></div>
                                </div>
                            </div>
                        </div>
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
    name: 'Companies',
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
  width: 70%;
}

</style>