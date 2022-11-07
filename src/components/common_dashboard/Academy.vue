<template>
    <div class="w-full p-[15px]">
        <div class="py-[10px] bg-white rounded-md shadow">
            <div class="flex justify-between items-center px-[20px] py-[10px]">
                <div class="">
                    <h2 class="text-[19px] font-bold">kemedar Academy Module</h2>
                </div>
            </div>
            <div class="mt-[20px] px-[5px] ">
                <swiper :slidesPerView="'auto'" :spaceBetween="20" :modules="modules" class="mySwiper">
                    <swiper-slide>
                        <div class="bg-[#F3F3F3] rounded-xl border overflow-hidden">
                            <div class="h-[150px] academy_bg relative"></div>
                            <div class="">
                                <div
                                    class="text-[#747678] text-[14px] text-center border-b-[1px] border-gray-300 py-[10px]">
                                    <span class="border-r-[1px] border-gray-600 px-[10px]">9 April 2018</span>
                                    <span class="border-r-[1px] border-gray-600 px-[10px]">by: Admin</span>
                                    <span class="px-[10px]">0 Hits</span>
                                </div>
                            </div>
                            <div class="text-center px-5 py-[15px]">
                                <h2 class="font-semibold px-[25px]">Course track one 1 with high tech</h2>
                            </div>
                        </div>
                    </swiper-slide>
                    <swiper-slide>
                        <div class="bg-[#F3F3F3] rounded-xl border overflow-hidden">
                            <div class="h-[150px] academy_bg relative"></div>
                            <div class="">
                                <div
                                    class="text-[#747678] text-[14px] text-center border-b-[1px] border-gray-300 py-[10px]">
                                    <span class="border-r-[1px] border-gray-600 px-[10px]">9 April 2018</span>
                                    <span class="border-r-[1px] border-gray-600 px-[10px]">by: Admin</span>
                                    <span class="px-[10px]">0 Hits</span>
                                </div>
                            </div>
                            <div class="text-center px-5 py-[15px]">
                                <h2 class="font-semibold px-[25px]">Course track one 1 with high tech</h2>
                            </div>
                        </div>
                    </swiper-slide>
                    <swiper-slide>
                        <div class="bg-[#F3F3F3] rounded-xl border overflow-hidden">
                            <div class="h-[150px] academy_bg relative"></div>
                            <div class="">
                                <div
                                    class="text-[#747678] text-[14px] text-center border-b-[1px] border-gray-300 py-[10px]">
                                    <span class="border-r-[1px] border-gray-600 px-[10px]">9 April 2018</span>
                                    <span class="border-r-[1px] border-gray-600 px-[10px]">by: Admin</span>
                                    <span class="px-[10px]">0 Hits</span>
                                </div>
                            </div>
                            <div class="text-center px-5 py-[15px]">
                                <h2 class="font-semibold px-[25px]">Course track one 1 with high tech</h2>
                            </div>
                        </div>
                    </swiper-slide>
                    <swiper-slide>
                        <div class="bg-[#F3F3F3] rounded-xl border overflow-hidden">
                            <div class="h-[150px] academy_bg relative"></div>
                            <div class="">
                                <div
                                    class="text-[#747678] text-[14px] text-center border-b-[1px] border-gray-300 py-[10px]">
                                    <span class="border-r-[1px] border-gray-600 px-[10px]">9 April 2018</span>
                                    <span class="border-r-[1px] border-gray-600 px-[10px]">by: Admin</span>
                                    <span class="px-[10px]">0 Hits</span>
                                </div>
                            </div>
                            <div class="text-center px-5 py-[15px]">
                                <h2 class="font-semibold px-[25px]">Course track one 1 with high tech</h2>
                            </div>
                        </div>
                    </swiper-slide>
                </swiper>

            </div>

            <div class="text-center mb-[10px] mt-[15px]">
                <a href=""
                    class="bg-white border-[2px] border-orange-400 text-orange-400 px-[15px] py-[5px] rounded-xl">See
                    More</a>
            </div>

        </div>
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
    name: 'Academy',
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
.academy_bg {
    background-image: url('../../assets/images/dashboard/good-morning.png');
    background-repeat: no-repeat;
    background-position: center center;
    background-size: contain;

}

.academy_blur {
    background-color: rgba(0, 0, 0, 0.4);
}

.swiper-slide {
    width: 80%;
}
</style>