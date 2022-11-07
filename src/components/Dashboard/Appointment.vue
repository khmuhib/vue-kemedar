<template>
    <div class="w-full p-[15px]">
        <div class="py-[10px] px-[20px] bg-white rounded-md shadow">
            <div class="flex justify-between">
                <div class="">
                    <h2 class="text-[19px] font-bold">Appointments</h2>
                </div>
                <div class="bg-[#F6F6F6]">
                    <select class="text-[12px] py-[10px] px-[15px] rounded-md">
                        <option value="" class="">Today</option>
                        <option value="" class="">Today</option>
                        <option value="" class="">Today</option>
                        <option value="" class="">Today</option>
                        <option value="" class="">Today</option>
                        <option value="" class="">Today</option>
                    </select>
                </div>
            </div>
            <div class="">
                <div class="flex justify-between gap-x-2 items-start py-[15px] border-b-2">
                    <div class="flex gap-2">
                        <img class="h-[43px] w-[43px] rounded-full" src="../../assets/images/dashboard/alert01.png"
                            alt="">
                        <div class="">
                            <h3 class="text-[15px] font-bold">John Smith</h3>
                            <p class="text-[#707070] text-[13px] font-semibold">Now
                            </p>
                        </div>
                    </div>
                    <div class="text-[#B92025] text-[15px]">28 Sept</div>

                    <button
                        class="bg-[#B92025] uppercase text-white rounded-md text-[12px] px-[8px] py-[4px]">done</button>

                </div>
                <div class="flex justify-between gap-x-2 items-start py-[15px] border-b-2">
                    <div class="flex gap-2">
                        <img class="h-[43px] w-[43px] rounded-full" src="../../assets/images/dashboard/alert01.png"
                            alt="">
                        <div class="">
                            <h3 class="text-[15px] font-bold">John Smith</h3>
                            <p class="text-[#707070] text-[13px] font-semibold">Now
                            </p>
                        </div>
                    </div>
                    <div class="text-[#B92025] text-[15px]">28 Sept</div>

                    <button
                        class="bg-[#FFC30A] uppercase text-black rounded-md text-[12px] px-[8px] py-[4px]">pending</button>

                </div>
                <div class="flex justify-between gap-x-2 items-start py-[15px] border-b-2">
                    <div class="flex gap-2">
                        <img class="h-[43px] w-[43px] rounded-full" src="../../assets/images/dashboard/alert01.png"
                            alt="">
                        <div class="">
                            <h3 class="text-[15px] font-bold">John Smith</h3>
                            <p class="text-[#707070] text-[13px] font-semibold">Now
                            </p>
                        </div>
                    </div>
                    <div class="text-[#B92025] text-[15px]">28 Sept</div>

                    <button
                        class="bg-[#B92025] uppercase text-white rounded-md text-[12px] px-[8px] py-[4px]">done</button>

                </div>
                <div class="flex justify-between gap-x-2 items-start py-[15px]">
                    <div class="flex gap-2">
                        <img class="h-[43px] w-[43px] rounded-full" src="../../assets/images/dashboard/alert01.png"
                            alt="">
                        <div class="">
                            <h3 class="text-[15px] font-bold">John Smith</h3>
                            <p class="text-[#707070] text-[13px] font-semibold">Now
                            </p>
                        </div>
                    </div>
                    <div class="text-[#B92025] text-[15px]">28 Sept</div>

                    <button
                        class="bg-[#FFC30A] uppercase text-black rounded-md text-[12px] px-[8px] py-[4px]">pending</button>

                </div>

            </div>

        </div>
    </div>
</template>

<script>


export default {
    name: 'Apointment',
    setup() {
        return {

        }
    }


}
</script>

<style scoped>

</style>