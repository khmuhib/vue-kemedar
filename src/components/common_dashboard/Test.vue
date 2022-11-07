<template>
    <div class="">
        <p class="mb-4">
            <button @toggle="toggle()"
                class="inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg transition duration-150 ease-in-out"
                type="button">
                Toggle width collapse
            </button>
        </p>
        <div style="min-height: 120px;" v-show="isShow">
            <div>
                <div class="p-6 rounded-lg shadow-lg bg-white max-w-sm" style="width: 300px;">
                    This is some placeholder content for a horizontal collapse. It's hidden by default and shown
                    when triggered.
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { ref, } from 'vue';
export default {
    name: 'Test',
    setup() {
        const toggle = () => {
            isShow = !isShow
        }
        return {
            toggle,
            isShow: ref(false),
        }
    }
}
</script>

<style lang="scss" scoped>

</style>