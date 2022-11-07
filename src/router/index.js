import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'
import ContactView from '../views/ContactView.vue'
import ServiceView from '../views/ServiceView.vue'
import FranchiseAreaOwnerDashboard from '../views/FranchiseAreaOwnerDashboard.vue'
import SignUpOptionView from '../views/SignUpOption.vue'
import SignUpAsBuyerView from '../views/SignUpAsBuyerView.vue'
import SignUpAsOwnerView from '../views/SignUpAsOwner.vue'
import SignUpAsRealEstateAgentView from '../views/SignUpAsRealEstateAgentView.vue'
import SignUpAsRealEstateDeveloperView from '../views/SignUpAsRealEstateDeveloperView.vue'
import SignUpAsFinishingCompanyView from '../views/SignUpAsFinishingCompanyView.vue'
import SignUpAsHandymanView from '../views/SignUpAsHandymanView.vue'
import SignUpAsLocalFranchiseView from '../views/SignUpAsLocalFranchiseView.vue'
import SignUpAsCountryFranchiseView from '../views/SignUpAsCountryFranchiseView.vue'
import SignUpAsInvestorView from '../views/SignUpAsInvestorView.vue'
import SignUpAsMarketerView from '../views/SignUpAsMarketerView.vue'
import SignUpAsKememanView from '../views/SignUpAsKememanView.vue'
import DashboardView from '../views/DashboardView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      component: AboutView
    },
    {
      path: '/contact',
      name: 'contact',
      component: ContactView
    },
    {
      path: '/services',
      name: 'services',
      component: ServiceView
    },
    {
      path: '/franchiseAreaOwnerDashboard',
      name: 'FranchiseAreaOwnerDashboard',
      component: FranchiseAreaOwnerDashboard
    },
    {
      path: '/sign-up-option',
      name: 'SignUpOptionView',
      component: SignUpOptionView
    },
    {
      path: '/sign-up-as-buyer',
      name: 'SignUpAsBuyerView',
      component: SignUpAsBuyerView
    },
    {
      path: '/sign-up-as-owner',
      name: 'SignUpAsOwnerView',
      component: SignUpAsOwnerView
    },
    {
      path: '/sign-up-as-real-estate-agent',
      name: 'SignUpAsRealEstateAgentView',
      component: SignUpAsRealEstateAgentView
    },
    {
      path: '/sign-up-as-real-estate-developer',
      name: 'SignUpAsRealEstateDeveloperView',
      component: SignUpAsRealEstateDeveloperView
    },
    {
      path: '/sign-up-as-handyman',
      name: 'SignUpAsHandymanView',
      component: SignUpAsHandymanView
    },
    {
      path: '/sign-up-as-finishing-company',
      name: 'SignUpAsFinishingCompanyView',
      component: SignUpAsFinishingCompanyView
    },
    {
      path: '/sign-up-as-local-franchise',
      name: 'SignUpAsLocalFranchiseView',
      component: SignUpAsLocalFranchiseView
    },
    {
      path: '/sign-up-as-country-franchise',
      name: 'SignUpAsCountryFranchiseView',
      component: SignUpAsCountryFranchiseView
    },
    {
      path: '/sign-up-as-investor',
      name: 'SignUpAsInvestorView',
      component: SignUpAsInvestorView
    },
    {
      path: '/sign-up-as-marketer',
      name: 'SignUpAsMarketerView',
      component: SignUpAsMarketerView
    },
    {
      path: '/sign-up-as-kememan',
      name: 'SignUpAsKememanView',
      component: SignUpAsKememanView
    },
    {
      path: '/dashboard',
      name: 'DashboardView',
      component: DashboardView
    },
  ]
})

export default router
