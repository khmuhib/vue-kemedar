<template>
    <div>
        <div class="p-[15px]">
            <div class="py-[10px] px-[20px] bg-white rounded-md shadow w-full">
                <h1 class="mb-3 text-[19px] font-bold">Sales Brief</h1>
                <div class="grid grid-cols-2 gap-2">
                    <div class="bg-white rounded-lg border">
                        <div class="flex justify-center items-center p-[10px] gap-x-2">
                            <div class="">
                                <div
                                    class="w-[36px] h-[36px] rounded-full bg-[#FCEAEC] flex justify-center items-center">
                                    <img class="" src="../../assets/images/icon03.png" alt="">
                                </div>
                            </div>
                            <div class="font-medium dark:text-white text-left m-1 flex-1">
                                <div class="font-bold text-black text-[18px]">2456</div>
                                <div class="text-gray-500 text-[15px]">Purchase</div>
                            </div>
                        </div>

                    </div>
                    <div class="bg-white rounded-lg border">
                        <div class="flex justify-center items-center p-[10px] gap-x-2">
                            <div class="">
                                <div
                                    class="w-[36px] h-[36px] rounded-full bg-[#FCEAEC] flex justify-center items-center">
                                    <img class="" src="../../assets/images/icon03.png" alt="">
                                </div>
                            </div>
                            <div class="font-medium dark:text-white text-left m-1 flex-1">
                                <div class="font-bold text-black text-[18px]">2456</div>
                                <div class="text-gray-500 text-[15px]">Purchase</div>
                            </div>
                        </div>

                    </div>
                    <div class="bg-white rounded-lg border">
                        <div class="flex justify-center items-center p-[10px] gap-x-2">
                            <div class="">
                                <div
                                    class="w-[36px] h-[36px] rounded-full bg-[#FCEAEC] flex justify-center items-center">
                                    <img class="" src="../../assets/images/icon03.png" alt="">
                                </div>
                            </div>
                            <div class="font-medium dark:text-white text-left m-1 flex-1">
                                <div class="font-bold text-black text-[18px]">2456</div>
                                <div class="text-gray-500 text-[15px]">Purchase</div>
                            </div>
                        </div>

                    </div>
                    <div class="bg-white rounded-lg border">
                        <div class="flex justify-center items-center p-[10px] gap-x-2">
                            <div class="">
                                <div
                                    class="w-[36px] h-[36px] rounded-full bg-[#FCEAEC] flex justify-center items-center">
                                    <img class="" src="../../assets/images/icon03.png" alt="">
                                </div>
                            </div>
                            <div class="font-medium dark:text-white text-left m-1 flex-1">
                                <div class="font-bold text-black text-[18px]">2456</div>
                                <div class="text-gray-500 text-[15px]">Purchase</div>
                            </div>
                        </div>

                    </div>
                    <div class="bg-white rounded-lg border col-span-2">
                        <div class="flex justify-center items-center p-[10px] gap-x-2">
                            <div class="font-medium dark:text-white text-left m-1 flex-1">
                                <div class="font-bold text-black text-[18px]">$25,607 <span
                                        class="bg-maroon text-white text-[7px] py-1 px-2 rounded">Hot</span>
                                </div>
                                <div class="text-gray-500 text-[15px]">Purchase Order Value</div>
                            </div>
                            <div class="w-[80px] h-[80px]">
                                <DoughnutChart :chartData="testData" />
                                <div class="relative bottom-[42px] text-[13px] left-[26px]">60%</div>
                            </div>
                        </div>

                    </div>
                </div>

            </div>


        </div>
    </div>
</template>


<script>
// import DoughnutChart from './DoughnutChart.vue';
import { DoughnutChart } from 'vue-chart-3';
import { Chart, registerables } from "chart.js";

Chart.register(...registerables);


export default {
    name: "SalesBrief",
    components: { DoughnutChart },
    setup() {
        const testData = {
            // labels: ['Paris', 'Nîmes', 'Toulon', 'Perpignan', 'Autre'],
            datasets: [
                {
                    data: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
                    backgroundColor: ['#B92025', '#B92025', '#B92025', '#B92025', '#B92025', '#B92025', '#D5DCD5', '#D5DCD5', '#D5DCD5', '#D5DCD5'],
                },
            ],
        };

        return { testData };
    },
}
</script>

<style scoped>

</style>