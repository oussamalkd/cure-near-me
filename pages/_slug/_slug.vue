
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
          
    
              },
              head() {
                return {
                    title: "Cure Near Me",
                    meta: [
                        {
                        hid: 'og:title',
                        property: 'og:title',
                        content: "Cure Near Me"
                        },
                        {
                            hid: "og:description",
                            property: "og:description",
                            content: `One Stop solutions for all medical needs`,
                        },
                        {
                            hid: 'og:image',
                            property: 'og:image',
                            content: 'data:image/webp;base64,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'// replace with your image URL
                        },
                    ]
                    
                }
              }
}

</script>