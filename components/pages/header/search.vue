<template>
<section>

    <style>
        /*.pac-container {
    background-color: #fff;
    position: absolute!important;
    z-index: 1000;
    border-radius: 2px;
    border-top: 1px solid #d9d9d9;
    font-family: Arial, sans-serif;
    box-shadow: 0 2px 6px rgba(0, 0, 0, 0.3);
    -moz-box-sizing: border-box;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    overflow: hidden
}*/
        .location-search #searchTextField {
            border-right: 1px solid rgb(197, 197, 197);
            margin-left: -36px;
            padding-left: 41px;
            background: transparent;
        }
        .home_page .searchdrop li{
    justify-content:space-between;
}
        .pac-container {
            border-top-right-radius: 0px !important;
            border-bottom-right-radius: 10px !important;
            border-top-left-radius: 10px !important;
            border-bottom-left-radius: 10px !important;
            */
            /* /* width: 26.5% !important; */
            position: absolute;
            top: 51px;
            left: 0;
            right: 0;
            min-width: 26.60% !important;
            background: #fff;
            /* z-index: 99990 !important; */
            /*min-height: 250px;*/
            overflow: auto;
            /*height: 200px;*/
        }

        .pac-container:after {
            content: none !important;
        }

        .pac-logo:after {
            content: "";
            padding: 1px 1px 1px 0;
            height: 16px;
            text-align: right;
            display: block;
            background-image: url(https://maps.gstatic.com/mapfiles/api-3/images/powered-by-google-on-white3.png);
            background-position: right;
            background-repeat: no-repeat;
            background-size: 120px 14px;
        }

        .hdpi.pac-logo:after {
            background-image: url(https://maps.gstatic.com/mapfiles/api-3/images/powered-by-google-on-white3_hdpi.png);
        }

        .pac-item {
            cursor: default;
            padding: 0 5px;
            text-overflow: ellipsis;
            overflow: hidden;
            white-space: nowrap;
            line-height: 35px;
            text-align: left;
            font-size: 11px;
            color: #999;
            border: none;
        }

        /*.pac-icon{margin-top:10px;background-image: url(http://localhost:3000/images/lucation.svg);}*/
        /*
.pac-icon {
    width: 15px;
    height: 20px;
    margin-right: 7px;
    margin-top: 6px;
    display: inline-block;
    vertical-align: top;
    background-image: url(https://maps.gstatic.com/mapfiles/api-3/images/autocomplete-icons.png);
    background-size: 34px
}*/

        .hero-search .outer {
            left: 66px;
            width: 70%;
            overflow: hidden;
            height: 44px;
            margin-top: 4px;
        }

        .hero-search .card {
            width: 150px;
            padding: 10px 0;
            left: 5px;
            color: #c5c5c5;
            font-size: 15px;
            top: 0px;
            opacity: 0;
            pointer-events: none;
            position: absolute;
            border: none;
            animation: animate 15s linear infinite;
            animation-delay: calc(3s * var(--delay));
        }

        .hero-search .wrapper .card:last-child {
            animation-delay: calc(-3s * var(--delay));
        }

        .location-high {
            border: 3px solid red;
            border-radius: 8px 0px 0px 8px;
        }

        @keyframes animate {
            0% {
                opacity: 0;
                transform: translateY(100%) scale(0.5);
            }

            5%,
            20% {
                opacity: 0.4;
                transform: translateY(100%) scale(0.7);
            }

            25%,
            40% {
                opacity: 1;
                pointer-events: auto;
                transform: translateY(0%) scale(1);
            }

            45%,
            60% {
                opacity: 0.4;
                transform: translateY(-100%) scale(0.7);
            }

            65%,
            100% {
                opacity: 0;
                transform: translateY(-100%) scale(0.5);
            }
        }

        .hero-search .card .content {
            display: flex;
            align-items: center;
        }

        .pos-rel {
            position: relative;
        }

        .pos-ab {
            position: absolute;
        }

        .input-group input {
            z-index: 10;
            background-color: transparent;
        }

        #inlineFormInputGroupUsername:focus~.outer {
            display: none;
        }
        .vertical-center-4  {
            width: 100%;
            max-width: 600px; /* Change as needed */
            margin: 0 auto; /* Centering */
        }
        .vertical-center-4  img {
            width: 100% ;
            height: auto; /* Maintain aspect ratio */
        }
       .home_page .searchdrop .common-text{
        max-width:31% !important;
       }

    </style>
    <div class="hero-search home_page">
        <h1 class="text-left mb-3">
            <span class="under-line-for-home">Find & Compare </span> medical
            services near you
        </h1>

        <div class="two-search-part" :class="{ 'addClass': suggestions.length > 0 }">
            <div class="input-group location-search">
                <div class="input-group-text">
                    <img src="/images/lucation.svg" width="18" height="18" alt="" />
                </div>
                <input type="hidden" name="pos" value="" id="post_code" />
                <input type="hidden" name="city" value="" id="city" />
                <input type="hidden" name="state" value="" id="state" />
                <input type="hidden" name="country" value="" id="country" />
                <input type="hidden" name="latitude" value="" id="latitude" />
                <input type="hidden" name="longitude" value="" id="longitude" />
                <input type="text" class="form-control" id="searchTextField" ref="origin" placeholder="Enter Nearest Landmark, Area or PIN" style="border-right: 1px solid #c5c5c5" />
            </div>
            <div class="input-group show_seacr_box">
                <div class="input-group-text" id="serachclick">
                    <!-- <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 15 15" fill="none">
                        <path d="M13.9999 14L11.0093 11.004L13.9999 14ZM12.6666 6.99998C12.6666 8.50287 12.0696 9.94421 11.0069 11.0069C9.94415 12.0696 8.50281 12.6666 6.99992 12.6666C5.49703 12.6666 4.05569 12.0696 2.99298 11.0069C1.93027 9.94421 1.33325 8.50287 1.33325 6.99998C1.33325 5.49709 1.93027 4.05575 2.99298 2.99304C4.05569 1.93034 5.49703 1.33331 6.99992 1.33331C8.50281 1.33331 9.94415 1.93034 11.0069 2.99304C12.0696 4.05575 12.6666 5.49709 12.6666 6.99998Z" fill="white" stroke="#383838" stroke-linecap="round" />
                    </svg> -->
                    <img src="images/Vector.svg" alt="" width="15">
                    &nbsp;

                    <span class="text-blue text-search">Search For :</span>
                </div>
                <input type="text" class="form-control" id="inlineFormInputGroupUsername" v-model="keywords" @keyup.prevent="onQueryChange($event)" autocomplete="off" />
                <input type="hidden" id="path_url" value="">
                <input type="hidden" id="path_type" value="3">
                <div class="outer pos-ab" id="divToToggle" style="margin-left: 39px;">
                    <div class="card" style="--delay: -1">
                        <div class="content">Doctor</div>
                    </div>
                    <div class="card" style="--delay: 1">
                        <div class="content">Dr. Speciality</div>
                    </div>
                    <div class="card" style="--delay: 2">
                        <div class="content">Health Conditions</div>
                    </div>
                    <div class="card" style="--delay: 3">
                        <div class="content">Disease</div>
                    </div>
                    <div class="card" style="--delay: 4">
                        <div class="content">Doctor Services</div>
                    </div>
                    <div class="card" style="--delay: 5">
                        <div class="content">Nurse</div>
                    </div>
                    <div class="card" style="--delay: 5">
                        <div class="content">Clinic</div>
                    </div>
                    <div class="card" style="--delay: 6">
                        <div class="content">Hospital</div>
                    </div>
                    <div class="card" style="--delay: 7">
                        <div class="content">Nurse Services</div>
                    </div>
                </div>
                <div class="searchdrop" :class="{ 'd-none': !showSearchDrop }" v-if="suggestions.length > 0" @click="openpage">
                    <div class="ul">
                        <li v-for="result in suggestions" :key="result._id">
                            <img src="/images/Search.svg" alt="" />
                            <template v-if="result.url != null">
                                <template v-if="result.type == 'Nurse'">
                                    <router-link :to="'/' + result.url" :event="''" @click.native="calculateQueryParams('/'+result.url,'1',result.name)">{{
                      result.name
                    }}</router-link>
                                </template>
                                <template v-else>
                                    <router-link :to="'/' + result.url" :event="''" @click.native="calculateQueryParams('/'+result.url,'1',result.name)">{{
                      result.name
                    }}</router-link>
                                </template>
                            </template>
                            <template v-else>
                                <router-link :to="'/search?id=' + result.suggestion" :event="''" @click.native="calculateQueryParams('/search?id='+result.suggestion,'2',result.name)">{{ result.name }}
                                </router-link>
                            </template>
                            <span class="common-text">{{ result.type }}</span>
                        </li>
                    </div>
                </div>
                <div v-else class="searchdrop d-none else">
                    <ul>
                        <li style="background-color: transparent;">No results found</li>
                    </ul>
                </div>
            </div>
        </div>
        <!-- <span class="search_error_text" style="display: none">Please start by entering City, State or Zip</span> -->
        <!-- <span class="search_loc_error_text" style="display: none">Please enter nearest landmark, area or PIN.</span> -->
        <div class="advance-search">
            <div class="advance-wrap">
                <div class="text-grey roboto">
                    Explore your required category quickly <br />
                    more than <span class="text-light">10 speciality </span> you can
                    find
                </div>
                <div style="min-width: 186px" class="ex-width">
                    <div>
                        <a href="#" class="advance-cta" data-bs-toggle="modal" data-bs-target="#exampleModal">
                            <!-- <svg xmlns="http://www.w3.org/2000/svg" width="24" height="20.567" viewBox="0 0 24 20.567">
                                <g id="carbon_edit-filter" transform="translate(-0.938 -1.875)">
                                    <path id="Path_191" data-name="Path 191" d="M21.614,3.589H2.661V6.306l6.384,6.359.508.5v7.567H13V19.014h1.723v1.714a1.709,1.709,0,0,1-.5,1.212,1.728,1.728,0,0,1-1.218.5H9.553a1.728,1.728,0,0,1-1.218-.5,1.709,1.709,0,0,1-.5-1.212V13.873L1.446,7.522A1.71,1.71,0,0,1,.938,6.306V3.589a1.709,1.709,0,0,1,.5-1.212,1.728,1.728,0,0,1,1.218-.5H21.614Z" transform="translate(0 0)" fill="#363636" />
                                    <path id="Path_192" data-name="Path 192" d="M18.876,6.482,16.386,3.993a.83.83,0,0,0-1.178,0L7.5,11.709v3.659h3.659L18.876,7.66a.83.83,0,0,0,0-1.178Zm-8.4,7.227H9.159V12.39l4.149-4.149L14.627,9.56ZM15.8,8.39,14.478,7.071,15.8,5.752l1.319,1.319Z" transform="translate(5.816 1.703)" fill="#363636" />
                                </g>
                            </svg> -->
                            <img src="images/carbon_edit-filter.svg" alt="" width="25">
                            Quick Search
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="modal fade modal-of-quick-search" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered" style="max-width: 750px">
            <div class="modal-content">
                <button type="button" class="btn-close ms-auto" data-bs-dismiss="modal" aria-label="Close"></button>
                <div class="modal-body">
                    <div class="row">
                        <div class="col-md-12 mb-3 quick_serch">
                            <div class="text-light text-center pb-1 mb-2" style="border-bottom: 1px solid #4d6385">
                                <ul class="nav nav-pills mb-3" id="pills-tab" role="tablist">
                                    <li class="nav-item working" role="presentation">
                                        <button class="nav-link active opt" id="pills-home-tab" data-bs-toggle="pill" data-bs-target="#pills-home" type="button" role="tab" aria-controls="pills-home" aria-selected="true">
                                            OPD
                                        </button>
                                    </li>
                                    <li class="nav-item" role="presentation">
                                        <!-- <a class="Surguries" > -->

                                        <button class="Surguries nav-link" id="pills-profile-tab" data-bs-toggle="pill" data-bs-target="#pills-profile" type="button" role="tab" aria-controls="pills-profile" aria-selected="false">
                                            <!-- <button class="nav-link" id="pills-profile-tab" data-bs-toggle="pill" data-bs-target="#pills-profile" type="button" role="tab" aria-controls="pills-profile" aria-selected="false"> -->
                                            Surguries
                                        </button>
                                        <!-- </a> -->
                                    </li>
                                    <li class="nav-item" role="presentation">
                                        <!-- <a class="" data-bs-toggle="modal" data-bs-target="#commingSoonModal1" href="#"  data-bs-dismiss="modal" aria-label="Close"> -->
                                        <button class="Surguries nav-link" id="pills-profile-tab" data-bs-toggle="pill" data-bs-target="#pills-profile" type="button" role="tab" aria-controls="pills-profile" aria-selected="false">
                                            Lab Test
                                        </button>
                                        <!-- </a> -->
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div class="row flex-nowrap " style="overflow: hidden;">
                        <div class="modal-of-quick-search quick-search-for-mobile first pt-2" style="height: 400px;">
                            <ul class="listBlog">
                                <li v-if="this.latitude" class="close_puppup">
                                    <NuxtLink :to="this.Skin_Hair">
                                        <div class="menu-img-with-icon">
                                            <img src="/images/Skin_Hair.svg" alt="" />
                                            <span>Skin & Hair</span>
                                        </div>
                                    </NuxtLink>
                                </li>
                                <li v-else>
                                    <a href="#" class="add_location_class" data-url="Dermatology" data-bs-toggle="modal" data-bs-target="#exampleModal1" data-bs-dismiss="modal" aria-label="Close">
                                        <div class="menu-img-with-icon">
                                            <img src="/images/Skin_Hair.svg" alt="" />
                                            <span>Skin & Hair</span>
                                        </div>
                                    </a>
                                </li>

                                <li v-if="this.latitude" class="close_puppup">
                                    <NuxtLink :to="this.Gynaecology">
                                        <div class="menu-img-with-icon">
                                            <img src="/images/Gynaecology.svg" alt="" />
                                            <span>Gynaecology</span>
                                        </div>
                                    </NuxtLink>
                                </li>
                                <li v-else>
                                    <a href="#" class="add_location_class" data-url="Obstetrics and Gynaecology" data-bs-toggle="modal" data-bs-target="#exampleModal1" data-bs-dismiss="modal" aria-label="Close">
                                        <div class="menu-img-with-icon">
                                            <img src="/images/Gynaecology.svg" alt="" />
                                            <span>Gynaecology</span>
                                        </div>
                                    </a>
                                </li>
                                <li v-if="this.latitude" class="close_puppup">
                                    <NuxtLink :to="this.Heart">
                                        <div class="menu-img-with-icon">
                                            <img src="/images/Heart.svg" alt="" />
                                            <span>Heart</span>
                                        </div>
                                    </NuxtLink>
                                </li>
                                <li v-else>
                                    <a href="#" class=" add_location_class" data-url="Cardiology" data-bs-toggle="modal" data-bs-target="#exampleModal1" data-bs-dismiss="modal" aria-label="Close">
                                        <div class="menu-img-with-icon">
                                            <img src="/images/Heart.svg" alt="" />
                                            <span>Heart</span>
                                        </div>
                                    </a>
                                </li>
                                <li v-if="this.latitude" class="close_puppup">
                                    <NuxtLink :to="this.Depression">
                                        <div class="menu-img-with-icon">
                                            <img src="/images/Depression.svg" alt="" />
                                            <span>Depression</span>
                                        </div>
                                    </NuxtLink>
                                </li>
                                <li v-else>
                                    <a href="#" class=" add_location_class" data-url="Psychiatry" data-bs-toggle="modal" data-bs-target="#exampleModal1" data-bs-dismiss="modal" aria-label="Close">
                                        <div class="menu-img-with-icon">
                                            <img src="/images/Depression.svg" alt="" />
                                            <span>Depression</span>
                                        </div>
                                    </a>
                                </li>
                                <li v-if="this.latitude" class="close_puppup">
                                    <NuxtLink :to="this.Dental">
                                        <div class="menu-img-with-icon">
                                            <img src="/images/Dental.svg" alt="" />
                                            <span>Dental</span>
                                        </div>
                                    </NuxtLink>
                                </li>
                                <li v-else>
                                    <a href="#" class=" add_location_class" data-url="Dental" data-bs-toggle="modal" data-bs-target="#exampleModal1" data-bs-dismiss="modal" aria-label="Close">
                                        <div class="menu-img-with-icon">
                                            <img src="/images/Dental.svg" alt="" />
                                            <span>Dental</span>
                                        </div>
                                    </a>
                                </li>
                                <li v-if="this.latitude" class="close_puppup">
                                    <NuxtLink :to="this.Ear">
                                        <div class="menu-img-with-icon">
                                            <img src="/images/Ear.svg" alt="" />
                                            <span>Ear</span>
                                        </div>
                                    </NuxtLink>
                                </li>
                                <li v-else>
                                    <a href="#" class=" add_location_class" data-url="Otolaryngology (ENT)" data-bs-toggle="modal" data-bs-target="#exampleModal1" data-bs-dismiss="modal" aria-label="Close">
                                        <div class="menu-img-with-icon">
                                            <img src="/images/Ear.svg" alt="" />
                                            <span>Ear</span>
                                        </div>
                                    </a>
                                </li>
                                <li v-if="this.latitude" class="close_puppup">
                                    <NuxtLink :to="this.Eye">
                                        <div class="menu-img-with-icon">
                                            <img src="/images/Eye.svg" alt="" />
                                            <span>Eye</span>
                                        </div>
                                    </NuxtLink>
                                </li>
                                <li v-else>
                                    <a href="#" class="add_location_class" data-url="Ophthalmology" data-bs-toggle="modal" data-bs-target="#exampleModal1" data-bs-dismiss="modal" aria-label="Close">
                                        <div class="menu-img-with-icon">
                                            <img src="/images/Eye.svg" alt="" />
                                            <span>Eye</span>
                                        </div>
                                    </a>
                                </li>
                                <li v-if="this.latitude" class="close_puppup">
                                    <NuxtLink :to="this.Digestion">
                                        <div class="menu-img-with-icon">
                                            <img src="/images/Digestion.svg" alt="" />
                                            <span>Digestion</span>
                                        </div>
                                    </NuxtLink>
                                </li>
                                <li v-else>
                                    <a href="#" class=" add_location_class" data-url="Gastroenterology" data-bs-toggle="modal" data-bs-target="#exampleModal1" data-bs-dismiss="modal" aria-label="Close">
                                        <div class="menu-img-with-icon">
                                            <img src="/images/Digestion.svg" alt="" />
                                            <span>Digestion</span>
                                        </div>
                                    </a>
                                </li>
                                <li v-if="this.latitude" class="close_puppup">
                                    <NuxtLink :to="this.Physiotherapy">
                                        <div class="menu-img-with-icon">
                                            <img src="/images/Physiotherapy.svg" alt="" />
                                            <span>Physiotherapy</span>
                                        </div>
                                    </NuxtLink>
                                </li>
                                <li v-else>
                                    <a href="#" class="add_location_class" data-url="Physical Therapy" data-bs-toggle="modal" data-bs-target="#exampleModal1" data-bs-dismiss="modal" aria-label="Close">
                                        <div class="menu-img-with-icon">
                                            <img src="/images/Physiotherapy.svg" alt="" />
                                            <span>Physiotherapy</span>
                                        </div>
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div class="modal-of-quick-search quick-search-for-mobile d-flex justify-content-center align-items-center pt-2" style="height: 400px;">
                            <p style="color: #23355F !important; font-size: 1.5rem !important;">Coming Soon</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
</template>

<script>
var options = {
    mapTypeId: "roadmap",
    componentRestrictions: {
        country: "IN",
    },
};
import axios from "axios";
export default {
    data() {
        return {
            keywords: '',
            suggestions: [],
            latitude: null,
            longitude: null,
            postal_code: null,
            lat: null,
            lng: null,
            zip: null,
            search_city: null,
            verify_user: null,
            Skin_Hair: '',
            Gynaecology: '',
            Heart: '',
            Depression: '',
            Dental: '',
            Ear: '',
            Eye: '',
            Digestion: '',
            Physiotherapy: '',
            showSearchDrop: false,
        };
    },
    created() {
        this.verify_user = this.$route.query.verify_user;
    this.longitude = sessionStorage.getItem("longitude");
    this.latitude = sessionStorage.getItem("lattitude"); // corrected here
    this.address = sessionStorage.getItem("address_location");
    this.city = sessionStorage.getItem("city");
    this.state = sessionStorage.getItem("state");
    this.country = sessionStorage.getItem("country");
    this.pincode = sessionStorage.getItem("pincode");

    this.Skin_Hair = '/search?id=Dermatology&lat=' + this.latitude + '&long=' + this.longitude + '&city=' + this.city + '&state=' + this.state + '&pin=' + ((this.pincode != '') ? this.pincode : 'null') + '&country=' + this.country + '&type=Service';
    this.Gynaecology = '/search?id=Obstetrics and Gynaecology&lat=' + this.latitude + '&long=' + this.longitude + '&city=' + this.city + '&state=' + this.state + '&pin=' + ((this.pincode != '') ? this.pincode : 'null') + '&country=' + this.country + '&type=Service';
    this.Heart = '/search?id=Cardiology&lat=' + this.latitude + '&long=' + this.longitude + '&city=' + this.city + '&state=' + this.state + '&pin=' + ((this.pincode != '') ? this.pincode : 'null') + '&country=' + this.country + '&type=Service';
    this.Depression = '/search?id=Psychiatry&lat=' + this.latitude + '&long=' + this.longitude + '&city=' + this.city + '&state=' + this.state + '&pin=' + ((this.pincode != '') ? this.pincode : 'null') + '&country=' + this.country + '&type=Service';
    this.Dental = '/search?id=Dental&lat=' + this.latitude + '&long=' + this.longitude + '&city=' + this.city + '&state=' + this.state + '&pin=' + ((this.pincode != '') ? this.pincode : 'null') + '&country=' + this.country + '&type=Service';
    this.Ear = '/search?id=Otolaryngology (ENT)&lat=' + this.latitude + '&long=' + this.longitude + '&city=' + this.city + '&state=' + this.state + '&pin=' + ((this.pincode != '') ? this.pincode : 'null') + '&country=' + this.country + '&type=Service';
    this.Eye = '/search?id=Ophthalmology&lat=' + this.latitude + '&long=' + this.longitude + '&city=' + this.city + '&state=' + this.state + '&pin=' + ((this.pincode != '') ? this.pincode : 'null') + '&country=' + this.country + '&type=Service';
    this.Digestion = '/search?id=Gastroenterology&lat=' + this.latitude + '&long=' + this.longitude + '&city=' + this.city + '&state=' + this.state + '&pin=' + ((this.pincode != '') ? this.pincode : 'null') + '&country=' + this.country + '&type=Service';
    this.Physiotherapy = '/search?id=Physical Therapy&lat=' + this.latitude + '&long=' + this.longitude + '&city=' + this.city + '&state=' + this.state + '&pin=' + ((this.pincode != '') ? this.pincode : 'null') + '&country=' + this.country + '&type=Service';


},
    mounted() {

    $('.close_puppup').click(function() {
        $('#exampleModal').modal('hide')
    })

        $("#city").val(this.state);
        $("#state").val(this.state);
        $("#country").val(this.country);
        $("#latitude").val(this.latitude);
        $("#longitude").val(this.longitude);
        $("#post_code").val(this.pincode);
        $('#searchTextField').val(this.address);
        //verify user
        $('#serachclick').click(function () {
            $("#inlineFormInputGroupUsername").focus();
        })

        $(".Surguries").click(function () {
            $('.first').addClass('d-none')
        })

        $(".opt").click(function () {
            $('.first').removeClass('d-none')
        })

        $(".searchdrop").hide()
        if (this.verify_user != undefined) {
            axios
                .get(process.env.API_BASE_URL + "verify_user", {
                    params: {
                        verify_user: this.verify_user,
                    },
                })
                .then((response) => {
                    if (response.data.status == "success") {
                        this.$router.push("/");
                        this.$toast.success(response.data.message);
                    } else {}
                });
        }
        //live location
        var geocoder;
        navigator.geolocation.getCurrentPosition(
            function (position) {
                var latitude = position.coords.latitude;
                var longitude = position.coords.longitude;
                $("#latitude").val(latitude);
                $("#longitude").val(longitude);

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
                                    postal_code = (components.postal_code != undefined) ? components.postal_code : '';
                                }

                                if (components.administrative_area_level_1) {
                                    state = components.administrative_area_level_1;
                                }

                                if (components.country) {
                                    country = components.country;
                                }

                                $("#city").val(city);
                                $("#state").val(state);
                                $("#country").val(country);
                                $("#latitude").val(latitude);
                                $("#longitude").val(longitude);
                                $("#post_code").val(postal_code);
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

                                $("#searchTextField").val(address);
                                sessionStorage.setItem("lattitude", latitude);
                                sessionStorage.setItem("longitude", longitude);
                                sessionStorage.setItem("address_location", address);
                                sessionStorage.setItem("city", city);
                                sessionStorage.setItem("state", state);
                                sessionStorage.setItem("country", country);
                                sessionStorage.setItem("pincode", postal_code);

                            }
                        }
                    }
                );
            },
            function (error) {
                console.log("The Locator was denied :(");
            }
        );

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
            console.log(address_components);
            if (components.locality) {
                city = components.locality;
            }

            if (!city) {
                city = components.administrative_area_level_1;
            }

            if (components.postal_code) {
                postal_code = (components.postal_code != undefined) ? components.postal_code : '';
            }

            if (components.administrative_area_level_1) {
                state = components.administrative_area_level_1;
            }

            if (components.country) {
                country = components.country;
            }

            if (state == undefined) {
                $('#searchTextField').val("");
                $(".search_loc_error_text").show();
                $('.location-search').addClass('location-high');
            } else {
                $('.location-search').removeClass('location-high');
                $(".search_loc_error_text").hide();
            }
            $("#city").val(city);
            $("#state").val(state);
            $("#country").val(country);
            $("#latitude").val(latitude);
            $("#longitude").val(longitude);
            $("#post_code").val(postal_code);
            $('.search_error_text').hide();
            //$("#inlineFormInputGroupUsername").val("");
            $(".searchdrop").show();
            $(".two-search-part").addClass("addClass");

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

            this.lattitude = latitude;
            this.lattitude = latitude;
            /*this.$cookies.set('lattitude', latitude);
            this.$cookies.set('longitude', longitude);
            this.$cookies.set('address', address);
            this.$cookies.set("city", city);
            this.$cookies.set("state", state);
            this.$cookies.set("country", country);
            this.$cookies.set("pincode", postal_code);*/
            var path_url = $('#path_url').val();
            var path_type = $('#path_type').val();

            var keyword = $('#inlineFormInputGroupUsername').val();

            var result = path_url.split('&');

            if (keyword != '') {
                if (path_type == 1) {
                    window.open(path_url, '_blank');
                } else {
                    var p1 = 'search?id=' + keyword + '&lat=' + latitude + '&long=' + longitude + '&state=' + state + '&pin=' + postal_code + '&country=' + country + '&' + result[6];

                    window.open(p1, '_self');
                    /* alert(path_url);
                    this.$router.push({ path_url })
                    return true;*/
                }
            }

        });

        //on search

        $(document).ready(function () {
            var myDiv = $(".searchdrop");
            var myInput = $(".show_seacr_box");

            myInput.click(function (event) {
                let searchdiv = $(".searchdrop").show()
                event.stopPropagation();

                if (searchdiv) {
                    // $(".two-search-part").addClass("addClass");
                } else {
                    $(".two-search-part").removeClass("addClass");
                }
            });

            myDiv.click(function (event) {
                myDiv.show()
                event.stopPropagation();
            });
            $(document).click(function (event) {
                if (!myDiv.is(event.target) && myDiv.has(event.target).length === 0) {
                    $(".home_page .searchdrop").hide();
                    $(".two-search-part").removeClass("addClass");
                    // console.log("hide");
                }
            });
        });

        $("#inlineFormInputGroupUsername").focus(function () {
            var search_location = $("#searchTextField").val();

            if (window.innerWidth <= 800 && window.innerHeight <= 600) {
                //$("#exampleModal1").modal("show");
            } else {
                if (search_location == "") {
                    $('.location-search').addClass('location-high');
                    $(".search_error_text").show();
                    $(".search_loc_error_text").hide();
                } else {
                    $('.location-search').removeClass('location-high');
                    $(".search_error_text").hide();
                }
            }

            $(".mrq").hide();
            $(".text-search").hide();
        });
        $("#inlineFormInputGroupUsername").focusout(function () {
            var sug = $("#inlineFormInputGroupUsername").val();
            if (sug != "") {
                $(".text-search").hide();
                $(".mrq").hide();
            } else {
                $(".text-search").show();
                $(".mrq").show();
            }
        });
    },

    // watch: {
    //     keywords(after, before) {
    //         if (this.keywords.length >= 3) {
    //             this.fetch();
    //             $('.searchdrop').removeClass('d-none')
    //         }
    //     },
    // },
    methods: {
        calculateQueryParams(path, type, name, event) {
            var search_location = $("#searchTextField").val();
            $('#inlineFormInputGroupUsername').val(name);
            $('#path_url').val(path);
            $('#path_type').val(type);
            if (search_location == "") {
                if (window.innerWidth <= 800) {
                    $("#exampleModal1").modal("show");
                    $(".search_error_text").hide();
                } else {

                    if (search_location == "") {
                        $('.location-search').addClass('location-high');
                        $(".search_loc_error_text").hide();
                        $(".search_error_text").show();
                    } else {
                        $('.location-search').removeClass('location-high');
                        $(".search_error_text").hide();
                    }
                    return false;
                }
            } else {

                /*const query = {
                  foo: performance.now(),
                }*/
                if (type == 1) {
                    window.open(path, '_blank');
                } else {

                    this.$router.push({
                        path
                    })
                    return true;
                }

            }

        },
        fetch(keywords) {
            var citydata = $("#city").val();
            var statedata = $("#state").val();
            var country = $("#country").val();
            var latdata = $("#latitude").val();
            var lngdata = $("#longitude").val();
            var post_codedata = $("#post_code").val();

            axios.get(process.env.API_BASE_URL + "get_suggestions", {
                    params: {
                        keywords: keywords,
                        city: citydata,
                        state: statedata,
                        country: country,
                        post_code: post_codedata,
                        lng: lngdata,
                        lat: latdata,
                    },
                })
                .then((response) => {
                    this.suggestions = response.data.data
                    if(response.data.data == ''){
                        $('.else').removeClass("d-none")
                    }else{
                        $('.else').addClass("d-none") 
                    }
                })
                .catch((error) => {
                    $('.else').removeClass("d-none")

                });
        },

        onQueryChange(event) {
            var divToToggle = document.getElementById("divToToggle");
            // can be this.query.length === 0 as well
            // alert(1)
            // setTimeout(() => {
            //     $('.two-search-part').addClass("addClass")
            //     this.showSearchDrop = true;

            //     this.fetch();
            // }, 2000);

            if (event.target.value.trim().length === 0) {
                this.response = null;
                $('.two-search-part').removeClass("addClass")
            } else {
                divToToggle.style.display = "none";
                $('.two-search-part').addClass("addClass")
            }
             let keywords = event.target.value
            if (keywords.length >= 3) {
                this.fetch(keywords);
                this.showSearchDrop = true;
                $('.two-search-part').addClass("addClass")
            } else {
                this.showSearchDrop = false;
                $('.two-search-part').removeClass("addClass")
                $('.else').addClass("d-none")

            }
        },
        openpage() {
            localStorage.setItem('openpage', 1);
        },
    },
};
</script>
