<template>
<div class="ms-auto">
    <button type="button" id="sidebarCollapse" style="display: none" class="btn">
        <!-- <i class="fas fa-align-left"></i> -->
        <img src="/images/Vector_wt.svg" alt="vector_wt" width="15" height="15">
    </button>
    <div class="collapse navbar-collapse desktop-navbar" id="navbarSupportedContent">
        <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
            <li class="nav-item dropdown has-megamenu">
                <a class="nav-link dropdown-toggle" href="#" data-bs-toggle="dropdown">
                    <img src="/images/Appontment_Menu.svg" alt="" height="25">
                    Appointments
                </a>
                <div class="dropdown-menu megamenu" role="menu">
                    <div class="row">
                        <div class="col-md-12">
                            <div>
                                <!-- <NuxtLink to="/network"> -->
                                    <div @click="My_Appointments" style="cursor: pointer;">
                                        <!-- <NuxtLink to="#" > -->
                                            
                                            <div class="menu-img-with-icon">
                                                <span>My Appointments </span>
                                            </div>
                                        <!-- </NuxtLink> -->
                                    </div>
                                <!-- </NuxtLink> -->
                                <a data-bs-toggle="modal" data-bs-target="#commingSoonModal1" href="#">
                                    <div class="menu-img-with-icon">
                                        <span>Favorites</span>
                                    </div>
                                </a>
                                <!-- <a data-bs-toggle="modal" data-bs-target="#commingSoonModal1" href="#">
                                    <div class="menu-img-with-icon">
                                        <span>Rate Provider</span>
                                    </div>
                                </a> -->
                            </div>
                            <!-- <div v-else>
                                <a data-bs-toggle="modal" data-bs-target="#commingSoonModal1" href="#">
                                    <div class="menu-img-with-icon">
                                        <span>Connect Provider</span>
                                    </div>
                                </a>
                                <a data-bs-toggle="modal" data-bs-target="#commingSoonModal1" href="#">
                                    <div class="menu-img-with-icon">
                                        <span>Rate Provider</span>
                                    </div>
                                </a>
                            </div> -->
                        </div>
                    </div>
                    <!-- dropdown-mega-menu.// -->
                </div>
            </li>

            <li class="nav-item">

                <template v-if="this.lattitude">
                    <NuxtLink class="nav-link" :to="this.doctor_url">
                        <div @click="notifyParent('Family Physician', 'Provider')">
                            <img src="/images/jam_medical.svg" alt="" width="25" height="25" />
                            Doctor
                        </div>
                    </NuxtLink>
                </template>
                <template v-else>
                    <!-- data-url="Family Physician" data-bs-toggle="modal" data-bs-target="#exampleModal1" -->
                    <a href="#" class="nav-link add_location_class" data-url="Family Physician"><img src="/images/jam_medical.svg" alt="" width="25" height="25" />
                        Doctor</a>
                </template>
            </li>
            <li class="nav-item">
                <template v-if="this.lattitude">
                    <NuxtLink class="nav-link" :to="this.nurse_url">
                        <div @click="notifyParent('Patient Care at Home', 'Provider')">
                            <img src="/images/Nurses.svg" alt="" width="25" height="25" />
                            Nurse
                        </div>
                    </NuxtLink>
                </template>
                <template v-else>
                    <!-- data-url="nurse" data-bs-toggle="modal" data-bs-target="#exampleModal1" -->
                    <a href="#" class="nav-link add_location_class" data-url="Patient Care at Home"><img src="/images/Nurses.svg" alt="" width="25" height="25" />
                        Nurse</a>
                </template>

            </li>
            <li class="nav-item">
                <a class="nav-link " @click="getpath " href="#hotdeals">
                    <img src="/images/Deal_iconmenu.svg" width="25" height="25" alt="" />
                    Deals
                </a>
            </li>
            <li class="nav-item dropdown has-megamenu">
                <a class="nav-link dropdown-toggle" href="#" data-bs-toggle="dropdown">
                    <img src="/images/About_icon.svg" width="25" height="25" alt="" />
                    About
                </a>
                <div class="dropdown-menu megamenu" role="menu">
                    <div class="row">
                        <div class="col-md-12">
                            <NuxtLink to="/aboutCureNearMe">
                                <div class="menu-img-with-icon">
                                    <span>About CureNearMe</span>
                                </div>
                            </NuxtLink>
                            <a data-bs-toggle="modal" data-bs-target="#commingSoonModal1" href="#">
                                <div class="menu-img-with-icon">
                                    <span>Help and Support</span>
                                </div>
                            </a>
                            <a data-bs-toggle="modal" data-bs-target="#ContactUS" href="#">
                                <div class="menu-img-with-icon">
                                    <span>Contact Us</span>
                                </div>
                            </a>
                            <NuxtLink to="/terms_conditions">
                                <div class="menu-img-with-icon">
                                    <span>Terms</span>
                                </div>
                            </NuxtLink>
                            <NuxtLink to="/privacy_policy">
                                <div class="menu-img-with-icon">
                                    <span>Privacy policy</span>
                                </div>
                            </NuxtLink>
                        </div>
                    </div>
                    <!-- dropdown-mega-menu.// -->
                </div>
            </li>
            <li class="nav-item dropdown has-megamenu">
                <a class="nav-link dropdown-toggle" href="#" data-bs-toggle="dropdown">
                    <img src="/images/Profile_icon.svg" width="25" height="25" alt="" />
                    <div v-if="$auth.loggedIn">
                        Hi, <span id="my_user_name">{{$auth.user.data.first_name}} </span>
                    </div>
                    <div v-else>Sign In/Sign Up</div>
                </a>
                <div class="dropdown-menu megamenu" role="menu">
                    <div class="row">
                        <div class="col-md-12">
                            <NuxtLink to="/account" v-if="$auth.loggedIn">
                                <div class="menu-img-with-icon">
                                    <span>Account Info</span>
                                </div>
                            </NuxtLink>
                            <a data-bs-toggle="modal" data-bs-target="#commingSoonModal1" href="#">
                                <div class="menu-img-with-icon">
                                    <span>Settings</span>
                                </div>
                            </a>
                            <div v-if="$auth.loggedIn">
                                <a href="#" @click.prevent="onLogout">
                                    <div class="menu-img-with-icon">
                                        <span>Logout</span>
                                    </div>
                                </a>
                            </div>
                            <div v-else>
                                <NuxtLink to="/login">
                                    <div class="menu-img-with-icon">
                                        <span>Sign In </span>
                                    </div>
                                </NuxtLink>
                                <NuxtLink to="/register">
                                    <div class="menu-img-with-icon">
                                        <span>Sign Up</span>
                                    </div>
                                </NuxtLink>
                            </div>
                        </div>
                    </div>
                    <!-- dropdown-mega-menu.// -->
                </div>
            </li>
        </ul>
    </div>
</div>
</template>

<script>
import axios from 'axios';

export default {
    data: () => ({
        address: null,
        longitude: null,
        lattitude: null,
        city: null,
        state: null,
        country: null,
        pincode: null,
        nurse_url: null,

    }),
    methods: {
        notifyParent() {
            this.$emit('childClicked');
        },
        My_Appointments() {
            if (this.$auth.loggedIn) {
                localStorage.setItem('openpage', 2);
            localStorage.setItem('routgath', this.$route.fullPath);
                this.$router.push('/' + "MyAppointments");
            } else {
                $('#google_number').modal('show')

            }
            // alert(this.$route.fullPath)
            
        },
        async onLogout() {
            this.$auth.logout();
            sessionStorage.removeItem('auth-token');
            delete axios.defaults.headers.Authorization;
            this.$toast.success("Logout successfully.");
            this.$router.push("/");
        },
        getpath() {
            //   console.log(this.$route.fullPath);
            this.$router.push("/#hotdeals");
        },
        preventScroll(e) {
            e.preventDefault();
            e.stopPropagation();

            return false;
        },
        disable() {
            document.querySelector('html').addEventListener('wheel', preventScroll);
        },

        enable() {
            document.querySelector('html').removeEventListener('wheel', preventScroll);
        },

        notifyParent(arg1, arg2) {
            this.$emit('childClicked', arg1, arg2);
        }
    },
    mounted() {
        document.addEventListener("gesturestart", function(event) {
    event.preventDefault();
    document.body.style.zoom = 1; // Prevent zooming
});

document.addEventListener('touchstart', function(event) {
    if (event.touches.length > 1) {
        event.preventDefault(); // Prevent the default action if more than one touch detected
    }
}, { passive: false });

let lastTouchEnd = 0;
document.addEventListener('touchend', function(event) {
    let now = (new Date()).getTime();
    if (now - lastTouchEnd <= 300) {
        event.preventDefault(); // Prevent double-tap zoom
    }
    lastTouchEnd = now;
}, false);
        // $(document).click(function () {
        //     var myInput = $("nav");
        //     myInput.removeClass('active');
        //     myInput.click(function (event) {
        //         event.stopPropagation();
        //     });
        // });
        $(document).on('click', function (event) {
            var myInput2 = $("nav");

            // Check if the clicked element is not within the navigation menu
            if (!myInput2.is(event.target) && myInput2.has(event.target).length === 0) {
                myInput2.removeClass('active');
                $('html').removeClass('oveflohiden')
            }
        });

        // Stop propagation of click events within the navigation menu
        $("nav").click(function (event) {
            event.stopPropagation();
        });
        $(".modal").click(function (event) {
            event.stopPropagation();
        });
        $('.add_location_class').click(function () {
            var url = $(this).attr('data-url');

            $('#path_url').val(url);
            this.lattitude = sessionStorage.getItem("lattitude");

            this.lattitude = $('#latitude').val();

            if (this.lattitude == '') {
                $("#exampleModal1").modal("show");
            } else {

                this.city = $('#city').val();
                this.state = $('#state').val();
                this.longitude = $('#longitude').val();
                this.pincode = $('#post_code').val();
                this.country = $('#country').val();
                if (url == 'Patient Care at Home') {
                    var ptype = 'Service';
                } else {
                    var ptype = 'Provider';
                }

                var durl = '/search?id=' + url + '&lat=' + this.lattitude + '&long=' + this.longitude + '&city=' + this.city + '&state=' + this.state + '&pin=' + ((this.pincode != '') ? this.pincode : 'null') + '&country=' + this.country + '&type=' + ptype;

                // window.open(durl,'_self');

            }

        })
        var citydata = $("#city").val();

        var post_codedata = $("#post_code").val();
        this.longitude = sessionStorage.getItem("longitude");
        this.lattitude = sessionStorage.getItem("lattitude");
        this.address = sessionStorage.getItem("address_location");
        this.city = sessionStorage.getItem("city");
        this.state = sessionStorage.getItem("state");
        this.country = sessionStorage.getItem("country");
        this.pincode = sessionStorage.getItem("pincode");
        /* if (this.state == null || this.lattitude == null) {
             this.longitude = this.$cookies.get("longitude");
             this.lattitude = this.$cookies.get("lattitude");
             this.address = this.$cookies.get("address");
             this.city = this.$cookies.get("city");
             this.state = this.$cookies.get("state");
             this.country = this.$cookies.get("country");
             this.pincode = this.$cookies.get("pincode");
         }*/

        this.nurse_url = '/search?id=Patient Care at Home&lat=' + this.lattitude + '&long=' + this.longitude + '&city=' + this.city + '&state=' + this.state + '&pin=' + ((this.pincode != '') ? this.pincode : 'null') + '&country=' + this.country + '&type=Service';
        this.doctor_url = '/search?id=Family Physician&lat=' + this.lattitude + '&long=' + this.longitude + '&city=' + this.city + '&state=' + this.state + '&pin=' + ((this.pincode != '') ? this.pincode : 'null') + '&country=' + this.country + '&type=Provider';

        //console.log(this.$auth.user.data.first_name)
        $("#dismiss, .overlay").on("click", function () {
            $("#sidebar").removeClass("active");
            $(".overlay").removeClass("active");
            $('html').removeClass('oveflohiden')
        });

        $("#sidebarCollapse").on("click", function () {
            $("#sidebar").addClass("active");
            $(".overlay").addClass("active");
            $('html').addClass('oveflohiden')
            $('#sidebar').addClass('ovflowscroll')
            $(".collapse.in").toggleClass("in");
            $("a[aria-expanded=true]").attr("aria-expanded", "false");
        });
        $('html').removeClass('oveflohiden')
    },
  
};
</script>
