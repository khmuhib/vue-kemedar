<template>
    <header class="w-full top-0 fixed z-[100] overflow-hidden">
        <nav class="bg-white container flex text-white mx-auto md:px-[0] px-[20px] items-center rounded py-[10px]" @click="outSideOut">
            <div className="group relative w-6 h-6 cursor-pointer flex-col justify-between items-center flex"
                @click="toggle">
                <!-- hamburger button  -->
                <span
                    class="h-[3px] w-full bg-black rounded-lg group-hover:text-red-500 cursor-pointer transform transition duration-300 ease-in-out"></span>
                <span
                    class="h-[3px] w-full bg-black rounded-lg group-hover:text-red-500 cursor-pointer transform transition duration-300 ease-in-out"></span>
                <span
                    class="h-[3px] w-full bg-black rounded-lg group-hover:text-red-500 cursor-pointer transform transition duration-300 ease-in-out"></span>
            </div>
            <div class="flex-1">
                <img src="../../assets/images/logoKemedar.png" alt="" class="w-32 ml-5">
            </div>
            <div class="flex gap-3 ml-4">
                <router-link to="/dashboard">
                    <img src="../../assets/images/icon01.png" alt="" class="w-[25px] h-[25px]">
                </router-link>
                <router-link to="/sign-up-option">
                    <img src="../../assets/images/icon02.png" alt="" class="w-[25px] h-[25px]">
                </router-link>
                
            </div>
        </nav>
    </header>
    <section class="sidenav z-[100] h-screen overflow-y-auto" v-if="show" @click="outSideOut">
        <div class="">
            <a class="text-[30px] font-bold mr-[10px] cursor-pointer" style="position: absolute; right: 5px;"
                @click="toggle">&times;</a>
            <div class="flex flex-col items-center bg-[#B92025] py-[30px] gap-y-1">
                <img class="mb-3 w-24 h-24 rounded-full shadow-lg"
                    src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/karen-nelson.png"
                    alt="Bonnie image" />
                <h3 class="font-bold text-[22px]">John Smith</h3>
                <h4 class="text-[20px]">+974 123 456 789</h4>
                <button class="bg-[#FFC50B] text-black font-bold px-[30px] py-[8px] rounded-xl">Sign In</button>
            </div>
        </div>

        <div class="bg-[#FFC50B] m-[10px] rounded-md">
            <div class="px-[15px] py-[10px]">
                <h3 class="text-[20px] text-[#B92025] font-bold">Find</h3>
                <p class="text-[18px] text-[#969595]">Find the data</p>
            </div>
        </div>
        <div class="mx-[10px]">
            <Accordion title="Properties">
                <div class="mb-[20px]">
                    <ul class="list-disc">
                        <li>Home</li>
                        <li>Home</li>
                        <li>Home</li>
                        <li>Home</li>
                        <li>Home</li>
                    </ul>
                </div>
            </Accordion>
            <Accordion title="Handymen & Professionals">
                <div class="mb-[20px]">
                    <ul class="list-disc">
                        <li>Home</li>
                        <li>Home</li>
                        <li>Home</li>
                        <li>Home</li>
                        <li>Home</li>
                    </ul>
                </div>
            </Accordion>
            <Accordion title="Projects & Compounds">
                <div class="mb-[20px]">
                    <ul class="list-disc">
                        <li>Home</li>
                        <li>Home</li>
                        <li>Home</li>
                        <li>Home</li>
                        <li>Home</li>
                    </ul>
                </div>
            </Accordion>
            <Accordion title="Agents">
                <div class="mb-[20px]">
                    <ul class="list-disc">
                        <li>Home</li>
                        <li>Home</li>
                        <li>Home</li>
                        <li>Home</li>
                        <li>Home</li>
                    </ul>
                </div>
            </Accordion>
            <Accordion title="Developers">
                <div class="mb-[20px]">
                    <ul class="list-disc">
                        <li>Home</li>
                        <li>Home</li>
                        <li>Home</li>
                        <li>Home</li>
                        <li>Home</li>
                    </ul>
                </div>
            </Accordion>
            <Accordion title="Lorem ipsum dolor">
                <div class="mb-[20px]">
                    <ul class="list-disc">
                        <li>Home</li>
                        <li>Home</li>
                        <li>Home</li>
                        <li>Home</li>
                        <li>Home</li>
                    </ul>
                </div>
            </Accordion>
            <Accordion title="Finishing Companies">
                <div class="mb-[20px]">
                    <ul class="list-disc">
                        <li>Home</li>
                        <li>Home</li>
                        <li>Home</li>
                        <li>Home</li>
                        <li>Home</li>
                    </ul>
                </div>
            </Accordion>
            <Accordion title="Properties">
                <div class="mb-[20px]">
                    <ul class="list-disc">
                        <li>Home</li>
                        <li>Home</li>
                        <li>Home</li>
                        <li>Home</li>
                        <li>Home</li>
                    </ul>
                </div>
            </Accordion>
            <Accordion title="Handymen & Professionals">
                <div class="mb-[20px]">
                    <ul class="list-disc">
                        <li>Home</li>
                        <li>Home</li>
                        <li>Home</li>
                        <li>Home</li>
                        <li>Home</li>
                    </ul>
                </div>
            </Accordion>
            <Accordion title="Projects & Compounds">
                <div class="mb-[20px]">
                    <ul class="list-disc">
                        <li>Home</li>
                        <li>Home</li>
                        <li>Home</li>
                        <li>Home</li>
                        <li>Home</li>
                    </ul>
                </div>
            </Accordion>
            <Accordion title="Agents">
                <div class="mb-[20px]">
                    <ul class="list-disc">
                        <li>Home</li>
                        <li>Home</li>
                        <li>Home</li>
                        <li>Home</li>
                        <li>Home</li>
                    </ul>
                </div>
            </Accordion>
            <Accordion title="Developers">
                <div class="mb-[20px]">
                    <ul class="list-disc">
                        <li>Home</li>
                        <li>Home</li>
                        <li>Home</li>
                        <li>Home</li>
                        <li>Home</li>
                    </ul>
                </div>
            </Accordion>
            <Accordion title="Lorem ipsum dolor">
                <div class="mb-[20px]">
                    <ul class="list-disc">
                        <li>Home</li>
                        <li>Home</li>
                        <li>Home</li>
                        <li>Home</li>
                        <li>Home</li>
                    </ul>
                </div>
            </Accordion>
            <Accordion title="Finishing Companies">
                <div class="mb-[20px]">
                    <ul class="list-disc">
                        <li>Home</li>
                        <li>Home</li>
                        <li>Home</li>
                        <li>Home</li>
                        <li>Home</li>
                    </ul>
                </div>
            </Accordion>
        </div>
    </section>
    <router-view></router-view>
</template>

<script>
import Accordion from './Accordion.vue';
export default {

    name: 'Navbar',
    components: {
        Accordion
    },
    data() {
        return {
            show: false,
        }
    },

    methods: {
        toggle() {
            this.show = !this.show
        },

        hideOrderForm() {
            this.$emit('outSideOut')
        }
    },



}
</script>

<style scoped>
.sidenav {
    background-color: black;
    color: white;
    position: absolute;
    top: 0;
    left: 0;
    width: 75%;
    min-height: 100vh;
}
</style>