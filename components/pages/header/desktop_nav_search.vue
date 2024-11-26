<template>
<!-- Desktop navbar -->
<nav class=" navbar navbar-expand-lg py-sm-0 navbar-light bg-transparent">
    <div class="container">
        <a class="navbar-brand d-none d-md-block" href="/">
            <div class="logoIconsdtp">
                <img src="/images/CureNearMe-FAVICON_PC.svg" width="40" height="50" alt="">
            </div>
            <img src="/images/Logo_CureNearMe.svg" width="60" height="48" alt="">
        </a>

        <div class="left-logo-replace d-flex d-md-none">

            <div v-if="resulttype.provider_type === 1 || resulttype.provider_type === 2 || resulttype.provider_type == 5 ||  resulttype.provider_type == 6" class="navbarbutton">
                <div id="passurl" @click="passurl">
                    <svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M19.6875 10.5C19.6875 10.3259 19.6183 10.159 19.4952 10.0359C19.3722 9.91287 19.2052 9.84372 19.0312 9.84372H3.55289L7.68333 5.7146C7.74434 5.65358 7.79274 5.58115 7.82576 5.50143C7.85879 5.42171 7.87578 5.33626 7.87578 5.24997C7.87578 5.16369 7.85879 5.07824 7.82576 4.99852C7.79274 4.9188 7.74434 4.84636 7.68333 4.78535C7.62231 4.72433 7.54988 4.67593 7.47016 4.64291C7.39044 4.60989 7.30499 4.5929 7.2187 4.5929C7.13241 4.5929 7.04697 4.60989 6.96725 4.64291C6.88753 4.67593 6.81509 4.72433 6.75408 4.78535L1.50408 10.0353C1.44296 10.0963 1.39448 10.1687 1.36139 10.2485C1.32831 10.3282 1.31128 10.4137 1.31128 10.5C1.31128 10.5863 1.32831 10.6718 1.36139 10.7515C1.39448 10.8312 1.44296 10.9036 1.50408 10.9646L6.75408 16.2146C6.81509 16.2756 6.88753 16.324 6.96725 16.357C7.04697 16.3901 7.13241 16.4071 7.2187 16.4071C7.30499 16.4071 7.39044 16.3901 7.47016 16.357C7.54988 16.324 7.62231 16.2756 7.68333 16.2146C7.74434 16.1536 7.79274 16.0811 7.82576 16.0014C7.85879 15.9217 7.87578 15.8363 7.87578 15.75C7.87578 15.6637 7.85879 15.5782 7.82576 15.4985C7.79274 15.4188 7.74434 15.3464 7.68333 15.2853L3.55289 11.1562H19.0312C19.2052 11.1562 19.3722 11.0871 19.4952 10.964C19.6183 10.8409 19.6875 10.674 19.6875 10.5Z" fill="white" />
                    </svg>
                </div>
            </div>
            <div v-else class="navbarbutton">
                <a href="#" onclick="history.back()">
                    <svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M19.6875 10.5C19.6875 10.3259 19.6183 10.159 19.4952 10.0359C19.3722 9.91287 19.2052 9.84372 19.0312 9.84372H3.55289L7.68333 5.7146C7.74434 5.65358 7.79274 5.58115 7.82576 5.50143C7.85879 5.42171 7.87578 5.33626 7.87578 5.24997C7.87578 5.16369 7.85879 5.07824 7.82576 4.99852C7.79274 4.9188 7.74434 4.84636 7.68333 4.78535C7.62231 4.72433 7.54988 4.67593 7.47016 4.64291C7.39044 4.60989 7.30499 4.5929 7.2187 4.5929C7.13241 4.5929 7.04697 4.60989 6.96725 4.64291C6.88753 4.67593 6.81509 4.72433 6.75408 4.78535L1.50408 10.0353C1.44296 10.0963 1.39448 10.1687 1.36139 10.2485C1.32831 10.3282 1.31128 10.4137 1.31128 10.5C1.31128 10.5863 1.32831 10.6718 1.36139 10.7515C1.39448 10.8312 1.44296 10.9036 1.50408 10.9646L6.75408 16.2146C6.81509 16.2756 6.88753 16.324 6.96725 16.357C7.04697 16.3901 7.13241 16.4071 7.2187 16.4071C7.30499 16.4071 7.39044 16.3901 7.47016 16.357C7.54988 16.324 7.62231 16.2756 7.68333 16.2146C7.74434 16.1536 7.79274 16.0811 7.82576 16.0014C7.85879 15.9217 7.87578 15.8363 7.87578 15.75C7.87578 15.6637 7.85879 15.5782 7.82576 15.4985C7.79274 15.4188 7.74434 15.3464 7.68333 15.2853L3.55289 11.1562H19.0312C19.2052 11.1562 19.3722 11.0871 19.4952 10.964C19.6183 10.8409 19.6875 10.674 19.6875 10.5Z" fill="white" />
                    </svg>
                </a>
            </div>

            <!-- </NuxtLink> -->
            <div>
                <a href="#" class="editright" data-bs-toggle="modal" data-bs-target="#exampleModalcode">
                    <img src="/images/cil_location-pin_one.svg" alt="">
                </a>

            </div>
            <div v-if="$auth.loggedIn" @click="show_pupop">
                <h6 class="mb-0">
                    <!-- <img src="/images/Profile_icon.svg" width="25" height="25" alt=""> -->Hello, {{$auth.user.data.first_name}} </h6>
                <div class="small ovhide2">{{this.address}}</div>
            </div>
            <div v-else @click="show_pupop">
                Hello,
                <template v-if="this.address !='' && this.address != undefined">
                    <div class="small ovhide2">{{this.address}}</div>
                </template>
                <template v-else>
                    <p class="mb-0"> <a href="#" class="editright add_location_class" style="font-size: 13px;text-decoration: underline;color: #ffffff;" data-bs-toggle="modal" data-bs-target="#exampleModal1">Add Location</a></p>
                </template>
            </div>
        </div>
        <div class="search-mobileV">
            <div class="primary">
                <i class="material-icons search" id="search">
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 15 15" fill="none">
                        <path d="M13.9999 14L11.0093 11.004L13.9999 14ZM12.6666 6.99998C12.6666 8.50287 12.0696 9.94421 11.0069 11.0069C9.94415 12.0696 8.50281 12.6666 6.99992 12.6666C5.49703 12.6666 4.05569 12.0696 2.99298 11.0069C1.93027 9.94421 1.33325 8.50287 1.33325 6.99998C1.33325 5.49709 1.93027 4.05575 2.99298 2.99304C4.05569 1.93034 5.49703 1.33331 6.99992 1.33331C8.50281 1.33331 9.94415 1.93034 11.0069 2.99304C12.0696 4.05575 12.6666 5.49709 12.6666 6.99998Z" fill="#1c2d52" stroke="#fff" stroke-linecap="round" />
                    </svg>
                </i>
            </div>
            <div class="secondary" id="secondary-header">
                <ul>
                    <li>
                        <i class="material-icons back" id="back-arrow">
                            <i class="material-icons search-btn" id="search-btn">
                                <svg width="21" height="21" viewBox="0 0 512 512" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M443.6 387.1 312.4 255.4l131.5-130c5.4-5.4 5.4-14.2 0-19.6l-37.4-37.6c-2.6-2.6-6.1-4-9.8-4-3.7 0-7.2 1.5-9.8 4L256 197.8 124.9 68.3c-2.6-2.6-6.1-4-9.8-4-3.7 0-7.2 1.5-9.8 4L68 105.9c-5.4 5.4-5.4 14.2 0 19.6l131.5 130L68.4 387.1c-2.6 2.6-4.1 6.1-4.1 9.8 0 3.7 1.4 7.2 4.1 9.8l37.4 37.6c2.7 2.7 6.2 4.1 9.8 4.1 3.5 0 7.1-1.3 9.8-4.1L256 313.1l130.7 131.1c2.7 2.7 6.2 4.1 9.8 4.1 3.5 0 7.1-1.3 9.8-4.1l37.4-37.6c2.6-2.6 4.1-6.1 4.1-9.8-.1-3.6-1.6-7.1-4.2-9.7z" fill="#23355f" class="fill-000000"></path>
                                </svg>
                            </i>
                        </i>
                    </li>

                    <li>
                        <form>
                            <i class="material-icons search-btn leftto" id="search-btn">
                                <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 15 15" fill="none">
                                    <path d="M13.9999 14L11.0093 11.004L13.9999 14ZM12.6666 6.99998C12.6666 8.50287 12.0696 9.94421 11.0069 11.0069C9.94415 12.0696 8.50281 12.6666 6.99992 12.6666C5.49703 12.6666 4.05569 12.0696 2.99298 11.0069C1.93027 9.94421 1.33325 8.50287 1.33325 6.99998C1.33325 5.49709 1.93027 4.05575 2.99298 2.99304C4.05569 1.93034 5.49703 1.33331 6.99992 1.33331C8.50281 1.33331 9.94415 1.93034 11.0069 2.99304C12.0696 4.05575 12.6666 5.49709 12.6666 6.99998Z" fill="white" stroke="#383838" stroke-linecap="round" />
                                </svg>
                            </i>
                            <!--   <input id="search-field" type="text" placeholder="Enter Search Term"> -->
                            <!-- <input type="text" class="form-control" id="inlineFormInputGroupUsername" autocomplete="off" v-model="keywords" @input="onQueryChange" /> -->
                        </form>
                    </li>
                </ul>
            </div>

        </div>
        <desktop_menu></desktop_menu>
    </div>
</nav>
</template>

<script>
import axios from "axios";
import store from "~/static/js/store";
import desktop_menu from './desktop_menu';
import logo from './logo';
export default {
    data: () => ({
        keywords: "",
        address: null,
        longitude: null,
        resulttype: [],
        lattitude: null,
        dynamicParameter: '',
        user_name: '',

    }),
    mounted() {

      
        this.longitude = sessionStorage.getItem("longitude");
        this.lattitude = sessionStorage.getItem("lattitude");
        this.address = sessionStorage.getItem("address_location");
        this.city = sessionStorage.getItem("city");
        this.state = sessionStorage.getItem("state");
        this.country = sessionStorage.getItem("country");
        this.pincode = sessionStorage.getItem("pincode");
        this.dynamicParameter = sessionStorage.getItem("drfullpath")

        const search = document.getElementById("search");
        const secondary = document.getElementById("secondary-header");
        const back = document.getElementById("back-arrow");

        search.addEventListener('click', () => {
            secondary.style.visibility = 'visible';
        });

        back.addEventListener('click', () => {
            secondary.style.visibility = 'hidden';
        });
        if (this.$route.fullPath != '/' + 'MyAppointments' && this.$route.fullPath != '/' + 'MyAppointments/') {
            axios.get(process.env.API_BASE_URL + 'check_provider', {
                    params: {
                        user_name: this.$route.params.slug
                    }
                })
                .then((response) => {
                    if (response.data.status == "success") {
                        this.resulttype = response.data.data[0];
                        this.user_name = '/' + this.resulttype.user_name
                        // Access nurse_id and store it in sessionStorage
                        if (this.resulttype.provider_type == 2) {
                            let nurseId = this.resulttype.nurses_id;
                            sessionStorage.setItem('nurse_id', nurseId)
                            store.dispatch("providertype", {
                                nurseId: nurseId,
                                provider_type: this.resulttype.provider_type,
                                user_name: '/' + this.resulttype.user_name,
                            });
                        } else if (this.resulttype.provider_type == 1) {
                            let doctor_id = this.resulttype.doctor_id;
                            sessionStorage.setItem('doctor_id', doctor_id)

                            store.dispatch("providertype", {
                                doctor_id: doctor_id,
                                provider_type: this.resulttype.provider_type,
                                user_name: '/' + this.resulttype.user_name,
                            });
                            // alert(this.resulttype.user_name)
                        } else if (this.resulttype.provider_type == 5) {

                            let clinic_id = this.resulttype._id;
                            this.user_name = '/' + this.resulttype.url_name

                            sessionStorage.setItem('clinic_id', clinic_id)
                            store.dispatch("providertype", {
                                doctor_id: clinic_id,
                                provider_type: this.resulttype.provider_type,
                                user_name: '/' + this.resulttype.url_name,
                            });
                        } else if (this.resulttype.provider_type == 6) {
                            let clinic_id = this.resulttype._id;
                            this.user_name = '/' + this.resulttype.url_name

                            sessionStorage.setItem('clinic_id', clinic_id)
                            store.dispatch("providertype", {
                                doctor_id: clinic_id,
                                provider_type: this.resulttype.provider_type,
                                user_name: '/' + this.resulttype.url_name,
                            });
                        }
                        // console.log("result",response.data.data)
                        //$('.loader').hide();
                    } else {}
                })
        }
    },
    watch: {
        keywords(after, before) {
            if (this.keywords.length >= 3) {
                this.fetch_suggestion();
            }
        },
    },
    computed: {
        messege3() {
            return store.state.message3;
        },
        messege() {
            return store.state.message;
        }
    },
    methods: {
        show_pupop() {
            $('#exampleModalcode').modal('show')
        },
        fetch_suggestion() {
            $('.searchdrop').show();
            $("#hiden").hide()
            $('.two-search-part').addClass('addsearch')
            axios
                .get(process.env.API_BASE_URL + "get_suggestions", {
                    params: {
                        keywords: this.keywords,
                    },
                })
                .then((response) => (this.suggestions = response.data.data))
                .catch((error) => {});
        },

        passurl() {
  let search_page = localStorage.getItem('previous_page')
        let routgath = localStorage.getItem('routgath')
        console.log('search_page', search_page)
        console.log('routgath', routgath)

            if (this.$route.fullPath == `${this.user_name}`) {
                if (search_page == 'search_page') {
                    this.$router.push(routgath);
                } else {
                    this.$router.push('/');
                }
            } else if (this.$route.fullPath == `${this.user_name}/BookAppointment`) {
                this.$router.push(this.user_name);
            } else if (this.$route.fullPath == `${this.user_name}/appointmentclinicmobail`) {
                this.$router.push(`${this.user_name}/BookAppointment`);
            } else if (this.$route.fullPath == `${this.user_name}/BookAppointment/Homevisit`) {
                if (this.resulttype.provider_type !== 2) {
                    this.$router.push(`${this.user_name}/BookAppointment`);
                } else {
                    this.$router.push(`${this.user_name}`);
                }
            } else if (this.$route.fullPath == `${this.user_name}/BookAppointment/BookingSumary`) {
                if (this.messege.provader == 2) {
                    const Clinic_name = sessionStorage.getItem('clinic_name');
                    this.$router.push(`${this.user_name}/BookAppointment/${Clinic_name}`);
                } else {
                    if (this.resulttype.provider_type == 5) {
                        this.$router.push(`${this.user_name}/BookAppointment`);
                    } else {
                        this.$router.push(`${this.user_name}/BookAppointment/Homevisit`);
                    }
                }
            } else if (this.$route.fullPath == `${this.user_name}/appointmentbook`) {
                this.$router.push(`${this.user_name}/appointmentclinicmobail`);
            } else if (this.$route.fullPath == `${this.user_name}/BookAppointment/BookingConfirmation`) {
                if (this.messege3.provider_type == 1) {
                    this.$router.push(`${this.user_name}/BookAppointment`);
                } else {
                    if (this.messege3.provider_type == 5) {
                        this.$router.push(`${this.user_name}/BookAppointment`);
                    } else {
                        this.$router.push(`${this.user_name}/BookAppointment/Homevisit`);
                    }
                }
            } else if (this.messege.provader == 2) {
                const originalPath = sessionStorage.getItem('clinic_name');
                if (this.$route.path == this.user_name + "/BookAppointment/" + originalPath) {
                    this.$router.push(`${this.user_name}/BookAppointment`);
                }
            } else if (search_page == 'search_page') {
                this.$router.push(routgath);
            } else {
                this.$router.push(`/`);
            }

            $("#Mobailnumbar").modal("hide");
            $('body').css({
                'overflow': 'auto',
            });
            $('body').removeClass('addnumbar')
            $('body').css({
                'padding-right': '0px',
            });
            // if (this.$route.path === this.messege3.user_name + "/BookAppointment/Homevisit" || this.$route.path === this.messege3.user_name + "/BookAppointment/" + encodedPath) {
            //     localStorage.setItem('user_id', this.my_id)
            // }
        },

    },
    components: {
        desktop_menu,
        logo

    }
}
</script>
