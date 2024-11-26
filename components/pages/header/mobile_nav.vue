<template>
<!-- Mobile navbar -->
<!-- Mobile navbar -->

<nav id="sidebar">
    <div id="dismiss">
        <!-- <i class="fas fa-align-left"></i> -->
        <img src="/images/Vector_wt.svg" alt="vector_wt" width="15" height="15">
    </div>

    <div class="sidebar-header">
        <NuxtLink to="/" class="navbar-brand"><img src="/images/Logo_CureNearMe.svg" width="60" height="60" alt="Logo_CureNearMe"></NuxtLink>
    </div>
    <div class="user-profile position-relative">
        <div v-if="$auth.loggedIn">
            <h2><img src="/images/Profile_icon.svg" width="25" height="25" alt=""> {{$auth.user.data.first_name}} <NuxtLink to="/account"  class="ml-2"><img class="Edit_pen" src="/images/Edit_pen.svg" width="15" height="15" alt="Edit_pen"></NuxtLink></h2>
            <p class="address_live ovhide">{{this.address}}</p> <a href="#" class="editright add_location_class" style="font-size: 13px;text-decoration: underline;" data-bs-toggle="modal" data-bs-target="#exampleModal1" v-if="this.address != '' || this.address != null"><img src="/images/ep_arrow-down-bold.svg" alt="" srcset=""></a>
            <!-- <p class="mb-0"> <a href="#" class="editright add_location_class" style="font-size: 13px;text-decoration: underline;" data-bs-toggle="modal" data-bs-target="#exampleModal1"><img src="/images/ep_arrow-down-bold.svg" alt="" srcset=""></a></p> -->
            <!-- <p class="mb-0"> <a href="#" class="editright add_location_class" style="font-size: 13px;text-decoration: underline;" data-bs-toggle="modal" data-bs-target="#exampleModal1">Add Location</a></p> -->
        </div>
        <div class="signindiv" v-else>
            <p class="d-flex"><img src="/images/Profile_icon.svg" width="25" height="25" alt="Profile_icon" style="line-height: 0.2;">
                <NuxtLink to="/login">
                    <div class="menu-img-with-icon mb-0">
                        <span>Sign In /</span>
                    </div>
                </NuxtLink>
                <NuxtLink to="/register">
                    <div class="menu-img-with-icon mb-0">
                        <span>Sign Up</span>
                    </div>
                </NuxtLink>
            </p>
            
            <!-- <p class="address_live ovhide ">{{this.address}}33, Rahul Nagar, Bhuj - Kutch 33, Rahul Nagar, Bhuj - Kutch<img src="/images/ep_arrow-down-bold.svg" alt="ep_arrow-down-bold" height="15" width="15" id="ep_arrow-down-bold"></p> -->
            <div class="d-flex align-items-center" v-if="this.address !== null || this.address ">
                <p class="address_live ovhide">{{this.address}}
                </p>
                <a href="#" class="editright add_location_class" style="font-size: 13px;text-decoration: underline;" data-bs-toggle="modal" data-bs-target="#exampleModal1" v-if="this.address != ''"><img src="/images/ep_arrow-down-bold.svg" alt="" srcset=""></a>
            </div>
            <div class="col-md-12" v-if="this.address == null || !this.address ">
                <a href="#" class="editright add_location_class" style="font-size: 13px;text-decoration: underline;" data-bs-toggle="modal" data-bs-target="#exampleModal1">Add Location</a>
            </div>
        </div>
    </div>
    <ul class="list-unstyled components" style="overflow: auto; height: 63vh;">
        <!-- <li>
                <NuxtLink to="/"><img src="/images/fluent_home-16-regular.svg" alt="fluent_home-16-regular" width="28" height="28"> Home</NuxtLink>
              </li> -->
        <li v-if="$auth.loggedIn">
            <a href="network.html"><img src="/images/carbon_network-2.svg" alt="carbon_network" width="28" height="28"> My Network</a>
        </li>
        <li><a data-bs-toggle="modal" data-bs-target="#commingSoonModal1" href="#"><img src="/images/fluent_plug-connected-20-regular.svg" alt="fluent_plug-connected-20-regula" width="28" height="28"> Connect Provider</a></li>
        <li><a data-bs-toggle="modal" data-bs-target="#commingSoonModal1" href="#"><img src="/images/ant-design_star-outlined.svg" alt="ant-design_star-outlined" width="28" height="28"> Rate provider</a></li>
        <li><a data-bs-toggle="modal" data-bs-target="#commingSoonModal1" href="#"><img src="/images/healthicons_medicines-outline.svg" alt="healthicons_medicines-outline" width="28" height="28"> Order Medicine</a></li>
        <li><a data-bs-toggle="modal" data-bs-target="#commingSoonModal1" href="#"><img src="/images/healthicons_virus-lab-research-test-tube-outline.svg" alt="healthicons_virus-lab-research-test-tube-outline" width="28" height="28"> Lab Test Booking</a></li>
        <!-- <li><a data-bs-toggle="modal" data-bs-target="#commingSoonModal1" href="#"><img src="/images/fluent_shield-badge-20-regular.svg" alt="fluent_shield-badge-20-regular" width="28" height="28"> Refer & Earn </a></li> -->
        <li class="active " id="aboutdrop">
            <a href="#" data-toggle="collapse" aria-expanded="false">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 54 54" fill="none" class="me-3">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M26.9999 0.333374C12.2724 0.333374 0.333252 12.2723 0.333252 27C0.333252 41.7276 12.2724 53.6667 26.9999 53.6667C41.7276 53.6667 53.6666 41.7276 53.6666 27C53.6666 12.2723 41.7276 0.333374 26.9999 0.333374ZM26.9999 48.3334C15.2367 48.3334 5.66659 38.7632 5.66659 27C5.66659 15.2369 15.2367 5.66671 26.9999 5.66671C38.7633 5.66671 48.3333 15.2369 48.3333 27C48.3333 38.7632 38.7633 48.3334 26.9999 48.3334ZM30.3391 16.3334C30.3391 18.2668 28.9314 19.6667 27.027 19.6667C25.0456 19.6667 23.6724 18.2668 23.6724 16.2964C23.6724 14.4026 25.0828 13 27.027 13C28.9314 13 30.3391 14.4026 30.3391 16.3334ZM24.3391 24.3334H29.6724V40.3334H24.3391V24.3334Z" fill="#23355F" />
                </svg> About </a>
            <ul class="collapse list-unstyled" id="homeSubmenu">
                <li class="ms-3">
                    <a data-bs-toggle="modal" data-bs-target="#commingSoonModal1" href="#">Help and Support
                    </a>
                </li>
                <li class="ms-3">
                    <NuxtLink to="/aboutCureNearMe"> About Carenearme
                    </NuxtLink>
                </li>
                <li class="ms-3">
                    <NuxtLink to="/terms_conditions">Terms</NuxtLink>
                </li>
                <li class="ms-3">
                    <NuxtLink to="/privacy_policy">Privacy policy </NuxtLink>
                </li>
            </ul>
        </li>
        <li><a data-bs-toggle="modal" data-bs-target="#ContactUS" href="#"><img src="/images/fluent_contact-card-16-regular.svg" alt="fluent_contact-card-16-regular" width="28" height="28"> Contact Us</a></li>
        <li><a data-bs-toggle="modal" data-bs-target="#commingSoonModal1" href="#"><img src="/images/carbon_settings.svg" alt="carbon_settings" width="28" height="28"> Settings</a></li>

        <li v-if="$auth.loggedIn"><a href="#" @click.prevent="onLogout"><img src="/images/uiw_logout.svg" alt="uiw_logout" width="28" height="28"> Logout</a></li>
    </ul>
</nav>
</template>

  
<style>
.user-profile .svg-inline--fa {
    height: 0.9em;
    width: 0.9em;
}

a.editright {
    float: right unset !important;
    position: unset !important;

}
</style>
  
<script>
export default {

    data: () => ({
        address: null,
        longitude: null,
        lattitude: null,
    }),
    methods: {
        async onLogout() {
            this.$auth.logout();
            this.$toast.success('Logout successfully.');
        }
    },
    mounted() {
        $('.menu-img-with-icon').click(()=>{
            $("#Mobailnumbar").modal("hide");
        })
        // $('a').click(()=>{
        //     $("#Mobailnumbar").modal("hide");
        // })
        this.longitude = sessionStorage.getItem("longitude");
        this.lattitude = sessionStorage.getItem("lattitude");
        this.address = sessionStorage.getItem("address_location");

        /*if (this.lattitude == null) {
            this.longitude = this.$cookies.get("longitude");
            this.lattitude = this.$cookies.get("lattitude");
            this.address = this.$cookies.get("address");
        }*/
        $('#aboutdrop').click(function () {
            $('#homeSubmenu').toggle()
        })
        $('#ep_arrow-down-bold').click(function () {
            console.log('not show')
            $('.address_live').toggleClass('vertical')
        })
        //console.log(this.$auth.user.data.first_name)
    }

}
</script>
