<template>
    <div class="">
        <div class="bg-[#e8e6ff]">
            <div>
                <!-- <Header @toggle="showModal = true" /> -->
                <Navbar/>
            </div>
            <div class="">
                <Dashboard />
            </div>
            <div>
                <GoodMorning />
            </div>
            <div class="">
                <MyActivities />
            </div>
            <div class="w-full  px-[15px]">
                <div class="bg-white py-[10px] px-[20px] rounded-md shadow ">
                    <h3 class="m-3 font-bold ">Statistics of Kemedar System</h3>
                    <Companies />
                </div>
            </div>
            <div class="">
                <Buttons />
            </div>
            <div>
                <AccountUses />
            </div>
            <div>
                <Card />
            </div>


            <!-- Alert Kemedar Start -->
            <div>
                <AlertFrom />
            </div>
            <!-- Alert Kemedar End  -->

            <!-- Appointment Start -->
            <div>
                <Appointment />
            </div>
            <!-- Appointment End -->
            <!-- Money & Orders start -->
            <div class="">
                <MoneyOrders />
            </div>
            <!-- Money & Orders end -->
            <!-- News From Kemenews Start -->
            <div>
                <News />
            </div>
            <!-- News From Kemenews End -->

            <!-- News From Kemenews Start -->
            <div>
                <Inbox />
            </div>
            <!-- News From Kemenews End -->
            <div>
                <PremiumServices />
            </div>
            <!-- kemedar Academy Module Start -->
            <div>
                <Academy />
            </div>
            <!-- kemedar Academy Module End -->

            <!-- Reit Module Start -->
            <div>
                <Reit />
            </div>
            <!-- Reit Module End -->

            <!-- kemedar Academy Module Start -->
            <div>
                <Academy />
            </div>
            <!-- kemedar Academy Module End -->
            <div class="">
                <FileManager />
            </div>
            <div class="">
                <AffiliateProgram />
            </div>
        </div>
    </div>
</template>

<script>
// import { ref, } from 'vue';
import Dashboard from '../components/common_dashboard/Dashboard.vue';
import Header from '../components/common_dashboard/Header.vue';
import GoodMorning from '../components/common_dashboard/GoodMorning.vue';
import MyActivities from '../components/common_dashboard/MyActivities.vue';
import AlertFrom from '../components/common_dashboard/AlertFrom.vue';
import Appointment from '../components/common_dashboard/Appointment.vue';
import News from '../components/common_dashboard/News.vue';
import Inbox from '../components/common_dashboard/Inbox.vue';
import PremiumServices from '../components/common_dashboard/PremiumServices.vue';
import Academy from '../components/common_dashboard/Academy.vue';
import Reit from '../components/common_dashboard/Reit.vue';
import Navbar from '../components/common_dashboard/Navbar.vue';



import AlertFromKemedar from '../components/Dashboard/AlertFromKemedar.vue';
import Companies from '@/components/common_dashboard/Companies.vue';
import AccountUses from '@/components/common_dashboard/AccountUses.vue';
import Card from '@/components/common_dashboard/Card.vue';
import MoneyOrders from '@/components/common_dashboard/MoneyOrders.vue';
import Buttons from '../components/common_dashboard/Buttons.vue';
import FileManager from '../components/common_dashboard/FileManager.vue';
import AffiliateProgram from '../components/common_dashboard/AffiliateProgram.vue';




export default {
    components: {
        Header,
        Dashboard,
        GoodMorning,
        MyActivities,
        Companies,
        AccountUses,
        Card,
        AlertFromKemedar,
        AlertFrom,
        Appointment,
        MoneyOrders,
        News,
        Inbox,
        PremiumServices,
        Academy,
        Reit,
        Buttons,
        FileManager,
        AffiliateProgram,
        Navbar,
    },
}
</script>

<style scoped>

</style>