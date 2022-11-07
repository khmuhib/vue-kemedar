<template>
    <div class="w-full p-[15px]">

        <div class="py-[10px] px-[20px] bg-white rounded-md shadow">

            <div class="grid grid-cols-2">
                <div class="col-span-2 items-center pb-10 border-b-2 mb-3 text-center">
                    <h5 class="mb-1 text-xl font-medium  m-2 p-2">Account Uses Limit</h5>
                    <p class="text-ash text-xs text-center">Total property status</p>
                    <p class="text-ash text-md text-center">05</p>
                    <div class="pt-2 px-3 flex justify-center">
                        <!-- <div class="w-[50px] h-[50px] border-2 border-gray-700 rounded-full ">
                            <div class="w-[50px] h-[50px] border-2 border-maroon rounded-full"></div>
                        </div> -->
                    </div>
                </div>
                <div class="text-center">
                    <p class="text-ash text-xs">Total allowed 3</p>
                    <p class="uppercase text-maroon">O3 USED</p>

                </div>
                <div class="text-center">
                    <p class="text-ash text-xs">Total allowed 5 properties</p>
                    <p class="uppercase">03 USED</p>

                </div>
            </div>

        </div>

    </div>
</template>

<script>
export default {
    name: 'AccountUses',
    setup() {


        return {}
    }
}
</script>

<style  scoped>
.bg-maroon {
    background-color: #BA2026;
}
</style>