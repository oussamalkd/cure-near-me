<template>
  <div>
    <div class="hero-section">
      <header>
        <desktopnav></desktopnav>
        <mobilenav></mobilenav>
      </header>
      <search_head></search_head>
      
    </div>
    <category_section></category_section>
    <category_result></category_result>
    <overview></overview>
    <testimonial></testimonial>
    <services></services>
    <footerapp></footerapp>
    <floatingbtn></floatingbtn>
  </div>
</template>
<script>
import topmenu from "./pages/header/menu";
import floatingbtn from "./floatingbtn.vue";
import mobilenav from "./pages/header/mobile_nav";
import desktopnav from "./pages/header/desktop_nav";
import search_head from "./pages/header/search";
/*import category_section from './pages/home/category_section';*/
import category_result from "./pages/home/category_result";
import overview from "./pages/home/overview";
import testimonial from "./pages/home/testimonial";
import services from "./pages/home/services";
import footerapp from "./pages/home/footerapp";
export default {
  head: {
     title: 'CureNearMe· One Stop solution for all medical needs',
     meta: [
       { name: 'description', content: 'Get Doctor, Nurse, Pharmacy, Lab, Hospital & more around you· Find & compare healthcare providers· Search by speciality, symptom, treatment, home visit & more.' },
     ],  
   },
  created() {},

  components: {
    topmenu,
    search_head,
    floatingbtn,
    mobilenav,
    desktopnav,
    /*category_section,*/
    category_result,
    overview,
    testimonial,
    services,
    footerapp,
  },
};
</script>