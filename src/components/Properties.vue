<template>
    <swiper :slidesPerView="'auto'" :spaceBetween="10" :modules="modules" class="mySwiper">
        <swiper-slide>
            <div class="px-[10px]">
                <div class="flex w-full p-[10px] bg-white rounded-xl border-2 border-[#DCD6D6] shadow-sm items-center">
                    <div class="property_img h-[100px] w-[150px] grid content-between p-[5px] rounded-md bg-red-200">
                        <div class="h-[20px] flex justify-between">
                            <div class="">
                                <p
                                    class="bg-[#B82025] px-[8px] text-white uppercase rounded-sm text-center text-[12px]">
                                    Buy</p>
                            </div>
                            <div class="">
                                <img class="h-[15px] w-[18px]" src="../assets/images/icon11.png" alt="">
                            </div>
                        </div>
                        <div class="h-[20px] text-white font-semibold">EGP2,240,000</div>
                    </div>
                    <div class="w-full grid content-between px-[10px]">
                        <div class="">
                            <p class="text-[13px] font-bold">For sale - Apartments 175 M Semi...</p>
                        </div>
                        <div class="">
                            <p class="text-[#535353] text-[13px]">Locattion: New Cairo City</p>
                        </div>
                        <div class="flex gap-x-5">
                            <div class="flex gap-x-2 items-center">
                                <img class="h-[15px] w-[15px]" src="../assets/images/icon12.png" alt="">
                                <span>03</span>
                            </div>
                            <div class="flex gap-x-2 items-center">
                                <img class="h-[15px] w-[15px]" src="../assets/images/icon13.png" alt="">
                                <span>03</span>
                            </div>
                        </div>
                        <div class="">
                            <div class="flex gap-x-2 items-center">
                                <img class="h-[15px] w-[15px]" src="../assets/images/icon14.png" alt="">
                                <span>2,164Sq m</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </swiper-slide>
        <swiper-slide>
            <div class="px-[10px]">
                <div class="flex w-full p-[10px] bg-white rounded-xl border border-[#DCD6D6] shadow-sm items-center">
                    <div class="property_img h-[100px] w-[150px] grid content-between p-[5px] rounded-md">
                        <div class="h-[20px] flex justify-between">
                            <div class="">
                                <p
                                    class="bg-[#B82025] px-[8px] text-white uppercase rounded-sm text-center text-[12px]">
                                    Buy</p>
                            </div>
                            <div class="">
                                <img class="h-[15px] w-[18px]" src="../assets/images/icon11.png" alt="">
                            </div>
                        </div>
                        <div class="h-[20px] text-white font-semibold">EGP2,240,000</div>
                    </div>
                    <div class="w-full grid content-between px-[10px]">
                        <div class="">
                            <p class="text-[13px] font-bold">For sale - Apartments 175 M Semi...</p>
                        </div>
                        <div class="">
                            <p class="text-[#535353] text-[13px]">Locattion: New Cairo City</p>
                        </div>
                        <div class="flex gap-x-5">
                            <div class="flex gap-x-2 items-center">
                                <img class="h-[15px] w-[15px]" src="../assets/images/icon12.png" alt="">
                                <span>03</span>
                            </div>
                            <div class="flex gap-x-2 items-center">
                                <img class="h-[15px] w-[15px]" src="../assets/images/icon13.png" alt="">
                                <span>03</span>
                            </div>
                        </div>
                        <div class="">
                            <div class="flex gap-x-2 items-center">
                                <img class="h-[15px] w-[15px]" src="../assets/images/icon14.png" alt="">
                                <span>2,164Sq m</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </swiper-slide>
        <swiper-slide>
            <div class="px-[10px]">
                <div class="flex w-full p-[10px] bg-white rounded-xl border border-[#DCD6D6] shadow-sm items-center">
                    <div class="property_img h-[100px] w-[150px] grid content-between p-[5px] rounded-md">
                        <div class="h-[20px] flex justify-between">
                            <div class="">
                                <p
                                    class="bg-[#B82025] px-[8px] text-white uppercase rounded-sm text-center text-[12px]">
                                    Buy</p>
                            </div>
                            <div class="">
                                <img class="h-[15px] w-[18px]" src="../assets/images/icon11.png" alt="">
                            </div>
                        </div>
                        <div class="h-[20px] text-white font-semibold">EGP2,240,000</div>
                    </div>
                    <div class="w-full grid content-between px-[10px]">
                        <div class="">
                            <p class="text-[13px] font-bold">For sale - Apartments 175 M Semi...</p>
                        </div>
                        <div class="">
                            <p class="text-[#535353] text-[13px]">Locattion: New Cairo City</p>
                        </div>
                        <div class="flex gap-x-5">
                            <div class="flex gap-x-2 items-center">
                                <img class="h-[15px] w-[15px]" src="../assets/images/icon12.png" alt="">
                                <span>03</span>
                            </div>
                            <div class="flex gap-x-2 items-center">
                                <img class="h-[15px] w-[15px]" src="../assets/images/icon13.png" alt="">
                                <span>03</span>
                            </div>
                        </div>
                        <div class="">
                            <div class="flex gap-x-2 items-center">
                                <img class="h-[15px] w-[15px]" src="../assets/images/icon14.png" alt="">
                                <span>2,164Sq m</span>
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
    name: 'Properties',
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
.property_img {
    background-image: url('../assets/images/property01.png');
    background-repeat: no-repeat;
    background-position: 100% 100%;
    background-size: cover;
}

.swiper-slide {
  width: 85%;
}
</style>