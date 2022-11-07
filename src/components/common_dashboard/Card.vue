<template>
    <div class="w-full p-[15px]">

        <div class="py-[10px] px-[20px] bg-white rounded-md shadow">
            <div class="flex flex-col items-center pb-2 mb-3">
                <h5 class="mb-1 text-xl font-medium text-center m-2 p-2">Kemedar Representaive In Your Area</h5>
                <img class="mb-3 w-24 h-24 rounded-full shadow-lg" src="https://mdbcdn.b-cdn.net/img/new/avatars/2.webp"
                    alt="Bonnie image"/>
                <h5 class="mb-1 text-xl font-medium ">Bonnie Green</h5>
                <span class="text-sm text-gray-500">Visual Designer</span>

                <div class="flex mt-4 space-x-3 md:mt-6">
                    <button class="bg-maroon rounded text-white py-1 px-2 uppercase font-semibold">Contact Us</button>
                </div>
                <div class="px-5">
                    <div class="flex justify-center items-center mt-2.5 gap-x-1">
                        <span class="fa-stack" style="vertical-align: top;">
                            <i class="fa-solid fa-circle fa-stack-2x" style="color: #4267B2;"></i>
                            <i class="fa-brands fa-facebook-f fa-stack-1x fa-inverse"></i>
                        </span>
                        <span class="fa-stack" style="font-size: 16px;">
                            <i class="fab fa-twitter fa-stack-1x fa-inverse" style="--fa-stack-z-index: 2;"></i>
                            <i class="fa-solid fa-circle fa-stack-2x"
                                style="--fa-stack-z-index: 1; color: #1da1f2;"></i>
                        </span>
                        <span class="rounded-full w-[32px] h-[32px] px-[8px] py-[4px]" id="instagram">
                            <i class="fab fa-instagram " style="color: white;"></i>
                        </span>
                        <span class="fa-stack" style="vertical-align: top;">
                            <i class="fa-solid fa-circle fa-stack-2x" style="color: #B92025;"></i>
                            <i class="fa-brands fa-google-plus-g fa-stack-1x fa-inverse"></i>
                        </span>
                    </div>
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

<style  scoped>
#instagram {
    background-image: linear-gradient(to right, #feda75, #fa7e1e, #d62976, #962fbf, #4f5bd5);
}
</style>