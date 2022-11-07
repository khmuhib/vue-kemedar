<template>
    <div class="w-full p-[15px]">
        <div class="py-[10px] bg-white rounded-md shadow">
            <div class="flex justify-between items-center px-[20px] py-[10px]">
                <div class="">
                    <h2 class="text-[19px] font-bold">kemedar REIT Module</h2>
                </div>
            </div>
            <div class="mt-[20px] px-[5px] group">
                <swiper :slidesPerView="'auto'" :spaceBetween="20" :modules="modules" class="mySwiper">
                    <swiper-slide>
                        <div class="bg-white border rounded-xl">
                            <div class="p-[5px]">
                                <img class="w-full h-[200px] rounded-xl"
                                    src="../../assets/images/commonDashboard/real01.png" alt="">
                            </div>
                            <div class="border-b py-[10px]">
                                <div class="flex flex-col px-[20px] gap-y-2">
                                    <h3 class="font-bold text-[18px]">Los Angeles</h3>
                                    <div class="flex items-center gap-x-2">
                                        <img class="h-[15px] w-[10px]" src="../../assets/images/commonDashboard/icon03.png" alt="">
                                        <p class="text-[#747678] font-semibold text-[12px] mt-[5px]">8706 Herrick Ave, Los Angeles</p>
                                    </div>
                                    <div class="">
                                        <div class="h-[8px] bg-black rounded-xl">
                                            <div class="h-[8px] bg-gradient-to-r from-cyan-500 to-blue-500 rounded-xl w-[65%]"></div>
                                        </div>
                                    </div>
                                    <div class="">
                                        <p class="text-[#747678] font-semibold text-[14px]">8706 Herrick Ave, Los Angeles
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div class="">
                                <div class="flex py-[10px]">
                                    <div class="w-[50%] border-gray-200 border-r-2 text-center py-[10px]">
                                        <div class="">
                                            <p class="text-[#747678] text-[13px] font-bold">Annual Return</p>
                                        </div>
                                        <div class="">
                                            <div class="flex justify-center items-center gap-x-2">
                                                <img class="h-[13px]" src="../../assets/images/commonDashboard/icon04.png" alt="">
                                                <p class="text-[#07e107] font-bold text-[13px]">80% + 90%</p>
                                            </div>
                                            
                                        </div>
                                    </div>
                                    <div class="w-[50%] text-center py-[10px]">
                                        <div class="">
                                            <p class="text-[#747678] text-[13px] font-bold">Annual Return</p>
                                        </div>
                                        <div class="">
                                            <p class="text-[#c41e1e] font-bold text-[13px]">Commercial</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="pb-[20px]">
                                <div class="flex">
                                    <div class="w-[50%]">
                                        <div class="flex justify-center items-center gap-x-2">
                                            <img class="h-[15px] w-[15px]" src="../../assets/images/commonDashboard/icon05.png" alt="">
                                            <p class="text-[14px] font-bold text-[#c41e1e]">Time Left</p>
                                        </div>
                                        <div class="text-center">
                                            <p class="text-[14px] font-bold text-[#c41e1e]">138d:09h:29m</p>
                                        </div>
                                    </div>
                                    <div class="w-[50%] flex items-center justify-center">
                                        <a class="bg-orange-400 uppercase text-[12px] text-white font-bold px-[10px] py-[2px] rounded-md" href="">Invest Now</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </swiper-slide>
                    <swiper-slide>
                        <div class="bg-white border rounded-xl">
                            <div class="p-[5px]">
                                <img class="w-full h-[200px] rounded-xl"
                                    src="../../assets/images/commonDashboard/real01.png" alt="">
                            </div>
                            <div class="border-b py-[10px]">
                                <div class="flex flex-col px-[20px] gap-y-2">
                                    <h3 class="font-bold text-[18px]">Los Angeles</h3>
                                    <div class="flex items-center gap-x-2">
                                        <img class="h-[15px] w-[10px]" src="../../assets/images/commonDashboard/icon03.png" alt="">
                                        <p class="text-[#747678] font-semibold text-[12px] mt-[5px]">8706 Herrick Ave, Los Angeles</p>
                                    </div>
                                    <div class="">
                                        <div class="h-[8px] bg-black rounded-xl">
                                            <div class="h-[8px] bg-gradient-to-r from-cyan-500 to-blue-500 rounded-xl w-[65%]"></div>
                                        </div>
                                    </div>
                                    <div class="">
                                        <p class="text-[#747678] font-semibold text-[14px]">8706 Herrick Ave, Los Angeles
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div class="">
                                <div class="flex py-[10px]">
                                    <div class="w-[50%] border-gray-200 border-r-2 text-center py-[10px]">
                                        <div class="">
                                            <p class="text-[#747678] text-[13px] font-bold">Annual Return</p>
                                        </div>
                                        <div class="">
                                            <div class="flex justify-center items-center gap-x-2">
                                                <img class="h-[13px]" src="../../assets/images/commonDashboard/icon04.png" alt="">
                                                <p class="text-[#07e107] font-bold text-[13px]">80% + 90%</p>
                                            </div>
                                            
                                        </div>
                                    </div>
                                    <div class="w-[50%] text-center py-[10px]">
                                        <div class="">
                                            <p class="text-[#747678] text-[13px] font-bold">Annual Return</p>
                                        </div>
                                        <div class="">
                                            <p class="text-[#c41e1e] font-bold text-[13px]">Commercial</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="pb-[20px]">
                                <div class="flex">
                                    <div class="w-[50%]">
                                        <div class="flex justify-center items-center gap-x-2">
                                            <img class="h-[15px] w-[15px]" src="../../assets/images/commonDashboard/icon05.png" alt="">
                                            <p class="text-[14px] font-bold text-[#c41e1e]">Time Left</p>
                                        </div>
                                        <div class="text-center">
                                            <p class="text-[14px] font-bold text-[#c41e1e]">138d:09h:29m</p>
                                        </div>
                                    </div>
                                    <div class="w-[50%] flex items-center justify-center">
                                        <a class="bg-orange-400 uppercase text-[12px] text-white font-bold px-[10px] py-[2px] rounded-md" href="">Invest Now</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </swiper-slide>
                    <swiper-slide>
                        <div class="bg-white border rounded-xl">
                            <div class="p-[5px]">
                                <img class="w-full h-[200px] rounded-xl"
                                    src="../../assets/images/commonDashboard/real01.png" alt="">
                            </div>
                            <div class="border-b py-[10px]">
                                <div class="flex flex-col px-[20px] gap-y-2">
                                    <h3 class="font-bold text-[18px]">Los Angeles</h3>
                                    <div class="flex items-center gap-x-2">
                                        <img class="h-[15px] w-[10px]" src="../../assets/images/commonDashboard/icon03.png" alt="">
                                        <p class="text-[#747678] font-semibold text-[12px] mt-[5px]">8706 Herrick Ave, Los Angeles</p>
                                    </div>
                                    <div class="">
                                        <div class="h-[8px] bg-black rounded-xl">
                                            <div class="h-[8px] bg-gradient-to-r from-cyan-500 to-blue-500 rounded-xl w-[65%]"></div>
                                        </div>
                                    </div>
                                    <div class="">
                                        <p class="text-[#747678] font-semibold text-[14px]">8706 Herrick Ave, Los Angeles
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div class="">
                                <div class="flex py-[10px]">
                                    <div class="w-[50%] border-gray-200 border-r-2 text-center py-[10px]">
                                        <div class="">
                                            <p class="text-[#747678] text-[13px] font-bold">Annual Return</p>
                                        </div>
                                        <div class="">
                                            <div class="flex justify-center items-center gap-x-2">
                                                <img class="h-[13px]" src="../../assets/images/commonDashboard/icon04.png" alt="">
                                                <p class="text-[#07e107] font-bold text-[13px]">80% + 90%</p>
                                            </div>
                                            
                                        </div>
                                    </div>
                                    <div class="w-[50%] text-center py-[10px]">
                                        <div class="">
                                            <p class="text-[#747678] text-[13px] font-bold">Annual Return</p>
                                        </div>
                                        <div class="">
                                            <p class="text-[#c41e1e] font-bold text-[13px]">Commercial</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="pb-[20px]">
                                <div class="flex">
                                    <div class="w-[50%]">
                                        <div class="flex justify-center items-center gap-x-2">
                                            <img class="h-[15px] w-[15px]" src="../../assets/images/commonDashboard/icon05.png" alt="">
                                            <p class="text-[14px] font-bold text-[#c41e1e]">Time Left</p>
                                        </div>
                                        <div class="text-center">
                                            <p class="text-[14px] font-bold text-[#c41e1e]">138d:09h:29m</p>
                                        </div>
                                    </div>
                                    <div class="w-[50%] flex items-center justify-center">
                                        <a class="bg-orange-400 uppercase text-[12px] text-white font-bold px-[10px] py-[2px] rounded-md" href="">Invest Now</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </swiper-slide>
                    <swiper-slide>
                        <div class="bg-white border rounded-xl">
                            <div class="p-[5px]">
                                <img class="w-full h-[200px] rounded-xl"
                                    src="../../assets/images/commonDashboard/real01.png" alt="">
                            </div>
                            <div class="border-b py-[10px]">
                                <div class="flex flex-col px-[20px] gap-y-2">
                                    <h3 class="font-bold text-[18px]">Los Angeles</h3>
                                    <div class="flex items-center gap-x-2">
                                        <img class="h-[15px] w-[10px]" src="../../assets/images/commonDashboard/icon03.png" alt="">
                                        <p class="text-[#747678] font-semibold text-[12px] mt-[5px]">8706 Herrick Ave, Los Angeles</p>
                                    </div>
                                    <div class="">
                                        <div class="h-[8px] bg-black rounded-xl">
                                            <div class="h-[8px] bg-gradient-to-r from-cyan-500 to-blue-500 rounded-xl w-[65%]"></div>
                                        </div>
                                    </div>
                                    <div class="">
                                        <p class="text-[#747678] font-semibold text-[14px]">8706 Herrick Ave, Los Angeles
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div class="">
                                <div class="flex py-[10px]">
                                    <div class="w-[50%] border-gray-200 border-r-2 text-center py-[10px]">
                                        <div class="">
                                            <p class="text-[#747678] text-[13px] font-bold">Annual Return</p>
                                        </div>
                                        <div class="">
                                            <div class="flex justify-center items-center gap-x-2">
                                                <img class="h-[13px]" src="../../assets/images/commonDashboard/icon04.png" alt="">
                                                <p class="text-[#07e107] font-bold text-[13px]">80% + 90%</p>
                                            </div>
                                            
                                        </div>
                                    </div>
                                    <div class="w-[50%] text-center py-[10px]">
                                        <div class="">
                                            <p class="text-[#747678] text-[13px] font-bold">Annual Return</p>
                                        </div>
                                        <div class="">
                                            <p class="text-[#c41e1e] font-bold text-[13px]">Commercial</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="pb-[20px]">
                                <div class="flex">
                                    <div class="w-[50%]">
                                        <div class="flex justify-center items-center gap-x-2">
                                            <img class="h-[15px] w-[15px]" src="../../assets/images/commonDashboard/icon05.png" alt="">
                                            <p class="text-[14px] font-bold text-[#c41e1e]">Time Left</p>
                                        </div>
                                        <div class="text-center">
                                            <p class="text-[14px] font-bold text-[#c41e1e]">138d:09h:29m</p>
                                        </div>
                                    </div>
                                    <div class="w-[50%] flex items-center justify-center">
                                        <a class="bg-orange-400 uppercase text-[12px] text-white font-bold px-[10px] py-[2px] rounded-md" href="">Invest Now</a>
                                    </div>
                                </div>
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
    name: 'Reit',
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