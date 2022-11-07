<template>
    <div class="login_page_main">
        <div class="text-center mt-[20px]">
            <img class="block m-auto h-[135px] w-[135px]" src="../assets/images/login/logo.png" alt="">
            <h3 class="mb-[20px] font-bold mt-[50px] text-[20px]">Sign up as a Finishing Company</h3>
        </div>
        <div class="">
            <div class="px-[10px]">
                <div class="relative my-[10px]">
                    <input type="text" class="bg-transparent border-[1px] border-[#4E3E3E] py-[10px] px-[10px] placeholder:text-[#BB1F29] placeholder:font-semibold rounded-md w-full" placeholder="Full Name">
                    <img class="absolute top-[10px] right-0 h-[20px] w-[20px] mr-[10px]" src="../assets/images/login/icon01.png" alt="" />
                </div>
                <div class="relative my-[10px]">
                    <input type="text" class="bg-transparent border-[1px] border-[#4E3E3E] py-[10px] px-[10px] placeholder:text-[#BB1F29] placeholder:font-semibold rounded-md w-full" placeholder="Email Address">
                    <img class="absolute top-[10px] right-0 h-[20px] w-[20px] mr-[10px]" src="../assets/images/login/icon02.png" alt="" />
                </div>
                <div class="relative my-[10px]">
                    <input type="text" class="bg-transparent border-[1px] border-[#4E3E3E] py-[10px] px-[10px] placeholder:text-[#BB1F29] placeholder:font-semibold rounded-md w-full" placeholder="Phone Number">
                    <img class="absolute top-[10px] right-0 h-[20px] w-[20px] mr-[10px]" src="../assets/images/login/icon03.png" alt="" />
                </div>
                <div class="relative my-[10px]">
                    <input type="text" class="bg-transparent border-[1px] border-[#4E3E3E] py-[10px] px-[10px] placeholder:text-[#BB1F29] placeholder:font-semibold rounded-md w-full" placeholder="Password">
                    <img class="absolute top-[10px] right-0 h-[20px] w-[20px] mr-[10px]" src="../assets/images/login/icon04.png" alt="" />
                </div>
                <div class="text-center mt-[50px]">
                    <input type="checkbox"> I accept the Team of Service
                </div>
            </div>
        </div>
        <div class="text-center mb-[50px] px-[10px] mt-[50px]">
            <div class="mb-[10px]">
                <a class="bg-white px-[10px] py-[5px] text-[#E84E1C] text-[14px] rounded-md font-semibold ">Send activation cade to my email</a>
            </div>
            <div class="mb-[10px]">
                <a class="bg-white px-[10px] py-[5px] text-[#E84E1C] text-[14px] rounded-md font-semibold ">Send activation code by SMS</a>
            </div>
            <div class="mb-[10px]">
                <a class="bg-white px-[10px] py-[5px] text-[#E84E1C] text-[14px] rounded-md font-semibold ">Send activation code by Whartsapp</a>
            </div>
        </div>
        <div class="text-center mb-[50px]">
            <a class="bg-white px-[30px] py-[10px] text-[#E84E1C] text-[14px] rounded-md uppercase font-semibold"> {{"< "}}Back</a>
        </div>
    </div>
</template>

<script>

export default {
    name: 'SignUpAsFinishingCompanyView'

}

</script>

<style scoped>
.login_page_main {
    background-image: url('../assets/images/login/bg.png');
    background-repeat: no-repeat;
}
</style>