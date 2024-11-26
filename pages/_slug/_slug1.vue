
<template>
   <div>
      <div class="loader" style="display: none;">
        <div class="loader-ele"></div>
    </div>
    <div class="overlay"></div>
    <div class="hero-section with-inner-page">
      <header v-if="resulttype && resulttype.provider_type != 4">
                <!-- Desktop navbar -->
                <desktopnav></desktopnav>
                <mobilenav></mobilenav>
            </header>

      <div v-if="resulttype && resulttype.provider_type == 1"> 
        <doctor></doctor>    
      </div>
      <div v-else-if="resulttype && resulttype.provider_type == 2"> 
          <nurse></nurse>
      </div>
      
      <div v-else-if="resulttype && resulttype.provider_type == 3"><input id="path_type" type="hidden" value="3">
            <!-- <h3>Loading..</h3> -->
            <div class="container wrapper-of-box p-0 " style="overflow: hidden;">

                <div class="four_and_four d-none d-sm-block">
                    <img src="/images/four_four-Lightdt.webp" alt="four_and_fourdt" width="400" height="400" class="w-100 h-100">
                    <div class="back-and-edit pl-pr pt-4">
                        <NuxtLink type="button" class="btn back-btn" to="/">
                            <img src="/images/back_btnblue.svg" width="20" height="20" alt="" />
                            Back To Home
                        </NuxtLink>
                    </div>
                </div>
                <div class="four_and_four d-block d-sm-none">
                    <img src="/images/four_four-Light.webp" alt="four_and_fourdt" width="400" height="400" class="w-100 h-100">
                    <div class="back-and-edit pl-pr pt-4">
                        <NuxtLink type="button" class="btn back-btn " to="/">
                            <img src="/images/back_btnblue.svg" width="20" height="20" alt="" />
                            Back To Home
                        </NuxtLink>
                    </div>
                </div>
            </div>
        </div>
    </div>
   </div>
</template>
<script>
   import axios from "axios";
   import doctor from '../../components/pages/doctor/doctor';
   import nurse from '../../components/pages/nurse/nurse';
   import mobilenav from "../../components/pages/header/mobile_nav";
   import desktopnav from "../../components/pages/header/desktop_nav_search";
export default {
  components:{
          doctor,
         nurse,
         mobilenav,
         desktopnav,
      },
  data: () => ({ 
            resulttype: [],
            searchresults:[],
            longitude: null,
            lattitude: null,
            slug1: '',
            slug2: '',
            provider_type:1
          }),
  mounted(){
        this.slug1 = this.$route.path.split('/')[1];
        this.slug2 = this.$route.path.split('/')[2];
        console.log(this.slug2)
        if(this.slug2 == 'Review'){
          $("#pills-home-tab").removeClass("active");
            $("#data_form").addClass("d-none");
            $(".pills-contact-tab").trigger("click");

            function isMobile() {
                return window.innerWidth <= 768;
            }
            if (isMobile()) {
                $("#pills-home-tab").removeClass("active");

                $(".pills-contact-tab2").trigger("click");
            } else {

            }        }
        this.longitude = sessionStorage.getItem("longitude");
        this.lattitude = sessionStorage.getItem("lattitude");
        if (this.lattitude == null) {
            this.longitude = this.$cookies.get("longitude");
            this.lattitude = this.$cookies.get("lattitude");
        }
       

          $('.loader').show();
          
    
              }
}

</script>