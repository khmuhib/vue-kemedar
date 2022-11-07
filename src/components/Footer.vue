<template>
    <div class="">
        <!-- fixed bottom-0 left-0 z-20 -->
        <footer class="w-full fixed bottom-[-5px] z-[50] bg-yellow-400">
            <ul class="flex items-center justify-between text-center py-[10px] px-[5px]">
                <li>
                    <a href="#">
                        <div class="flex-col items-center px-[8px]">
                            <img src="../assets/images/footer/find.png" alt="" class="w-[30px] h-[30px]">
                            <p class="text-[12px] uppercase">Find</p>
                        </div>
                    </a>
                </li>
                <li>
                    <a href="#">
                        <div class="flex-col items-center px-[8px]">
                            <img src="../assets/images/footer/add.png" alt="" class="w-[30px] h-[30px]">
                            <p class="text-[12px] uppercase">Find</p>
                        </div>
                    </a>
                </li>
                <li>
                    <a href="#">
                        <div class="flex-col items-center px-[8px]">
                            <img src="../assets/images/footer/invest.png" alt="" class="w-[30px] h-[30px]">
                            <p class="text-[12px] uppercase">Find</p>
                        </div>
                    </a>
                </li>
                <li>
                    <a href="#">
                        <div class="flex-col items-center px-[8px]">
                            <img src="../assets/images/footer/know.png" alt="" class="w-[30px] h-[30px]">
                            <p class="text-[12px] uppercase">Find</p>
                        </div>
                    </a>
                </li>
                <li>
                    <a href="#">
                        <div class="flex-col items-center px-[8px]">
                            <img src="../assets/images/footer/learn.png" alt="" class="w-[30px] h-[30px]">
                            <p class="text-[12px] uppercase">Find</p>
                        </div>
                    </a>
                </li>
                <li>
                    <a href="#">
                        <div class="flex-col items-center px-[8px]">
                            <img src="../assets/images/footer/connect.png" alt="" class="w-[30px] h-[30px]">
                            <p class="text-[12px] uppercase">Find</p>
                        </div>
                    </a>
                </li>
            </ul>
        </footer>

    </div>
</template>

<script>
export default {
    name: 'Footers',
    setup() {


        return {}
    }
}
</script>

<style scoped>
footer {
    border-radius: 30px 30px 0 0;
}

p {
    color: #BA2026;
}
</style>