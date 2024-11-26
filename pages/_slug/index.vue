<template>
<div>
    <div class="overlay"></div>

    <div v-if="provider_type == 1">
        <div class="hero-section with-inner-page">
            <header>
                <desktopnav></desktopnav>
                <mobilenav></mobilenav>
            </header>
            <doctor></doctor>
        </div>
    </div>
    <div v-else-if="resulttype && resulttype.provider_type == 2">
        <div class="hero-section with-inner-page">
            <header>
                <desktopnav></desktopnav>
                <mobilenav></mobilenav>
            </header>
            <nurse></nurse>
        </div>
    </div>
    <div v-else-if="resulttype && resulttype.provider_type == 3"><input id="path_type" type="hidden" value="3" >
        <div class="hero-section with-inner-page">
            <header>
                <desktopnav></desktopnav>
                <mobilenav></mobilenav>
            </header>
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
import doctor from "../../components/pages/doctor/doctor";
import nurse from "../../components/pages/nurse/nurse";
import mobilenav from "../../components/pages/header/mobile_nav";
import desktopnav from "../../components/pages/header/desktop_nav_search";
export default {
    components: {
        doctor,
        nurse,
        desktopnav,
    },
    data: () => ({
        resulttype: [],
        searchresults: [],
        longitude: null,
        lattitude: null,
        slug1: "",
        slug2: "",
        provider_type: 1
    }),
    async fetch() {
        axios.get(process.env.API_BASE_URL + 'check_provider', {
            params: {
                user_name: this.slug1,
                slug2: this.slug2,
            }
        })
        .then((response) => {
            if (response.data.status == "success") {
                this.resulttype = response.data.data[0];
                sessionStorage.setItem('provider_type', this.resulttype.provider_type)
                if(this.resulttype.provider_type == 4)
                {
                    localStorage.setItem('suggestion_type', this.resulttype.suggestion_type)
                    sessionStorage.setItem("latitude", response.data.data[0].latitude);
                    sessionStorage.setItem("longitude", response.data.data[0].longitude);
                    sessionStorage.setItem("city", response.data.data[0].city);
                    sessionStorage.setItem("state", response.data.data[0].state);
                    sessionStorage.setItem("country", response.data.data[0].country);
                    sessionStorage.setItem("pincode", '');
                    sessionStorage.setItem("address_location", response.data.data[0].city+' '+response.data.data[0].state+' '+response.data.data[0].country);
                    sessionStorage.setItem("suggestion_type", response.data.data[0].suggestion_type);
                    sessionStorage.setItem("suggestion_name", response.data.data[0].suggestion_name);
                }
                
               //alert(this.resulttype.provider_type)
                } else {
                    $('.loader').hide();

                }
            })
            .catch(error => {
                console.error('Error fetching data:', error);
                $('.loader').hide();
            })
    },
    mounted() {
        this.slug1 = this.$route.path.split('/')[1];
        this.slug2 = this.$route.path.split('/')[2];
        this.longitude = sessionStorage.getItem("longitude");
        this.lattitude = sessionStorage.getItem("lattitude");
        if (this.lattitude == null) {
            this.longitude = this.$cookies.get("longitude");
            this.lattitude = this.$cookies.get("lattitude");
        }
        if (this.resulttype && this.resulttype.provider_type == 3) {
            $('.loader').hide();
            
        }
    }
};
</script>
