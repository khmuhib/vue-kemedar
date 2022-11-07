<template>
    <div>
        <div class="p-[15px]">
            <div class="py-[10px] px-[20px] bg-white rounded-md shadow w-full">
                <h1 class="mb-3 text-[19px] font-bold">My Social Pages Activity</h1>
                <div class="grid grid-cols-2 gap-4 py-2">
                    <div class="bg-white rounded-lg border p-2">
                        <div class="grid grid-cols-2 gap-2">
                            <div class="col-span-2 flex justify-center items-center">
                                <div
                                    class="w-[43px] h-[43px] rounded-full bg-[#F6F6F6] flex justify-center items-center">
                                    <span class="fa-stack" style="font-size: 24px;">
                                        <i class="fa-brands fa-facebook fa-stack-1x" style="color: #4267B2;"></i>
                                    </span>
                                </div>
                                <p class="text-[16px] ml-2">Facebook</p>
                            </div>
                            <div class="font-medium dark:text-white text-left m-1 flex-1">
                                <div class="text-gray-500 text-[13px]">Posts</div>
                                <div class="font-bold text-black text-[18px]">2456</div>

                            </div>
                            <div class="font-medium dark:text-white text-left m-1 flex-1">
                                <div class="text-gray-500 text-[13px]">Likes</div>
                                <div class="font-bold text-black text-[18px]">2456</div>

                            </div>
                        </div>

                    </div>
                    <div class="bg-white rounded-lg border p-2">
                        <div class="grid grid-cols-2 gap-2">
                            <div class="col-span-2 flex justify-center items-center">
                                <div
                                    class="w-[43px] h-[43px] rounded-full bg-[#F6F6F6] flex justify-center items-center">
                                    <span class="fa-stack" style="font-size: 12px;">
                                        <i class="fab fa-twitter fa-stack-1x fa-inverse"
                                            style="--fa-stack-z-index: 2;"></i>
                                        <i class="fa-solid fa-circle fa-stack-2x"
                                            style="--fa-stack-z-index: 1; color: #1da1f2;"></i>
                                    </span>
                                </div>
                                <p class="text-[16px] ml-2">Twitter</p>
                            </div>
                            <div class="font-medium dark:text-white text-left m-1 flex-1">
                                <div class="text-gray-500 text-[13px]">Posts</div>
                                <div class="font-bold text-black text-[18px]">2456</div>

                            </div>
                            <div class="font-medium dark:text-white text-left m-1 flex-1">
                                <div class="text-gray-500 text-[13px]">Likes</div>
                                <div class="font-bold text-black text-[18px]">2456</div>

                            </div>
                        </div>

                    </div>
                    <div class="bg-white rounded-lg border p-2">
                        <div class="grid grid-cols-2 gap-2">
                            <div class="col-span-2 flex justify-center items-center">
                                <div
                                    class="w-[43px] h-[43px] rounded-full bg-[#F6F6F6] flex justify-center items-center">
                                    <span class="fa-stack" style="font-size: 12px;">
                                        <i class="fab fa-linkedin-in fa-stack-1x fa-inverse"
                                            style="--fa-stack-z-index: 2;"></i>
                                        <i class="fa-solid fa-circle fa-stack-2x"
                                            style="--fa-stack-z-index: 1; color:  #0077b5;"></i>
                                    </span>
                                </div>
                                <p class="text-[16px] ml-2">Linkedin</p>
                            </div>
                            <div class="font-medium dark:text-white text-left m-1 flex-1">
                                <div class="text-gray-500 text-[13px]">Posts</div>
                                <div class="font-bold text-black text-[18px]">2456</div>

                            </div>
                            <div class="font-medium dark:text-white text-left m-1 flex-1">
                                <div class="text-gray-500 text-[13px]">Likes</div>
                                <div class="font-bold text-black text-[18px]">2456</div>

                            </div>
                        </div>

                    </div>
                    <div class="bg-white rounded-lg border p-2">
                        <div class="grid grid-cols-2 gap-2">
                            <div class="col-span-2 flex justify-center items-center">
                                <div
                                    class="w-[43px] h-[43px] rounded-full bg-[#F6F6F6] flex justify-center items-center">
                                    <div class="rounded-full w-[25px] h-[25px] px-[5px]" id="instagram">
                                        <i class="fab fa-instagram " style="color: white;"></i>
                                    </div>
                                </div>
                                <p class="text-[16px] ml-2">Instagram</p>
                            </div>
                            <div class="font-medium dark:text-white text-left m-1 flex-1">
                                <div class="text-gray-500 text-[13px]">Posts</div>
                                <div class="font-bold text-black text-[18px]">2456</div>

                            </div>
                            <div class="font-medium dark:text-white text-left m-1 flex-1">
                                <div class="text-gray-500 text-[13px]">Likes</div>
                                <div class="font-bold text-black text-[18px]">2456</div>

                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'MySocialPagesActivity',
    setup() {


        return {}
    }
}
</script>

<style scoped>
#instagram {
    background-image: linear-gradient(to right, #feda75, #fa7e1e, #d62976, #962fbf, #4f5bd5);
}
</style>