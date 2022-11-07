<template>
  <div class="bg-[#E5E5E5]">
    <section>
      <div class="main-container">
        <Navbar />
        <Carousel />
        <Companies />
        <div class="mb-[25px]">
          <h3 class="m-3 font-bold ">Especially designed for</h3>
          <Users />
        </div>

      </div>
    </section>
    <section>
      <div class="mb-[40px]">
        <h3 class="m-3 font-bold ">Recent Properties</h3>
        <Properties />
      </div>
      <div class="mb-[40px]">
        <h3 class="m-3 font-bold ">Recent Projects</h3>
        <Properties />
      </div>
      <div class="mb-[40px]">
        <h3 class="m-3 font-bold ">Recent Handymens</h3>
        <Handymens />
      </div>
      <div class="mb-[40px]">
        <h3 class="m-3 font-bold ">Recent Agents</h3>
        <Agents />
      </div>
      <div class="mb-[40px]">
        <h3 class="m-3 font-bold ">Recent Developers</h3>
        <Developer />
      </div>
      <div class="mb-[40px]">
        <h3 class="m-3 font-bold ">Recent Finishing Companies</h3>
        <Franchise />
      </div>
      <div class="mb-[40px]">
        <h3 class="m-3 font-bold ">Recent Franchise owner areas</h3>
        <FranchiseOwner />
      </div>
      <div class="mb-[40px]">
        <h3 class="m-3 font-bold ">Recent Products</h3>
        <RecentProduct />
      </div>
      <div class="mb-[100px]">
        <h3 class="m-3 font-bold ">Recent Shops</h3>
        <RecentShop />
      </div>
    </section>
    <section>
      <div>
        <Footers />
      </div>
    </section>
  </div>

</template>

<script>
import Users from '../components/Users.vue';
import Companies from '../components/Companies.vue';
import Carousel from '../components/Carousel.vue';
import Navbar from '../components/Navbar.vue';
import Properties from '../components/Properties.vue';
import Handymens from '../components/Handymens.vue';
import Agents from '../components/Agents.vue';
import Footers from '../components/Footer.vue';
import Developer from '../components/Developer.vue';
import Franchise from '../components/Franchise.vue';
import FranchiseOwner from '../components/FranchiseOwner.vue';
import RecentProduct from '../components/RecentProduct.vue';
import RecentShop from '../components/RecentShop.vue';
export default {
  // name: 'Home',
  components: {
    Users,
    Companies,
    Carousel,
    Navbar,
    Properties,
    Handymens,
    Agents,
    Footers,
    Developer,
    Franchise,
    FranchiseOwner,
    RecentProduct,
    RecentShop,
  },
}
</script>

<style scoped>
.main-container {
  background-image: url('../assets/images/bg.png');
  padding-bottom: 5px;
  background-repeat: no-repeat;
  background-position: 100% 100%;
  background-size: cover;
}

.maroon {
  color: #BA2026;
}

.bg-maroon {
  background-color: #BA2026;
}
</style>