<template>
    <div class="w-full p-[15px]">

        <div class="py-[10px] px-[20px] bg-white rounded-md shadow">

            <div class="mb-5">
                <h1 class="text-[19px] font-bold">Money & Orders</h1>
            </div>
            <div class="grid grid-cols-1">
                <div class="flex flex-wrap gap-2">
                    <button class="px-[15px] py-[5px] border-[2px]">Kemedar</button>
                    <button class="px-[15px] py-[5px] border-[2px]">Kemedar</button>
                    <button class="px-[15px] py-[5px] border-[2px]">Kemedar</button>
                    <button class="px-[15px] py-[5px] border-[2px]">Kemedar</button>
                    <button class="px-[15px] py-[5px] border-[2px]">Kemedar</button>
                </div>
            </div>
            <!-- Table start -->
            <div class="flex flex-col">
                <div class="overflow-x-auto sm:-mx-6 lg:-mx-8">
                    <div class="py-2 inline-block min-w-full sm:px-6 lg:px-8">
                        <div class="overflow-hidden">
                            <table class="min-w-full">
                                <thead class="border-b">
                                    <tr>
                                        <th scope="col" class="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                                            Series
                                        </th>
                                        <th scope="col" class="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                                            Details
                                        </th>
                                        <th scope="col" class="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                                            Amount
                                        </th>
                                        <th scope="col" class="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                                            Action
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr class="border-b">
                                        <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                                            <img class="w-[36px] h-[36px] rounded-full"
                                                src="../../assets/images/icon03.png" alt="" />
                                        </td>
                                        <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                            Order history
                                        </td>
                                        <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                            $53.1
                                        </td>
                                        <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                            <button
                                                class="bg-[#B92025] uppercase text-white rounded-md text-[12px] px-[8px] py-[4px]">view</button>

                                        </td>
                                    </tr>
                                    <tr class="bg-white border-b">
                                        <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                                            <img class="w-[36px] h-[36px] rounded-full"
                                                src="../../assets/images/icon03.png" alt="" />
                                        </td>
                                        <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                            Order history
                                        </td>
                                        <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                            $53.1
                                        </td>
                                        <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                            <button
                                                class="bg-[#B92025] uppercase text-white rounded-md text-[12px] px-[8px] py-[4px]">view</button>

                                        </td>
                                    </tr>
                                    <tr class="bg-white ">
                                        <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                                            <img class="w-[36px] h-[36px] rounded-full"
                                                src="../../assets/images/icon03.png" alt="" />
                                        </td>
                                        <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                            Order history
                                        </td>
                                        <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                            $53.1
                                        </td>
                                        <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                            <button
                                                class="bg-[#B92025] uppercase text-white rounded-md text-[12px] px-[8px] py-[4px]">view</button>

                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
            <!-- Table End -->
        </div>
    </div>
</template>

<script>
export default {
    name: 'MoneyOrders',
    setup() {


        return {}
    }
}
</script>

<style scoped>

</style>