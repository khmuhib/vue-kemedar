<template>
    <div class="rounded-md my-2">
        <div v-on:click="isOpen = !isOpen" class="bg-[#EDEDED] text-white py-[15px] px-[10px] rounded cursor-pointer">
            
            <div class="flex items-center justify-between">
                <div class=""><img class="h-[20px] w-[20px] mr-[5px]" src="../assets/images/icon09.png" alt="" /></div>
                <div class="flex-1 ml-[5px]">
                    <h3 class="text-[#BA2026] font-bold">{{ title }}</h3>
                </div>
                <div class=""><img :class="isOpen ? 'h-[10px] w-[15px] mr-[5px]':'rotate-[-90deg]'" src="../assets/images/icon10.png" alt="" /></div>
            </div>
        </div>
        <div class="p-2 rounded mx-[30px]" :class="isOpen ? 'd-block' : 'hidden'">
            <slot></slot>
        </div>
    </div>
</template>

<script>

export default {
    name: 'Accordion',
    data() {
        return {
            isOpen: false
        }
    },
    props: {
        title: String,
    }
}

</script>

<style scoped>

</style>