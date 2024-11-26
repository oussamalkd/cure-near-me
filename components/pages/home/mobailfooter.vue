<template>
<div class="mobile-footer d-flex d-lg-none">
    <div class="footer-wrapper">
        <NuxtLink to="/" class="foot-links" id="CureNearMe">
            <img src="/images/cureicon.svg" width="25" height="25" alt="" style="filter: none !important;" />
            <div class="name-of-f-link">CureNearMe</div>
        </NuxtLink>

        <template v-if="lattitude">
            <NuxtLink :to="nurse_url" class="foot-links" id="nurse_url">
                <div @click="notifyParent('Patient Care at Home', 'Provider')">
                    <img src="/images/Nurses.svg" width="25" height="25" alt="" />
                    <div class="name-of-f-link">Nurse</div>
                </div>
            </NuxtLink>
            <NuxtLink :to="doctor_url" class="foot-links" id="doctor_url">
                <div @click="notifyParent('Family Physician', 'Provider')">
                    <img src="/images/jam_medical.svg" width="25" height="25" alt="" />
                    <div class="name-of-f-link">Doctor</div>
                </div>
            </NuxtLink>
        </template>
        <template v-else>
            <a href="#" class="foot-links add_location_class" data-url="Patient Care at Home" data-bs-toggle="modal" data-bs-target="#exampleModal1">
                <img src="/images/Nurses.svg" width="25" height="25" alt="" />
                <div class="name-of-f-link">Nurse</div>
            </a>
            <a href="#" class="foot-links add_location_class" data-url="Family Physician" data-bs-toggle="modal" data-bs-target="#exampleModal1">
                <img src="/images/jam_medical.svg" width="25" height="25" alt="" />
                <div class="name-of-f-link">Doctor</div>
            </a>
        </template>

        <NuxtLink to="/#hotdeals" class="foot-links" id="hotdeals">
            <img src="/images/Deal_icon.svg" width="25" height="25" alt="" />
            <!-- <div class="Icontoplt">
                <img src="/images/new_red.svg" width="15" height="6" alt="" />
            </div> -->
            <div class="name-of-f-link">Deals</div>
        </NuxtLink>
        <div class="Appoiment_menu" @click="My_Appointments" >
            <NuxtLink to="#" class="foot-links">
                <img src="/images/Appontment_Menu.svg" width="25" height="25" alt="" />
                <div class="Icontoplt">
                <img src="/images/new_red.svg" width="15" height="6" alt="" />
            </div>
                <div class="name-of-f-link">Appointments</div>
            </NuxtLink>
        </div>

        <!-- <a class="foot-links" data-bs-toggle="modal" data-bs-target="#commingSoonModal1" href="#">
            <img src="/images/fi-rs-chart-connected.svg" width="25" height="25" alt="" />
            <div class="name-of-f-link">Connection</div>
        </a> -->
    </div>
</div>
</template>

<script>
import {
    jwtDecode
} from "jwt-decode";
export default {
    data() {
        return {
            creds: {},
            error_message: "",
            email: "",
            first_name: "",
            last_name: "",
            slug1: "",
            slug2: "",
            password: ""
        }
    },

    mounted() {

        this.slug1 = this.$route.path.split('/')[1];

        this.slug2 = this.$route.path.split('/')[2];
        // initialize Google Sign in  
        google.accounts.id.initialize({
            client_id: '',
            callback: this.handleCredentialResponse, //method to run after user clicks the Google sign in button
            context: 'signin',
            // cancel_on_tap_outside: false,

        })

        if (!this.$auth.loggedIn) {
            google.accounts.id.prompt();
        }
        $('.drcard').scroll(function () {
            var scrollPosition = $(this).scrollTop();
            console.log("Scroll position:", scrollPosition);
        });

        $("#sidebar").mCustomScrollbar({
            theme: "minimal",
        });

        $("#dismiss, .overlay").on("click", function () {
            $("#sidebar").removeClass("active");
            $(".overlay").removeClass("active");
        });

        $("#sidebarCollapse").on("click", function () {
            $("#sidebar").addClass("active");
            $(".overlay").addClass("active");
            $(".collapse.in").toggleClass("in");
            $("a[aria-expanded=true]").attr("aria-expanded", "false");
        });

        var selector = "a.foot-links";
        const originalPath = this.nurse_url;
        const originalPath_dr = this.doctor_url;
        const currentPath = this.$route.fullPath;
        const decodedOriginalPath = decodeURIComponent(originalPath);
        const decodedCurrentPath = decodeURIComponent(currentPath);
        if (decodedCurrentPath === decodedOriginalPath) {
            document.getElementById("nurse_url").classList.add("active");
        } else if (decodedCurrentPath === originalPath_dr) {
            document.getElementById("doctor_url").classList.add("active");
        } else if (this.$route.fullPath == '/') {
            document.getElementById("CureNearMe").classList.add("active");
        } else if (this.$route.fullPath == '/#hotdeals') {
            document.getElementById("hotdeals").classList.add("active");
        }
        $(selector).on("click", function (e) {
            $(selector).removeClass("active");
            $(this).addClass("active");
        });

    },
    methods: {
        My_Appointments() {
            if (this.$auth.loggedIn) {
                this.$router.push('/' + "MyAppointments");
            } else {
                $('#google_number').modal('show')

            }
        },
        notifyParent(arg1, arg2) {
            this.$emit('childClicked', arg1, arg2);
        },
        handleCredentialResponse(response) {
            console.log(response.credential);
            const token = jwtDecode(response.credential)
            /* console.log(token)
               console.log(`ID: ${token.sub}`)
               console.log(`Full Name: ${token.name}`)
               console.log(`Given Name: ${token.given_name}`)
               console.log(`Family Name: ${token.family_name}`)
               console.log(`Image URL: ${token.picture}`)
               console.log(`Email: ${token.email}`)*/
            this.email = token.email;
            this.first_name = token.given_name;
            this.last_name = token.family_name;
            this.profile_pic = token.picture;
            // call your backend API here
            try {
                this.$axios.post(process.env.API_BASE_URL + 'register_gmail', {
                    data: {
                        email: this.email,
                        first_name: this.first_name,
                        last_name: this.last_name,
                        profile_pic: this.last_name
                    }
                }).
                then((res) => {
                    if (res.data.status == 'success') {
                        var success = 1;
                        // this.$toast.success(res.data.message);
                        this.onLoginGmail();
                    } else {
                        var success = 0;
                        //this.$toast.error(res.data.message);
                        $('.error_div').hide();
                        if (res.data.type == 'email') {
                            $('.error_message').show();
                            this.error_message = res.data.message;
                        } else {
                            $('.error_message_mobile').show();
                            this.error_message = res.data.message;
                        }

                    }

                })

            } catch (e) {
                this.error = e.response.data.message
            }
            // the token can be accessed as: response.credential
        },
        async onLoginGmail() {
            await this.$auth.loginWith('local', {
                data: {
                    email: this.email,
                    password: this.password
                },
            })
            this.$toast.success('Login successfully.');
            if (this.$route.path == '/login') {
                this.$router.push('/');
            } else {
                this.$router.push(this.$route.path);
            }

            //window.location.reload();
        },
        getpath() {
            //   console.log(this.$route.fullPath);
            this.$router.push("/#hotdeals");
        },

    },
    
}
</script>
