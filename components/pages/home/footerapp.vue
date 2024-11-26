<template>
<div class="mt-4">
    <footer class="d-none d-lg-block">
        <div class="container">
            <div class="footre-flex">
                <div class="footer-img">
                    <img src="/images/mobilephone.webp" alt="mobilephone" class="w-full h-75" height="778" width="400" />
                </div>
                <div class="footer-text">
                    <h2 class="mb-4 roboto">Get CureNearMe.com<br />On Your Phone</h2>

                    <p class="mb-4 roboto">
                        CureNearMe is the one stop solution for all the medical services
                        you may need. Add CureNearMe.com to your mobile's home screen and
                        experience the best.
                    </p>

                    <div class="footer-logo d-flex gap-2">
                        <a class="" data-bs-toggle="modal" data-bs-target="#commingSoonModal1" href="#">
                            <img src="/images/logo-gp.svg" alt="logo-gp" width="250" height="83" />
                        </a>

                        <a class="" data-bs-toggle="modal" data-bs-target="#commingSoonModal1" href="#">
                            <img src="/images/logo-ios.svg" alt="logo-ios" width="250" height="83" />
                        </a>
                    </div>

                    <div class="footer-links">
                        <div class="row">
                            <div class="col-md-4">
                                <h5>Home</h5>
                                <ul class="p-0">
                                    <li>
                                        <NuxtLink to="/aboutCureNearMe">About us</NuxtLink>
                                    </li>
                                    <li>
                                        <a data-bs-toggle="modal" data-bs-target="#commingSoonModal1" href="#">
                                            FAQ</a>
                                    </li>
                                    <li>
                                        <NuxtLink to="/privacy_policy"> Privacy Policy</NuxtLink>
                                    </li>
                                    <li>
                                        <NuxtLink to="/terms_conditions">Terms & Conditions</NuxtLink>
                                    </li>
                                    <li>
                                        <a class="" data-bs-toggle="modal" data-bs-target="#ContactUS" href="#">
                                            <!-- <a href="contact-us.html"> -->
                                            Contact Us</a>
                                    </li>
                                </ul>
                            </div>
                            <div class="col-md-4">
                                <h5>Our Services</h5>
                                <ul class="p-0">
                                    <li>
                                        <a class="" data-bs-toggle="modal" data-bs-target="#commingSoonModal1" href="#">
                                            Hospitals</a>
                                    </li>
                                    <li>
                                        <a class="" data-bs-toggle="modal" data-bs-target="#commingSoonModal1" href="#">
                                            OPD</a>
                                    </li>
                                    <li>
                                        <template v-if="this.lattitude">
                                            <a class="" :href="this.doctor_url">
                                                Doctor
                                            </a>
                                        </template>
                                        <template v-else>
                                            <!-- data-url="Family Physician" data-bs-toggle="modal" data-bs-target="#exampleModal1" -->
                                            <a href="#" class=" add_location_class" data-url="Family Physician">
                                                Doctor</a>
                                        </template>
                                    </li>
                                    <li>
                                        <a class="" data-bs-toggle="modal" data-bs-target="#commingSoonModal1" href="#">
                                            Pharmacy</a>
                                    </li>
                                    <li>
                                        <a class="" data-bs-toggle="modal" data-bs-target="#commingSoonModal1" href="#">
                                            Laboratory</a>
                                    </li>
                                    <li>
                                        <template v-if="this.lattitude">
                                            <a class="" :href="this.nurse_url">
                                                Nurse
                                            </a>
                                        </template>
                                        <template v-else>
                                            <!-- data-url="nurse" data-bs-toggle="modal" data-bs-target="#exampleModal1" -->
                                            <a href="#" class="add_location_class" data-url="Patient Care at Home">
                                                Nurse</a>
                                        </template>
                                    </li>
                                    <li>
                                        <a class="" data-bs-toggle="modal" data-bs-target="#commingSoonModal1" href="#">
                                            Connection</a>
                                    </li>
                                </ul>
                            </div>
                            <div class="col-md-12">
                                <h5 class="ps-0">Follow us on :</h5>

                                <div class="social-icon d-flex g-1 ps-1" style="gap: 15px">
                                    <a href="https://www.facebook.com/profile.php?id=61554435913744&mibextid=ZbWKwL" target="_blank">
                                        <img src="/images/facebook.svg" alt="facebook" width="20" height="20" />
                                    </a>
                                    <a href="https://wa.me/917600292009" target="_blank">
                                        <img src="/images/whatsapp_Logo.svg" alt="twitter" width="20" height="20" />
                                    </a>
                                    <a href="https://www.instagram.com/curenearme?igsh=MTRqNG4wMGIydHh1Mw==" target="_blank">
                                        <img src="/images/instagram.svg" alt="instagram" width="20" height="20" />
                                    </a>
                                </div>

                                <div class="copyright-text">
                                    ©2023 CureNearMe.com, All rights reserved.
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </footer>
    <mobailfooter></mobailfooter>
    <div class="modal fade modal-of-quick-search Locationaccees" id="exampleModal1" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered" style="max-width: 750px">
            <div class="modal-content modal-blur modelWhite">
                <div class="modal-body">
                    <button type="button" class="bg-none ms-auto" data-bs-dismiss="modal" aria-label="Close">
                        <img src="/images/Close_btn.svg" alt="">
                    </button>
                    <div class="a-popover-wrapper" aria-busy="false">
                        <header class="a-popover-header Location">
                            <p class=" roboto text-blue">Location access required </br> To show medical services near you</p>
                            <!--button data-action="a-popover-close" class=" a-button-close-a11y a-button-close a-declarative" aria-label="Close"><i class="a-icon a-icon-close"></i></button-->
                        </header>
                        <div class="textBlog">
                            <!--p class="mb-0 text-blue roboto mb-3">Select a delivery location to see product availability and delivery options</p-->
                            <div v-if="$auth.loggedIn"></div>
                            <div v-else>
                                <a href="#" class="cta">Sign in to see your addresses</a>
                                <div class="a-divider a-divider-break a-spacing-top-base">
                                    <h5>OR</h5>
                                </div>
                            </div>
                            <div class="locationForm">
                                <div class="a-column a-span12">
                                    <!-- <input class="form-control" type="text"  id="GLUXZipUpdateInput" aria-label="or enter an Indian pincode" data-action="GLUXPostalInputAction" placeholder="Enter Nearest Landmark, Area or PIN" /> -->
                                    <input class="form-control" type="text" ref="origin" id="searchTextField" aria-label="or enter an Indian pincode" data-action="GLUXPostalInputAction" />
                                </div>

                                <div class="a-divider a-divider-break a-spacing-top-base">
                                    <h5>OR</h5>
                                </div>
                                <a class="linkBlog" id="liveLocation" @click="geoLiveLocation" style="cursor: pointer"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 10 10" fill="none">
                                        <g clip-path="url(#clip0_2_3018)">
                                            <path d="M9.375 4.6875H7.47813C7.40797 4.13766 7.15724 3.62666 6.76529 3.23471C6.37334 2.84276 5.86234 2.59203 5.3125 2.52187V0.625H4.6875V2.52187C4.13766 2.59203 3.62666 2.84276 3.23471 3.23471C2.84276 3.62666 2.59203 4.13766 2.52187 4.6875H0.625V5.3125H2.52187C2.59203 5.86234 2.84276 6.37334 3.23471 6.76529C3.62666 7.15724 4.13766 7.40797 4.6875 7.47813V9.375H5.3125V7.47813C5.86234 7.40797 6.37334 7.15724 6.76529 6.76529C7.15724 6.37334 7.40797 5.86234 7.47813 5.3125H9.375V4.6875ZM5 6.875C4.62916 6.875 4.26665 6.76503 3.95831 6.55901C3.64996 6.35298 3.40964 6.06014 3.26773 5.71753C3.12581 5.37492 3.08868 4.99792 3.16103 4.63421C3.23338 4.27049 3.41195 3.9364 3.67417 3.67417C3.9364 3.41195 4.27049 3.23338 4.63421 3.16103C4.99792 3.08868 5.37492 3.12581 5.71753 3.26773C6.06014 3.40964 6.35298 3.64996 6.55901 3.95831C6.76503 4.26665 6.875 4.62916 6.875 5C6.87442 5.4971 6.67669 5.97368 6.32519 6.32519C5.97368 6.67669 5.4971 6.87442 5 6.875Z" fill="#363636" />
                                        </g>
                                        <defs>
                                            <clipPath id="clip0_2_3018">
                                                <rect width="10" height="10" fill="white" />
                                            </clipPath>
                                        </defs>
                                    </svg>
                                    Use my current location</a>
                            </div>
                        </div>
                        <!-- <div v-if="$auth.loggedIn"></div> -->
                        <div>
                            <div class="chooselocat" v-if="$auth.loggedIn && $auth.user.UserLocation.length > 0">
                                <h4 class=" roboto text-blue mb-3">Choose your location</h4>
<!-- {{ $auth.user.UserLocation }} -->
                                <div class="chooselocgrop" v-if="$auth.loggedIn" >
                                    <div class="choosescr"> 
                                        <div class="chooseloBox"  v-for="(result, index) in $auth.user.UserLocation" @click="user_location(result.nearest_landmark, result.address, result.city, result.state, result.country, result.pin_code, result.lattitude, result.longitude)">
                                            <h4 class="h4 roboto text-blue" style="text-transform: capitalize;">
                                                {{ result.address_title }}
                                            </h4>
                                            <p class="mb-0 text-blue roboto mb-3">
                                                {{ result.address }}
                                            </p>
                                        </div>
                                        <!-- <div class="chooseloBox">
                                            <h4 class="h4 roboto text-blue">
                                                Choose your location
                                            </h4>
                                            <p class="mb-0 text-blue roboto mb-3">
                                                Select a delivery location to see product availability
                                                and delivery options
                                            </p>
                                        </div>
                                        <div class="chooseloBox">
                                            <h4 class="h4 roboto text-blue">
                                                Choose your location
                                            </h4>
                                            <p class="mb-0 text-blue roboto mb-3">
                                                Select a delivery location to see product availability
                                                and delivery options
                                            </p>
                                        </div> -->
                                    </div>
                                </div>
                            </div>
                        </div> 
                    </div>
                </div>
            </div>
        </div>
    </div>
    <poppup @call-function-in-parent="callParentFunction" />
</div>
</template>

<script>
import mobailfooter from "./mobailfooter.vue";
import poppup from "../../poppup.vue";
var options = {
    mapTypeId: "roadmap",
    componentRestrictions: {
        country: "IN",
    },
};
import axios from "axios";
export default {
    created() {
        //const params = new URLSearchParams(location.search)
        this.keywords = this.$route.query.id;
        this.latitude = this.$route.query.lat;
        this.longitude = this.$route.query.long;
        this.postal_code = this.$route.query.pin;
        this.city = this.$route.query.city;
        this.state = this.$route.query.state;
        this.country = this.$route.query.country;
        this.res_type = this.$route.query.type;

     
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
    },
    mounted() {
        $('.add_location_class').click(function () {
            var url = $(this).attr('data-url');

            $('#path_url').val(url);
            this.lattitude = sessionStorage.getItem("lattitude");

            this.lattitude = $('#latitude').val();

            if (this.lattitude == '') {
                $("#exampleModal1").modal("show");
            } else {
                var citynew = $('#city').val();
                var statenew = $('#state').val();
                var latitudenew = $('#latitude').val();
                var longitudenew = $('#longitude').val();
                var postal_codenew = $('#post_code').val();
                var countrynew = $('#country').val();
                 if (url == 'Patient Care at Home') {
                        var ptype = 'Service';
                    }
                    else{
                        var ptype = 'Provider';
                    }
                    if(url !==  undefined){

                        var durl = '/search?id=' + url + '&lat=' + latitudenew + '&long=' + longitudenew + '&city=' + citynew + '&state=' + statenew + '&pin=' + ((postal_codenew != '') ? postal_codenew : 'null') + '&country=' + countrynew + '&type='+ptype;
                        window.open(durl, '_self');
                    }else{
                        $("#exampleModal1").modal("show");

                    }

            }

        })
        //auto complete location
        //Auto complete location
        const originAutocomplete = new google.maps.places.Autocomplete(
            this.$refs["origin"],
            options
        );
        originAutocomplete.addListener("place_changed", () => {
            var place = originAutocomplete.getPlace();
            var address_components = place.address_components;
            var components = {};
            jQuery.each(address_components, function (k, v1) {
                jQuery.each(v1.types, function (k2, v2) {
                    components[v2] = v1.long_name;
                });
            });
            var city;
            var postal_code;
            var state;
            var country;
            var latitude = place.geometry.location.lat();
            var longitude = place.geometry.location.lng();

            if (components.locality) {
                city = components.locality;
            }

            if (!city) {
                city = components.administrative_area_level_1;
            }

            if (components.postal_code) {
                postal_code = components.postal_code;
            }

            if (components.administrative_area_level_1) {
                state = components.administrative_area_level_1;
            }

            if (components.country) {
                country = components.country;
            }

            //$('#searchTextField').val(city);
            this.country = country;
            this.latitude = latitude;
            this.longitude = longitude;

            this.postal_code = postal_code;
            if (postal_code == undefined) {
                postal_code = "null";
                this.postal_code = "null";

            }
            this.city = city;
            this.state = state;

            $("#city").val(city);
            $("#state").val(state);
            $("#country").val(country);
            $("#latitude").val(latitude);
            $("#longitude").val(longitude);
            $("#post_code").val(postal_code);
            //address
            var add = place.formatted_address;
            var arr = add.split(',');
            var add_str = '';
            for (var i = 0; i < arr.length; ++i) {
                if (arr[i].indexOf('+') == -1) {
                    add_str += arr[i] + ',';
                }
            }
            var address = add_str.slice(0, -1);
            /*this.$cookies.set("lattitude", latitude);
            this.$cookies.set("longitude", longitude);
            this.$cookies.set("address", address);
            this.$cookies.set("city", city);
            this.$cookies.set("state", state);
            this.$cookies.set("country", country);
            this.$cookies.set("pincode", postal_code);*/
            sessionStorage.setItem("lattitude", latitude);
            sessionStorage.setItem("longitude", longitude);
            sessionStorage.setItem("address_location", address);
            sessionStorage.setItem("city", city);
            sessionStorage.setItem("state", state);
            sessionStorage.setItem("country", country);
            sessionStorage.setItem("pincode", postal_code);
            var path_url = $("#path_url").val();
            var path_type = $("#path_type").val();

            var keyword = $("#inlineFormInputGroupUsername").val();

            if (path_type == 3) {
                if (path_url == 'Patient Care at Home' || path_url == 'Family Physician' || path_url == 'Dermatology' || path_url == 'Obstetrics and Gynaecology' || path_url == 'Cardiology' || path_url == 'Psychiatry' || path_url == 'Dental' || path_url == 'Otolaryngology (ENT)' || path_url == 'Ophthalmology' || path_url == 'Gastroenterology' || path_url == 'Physical Therapy') {
                    var ptype = 'Provider';
                    if (path_url == 'Patient Care at Home') {
                        var ptype = 'Service';
                    }
                    var p1 = "search?id=" + path_url + "&lat=" + latitude + "&long=" + longitude + "&city=" + city + "&state=" + state + "&pin=" + postal_code + "&country=" + country + "&type=" + ptype;

                    window.open(p1, "_self");
                } else {
                    window.location.reload();
                }
            }
            var result = path_url.split("&");

            if (keyword != "") {
                if (path_type == 1) {
                    window.open(path_url, "_blank");
                } else {
                    var p1 =
                        "search?id=" +
                        keyword +
                        "&lat=" +
                        latitude +
                        "&long=" +
                        longitude +
                        "&state=" +
                        state +
                        "&pin=" +
                        postal_code +
                        "&country=" +
                        country +
                        "&" +
                        result[6];

                    window.open(p1, "_self");
                    /* alert(path_url);
                                    this.$router.push({ path_url })
                                    return true;*/
                }
            } else {
                $('.address_live').html(place.formatted_address);
                $("#exampleModal1").modal("hide");
                $('#dismiss').trigger('click');
                $('#inlineFormInputGroupUsername').focus();
            }

        });
        // --scroll-footer---
        var didScroll;
        var lastScrollTop = 0;
        var delta = 5;
        var navbarHeight = $(".mobile-footer").outerHeight();

        // console.log(navbarHeight)
        $(window).scroll(function (event) {
            didScroll = true;
            // console.log("hello");
        });
        $(".mobile-footer").addClass("nav-up");
        // $('.mobile-footer').removeClass('nav-down').addClass('nav-up');

        setInterval(function () {
            if (didScroll) {
                // console.log("scroll");
                hasScrolled();
                didScroll = false;
            }
        }, 10);

        function hasScrolled() {
            var st = $(window).scrollTop();
            // Make sure they scroll more than delta
            if (Math.abs(lastScrollTop - st) <= delta) return;
            // If they scrolled down and are past the navbar, add class .nav-up.
            // This is necessary so you never see what is "behind" the navbar.
            if (st > lastScrollTop && st > navbarHeight) {
                // Scroll Down
                if (st + $(window).height() < $(document).height()) {
                    $(".mobile-footer").removeClass("nav-up").addClass("nav-down");
                }
            } else {
                // Scroll Up
                $(".mobile-footer").removeClass("nav-down").addClass("nav-up");
            }
            lastScrollTop = st;
        }

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

        $(selector).on("click", function () {
            $(selector).removeClass("active");
            $(this).addClass("active");
        });
     
    },
    methods: {
        callParentFunction(name, relationship) {
            // Call a method in the parent component
            this.$emit('call-function-in-parent', name, relationship);
        },
        getpath() {
            //   console.log(this.$route.fullPath);
            this.$router.push("/#hotdeals");
        },
        user_location(nearest_landmark, address, city, state, country, pin_code, lattitude, longitude) {
    $(this.$refs.origin).val(nearest_landmark);
    
    sessionStorage.setItem("lattitude", lattitude);
                                    sessionStorage.setItem("longitude", longitude);
                                    sessionStorage.setItem("address_location", address);
                                    sessionStorage.setItem("city", city);
                                    sessionStorage.setItem("state", state);
                                    sessionStorage.setItem("country", country);
                                    sessionStorage.setItem("pincode", pin_code);
                                    var path_url = $("#path_url").val();
            var path_type = $("#path_type").val();

                                    var keyword = $("#inlineFormInputGroupUsername").val();
            var result = path_url.split("&");
            if (keyword != "") {
                if (path_type == 1) {
                    window.open(path_url, "_blank");
                } else {
                    var p1 =
                        "search?id=" +
                        keyword +
                        "&lat=" +
                        lattitude +
                        "&long=" +
                        longitude +
                        "&state=" +
                        state +
                        "&pin=" +
                        pin_code +
                        "&country=" +
                        country +
                        "&" +
                        result[6];

                    window.open(p1, "_self");
                    /* alert(path_url);
                                        this.$router.push({ path_url })
                                        return true;*/
                }
            }else{
                $('#exampleModal1').modal('hide')
            }
},
        applyLocation() {
            $("#exampleModalcode").modal("hide");
            var citydata = $("#city").val();
            var statedata = $("#state").val();
            var country = $("#country").val();
            var latdata = $("#latitude").val();
            var lngdata = $("#longitude").val();
            var post_codedata = $("#post_code").val();
            var path_url = $("#path_url").val();
            var path_type = $("#path_type").val();

            var keyword = $("#inlineFormInputGroupUsername").val();
            var result = path_url.split("&");
            if (keyword != "") {
                if (path_type == 1) {
                    window.open(path_url, "_blank");
                } else {
                    var p1 =
                        "search?id=" +
                        keyword +
                        "&lat=" +
                        latitude +
                        "&long=" +
                        longitude +
                        "&state=" +
                        state +
                        "&pin=" +
                        postal_code +
                        "&country=" +
                        country +
                        "&" +
                        result[6];

                    window.open(p1, "_self");
                    /* alert(path_url);
                                        this.$router.push({ path_url })
                                        return true;*/
                }
            }
            /*this.$router.push(
                    "/search?id=" +
                      $('#inlineFormInputGroupUsername').val() +
                      "&lat=" +
                      latdata+
                      "&long=" +
                      lngdata +
                      "&state=" +
                      citydata+
                      "&pin=" +
                      post_codedata +
                      "&country=" +
                      country +
                      "&"+
                      result[6] +
                      ""
                  );

                  axios
                    .get(process.env.API_BASE_URL + "search_collection_mongo", {
                      params: {
                        keywords: this.keywords,
                        city: this.city,
                        lng: this.longitude,
                        lat: this.latitude,
                        price: this.price,
                        rating: this.rating,
                        radius: this.radius,
                        type: this.res_type,
                      },
                    })
                    .then((response) => {
                      if (response.data.status == "success") {
                        this.page = 0;

                        this.results = response.data.data;
                        this.avg_charge = response.data.avg_charge;
                        this.total_count = response.data.total_count;
                        var i = 1;
                        let locations = [];
                        this.results.forEach((res) => {
                          var lat = parseFloat(res.location.address.coordinates[1]);

                          var lng = parseFloat(res.location.address.coordinates[0]);

                          var name = res.f_name;
                          var distance = (res.dist.calculated / 1000).toFixed(1) + "km";
                          if (lat != "" && lng != "") {
                            locations.push([name, lat, lng, distance, i]);
                            i++;
                          }
                        });

                        this.initMap(locations);
                        //alert(response.data.data.length);
                        if (parseInt(response.data.data.length) >= 10) {
                          $(".Loadbtn").show();
                          $(".Loadbtn").removeClass("hidediv");
                        } else {
                          $(".Loadbtn").addClass("hidediv");
                        }
                      } else {
                      }
                    })
                    //.then(response => this.results = response.data.data)
                    .catch((error) => {});*/
        },
        geoLiveLocation: function () {
            //live location
            var geocoder;
            navigator.geolocation.getCurrentPosition(
                function (position) {
                    var latitude = position.coords.latitude;
                    var longitude = position.coords.longitude;
                    $("#latitude").val(latitude);
                    $("#longtitude").val(longitude);

                    //get other data
                    var geocoder = new google.maps.Geocoder();
                    var latlng = new google.maps.LatLng(latitude, longitude);
                    geocoder.geocode({
                            latLng: latlng,
                        },
                        function (results, status) {
                            if (status == google.maps.GeocoderStatus.OK) {
                                if (results[1]) {
                                    console.log(results[0].address_components);
                                    //formatted address
                                    //find country name
                                    
                                    //console.log(results[0].address_components);
                                    var address_components = results[0].address_components;
                                    var components = {};
                                    jQuery.each(address_components, function (k, v1) {
                                        jQuery.each(v1.types, function (k2, v2) {
                                            components[v2] = v1.long_name;
                                        });
                                    });
                                    var city;
                                    var postal_code;
                                    var state;
                                    var country;

                                    if (components.locality) {
                                        city = components.locality;
                                    }

                                    if (!city) {
                                        city = components.administrative_area_level_1;
                                    }

                                    if (components.postal_code) {
                                        postal_code = components.postal_code;
                                    }

                                    if (components.administrative_area_level_1) {
                                        state = components.administrative_area_level_1;
                                    }

                                    if (components.country) {
                                        country = components.country;
                                    }

                                    var searchPincode = $("#searchPincode").text(postal_code);
                                    if (searchPincode == "") {
                                        $("#searchPincode").val(postal_code);
                                    }

                                    //address
                                    var add = results[0].formatted_address;
                                    var arr = add.split(',');
                                    var add_str = '';
                                    for (var i = 0; i < arr.length; ++i) {
                                        if (arr[i].indexOf('+') == -1) {
                                            add_str += arr[i] + ',';
                                        }
                                    }
                                    var address = add_str.slice(0, -1);
                                    $("#post_code").val(postal_code);
                                    var search_city = $("#searchTextField").val(
                                        address
                                    );
                                    if (search_city == "") {
                                        $("#searchTextField").val(city);
                                    }

                                    $("#city").val(city);
                                    $("#state").val(state);
                                    $("#country").val(country);
                                    $("#latitude").val(latitude);
                                    $("#longitude").val(longitude);
                                    $("#post_code").val(postal_code);
                                    sessionStorage.setItem("lattitude", latitude);
                                    sessionStorage.setItem("longitude", longitude);
                                    sessionStorage.setItem("address_location", address);
                                    sessionStorage.setItem("city", city);
                                    sessionStorage.setItem("state", state);
                                    sessionStorage.setItem("country", country);
                                    sessionStorage.setItem("pincode", postal_code);
                                    var path_url = $("#path_url").val();
                                    var path_type = $("#path_type").val();

                                    if (path_type == 3) {
                                        if (path_url == 'Patient Care at Home' || path_url == 'Family Physician' || path_url == 'Dermatology' || path_url == 'Obstetrics and Gynaecology' || path_url == 'Cardiology' || path_url == 'Psychiatry' || path_url == 'Dental' || path_url == 'Otolaryngology (ENT)' || path_url == 'Ophthalmology' || path_url == 'Gastroenterology' || path_url == 'Physical Therapy') {
                                            var ptype = 'Provider';
                                            if (path_url == 'Patient Care at Home') {
                                                var ptype = 'Service';
                                            }
                                            var p1 = "search?id=" + path_url + "&lat=" + latitude + "&long=" + longitude + "&city=" + city + "&state=" + state + "&pin=" + postal_code + "&country=" + country + "&type=" + ptype;

                                            window.open(p1, "_self");
                                        } else {
                                            window.location.reload();
                                        }

                                    }
                                    var keyword = $("#inlineFormInputGroupUsername").val();
                                    if (path_url == undefined) {
                                        window.location.reload();
                                    }
                                    var result = path_url.split("&");
                                    if (keyword != "") {
                                        if (path_type == 1) {
                                            window.open(path_url, "_blank");
                                        } else {
                                            var p1 =
                                                "search?id=" +
                                                keyword +
                                                "&lat=" +
                                                latitude +
                                                "&long=" +
                                                longitude +
                                                "&state=" +
                                                state +
                                                "&pin=" +
                                                postal_code +
                                                "&country=" +
                                                country +
                                                "&" +
                                                result[6];

                                            window.open(p1, "_self");
                                            /* alert(path_url);
                                                                        this.$router.push({ path_url })
                                                                        return true;*/
                                        }
                                    }

                                }
                            }
                        }
                    );
                },
                function (error) {
                    $('#errorModal1').modal('show');
                    console.log("The Locator was denied :(");
                }
            );
        },
    },
    components: {
        poppup,
        mobailfooter
    },
};
</script>
