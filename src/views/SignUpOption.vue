<template>
    <div class="login_page_main">
        <div class="text-center mt-[20px]">
            <img class="block m-auto h-[135px] w-[135px]" src="../assets/images/login/logo.png" alt="">
            <h3 class="mb-[20px] font-bold">Sign up with</h3>
        </div>
        <div class="">
            <div class="flex justify-evenly">
                <div class="px-[50px] py-[20px] bg-[#3B589A] rounded-md"></div>
                <div class="px-[50px] py-[20px] bg-[#4099FF] rounded-md"></div>
                <div class="px-[50px] py-[20px] bg-[#E9544E] rounded-md"></div>
            </div>
        </div>
        <div class="px-[15px] my-[50px]">
            <router-link to="/sign-up-as-buyer">
                <div class="border-[1px] border-[#4E3E3E] rounded-md py-[15px] mb-[10px]">
                    <p class="text-[#BB2123] font-medium px-[20px] tracking-wide">Register as Buyer</p>
                </div>
            </router-link>

            <router-link to="/sign-up-as-owner">
                <div class="border-[1px] border-[#4E3E3E] rounded-md py-[15px] mb-[10px]">
                    <p class="text-[#BB2123] font-medium px-[20px] tracking-wide">Register as Owner</p>
                </div>
            </router-link>

            <router-link to="/sign-up-as-real-estate-agent">
                <div class="border-[1px] border-[#4E3E3E] rounded-md py-[15px] mb-[10px]">
                    <p class="text-[#BB2123] font-medium px-[20px] tracking-wide">Register as Ewal Estate Agents</p>
                </div>
            </router-link>
            <router-link to="/sign-up-as-real-estate-developer">
                <div class="border-[1px] border-[#4E3E3E] rounded-md py-[15px] mb-[10px]">
                    <p class="text-[#BB2123] font-medium px-[20px] tracking-wide">Register as Real Estate Developer</p>
                </div>
            </router-link>
            <router-link to="/sign-up-as-handyman">
                <div class="border-[1px] border-[#4E3E3E] rounded-md py-[15px] mb-[10px]">
                    <p class="text-[#BB2123] font-medium px-[20px] tracking-wide">Register as Handyman or Technician</p>
                </div>
            </router-link>
            <router-link to="/sign-up-as-finishing-company">
                <div class="border-[1px] border-[#4E3E3E] rounded-md py-[15px] mb-[10px]">
                    <p class="text-[#BB2123] font-medium px-[20px] tracking-wide">Register as Finishing Company</p>
                </div>
            </router-link>
            <router-link to="/sign-up-as-local-franchise">
                <div class="border-[1px] border-[#4E3E3E] rounded-md py-[15px] mb-[10px]">
                    <p class="text-[#BB2123] font-medium px-[20px] tracking-wide">Register as Local Franchise
                        Representative
                    </p>
                </div>
            </router-link>
            <router-link to="/sign-up-as-country-franchise">
                <div class="border-[1px] border-[#4E3E3E] rounded-md py-[15px] mb-[10px]">
                    <p class="text-[#BB2123] font-medium px-[20px] tracking-wide">Register as Country Franchise
                        Representative</p>
                </div>
            </router-link>
            <router-link to="/sign-up-as-investor">
                <div class="border-[1px] border-[#4E3E3E] rounded-md py-[15px] mb-[10px]">
                    <p class="text-[#BB2123] font-medium px-[20px] tracking-wide">Register as Investor </p>
                </div>
            </router-link>

            <router-link to="/sign-up-as-marketer">
                <div class="border-[1px] border-[#4E3E3E] rounded-md py-[15px] mb-[10px]">
                    <p class="text-[#BB2123] font-medium px-[20px] tracking-wide">Register as Marketer </p>
                </div>
            </router-link>

            <router-link to="/sign-up-as-kememan">
                <div class="border-[1px] border-[#4E3E3E] rounded-md py-[15px] mb-[10px]">
                    <p class="text-[#BB2123] font-medium px-[20px] tracking-wide">Register as Kememan </p>
                </div>
            </router-link>
        </div>
        <div class="text-center mb-[50px]">
            <a class="bg-white px-[30px] py-[10px] text-[#E84E1C] text-[18px] rounded-md uppercase font-semibold">{{ "< " }} Back</a>
        </div>
    </div>

    <router-view></router-view>
</template>

<script>

export default {

}

</script>

<style scoped>
.login_page_main {
    background-image: url('../assets/images/login/bg.png');
    background-repeat: no-repeat;
}
</style>