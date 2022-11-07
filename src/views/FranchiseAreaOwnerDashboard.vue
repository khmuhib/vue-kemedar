<template>
    <div class="bg-[#E5E5E5]">
        <div class="">
            <DashboardHeader />
        </div>
        <div class="">
            <GoodMorning />
        </div>
        <div class="">
            <AlertFromKemedar />
        </div>
        <div>
            <UserDetails />
        </div>
        <div class="">
            <OrderDetails />
        </div>
        <div class="">
            <TalkWithKemedar />
        </div>
        <div class="">
            <Appointment />
        </div>
        <div class="">
            <SalesBrief />
        </div>
        <div class="">
            <EmploymentStatus />
        </div>
        <div class="">
            <MySocialPagesActivity />
        </div>
        <div class="">
            <OrderList />
        </div>
        <div class="">
            <Message />
        </div>
        <div class="">
            <SupportRequest />
        </div>
        <div class="">
            <Card />
        </div>
        <div class="">
            <Buttons />
        </div>
    </div>
</template>

<script>

import DashboardHeader from './../components/Dashboard/DashboardHeader.vue'
import GoodMorning from './../components/Dashboard/GoodMorning.vue'
import AlertFromKemedar from './../components/Dashboard/AlertFromKemedar.vue'
import UserDetails from '../components/Dashboard/UserDetails.vue';
import OrderDetails from '../components/Dashboard/OrderDetails.vue';
import TalkWithKemedar from '../components/Dashboard/TalkWithKemedar.vue';
import Appointment from '../components/Dashboard/Appointment.vue';
import SalesBrief from '../components/Dashboard/SalesBrief.vue';
import EmploymentStatus from '../components/Dashboard/EmploymentStatus.vue';
import MySocialPagesActivity from '../components/Dashboard/MySocialPagesActivity.vue';
import Card from '../components/Dashboard/Card.vue';
import Buttons from '../components/Dashboard/Buttons.vue';
import Message from '../components/Dashboard/Message.vue';
import OrderList from '../components/Dashboard/OrderList.vue';
import SupportRequest from '../components/Dashboard/SupportRequest.vue';

export default {
    name: 'FranchiseAreaOwnerDashboard',

    components: {
        DashboardHeader,
        GoodMorning,
        AlertFromKemedar,
        UserDetails,
        OrderDetails,
        TalkWithKemedar,
        Appointment,
        SalesBrief,
        EmploymentStatus,
        MySocialPagesActivity,
        Card,
        Buttons,
        Message,
        OrderList,
        SupportRequest
    }



}
</script>

<style scoped>

</style>