<template>
    <div class="w-full p-[15px]">

        <div class="py-[10px] px-[20px] bg-white rounded-md shadow">
            <div class="flex flex-col items-center pb-10 border-b-2 mb-3">

                <img class="mb-3 w-24 h-24 rounded-full shadow-lg" src="https://mdbcdn.b-cdn.net/img/new/avatars/2.webp"
                    alt="Bonnie image">
                <h5 class="mb-1 text-xl font-medium ">Bonnie Green</h5>
                <span class="text-sm text-gray-500">Visual Designer</span>
                <div class="px-5">
                    <div class="flex justify-center items-center mt-2.5 gap-x-1">
                        <span class="fa-stack" style="vertical-align: top; color: #B92025;">
                            <i class="fa-regular fa-circle fa-stack-2x"></i>
                            <i class="fa-brands fa-facebook-f fa-stack-1x"></i>
                        </span>
                        <span class="fa-stack" style="vertical-align: top; color: #B92025;">
                            <!-- <i class="fa-regular fa-circle fa-stack-2x"></i>
                            <i class="fa-brands fa-twitter fa-stack-1x fa-inverse"></i> -->
                            <i class="fab fa-twitter fa-stack-1x fa-inverse" style="--fa-stack-z-index: 2;"></i>
                            <i class="fa-solid fa-circle fa-stack-2x" style="--fa-stack-z-index: 1;"></i>
                        </span>
                        <span class="fa-stack" style="vertical-align: top; color: #B92025;">
                            <i class="fa-regular fa-circle fa-stack-2x"></i>
                            <i class="fa-brands fa-linkedin-in fa-stack-1x"></i>
                        </span>
                        <span class="fa-stack" style="vertical-align: top; color: #B92025;">
                            <i class="fa-regular fa-circle fa-stack-2x"></i>
                            <i class="fa-brands fa-google-plus-g fa-stack-1x"></i>
                        </span>
                    </div>
                </div>
                <div class="flex mt-4 space-x-3 md:mt-6">
                    <button class="bg-maroon rounded text-white py-1 px-2 uppercase font-semibold">Message</button>
                </div>

            </div>
            <div class="grid grid-cols-2">
                <div class="text-center">
                    <p>Call</p>
                    <p class="text-ash text-[13px]">23456765432</p>
                </div>
                <div class="text-center">
                    <p>Email</p>
                    <p class="text-ash text-[13px]">info@kemedar.com</p>
                </div>
            </div>

        </div>

    </div>
</template>

<script>
export default {
    name: 'Card',
    setup() {


        return {}
    }
}
</script>

<style lang="scss" scoped>

</style>