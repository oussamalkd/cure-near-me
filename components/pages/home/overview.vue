<template>
<div class="overview">
    <section class="btmsection ">
        <div class="container testimonial text-center ">
            <h2 class="text-center text-blue">HealthCare Providers At Home! </h2>
            <p class="text-center" style="color: #8892A8;" s="">Compare Reviews, Popularity, Distance, Price, Facilities & many more.</p>

            <div class="news-boxsB fullwth">
                <div class="news-img">
                    <img src="images/Dr_card.webp" alt="Dr_card" class="img-fluid" height="405" width="362">
                </div>
                <div class="news-details drb">
                    <h4 class="text-blue text-left">Doctors<a class="btn btniconsd" @click="notifyParent('Home Visit -Family Physician', 'Provider')">
                            <img src="images/Search.svg" alt="Search" width="18" height="18">
                        </a></h4>
                    <p class="text-left">Find them Speciality or Treatment wise </p>
                </div>
            </div>
            <div class="news-boxsB fullwth">
                <div class="news-img">
                    <img src="images/Nurse_card.webp" class="img-fluid" alt="Nurse_card" height="405" width="362">
                </div>
                <div class="news-details drb">
                    <h4 class="text-blue text-left">Nurses <a class="btn btniconsd" @click="notifyParent('Patient Care at Home', 'Provider')">
                            <img src="images/Search.svg" alt="Search" width="18" height="18">
                        </a></h4>
                    <p class="text-left">Ge the best Services at Home!</p>
                </div>
            </div>
            <div class="news-boxsB fullwth">
                <div class="news-img">
                    <img src="images/Phrmacy_card.webp" class="img-fluid" alt="Phrmacy_card.webp" height="405" width="362">
                </div>
                <div class="news-details drb">
                    <h4 class="text-blue text-left">Coming Soon! <a class="btn btniconsd" data-bs-toggle="modal" data-bs-target="#commingSoonModal1" href="#">
                            <img src="images/Search.svg" alt="Search" width="18" height="18">
                        </a></h4>
                    <p class="text-left">Get ordered Medicines at Home.</p>
                </div>
            </div>
        </div>
    </section>
    <section class="btmsection desktopview">
        <div class="container testimonial text-center ">
            <h2 class="text-center text-blue">Health tip of the week </h2>
            <p class="text-center" style="color: #8892A8;" s="">From the Experts to Ensure that you're getting Value added Advice!</p>
            <div class="HealthBoxs">
                <div class="news-boxsB healthBlog bg-imgl">
                    <div class="news-details drb left">
                        <div class="Blogsdr right">
                            <h4 class="text-blue text-left">7 Iron Rich Drinks to Boost Your Hemoglobin </h4>
                            <div class="healthlist">
                                <ul>
                                    <li>DO's
                                    </li>
                                    <li>Drink water when you sweat. Drink water to keep yourself hydrated.</li>
                                    <li style="margin-top: 10px;">DON'Ts</li>
                                    <li>Avoid drinking water while standing because this can cause arthritis.</li>
                                </ul>
                                <p></p>
                                <a class="linkread left" data-bs-toggle="modal" data-bs-target="#commingSoonModal1" href="#">Read more</a>
                            </div>
                        </div>
                        <div class="news-img">
                            <div class="getregleft">
                                <h4 class="text-left"> Get <br>
                                    Regular Updates via </h4>

                            </div>
                            <NuxtLink to="/register" class="btn btnblogs left">
                                <div>
                                    <span>Sign Up</span>
                                </div>
                            </NuxtLink>
                            <!-- <a class="btn btnblogs left" data-bs-toggle="modal" data-bs-target="#commingSoonModal1" href="#">Sign up</a> -->
                            <!--img src="images/diet_pc.png" class="img-fluid " alt=""-->
                        </div>
                    </div>
                </div>
                <div class="news-boxsB healthBlog bg-imgr">
                    <div class="news-details drb">
                        <div class="Blogsdr left">
                            <h4 class="text-blue text-left">Choose your at-home workout space</h4>
                            <div class="healthlist" style="position: relative;">
                                <ul>
                                    <li>DO's
                                    </li>
                                    <li>Stand with your feet shoulder-width apart and your arms at your sides.</li>
                                    <li style="margin-top: 10px;">DON'Ts</li>
                                    <li>Don’t let your knee extend past your foot, always keep the calf straight. This compromises the movement and puts excess pressure on the knees.</li>
                                </ul>
                                <a class="linkread" data-bs-toggle="modal" data-bs-target="#commingSoonModal1" href="#" style="position: absolute; right: 5px; bottom: -55px;"> Read more</a>
                            </div>
                        </div>
                        <div class="news-img">
                            <a class="btn btnblogs right" data-bs-toggle="modal" data-bs-target="#commingSoonModal1" href="#"> Blogs</a>
                            <!--img src="images/yoga_lady_pc.png" class="img-fluid " alt=""-->
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <section class="btmsection mobileview">
        <div class="container testimonial text-center ">
            <h2 class="text-center text-blue">Health tip of the week </h2>
            <p class="text-center" style="color: #8892A8;" s="">From the Experts to Ensure that you're getting Value added Advice!</p>
            <div class="news-boxsB healthBlog">

                <div class="news-details ">
                    <h4 class="text-blue text-left">7 Iron Rich Drinks to Boost Your Hemoglobin </h4>

                    <div class="healthlist">
                        <ul>
                            <li>DO's
                            </li>
                            <li>Drink water when you sweat. Drink water to keep yourself hydrated.</li>
                            <li style="margin-top: 10px;">DON'Ts</li>
                            <li>Avoid drinking water while standing because this can cause arthritis.</li>
                        </ul>
                        <p></p>
                        <a class="linkread" data-bs-toggle="modal" data-bs-target="#commingSoonModal1" href="#"> Read more</a>
                    </div>

                </div>
                <div class="news-img">
                    <div class="getregleft">
                        <NuxtLink to="/register" class="btn btnblogs left">
                            <div>
                                <span>Sign Up</span>
                            </div>
                        </NuxtLink>
                        <!-- <a class="btn btnblogs left" data-bs-toggle="modal" data-bs-target="#commingSoonModal1" href="#">Sign up</a> -->
                        <h4 class="text-left"> Get <br>
                            Regular Updates via </h4>

                    </div>
                    <img src="images/diet_mob.webp" class="img-fluid bdrrd" alt="diet_mob" height="54" width="351">
                </div>

            </div>
            <div class="news-boxsB healthBlog">

                <div class="news-details">
                    <h4 class="text-blue text-left">Choose your at-home workout space</h4>

                    <div class="healthlist">
                        <ul>
                            <li>DO's
                            </li>
                            <li>Stand with your feet shoulder-width apart and your arms at your sides.</li>
                            <li style="margin-top: 10px;">DON'Ts</li>
                            <li>Don’t let your knee extend past your foot, always keep the calf straight. This compromises the movement and puts excess pressure on the knees.</li>
                        </ul>
                        <a class="linkread" data-bs-toggle="modal" data-bs-target="#commingSoonModal1" href="#"> Read more</a>
                    </div>

                </div>
                <div class="news-img">
                    <a class="btn btnblogs right" data-bs-toggle="modal" data-bs-target="#commingSoonModal1" href="#"> Blogs</a>
                    <img src="images/yoga_lady_mob.webp" class="img-fluid bdrrd" alt="yoga_lady_mob" height="54" width="351">
                </div>

            </div>

        </div>

    </section>
    <div class="modal fade modal-of-quick-search Locationaccees" id="exampleModal2" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered" style="max-width: 750px">
            <div class="modal-content modal-blur modelWhite">
                <div class="modal-body">
                    <button type="button" class="bg-none ms-auto" data-bs-dismiss="modal" aria-label="Close">
                        <img src="/images/Close_btn.svg" alt="">
                    </button>
                    <div class="modal-body">
                        <div class="a-popover-wrapper" aria-busy="false">
                            <header class="a-popover-header Location">
                                <p class=" roboto text-blue">Location access required </br> To show medical services near you</p>
                                <!--button data-action="a-popover-close" class=" a-button-close-a11y a-button-close a-declarative" aria-label="Close"><i class="a-icon a-icon-close"></i></button-->
                            </header>
                            <div class="textBlog">
                                <!--p class="mb-0 text-blue roboto mb-3">Select a delivery location to see product availability and delivery options</p-->
                                <div v-if="$auth.loggedIn"></div>
                                <div v-else>
                                    <div @click="shin_in_page">
                                        <a class="cta">Sign in to see your addresses</a>
                                    </div>
                                    <div class="a-divider a-divider-break a-spacing-top-base">
                                        <h5>OR</h5>
                                    </div>
                                </div>
                                <div class="locationForm">
                                    <div class="a-column a-span12">
                                        <!-- <input class="form-control" type="text"  id="GLUXZipUpdateInput" aria-label="or enter an Indian pincode" data-action="GLUXPostalInputAction" placeholder="Enter Nearest Landmark, Area or PIN" /> -->
                                        <input class="form-control searchTextField_two" type="text" ref="location" id="searchTextField" aria-label="or enter an Indian pincode" data-action="GLUXPostalInputAction" />
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
                        </div>

                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
</template>

<script>
var options = {
    mapTypeId: "roadmap",
    componentRestrictions: {
        country: "IN",
    },
};
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
        keywords: null,
    }),
    mounted() {
        this.latitude = sessionStorage.getItem("lattitude");
        this.longitude = sessionStorage.getItem("longitude");
        this.address = sessionStorage.getItem("address_location");
        this.city = sessionStorage.getItem("city");
        this.state = sessionStorage.getItem("state");
        this.country = sessionStorage.getItem("country");
        this.pincode = sessionStorage.getItem("pincode");

        //auto complete location
        //Auto complete location
        const originAutocomplete = new google.maps.places.Autocomplete(
            this.$refs["location"],
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
                postal_code = "";
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
            sessionStorage.setItem("lattitude", latitude);
            sessionStorage.setItem("longitude", longitude);
            sessionStorage.setItem("address_location", address);
            sessionStorage.setItem("city", city);
            sessionStorage.setItem("state", state);
            sessionStorage.setItem("country", country);
            sessionStorage.setItem("pincode", postal_code);
            var path_url = $("#path_url").val();
            var path_type = $("#path_type").val();
            this.Nearest_Landmark = address
            //    alert(this.Nearest_Landmark)
            var keyword = $("#inlineFormInputGroupUsername").val();

            // if (path_type == 3) {
            //     window.location.reload();
            // }
            // var result = path_url.split("&");

            // if (keyword != "") {
            $('#exampleModal2').modal('hide')

            this.$router.push(
                "/search?id=" +
                this.keywords +
                "&lat=" +
                this.latitude +
                "&long=" +
                this.longitude +
                "&city=" +
                city +
                "&state=" +
                state +
                "&pin=" +
                postal_code +
                "&country=" +
                this.country +
                "&type=" +
                this.res_type +
                ""
            );
            // } else {
            //     $(".address_live").html(place.formatted_address);
            //     $("#exampleModal1").modal("hide");
            //     $("#dismiss").trigger("click");
            //     $("#inlineFormInputGroupUsername").focus();
            // }

        });

    },
    methods: {
        shin_in_page(){
            this.$router.push('/login')
            $('#exampleModal1').modal('hide')
        },
        geoLiveLocation: function () {
            //live location
            setTimeout(() => {
                this.Nearest_Landmark = sessionStorage.getItem('address_location')
            }, 1000);
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
                                    // console.log(results[0].address_components);
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
                                    var search_city = $("#searchTextField").val(address);
                                    if (search_city == "") {
                                        $("#searchTextField").val(city);
                                    }
                                    // console.log(address)
                                    // this.patient_address = address
                                    // this.Nearest_Landmark = address
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
                                    // var path_url = $("#path_url").val();
                                    // var path_type = $("#path_type").val();

                                    // if (path_type == 3) {
                                    //     window.location.reload();
                                    // }
                                    var keyword = $("#inlineFormInputGroupUsername").val();
                                    // console.log("path_url", path_url);
                                    // if (path_url === undefined) {
                                    //     // console.log("path_url1", path_url);
                                    //     window.location.reload;
                                    // }

                                    // if (sug != '') {
                                    //     this.keywords = sug;
                                    //     this.res_type = res_type;
                                    // }
                                }
                            }
                        }
                    );
                },
                function (error) {
                    console.log("The Locator was denied :(");
                    $('#errorModal1').modal('show');
                }
            );
        },

        notifyParent(sug, res_type) {
            if (sug != '') {
                this.keywords = sug;
                this.res_type = res_type;
            }
            if (this.longitude == null) {
                $('#exampleModal2').modal('show')
            } else {
                this.$router.push(
                    "/search?id=" +
                    this.keywords +
                    "&lat=" +
                    this.latitude +
                    "&long=" +
                    this.longitude +
                    "&city=" +
                    this.city +
                    "&state=" +
                    this.state +
                    "&pin=" +
                    this.postal_code +
                    "&country=" +
                    this.country +
                    "&type=" +
                    this.res_type +
                    ""
                );
            }
        }
    }
}
</script>
