<template>
<div>
    <main>
        <div class="loader">
            <div class="loader-ele"></div>
        </div>
        <div class="container wrapper-of-box p-0 doctor_page">
            <div class="top-banner-section">

                <div class="back-and-edit pl-pr pt-4">
                    <input id="path_type" type="hidden" value="3" />
                    <input id="slug1" type="hidden" :value="slug1" />
                    <input id="slug2" type="hidden" :value="slug2" />
                    <input type="hidden" id="doctor_id" :value="doctor_id">
                    <NuxtLink type="button" class="btn back-btn" :to="this.routeinserach" v-if="this.openpage == 2">
                        <img src="/images/left-arrow-svgrepo-com.svg" width="30" height="20" alt="" />
                        Back
                    </NuxtLink>
                    <NuxtLink type="button" class="btn back-btn" to="/" v-else-if="this.openpage == 1">
                        <img src="/images/left-arrow-svgrepo-com.svg" width="30" height="20" alt="" />
                        Back
                    </NuxtLink>
                    <NuxtLink type="button" class="btn back-btn" to="/" v-else>
                        <img src="/images/left-arrow-svgrepo-com.svg" width="30" height="20" alt="" />
                        Back
                    </NuxtLink>
                </div>
                <div class="banner-for-top">
                    <!-- <NuxtImg src="/images/dr-profile-banner.webp" quality="80" width="" height="200" /> -->
                    <img src="/images/dr-profile-banner.webp" class="img-fluid" alt="dr-profile-banner" width="1320" height="262" />

                </div>
            </div>
            <div class="main-wrapper-for-dr-profile pl-pr doctor">
                <div class="dr-profile-and-details">
                    <div class="left-dr-profile">

                        <div class="dr-main-image">
                            <div v-if="results.doctor_profile">
                                <img :src="results.doctor_profile" v-bind:alt="results.f_name" width="200" height="200" class="img-fluid" />
                            </div>
                        </div>
                        <div class="rating">
                            <img src="/images/star.svg" width="14" height="14" alt="star" />
                            <img src="/images/star.svg" width="14" height="14" alt="star" />
                            <img src="/images/star.svg" width="14" height="14" alt="star" />
                            <img src="/images/star.svg" width="14" height="14" alt="star" />
                            <img src="/images/star.svg" width="14" height="14" alt="star" />
                        </div>
                        <div class="rating-count blue-text text-center">{{randomNumber}} Review</div>
                    </div>
                    <div class="dr-right-details">
                        <h1 class="text-blue mb-0">
                            {{ results.title }} {{ results.f_name }}
                            {{ results.l_name }}
                            <span class="dr-specialist text-blue ovhide3">
                                {{ results.speciality }}
                            </span>
                        </h1>
                        <div class="more-details-of-doctor">
                            <div class="more-detail-box">
                                <div class="more-detal-icon">
                                    <img src="/images/lucation.svg" width="22" height="22" alt="" />
                                </div>
                                <div class="more-details-text ovhide3">
                                    <template v-if="this.clinic_primary_address.name">{{ this.clinic_primary_address.name }} </template> - {{ this.clinic_primary_address.clinic_address }}

                                </div>
                            </div>
                            <div class="more-detail-box">
                                <div class="more-detal-icon">
                                    <img src="/images/clarity_map-line.svg" width="18" height="18" alt="clarity_map-line" />
                                </div>
                                <div class="more-details-text">
                                    <template v-if="results.distance > 0">
                                        {{ results.distance }} Km from your Location
                                    </template>
                                    <template v-else>
                                        <div class="location_display">
                                            Location detail not available
                                        </div>
                                    </template>
                                    <div class="btn-for-locate-map mt-2" v-if="this.clinic_primary_address.map_url">
                                        <a target="_blank" :href="this.clinic_primary_address.map_url" class="btn">
                                            <img src="/images/carbon_airport-location.svg" class="carbonclr" width="8" height="8" alt="carbon_airport-location" />
                                            Open in Map
                                        </a>
                                    </div>
                                </div>
                            </div>

                            <div class="more-detail-box">
                                <div class="more-detal-icon">
                                    <img src="/images/clarity_alarm-clock-outline.svg" width="18" height="18" alt="clarity_alarm-clock-outline" />
                                </div>
                                <div class="more-details-text">
                                    <template v-if="
                        clinic_primary_address.today_time &&
                        clinic_primary_address.today_time.length > 0
                      ">
                                        <div v-for="(todaytime, index) in clinic_primary_address.today_time" :key="index">
                                            {{ todaytime.from_time }} To {{ todaytime.to_time }} OPD
                                            <!-- <br /> -->
                                        </div>
                                    </template>
                                    <template v-else>
                                        <div>No slots available</div>
                                    </template>
                                </div>
                            </div>

                        </div>
                        <div class="bottom-cta mt-4 d-none d-md-flex">
                            <a class="btn" @click="share">
                                <!-- <a class="btn" data-bs-toggle="modal" data-bs-target="#commingSoonModal1" href="#"> -->
                                <img src="/images/bi_share.svg" width="15" height="15" alt="" />
                                Share
                            </a>
                            <a href="#" class="btn" id="copy" tooltip="Copy to clipboard">
                                <img src="/images/Group12.svg" width="15" height="15" alt="" />
                                {{ results.country_mobile_code }} {{ results.contact_no }}
                            </a>
                            <a href="#" class="btn" id="addnetwork" v-on:click="addDoctorsNewWork(1)" v-if="$auth.loggedIn ">
                                <img src="/images/connections.svg" width="15" height="15" alt="" />
                                <input type="hidden" name="user_id" :value="$auth.user.data.id">
                                <input type="hidden" name="is_add" id="is_add" :value="isAdd">
                                <input type="hidden" name="doctor_id" :value="this.doctor_id">
                                <span>Add To Network</span>
                            </a>
                            <a href="#" class="btn notlogin" id="addnetwork" v-else>
                                <img src="/images/connections.svg" width="15" height="15" alt="" />
                                <span>Add To Network </span>
                            </a>
                        </div>
                    </div>
                </div>
                <div class="bottom-cta mt-4 d-flex d-md-none justify-content-end" style="margin-top: 0px !important;">
                    <div class="websharebtn">
                        <a class="btn" @click="share">

                            <!-- <a class="btn" data-bs-toggle="modal" data-bs-target="#commingSoonModal1" href="#"> -->
                            <img src="/images/bi_share.svg" width="15" height="15" alt="" />
                            Share
                        </a>
                    </div>
                    <div style="width: 65%" class="websharenumber">
                        <!-- <a :href="'tel:' + clinic_primary_address.contact_no"class="btn me-2"> -->
                        <a :href="'tel:' + results.contact_no " class="btn me-1">
                            <img src="/images/Group12.svg" width="15" height="15" alt="" />
                            {{ results.country_mobile_code}} {{ results.contact_no }}
                            <!-- {{ this.clinic_primary_address.contact_no }} -->
                        </a>
                        <a href="#" class="btn" id="addnetwork" v-on:click="addDoctorsNewWork(1)" v-if="$auth.loggedIn ">
                            <img src="/images/connections.svg" width="15" height="15" alt="" />
                            <input type="hidden" name="user_id" :value="$auth.user.data.id">
                            <input type="hidden" name="is_add" id="is_add" :value="isAdd">
                            <input type="hidden" name="doctor_id" :value="this.doctor_id">
                            <span>Add To Network</span>
                        </a>
                        <a href="#" class="btn notlogin" id="addnetwork" v-else>
                            <img src="/images/connections.svg" width="15" height="15" alt="" />
                            <span>Add To Network </span>
                        </a>
                    </div>
                </div>
            </div>
            <ul class="nav nav-pills mb-3 common-innerpage-tabs dr-profile-mobile-tabs d-flex d-md-none" id="pills-tab" role="tablist">
                <li class="nav-item" role="presentation">
                    <!-- <NuxtLink :to="`/${slug1}`" > -->
                    <button class="nav-link active pills-home-tab" id="pills-home-tab" data-bs-toggle="pill" data-bs-target="#pills-home" type="button" role="tab" aria-controls="pills-home" aria-selected="true">
                        Overview
                    </button>
                    <!-- </NuxtLink> -->
                </li>
                <span class="separator"></span>
                <li class="nav-item" role="presentation">
                    <!-- <NuxtLink :to="`/${slug1}/clinic`" > -->
                    <button class="nav-link pills-profile-tab" id="pills-profile-tab" data-bs-toggle="pill" data-bs-target="#pills-profile" type="button" role="tab" aria-controls="pills-profile" aria-selected="false">
                        Clinic
                    </button>
                    <!-- </NuxtLink> -->
                </li>
                <span class="separator"></span>
                <li class="nav-item" role="presentation">
                    <!-- <a href="#" class="" data-bs-toggle="modal" data-bs-target="#commingSoonModal1"> -->
                    <button class="nav-link " id="pills-contact-tab" v-on:click="reviewfunction" data-bs-toggle="pill" data-bs-target="#pills-contact" type="button" role="tab" aria-controls="pills-contact" aria-selected="false">
                        <!-- <button class="nav-link click_button pills-contact-tab2" id="pills-contact-tab " data-bs-toggle="" data-bs-target="#pills-contact" type="button" role="tab" aria-controls="pills-contact" aria-selected="false"> -->
                        Review
                    </button>
                    <!-- </a> -->
                </li>
            </ul>
            <div class="pl-pr my-5 d-none d-md-block">
                <hr />
            </div>
            <div class="more-details-bottom-part pl-pr mobile-padding review tabHospital">
                <ul class="nav nav-pills mb-4 common-innerpage-tabs d-none d-md-flex" id="pills-tab" role="tablist">
                    <li class="nav-item" role="presentation">
                        <!-- <NuxtLink :to="`/${slug1}`" > -->
                        <button class="nav-link active" id="pills-home-tab" data-bs-toggle="pill" data-bs-target="#pills-home" type="button" role="tab" aria-controls="pills-home" aria-selected="true">
                            Overview
                        </button>
                        <!-- </NuxtLink> -->
                    </li>
                    <li class="nav-item" role="presentation">
                        <button class="nav-link pills-profile-tab" id="pills-profile-tab" data-bs-toggle="pill" data-bs-target="#pills-profile" type="button" role="tab" aria-controls="pills-profile" aria-selected="false">
                            Clinic
                        </button>
                    </li>
                    <li class="nav-item" role="presentation">
                        <button class="nav-link click_button pills-contact-tab" id="pills-contact-tab" v-on:click="reviewfunction" data-bs-toggle="pill" data-bs-target="#pills-contact" type="button" role="tab" aria-controls="pills-contact" aria-selected="false">
                            Review
                        </button>
                    </li>
                </ul>
                <div class="tab-content mt-4" id="pills-tabContent">
                    <div class="tab-pane fade show active" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab">
                        <div class="overview-section">
                            <div class="three-box-of-dr-short-details">
                                <div class="box-of-short-details grouppat">
                                    <div class="leftshortdet">
                                        <img src="/images/icon_1.svg" alt="icon_1" width="58" height="58" />
                                    </div>
                                    <div class="rightshortdet">
                                        <div class="box-title">PATIENTS</div>
                                        <div class="box-details">
                                            {{ results.patients_treated }}+
                                        </div>
                                    </div>
                                </div>
                                <div class="box-of-short-details grouppat">
                                    <div class="leftshortdet">
                                        <img src="/images/icon_2.svg" alt="icon_2" width="58" height="58" />
                                    </div>
                                    <div class="rightshortdet">
                                        <div class="box-title">RATING</div>
                                        <div class="box-details">4.5</div>
                                    </div>
                                </div>
                                <div class="box-of-short-details grouppat">
                                    <div class="leftshortdet">
                                        <img src="/images/icon_3.svg" alt="icon_3" width="58" height="58" />
                                    </div>
                                    <div class="rightshortdet">
                                        <div class="box-title">EXPERIANCE</div>
                                        <div class="box-details">
                                            {{ results.year_of_experiance }}+ YEARS
                                        </div>
                                    </div>
                                </div>
                                <div class="box-of-short-details Desktopon grouppat">
                                    <div class="leftshortdet">
                                        <img src="/images/icon_4.svg" alt="icon_4" width="58" height="58" />
                                    </div>
                                    <div class="rightshortdet">
                                        <div class="box-title">POPULARITY</div>
                                        <div class="box-details">9.0</div>
                                    </div>
                                </div>
                            </div>
                            <h4 class="mb-3 text-blue samebg mt-3">
                                Something About {{ results.title }} {{ results.f_name }}
                            </h4>
                            <div class="mobilenone readmordiv">
                                <p class="text-blue readmortext">{{ results.about }}</p>
                                <button class="moreless-button text-blue px-0" style="border: none;background-color: transparent;outline: none;" id="readmore">Read More</button>
                            </div>
                            <div class="get-service-home mb-3 mt-3" v-if="results.is_booking == 1">
                                <h5 class="text-blue">Book your appointment for Free</h5>
                                <div class="btn-for-locate-map upload-prescription mt-2 addseseon" v-if="$auth.loggedIn && $auth.user.data.mobile_verified == 1">
                                    <NuxtLink :to="$route.fullPath + '/' + 'BookAppointment'" class="btn btnbook">
                                        <img src="/images/appointment_icon.svg" alt="appointment_icon" width="20" height="20" />
                                        Book Appointment
                                    </NuxtLink>
                                </div>
                                <div class="btn-for-locate-map upload-prescription mt-2 addclassinbody" v-else>
                                    <a href="#" class="btn btnbook" data-bs-toggle="modal" data-bs-target="#Mobailnumbar" @click="btnbook">
                                        <img src="/images/appointment_icon.svg" alt="appointment_icon" width="20" height="20" />
                                        Book Appointment
                                    </a>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-lg-6">
                                    <h4 class="mb-3 mt-3 text-blue samebg">Gallery</h4>
                                    <div class="sliderBox">
                                        <div class="owl-carousel owl-theme gallery-carousel" v-if="results.doc_gallary_1 || results.doc_gallary_2 || results.doc_gallary_3">
                                            <div class="item" v-if="results.doc_gallary_1">
                                                <img :src="results.doc_gallary_1" alt="gallary_1" style="border-radius: 1rem" height="284" width="308" />
                                            </div>
                                            <div class="item" v-if="results.doc_gallary_2">
                                                <img :src="results.doc_gallary_2" alt="gallary_2" style="border-radius: 1rem" height="284" width="308" />
                                            </div>
                                            <div class="item" v-if="results.doc_gallary_3">
                                                <img :src="results.doc_gallary_3" alt="gallary_3" style="border-radius: 1rem" height="284" width="308" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <template v-if="results.primary_type == 1">
                                    <div class="col-lg-6">
                                        <h4 class="mb-3 text-blue samebg mt-3">
                                            Services We Provide
                                        </h4>
                                        <div class="relative drServices">
                                            <div class="scrollbarpharmacy">
                                                <div class="accordion rounded-custom-ac ac-for-more-details degignples accordionDesign" id="accordionExample">
                                                    <div v-if="this.clinic_primary_address.consultation_charges && this.clinic_primary_address.consultation_charges != ''" key="chr" class="accordion-item">
                                                        <h2 class="accordion-header" id="headingOne">
                                                            <button id="pluse" class="accordion-button" type="button" data-bs-toggle="collapse" :data-bs-target="`#collapseindex_chr`" aria-expanded="true" :aria-controls="`collapseindex_chr`">
                                                                <div class="imgwdith">
                                                                    <img src="/images/ac-tick.svg" width="20" height="20" class="me-2" alt="ac-tick" />
                                                                </div>
                                                                Consultation
                                                            </button>
                                                        </h2>
                                                        <div :id="`collapseindex_chr`" class="accordion-collapse collapse" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                                                            <div class="accordion-body pakege_price">
                                                                <div class="d-flex justify-content-between align-center flex-wrap">
                                                                    <div class="col-md-12">
                                                                        Service will cost you Rs.
                                                                        {{ this.clinic_primary_address.consultation_charges}}/-*
                                                                    </div>

                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div v-if="results.home_visit && results.home_visit == 'yes'" key="home_visit" class="accordion-item">
                                                        <h2 class="accordion-header" id="headingOne">
                                                            <button id="pluse" class="accordion-button" type="button" data-bs-toggle="collapse" :data-bs-target="`#collapseindex_home_visit`" aria-expanded="true" :aria-controls="`collapseindex_home_visit`">
                                                                <div class="imgwdith">
                                                                    <img src="/images/ac-tick.svg" width="20" height="20" class="me-2" alt="ac-tick" />
                                                                </div>
                                                                Home Visit
                                                            </button>
                                                        </h2>
                                                        <div :id="`collapseindex_home_visit`" class="accordion-collapse collapse" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                                                            <div class="accordion-body pakege_price">
                                                                <div class="d-flex justify-content-between align-center flex-wrap">
                                                                    <div class="col-md-12">
                                                                        Service will cost you Rs.
                                                                        {{ results.home_visit_charge}}/-*
                                                                    </div>
                                                                    <div class="col-md-12">

                                                                        <div class="btn-for-locate-map">
                                                                            <!-- <a href="#" class="btn">
                                                                            Know More
                                                                        </a> -->
                                                                            <div class="pack_details hidedetail">
                                                                                <ul class="w-full daysblog_ul" style="padding-left: 0px;">
                                                                                    <template v-if="results && results.home_visit_time" v-for="daytime in results.home_visit_time">
                                                                                        <li class="d-flex daytime_name">
                                                                                            <span style="
                                                                                      width: 10%;
                                                                                      display: block;
                                                                                    ">{{ daytime.day_name }}</span>
                                                                                            <!-- <div style="width: 70%;"> -->

                                                                                            <div style="width: 23%">
                                                                                                <template v-for="daytiming in daytime.timing">
                                                                                                    {{daytiming.from_time}}-{{daytiming.to_time}}
                                                                                                </template>
                                                                                            </div>
                                                                                            <!-- </div> -->
                                                                                        </li>
                                                                                    </template>
                                                                                    <!-- <li style="color: white">
                                                                                    <span style="color: white">sun</span>
                                                                                    Closed
                                                                                </li> -->
                                                                                </ul>
                                                                            </div>
                                                                            <!-- <button v-if="resultpack.package_detail" class="pack_readmore text-blue px-0" @click="write($event)" style="border: none;background-color: transparent;outline: none;">Read More</button> -->
                                                                            <input type="button" v-if="
                                                                            results && results.home_visit_time
                                                                            " class="pack_readmore text-blue px-0" @click="write($event)" style="border: none;background-color: transparent;outline: none;" value="Read More">
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>

                                                    <div v-if="result.clinic_id == results.primary_id" v-for="(result, index) in results.servicechargesmapping" :key="index" class="accordion-item">
                                                        <template v-if="result.clinic_id == results.primary_id">
                                                            <h2 class="accordion-header" id="headingOne">
                                                                <button id="pluse" class="accordion-button" type="button" data-bs-toggle="collapse" :data-bs-target="`#collapseindex_${index}`" aria-expanded="true" :aria-controls="`collapseindex_${index}`">
                                                                    <div class="imgwdith">
                                                                        <img src="/images/ac-tick.svg" width="20" height="20" class="me-2" alt="ac-tick" />
                                                                    </div>
                                                                    {{ result.service_name }}
                                                                </button>
                                                            </h2>
                                                            <div :id="`collapseindex_${index}`" class="accordion-collapse collapse" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                                                                <div class="accordion-body pakege_price">
                                                                    <div class="d-flex justify-content-between align-center flex-wrap">
                                                                        <div class="col-md-12">
                                                                            Service will cost you Rs.
                                                                            {{ result.price.INR }}/-*
                                                                        </div>
                                                                        <div class="col-md-12" v-for="(resultpack, index) in result.package" :key="index">
                                                                            <div>
                                                                                <hr />
                                                                                {{ resultpack.package_name }} will cost
                                                                                you Rs.
                                                                                {{ resultpack.package_price }}/-*
                                                                            </div>
                                                                            <div class="btn-for-locate-map">
                                                                                <!-- <a href="#" class="btn">
                                                                                Know More
                                                                            </a> -->
                                                                                <div class="pack_details hidedetail">
                                                                                    {{ resultpack.package_detail }}
                                                                                </div>
                                                                                <!-- <button v-if="resultpack.package_detail" class="pack_readmore text-blue px-0" @click="write($event)" style="border: none;background-color: transparent;outline: none;">Read More</button> -->
                                                                                <input type="button" v-if="resultpack.package_detail" class="pack_readmore text-blue px-0" @click="write($event)" style="border: none;background-color: transparent;outline: none;" value="Read More">
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </template>
                                                    </div>

                                                </div>
                                            </div>
                                            <a href="#" class="btn btnshwom" id="showmore" v-if="results.servicechargesmapping && results.servicechargesmapping.length > 5">Show more</a>
                                        </div>
                                    </div>
                                </template>
                                <!-- </div> -->
                                <!-- <div class="row"> -->
                                <div class="col-lg-6 mt-4">
                                    <h4 class="mb-2 text-blue samebg">Symptoms We Treat</h4>
                                    <div class="time-and-service-details mt-3">
                                        <div class="three-box-of-dr-short-details collapseTwo">
                                            <div class="box-of-short-details text-start timecl">
                                                <div class="microsoft">
                                                    <ul>
                                                        <template v-for="ares in this.Chief_Complaints">
                                                            <li>
                                                                <img src="/images/double-arrow-right-svgrepo-com.svg" width="23" height="23" alt="double-arrow-right-svgrepo-com" />
                                                                <span>{{ ares }}</span>
                                                            </li>
                                                        </template>
                                                    </ul>

                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-lg-6 mt-4">
                                    <h4 class="mb-3 text-blue samebg">Locate Us</h4>
                                    <div class="mapLocate">
                                        <div id="map-part" ref="map" style="height: 311px; border-radius: 16px"></div>
                                    </div>
                                </div>
                                <div class="col-lg-6">
                                    <h4 class="mb-3 mt-4  text-blue samebg">Achievements</h4>
                                    <div class="time-and-service-details mt-2">
                                        <div class="three-box-of-dr-short-details collapseTwo">
                                            <div class="box-of-short-details text-start timecl">
                                                <div class="microsoft">
                                                    <ul>
                                                        <template v-if="results && results.highest_qualification">
                                                            <li>
                                                                <img src="/images/double-arrow-right-svgrepo-com.svg" width="23" height="23" alt="double-arrow-right-svgrepo-com" />
                                                                <span>Highest Qualification :
                                                                    {{ results.highest_qualification }}</span>
                                                            </li>
                                                        </template>
                                                        <template v-if="results && results.qualification">
                                                            <li>
                                                                <img src="/images/double-arrow-right-svgrepo-com.svg" width="23" height="23" alt="double-arrow-right-svgrepo-com" />
                                                                <span>Other Qualification :
                                                                    {{ results.qualification }}</span>
                                                            </li>
                                                        </template>
                                                        <template v-if="results && results.languages">
                                                            <li>
                                                                <img src="/images/double-arrow-right-svgrepo-com.svg" width="23" height="23" alt="double-arrow-right-svgrepo-com" />
                                                                <span>Languages Known :
                                                                    {{ results.languages }}</span>
                                                            </li>
                                                        </template>
                                                        <template v-for="ares in results.additional_achievements">
                                                            <li>
                                                                <img src="/images/double-arrow-right-svgrepo-com.svg" width="23" height="23" alt="double-arrow-right-svgrepo-com" />
                                                                <span>{{ ares }}</span>
                                                            </li>
                                                        </template>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="tab-pane fade" id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab">
                        <div class="clinic-section fullwidth">
                            <h4 class="mb-3 text-blue leftpyou">
                                You can meet {{ results.title }} {{ results.f_name }}
                                {{ results.l_name }}
                            </h4>
                            <div class="row">
                                <template v-for="(clinic_res, index) in results.clinic_data">
                                    <div class="col-lg-6">
                                        <div class="hospital-details-wrap">
                                            <div class="title-and-img-hospital">
                                                <div>
                                                    <div class="title-and-available">
                                                        <NuxtLink type="button" v-if="clinic_res.is_active == 1 " class="btn" :to="'/' + clinic_res.url_name">
                                                            <h5 class="mb-0 text-blue">
                                                                {{ clinic_res.name }}
                                                            </h5>
                                                        </NuxtLink>
                                                        <a type="button" class="btn" herf="#" v-else>
                                                            <h5 class="mb-0 text-blue">
                                                                {{ clinic_res.name }}
                                                            </h5>
                                                        </a>
                                                        <template v-if="clinic_res.is_available == 1">
                                                            <div class="available-chip">Available</div>
                                                        </template>
                                                    </div>
                                                    <div class="mt-4">
                                                        <div class="more-detail-box">
                                                            <div class="more-detal-icon">
                                                                <div>
                                                                    <img src="/images/lucation.svg" width="22" height="22" alt="" />
                                                                </div>
                                                            </div>
                                                            <div class="more-details-text">
                                                                {{ clinic_res.clinic_address }}
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="hospital-thumbnail" v-if="clinic_res.clinic_profile">
                                                    <img :src="clinic_res.clinic_profile" v-bind:alt="clinic_res" width="74" height="74" />
                                                </div>
                                                <!-- <div class="hospital-thumbnail" v-else>
                                                    <img src="/images/hospital-thumbnai.jpg" alt="hospital-thumbnai" width="74" height="74" />
                                                </div> -->
                                            </div>
                                            <div class="title-and-img-hospital">
                                                <div>
                                                    <div class="mt-0">
                                                        <div class="more-detail-box">
                                                            <div class="more-detal-icon">
                                                                <img src="/images/clarity_map-line.svg" width="22" height="22" alt="" />
                                                            </div>
                                                            <div class="more-details-text">
                                                                <div class="more-details-text">
                                                                    <div class="more-details-text">
                                                                        <div class="">
                                                                            <template v-if="clinic_res.distance_clinic > 0">
                                                                                {{ clinic_res.distance_clinic }} Km
                                                                                from your Location
                                                                            </template>
                                                                            <template v-else>
                                                                                <div class="location_display">
                                                                                    Location detail not available
                                                                                </div>
                                                                            </template>
                                                                        </div>

                                                                        <div class="btn-for-locate-map mt-2" v-if="clinic_res.map_url">
                                                                            <a target="_blank" :href="clinic_res.map_url" class="btn">
                                                                                <img src="/images/carbon_airport-location.svg" class="carbonclr" width="8" height="8" alt="carbon_airport-location" />
                                                                                Open in Map
                                                                            </a>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="hospital-thumbnail"></div>
                                            </div>
                                            <div class="address-and-timing dr-profile">
                                                <div class="accordion" id="accordionExample">
                                                    <div class="accordion-item victoHospital">
                                                        <h2 class="accordion-header" id="headingOne">
                                                            <button class="accordion-button" type="button" data-bs-toggle="collapse" :data-bs-target="`#collapseOne_${index}`" aria-expanded="true" :aria-controls="`collapseOne_${index}`">
                                                                <span class="text-blue last-wrap-of-box drprofile">
                                                                    <div class="last-wrap-of-box">
                                                                        <div class="more-detail-box">
                                                                            <div class="more-details-text">
                                                                                <img src="/images/clarity_alarm-clock-outline.svg" width="18" height="18" alt="clarity_alarm-clock-outline" /><b> Timing</b>
                                                                            </div>
                                                                        </div>
                                                                        <div class="more-detail-box">
                                                                            <div class="more-details-text">
                                                                                <img src="/images/jam_medical.svg" width="18" height="18" alt="jam_medical" />
                                                                                <b> Facilities</b>
                                                                            </div>
                                                                            <span class="rightbht">Details</span>
                                                                        </div>
                                                                    </div>
                                                                </span>
                                                            </button>
                                                        </h2>
                                                        <div :id="`collapseOne_${index}`" class="accordion-collapse collapse" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                                                            <div class="accordion-body victoHospital">
                                                                <div class="last-wrap-of-box">
                                                                    <div class="more-detail-box">
                                                                        <div class="more-details-text daysBlog dayBlog_one">
                                                                            <ul class="w-full daysblog_ul">
                                                                                <template v-if="
                                              clinic_res && clinic_res.DayTiming
                                            " v-for="daytime in clinic_res.DayTiming">
                                                                                    <li class="d-flex daytime_name">
                                                                                        <span style="
                                                  width: 30%;
                                                  display: block;
                                                ">{{ daytime.day_name }}</span>
                                                                                        <!-- <div style="width: 70%;"> -->

                                                                                        <div style="max-width: 45%">
                                                                                            <template v-for="daytiming in daytime.timing">
                                                                                                {{ daytiming.from_time }}-{{
                                                    daytiming.to_time
                                                  }}
                                                                                            </template>
                                                                                        </div>
                                                                                        <!-- </div> -->
                                                                                    </li>
                                                                                </template>
                                                                                <!-- <li style="color: white">
                                                                                    <span style="color: white">sun</span>
                                                                                    Closed
                                                                                </li> -->
                                                                            </ul>
                                                                        </div>
                                                                        <div class="more-details-text daysBlog">
                                                                            <ul>
                                                                                <template v-if="clinic_res && clinic_res.facilities" v-for="facility in clinic_res.facilities">
                                                                                    <li>
                                                                                        <img src="/images/rightcheck.svg" width="18" height="18" alt="rightcheck" />
                                                                                        <span style="float: none; width: 149px !important; font-weight:400;" class="facility_text"> {{ facility }}</span>
                                                                                    </li>
                                                                                </template>
                                                                                <template v-if="clinic_res && clinic_res.medicine_type" v-for="medicine_type in clinic_res.medicine_type">
                                                                                    <li>
                                                                                        <img src="/images/rightcheck.svg" width="18" height="18" alt="rightcheck" />
                                                                                        <span style="float: none; width: 149px !important; font-weight:400;" class="facility_text">{{ medicine_type }}</span>
                                                                                    </li>
                                                                                </template>
                                                                                <template v-if="clinic_res && clinic_res.insurance" v-for="insurance in clinic_res.insurance">
                                                                                    <li>
                                                                                        <img src="/images/rightcheck.svg" width="18" height="18" alt="rightcheck" />
                                                                                        <span style="float: none;  width: 149px !important; font-weight:400;" class="facility_text">{{ insurance }}</span>
                                                                                    </li>
                                                                                </template>
                                                                            </ul>
                                                                        </div>
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
                                <template v-for="(hospital_res, index) in results.hospital_data">
                                    <div class="col-lg-6">
                                        <div class="hospital-details-wrap">
                                            <div class="title-and-img-hospital">
                                                <div>
                                                    <div class="title-and-available">
                                                        <NuxtLink type="button" v-if="hospital_res.is_active " class="btn" :to="'/' + hospital_res.url_name">
                                                            <h5 class="mb-0 text-blue">
                                                                {{ hospital_res.name }}
                                                            </h5>
                                                        </NuxtLink>
                                                        <a type="button" class="btn" href="#" v-else>
                                                            <h5 class="mb-0 text-blue">
                                                                {{ hospital_res.name }}
                                                            </h5>
                                                        </a>
                                                        <template v-if="hospital_res.is_available == 1">
                                                            <div class="available-chip">Available</div>
                                                        </template>
                                                    </div>
                                                    <div class="mt-4">
                                                        <div class="more-detail-box">
                                                            <div class="more-detal-icon">
                                                                <div>
                                                                    <img src="/images/lucation.svg" width="22" height="22" alt="" />
                                                                </div>
                                                            </div>
                                                            <div class="more-details-text">
                                                                {{ hospital_res.clinic_address }}
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="hospital-thumbnail" v-if="hospital_res.clinic_profile">
                                                    <img :src="hospital_res.clinic_profile" v-bind:alt="hospital_res" width="74" height="74" />
                                                </div>
                                                <div class="hospital-thumbnail" v-else>
                                                    <!-- <img src="/images/hospital-thumbnai.jpg" alt="hospital-thumbnai" width="74" height="74" /> -->
                                                </div>
                                            </div>
                                            <div class="title-and-img-hospital">
                                                <div>
                                                    <div class="mt-0">
                                                        <div class="more-detail-box">
                                                            <div class="more-detal-icon">
                                                                <img src="/images/clarity_map-line.svg" width="22" height="22" alt="" />
                                                            </div>
                                                            <div class="more-details-text">
                                                                <div class="more-details-text">
                                                                    <div class="more-details-text">
                                                                        <div class="">
                                                                            <template v-if="hospital_res.distance_clinic > 0">
                                                                                {{ hospital_res.distance_clinic }} Km
                                                                                from your Location
                                                                            </template>
                                                                            <template v-else>
                                                                                <div class="location_display">
                                                                                    Location detail not available
                                                                                </div>
                                                                            </template>
                                                                        </div>

                                                                        <div class="btn-for-locate-map mt-2" v-if="hospital_res.map_url">
                                                                            <a target="_blank" :href="hospital_res.map_url" class="btn">
                                                                                <img src="/images/carbon_airport-location.svg" class="carbonclr" width="8" height="8" alt="carbon_airport-location" />
                                                                                Open in Map
                                                                            </a>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="hospital-thumbnail"></div>
                                            </div>
                                            <div class="address-and-timing dr-profile">
                                                <div class="accordion" id="accordionExample">
                                                    <div class="accordion-item victoHospital">
                                                        <h2 class="accordion-header" id="headingOne">
                                                            <button class="accordion-button" type="button" data-bs-toggle="collapse" :data-bs-target="`#HoscollapseOne_${index}`" aria-expanded="true" :aria-controls="`HoscollapseOne_${index}`">
                                                                <span class="text-blue last-wrap-of-box drprofile">
                                                                    <div class="last-wrap-of-box">
                                                                        <div class="more-detail-box">
                                                                            <div class="more-details-text">
                                                                                <img src="/images/clarity_alarm-clock-outline.svg" width="18" height="18" alt="clarity_alarm-clock-outline" /><b> Timing</b>
                                                                            </div>
                                                                        </div>
                                                                        <!-- <div class="more-detail-box">
                                                                            <div class="more-details-text">
                                                                                <img src="/images/jam_medical.svg" width="25" height="25" alt="jam_medical" />
                                                                                <b> Facilities</b>
                                                                            </div>
                                                                        </div> -->
                                                                        <span class="rightbht">Details</span>
                                                                    </div>
                                                                </span>
                                                            </button>
                                                        </h2>
                                                        <div :id="`HoscollapseOne_${index}`" class="accordion-collapse collapse" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                                                            <div class="accordion-body victoHospital">
                                                                <div class="last-wrap-of-box">
                                                                    <div class="more-detail-box">
                                                                        <div class="more-details-text daysBlog dayBlog_one">
                                                                            <ul class="w-full daysblog_ul">
                                                                                <template v-if="
                                              hospital_res &&
                                              hospital_res.DayTiming
                                            " v-for="daytime in hospital_res.DayTiming">
                                                                                    <li class="d-flex daytime_name">
                                                                                        <span style="
                                                  width: 30%;
                                                  display: block;
                                                ">{{ daytime.day_name }}</span>
                                                                                        <!-- <div style="width: 70%;"> -->

                                                                                        <div style="width: 49%">
                                                                                            <template v-for="daytiming in daytime.timing">
                                                                                                {{ daytiming.from_time }}-{{
                                                    daytiming.to_time
                                                  }}
                                                                                            </template>
                                                                                        </div>
                                                                                        <!-- </div> -->
                                                                                    </li>
                                                                                </template>
                                                                                <!-- <li style="color: white">
                                                                                    <span style="color: white">sun</span>
                                                                                    Closed
                                                                                </li> -->
                                                                            </ul>
                                                                        </div>
                                                                        <div class="more-details-text daysBlog"></div>
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
                            </div>
                        </div>
                    </div>
                    <div class="tab-pane dr_page_work fade" id="pills-contact" role="tabpanel" aria-labelledby="pills-contact-tab">
                        <h4 class="mb-3 text-blue leftpyou">
                            What People say about {{ results.title }}
                            {{ results.f_name }}
                        </h4>
                        <div class="review-boxes-wrap mt-4">
                            <div class="grid" ref="grid">
                                <template v-if="user_review_list.length > 0">
                                    <div v-for="(result, index) in user_review_list" :key="index" class="grid-item mobilepadding p-2" style="position: relative; ">
                                        <!-- <div class="dr-search-list mt-5 cartBlog dr-profile"> -->
                                        <div class="row">
                                            <div class="review-dr-box">
                                                <div class="dr-img-review">
                                                    <img src="/images/user-svgrepo-com.svg" width="80" height="80" alt="dr-imgwb" />
                                                </div>
                                                <div class="dr-review-part">
                                                    <h5>{{ result.first_name }}</h5>
                                                    <div class="p-dr-more-details">
                                                        <div class="p-dr-more-details">
                                                            <div class="rating">
                                                                <!-- Filled stars -->
                                                                <img v-for="(star, index ) in parseInt(result.overall_rating) || 0" :key="'filled_' + index" src="/images/star.svg" width="20" height="20" alt="" />
                                                                <!-- Blank stars -->
                                                                <!-- <img v-for="(star, index )  in 5 - (parseInt(result.overall_rating) || 0)" :key="'blank_' + index" src="/images/starblack.svg" class="star-icon" alt="Blank Star" /> -->
                                                            </div>
                                                        </div>
                                                        <div class="devider"></div>

                                                    </div>
                                                </div>
                                            </div>
                                            <div class="review-text text-grey mt-2 mb-2 px-3 ">
                                                {{ result.review }}
                                            </div>
                                            <div class="col-4 text-end col-sm-2" style="position: absolute; right: 0;">
                                                <p style="font-size: 13px !important;">{{ result.date }}</p>
                                                <p style="font-size: 13px !important;">{{ result.city }}</p>
                                            </div>
                                        </div>
                                        <div class="dr-review-part mt-2">
                                            <div class="review-row-of-rating dr-pr-rating flex-wrap py-3">
                                                <div v-for="(res_que, index) in result.review_ques" :key="index" class="ratingblogw text-nowrap" v-if="res_que.rating > 0">
                                                    <div class="rating">
                                                        <!-- Render filled stars -->
                                                        <img v-for="(star, index) in res_que.rating" :key="'filled_' + index" :src="'/images/star.svg'" width="14" height="14" alt="Filled Star" />
                                                        <!-- Render blank stars -->
                                                        <!-- <img v-for="(star, index) in res_que.rating_blank" :key="'blank_' + index" :src="'/images/starblack.svg'" width="14" height="14" alt="Blank Star" /> -->
                                                    </div>
                                                    <!-- Only show the question if the rating is greater than 0 -->
                                                    <div class="text-center text-blue fw-bold" v-if="res_que.rating > 0">
                                                        {{ res_que.question }}
                                                    </div>
                                                </div>

                                            </div>
                                        </div>
                                        <!-- </div> -->
                                    </div>
                                </template>
                            </div>
                            <input type="checkbox" id="inputCheck" />
                            <template v-if="$auth.loggedIn">
                                <label for="inputCheck" class="fab-btn d-flex px-2" style="scroll-behavior: smooth; width: 150px; height: 35px;">
                                    <img src="/images/Edit_pen.svg" alt="" class="me-2">
                                    <span style="font-family: sans-serif; font-weight: 100; text-wrap: nowrap; overflow: hidden;"> Write A Review</span>
                                </label>
                            </template>
                            <template v-else>
                                <label for="" class="fab-btn notlogin d-flex px-2" style="scroll-behavior: smooth; width: 150px; height: 35px;">
                                    <img src="/images/Edit_pen.svg" alt="" class="me-2">
                                    <span style="font-family: sans-serif; font-weight: 100; text-wrap: nowrap; overflow: hidden;"> Write A Review</span>
                                </label>
                            </template>
                            <div class="card-content" style="width: 90%;height: fit-content;">
                                <form action="#" @submit.prevent="onSignup" id="data_form" data-parsley-validate autocomplete="off" class="d-none">
                                    <div style=" z-index: 10000; background: #fff">
                                        <div class="review-section fullwidth d-flex flex-wrap">
                                            <div class="right-rating-and-exp-section0 col-sm-4 col-11 my-3 m-auto">
                                                <p class="text-blue" style="line-height: 58px">
                                                    <img src="/images/share.svg" alt="share" />
                                                    Please share your experience about
                                                </p>
                                                <div class="text-center">
                                                    <div class="overlayExpe">
                                                        <p class="text-blue mb-2">
                                                            <span class="fw-bold">Overall Experience <span class="text-danger">*</span></span>
                                                            <i class="text-grey"> </i>
                                                        </p>
                                                        <div class="rating-stars rating black justify-content-center" style="width: fit-content ">
                                                            <div v-if="$auth.loggedIn">
                                                                <input type="hidden" name="user_id" :value="$auth.user.data.id">
                                                                <input type="hidden" name="doctor_id" :value="this.doctor_id">
                                                            </div>
                                                            <input type="radio" name="overall_rating" id="rs0" value="0" v-model="overall_rating" @click="overall_rating_value" /><label for="rs0"></label>
                                                            <input type="radio" name="overall_rating" id="rs1" value="1" v-model="overall_rating" @click="overall_rating_value" /><label for="rs1" width="30"></label>
                                                            <input type="radio" name="overall_rating" id="rs2" value="2" v-model="overall_rating" @click="overall_rating_value" /><label for="rs2"></label>
                                                            <input type="radio" name="overall_rating" id="rs3" value="3" v-model="overall_rating" @click="overall_rating_value" /><label for="rs3"></label>
                                                            <input type="radio" name="overall_rating" id="rs4" value="4" v-model="overall_rating" @click="overall_rating_value" /><label for="rs4"></label>
                                                            <input type="radio" name="overall_rating" id="rs5" value="5" v-model="overall_rating" @click="overall_rating_value" /><label for="rs5"></label>
                                                        </div>
                                                        <!-- <p>Selected Rating: {{ selectedRating }}</p> -->
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="col-sm-8 row col-11 m-auto">
                                                <!-- {{review_list}} -->
                                                <template v-if="review_list">

                                                    <div v-for="(result, index) in review_list.review_ques" :key="result.id" class="col-md-6">
                                                        <div class="box-of-rating">
                                                            <div class="rating-stars py-0 rating black justify-content-center">
                                                                <input type="radio" :name="`question_id[${result.id}]`" :id="`rs${index}000`" checked="checked" class="rs000 " value="0" /><label :for="`rs${index}000`" style="display: none;"></label>
                                                                <input type="radio" :name="`question_id[${result.id}]`" v-model="result.rating" :id="`rs${index}0`" class="rs0" value="1" /><label :for="`rs${index}0`"></label>
                                                                <input type="radio" :name="`question_id[${result.id}]`" v-model="result.rating" :id="`rs${index}1`" value="2" /><label :for="`rs${index}1`"></label>
                                                                <input type="radio" :name="`question_id[${result.id}]`" v-model="result.rating" :id="`rs${index}2`" value="3" /><label :for="`rs${index}2`"></label>
                                                                <input type="radio" :name="`question_id[${result.id}]`" v-model="result.rating" :id="`rs${index}3`" value="4" /><label :for="`rs${index}3`"></label>
                                                                <input type="radio" :name="`question_id[${result.id}]`" v-model="result.rating" :id="`rs${index}4`" value="5" /><label :for="`rs${index}4`"></label>
                                                            </div>
                                                            <div>{{result.question}}</div>
                                                        </div>
                                                    </div>
                                                </template>

                                            </div>
                                        </div>
                                        <div class="bottom-rating-section mbster mt-4">
                                            <div class="row " style="width: 103%;">
                                                <div class="col-md-8">
                                                    <label class="d-block text-blue mb-1" for="experience">Describe your experience in a few words</label>
                                                    <textarea v-model="review" name="review" class="textarea form-control" id="experience" rows="7" style="width: 100%"></textarea>
                                                    <div class="row col-sm-5 col-7 m-auto mb-4">
                                                        <div class="mt-4 text-center text-md-center col-6">
                                                            <a href="#" id="cancelReview" class="btn submit-btn" v-on:click="submitExperience">
                                                                Cancel
                                                            </a>
                                                        </div>
                                                        <div class="mt-4 text-center text-md-center col-6 mb-5 ">
                                                            <button class="btn submit-btn " id="submit-btn">Submit</button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </main>
</div>
</template>

<style>
/* 
     * Always set the map height explicitly to define the size of the div element
     * that contains the map. 
     */
#map {
    height: 100%;
}

/* 
     * Optional: Makes the sample page fill the window. 
     */
html,
body {
    height: 100%;
    margin: 0;
    padding: 0;
}

/* HTML marker styles */
.pack_details {
    display: none;
}

.price-tag {
    background-color: #4285f4;
    border-radius: 8px;
    color: #ffffff;
    font-size: 14px;
    padding: 10px 15px;
    position: relative;
}

.price-tag::after {
    content: "";
    position: absolute;
    left: 50%;
    top: 100%;
    transform: translate(-50%, 0);
    width: 0;
    height: 0;
    border-left: 8px solid transparent;
    border-right: 8px solid transparent;
    border-top: 8px solid #4285f4;
}

[class$="api-load-alpha-banner"] {
    display: none;
}

#copy {
    position: relative;
    box-sizing: border-box;
}

#copy:before {
    content: "";
    width: 16px;
    height: 16px;
    bottom: -20px;
    left: 82px;
    clip-path: polygon(50% 40%, 0% 100%, 100% 100%);
}

#copy:after {
    content: attr(tooltip);
    width: 120px;
    bottom: -48px;
    left: 20px;
    padding: 5px;
    border-radius: 4px;
    font-size: 0.8rem;
}

#copy:before,
#copy:after {
    opacity: 0;
    pointer-events: none;
    position: absolute;
    box-sizing: border-box;
    background-color: #fff;
    color: #000;
    transform: translateY(-10px);
    transition: all 300ms ease;
    border: 1px solid;
}

#copy:hover:before,
#copy:hover:after {
    opacity: 1;
    transform: translateY(0);
}

.height {
    height: auto !important;
}

.readmortext {
    height: 4rem;
    overflow: hidden;
}

@media screen and (max-width: 450px) {
    .readmortext {
        height: 5.3rem;
        overflow: hidden;
    }
}

.degignples .accordion-button.click:after {
    content: "-" !important;
    background-image: none;
    font-size: 16px;
    display: inline-block !important;
}

.degignples .accordion-button:after {
    content: "+" !important;
    background-image: none;
    font-size: 16px;
    transform: rotate(-0deg) !important;
    display: inline-block !important;
}

.price-tag {
    background-color: #31487c !important;
    border-radius: 8px;
    color: #ffffff;
    font-size: 14px;
    padding: 3px 5px !important;
    position: relative;
}

.doctor_page .rounded-custom-ac .accordion-button {
    font-size: 1.1rem !important;
}

/* .doctor_page .drServices {
    height: 85%;
} */
</style>

<script>
import axios from "axios";
import mobilenav from "../header/mobile_nav";
import desktopnav from "../header/desktop_nav_search";
import footerapp from "../home/footerapp";
// import doctor_review from "./reviews/doctor_review";
// import setAuthHeader from "../../../utils/setAuthHeader";    
import setAuthHeader from "../../../utils/setAuthHeader";

export default {

    data: () => ({
        results: [],
        clinic_primary_address: [],
        searchresults: [],
        longitude: null,
        lattitude: null,
        slug1: "",
        slug2: "",
        timer: 120,
        city: "",
        state: "",
        mbailnumbar: "",
        experience: "",
        firstConsultation: "",
        openpage: null,
        routeinserach: '',
        doctor_id: '',
        review_list: [],
        user_review_list: [],
        selectedRating: "0",
        showParagraph: false,
        intervalId: null,
        review: '',
        address: '',
        description_address: '',
        Chief_Complaints: '',
        service_list: '',
        speciality: '',
        title_address: '',
        keywords_address: '',
        departments: '',
        overall_rating: 0,
        allrady_add_network: [],
        isAdd: 1,
        otp: null,
        randomNumber: null,
        pageTitle: "Dr. Hari Jani - Dental Surgeon",
        pageDescription: "Dr. Hari Jani is a leading dental surgeon in Ahmedabad, Gujarat.",
        pageUrl: "https://curenearme.in/DrHariJani",
    }),
    async fetch() {
        var slug1 = this.$route.path.split("/")[1];
        var lattitude = null
        var longitude = null
       var response = await this.$http.$get(process.env.API_BASE_URL + 'get_doctor_detail?doctor_username='+slug1+ '&latitude=&longitude=')
        this.results = response.data

        if (this.results.clinic_primary_address.sublocality_level_2 !== null && this.results.clinic_primary_address.sublocality_level_2 !== undefined && this.results.clinic_primary_address.sublocality_level_2 !== '') {
                        this.title_address = this.results.clinic_primary_address.sublocality_level_1 + ", " + this.results.clinic_primary_address.city
                        this.description_address = this.results.clinic_primary_address.sublocality_level_1 + ", " + this.results.clinic_primary_address.state + ", " + this.results.clinic_primary_address.country
                        this.keywords_address = this.results.clinic_primary_address.sublocality_level_2 + ", " + this.results.clinic_primary_address.sublocality_level_1 + ", " + this.results.clinic_primary_address.city + ", " + this.results.clinic_primary_address.state + ", " + this.results.clinic_primary_address.country
                    } else if (this.results.clinic_primary_address.sublocality_level_1 !== null && this.results.clinic_primary_address.sublocality_level_1 !== undefined && this.results.clinic_primary_address.sublocality_level_1 !== '') {
                        if (this.results.clinic_primary_address.sublocality_level_1 === this.results.clinic_primary_address.city) {
                            this.title_address = this.results.clinic_primary_address.city
                            this.keywords_address = this.results.clinic_primary_address.city + ", " + this.results.clinic_primary_address.state + ", " + this.results.clinic_primary_address.country
                        } else {
                            this.title_address = this.results.clinic_primary_address.sublocality_level_1 + ", " + this.results.clinic_primary_address.city
                            this.description_address = this.results.clinic_primary_address.sublocality_level_1 + ", " + this.results.clinic_primary_address.state + ", " + this.results.clinic_primary_address.country
                            this.keywords_address = this.results.clinic_primary_address.sublocality_level_1 + ', ' + this.results.clinic_primary_address.city + ", " + this.results.clinic_primary_address.state + ", " + this.results.clinic_primary_address.country
                        }
                    } else {
                        this.title_address = this.results.clinic_primary_address.city
                        this.description_address = this.results.clinic_primary_address.state + ", " + this.results.clinic_primary_address.country
                        this.keywords_address = this.results.clinic_primary_address.city + ", " + this.results.clinic_primary_address.state + ", " + this.results.clinic_primary_address.country
                    }

    },
    head() {
        const firstConsultation =
            this.results && this.results.speciality ?
            this.results.speciality.split('-')[0].trim() :
            '';
        return {
            title: (this.results && this.results.f_name !== undefined) ?
                "Dr " +
                this.results.f_name +
                " " +
                this.results.l_name +
                " - " +
                firstConsultation +
                " in " +
                this.title_address : "",
            meta: [{
                    charset: "utf-8",
                },
                {
                    name: "viewport",
                    content: "width=device-width, initial-scale=1.0",
                },
                {
                    hid: "description",
                    name: "description",
                    content: `Book appointment -View clinic timing, service price, treatments & patient review. Dr ${this.results.f_name} is ${firstConsultation} in ${this.description_address}`,
                },

                {
                    hid: 'og:title',
                    property: 'og:title',
                    content: "Dr" +
                        " " +
                        this.results.f_name +
                        " " +
                        this.results.l_name +
                        " " + "-" +
                        firstConsultation +
                        " " + "in" +
                        " " + this.title_address,
                },
                {
                    hid: "og:description",
                    property: "og:description",
                    content: `Book appointment -View clinic timing, service price, treatments & patient review. Dr ${this.results.f_name} is ${firstConsultation} in ${this.description_address}`,
                },
                {
                    hid: 'og:image',
                    property: 'og:image',
                    content: this.results.doctor_profile // replace with your image URL
                },
                {
                    hid: 'keywords',
                    name: 'keywords',
                    content: `Dr ${this.results.f_name} ${this.results.l_name} -${this.speciality}, ${this.departments}, ${this.keywords_address}, Patient Reviews, Contact number, Phone number, Experience, Qualification, Achievements, Ratings, Directions, Map, Working hours, Clinic, Hospital, Services Cost, Consultation Charges, Official Website link,${this.Chief_Complaints}${this.service_list}.`
                }

            ],
            script: [{
                    src: '(g=>{var h,a,k,p="The Google Maps JavaScript API",c="google",l="importLibrary",q="__ib__",m=document,b=window;b=b[c]||(b[c]={});var d=b.maps||(b.maps={}),r=new Set,e=new URLSearchParams,u=()=>h||(h=new Promise(async(f,n)=>{await (a=m.createElement("script"));e.set("libraries",[...r]+"");for(k in g)e.set(k.replace(/[A-Z]/g,t=>"_"+t[0].toLowerCase()),g[k]);e.set("callback",c+".maps."+q);a.src=`https://maps.${c}apis.com/maps/api/js?`+e;d[q]=f;a.onerror=()=>h=n(Error(p+" could not load."));a.nonce=m.querySelector("script[nonce]")?.nonce||"";m.head.append(a)}));d[l]?console.warn(p+" only loads once. Ignoring:",g):d[l]=(f,...n)=>r.add(f)&&u().then(()=>d[l](f,...n))})({key: process.env.GOOGLE_MAPS_API_KEY, v: "beta"})',
                    hid: "map",
                    defer: true,
                },
                {
                    type: "module",
                    src: "/js/carousel.min.js",
                },
                {
                    type: "module",
                    src: "/js/custom.js",
                },
            ],
            link: [{
                    rel: "stylesheet",
                    href: "/css/owl.carousel.min.css",
                },
                {
                    rel: "stylesheet",
                    href: "/css/owl.theme.default.min.css",
                },
            ],
        };
    },

    canShare() {
        return navigator.share !== undefined;
    },

    created() {
        this.url = this.$route.fullPath;
        if (this.lattitude == null && this.longitude == null) {
            //live location
            var geocoder;
            // navigator.geolocation.getCurrentPosition(
            //     function (position) {
            //         var latitude = position.coords.latitude;
            //         var longitude = position.coords.longitude;
            //         $("#latitude").val(latitude);
            //         $("#longitude").val(longitude);

            //         //get other data
            //         var geocoder = new google.maps.Geocoder();
            //         var latlng = new google.maps.LatLng(latitude, longitude);
            //         geocoder.geocode({
            //                 latLng: latlng,
            //             },
            //             function (results, status) {
            //                 if (status == google.maps.GeocoderStatus.OK) {
            //                     if (results[1]) {
            //                         // console.log(results[0].address_components);
            //                         //formatted address
            //                         //find country name
            //                         var address_components = results[0].address_components;
            //                         var components = {};
            //                         jQuery.each(address_components, function (k, v1) {
            //                             jQuery.each(v1.types, function (k2, v2) {
            //                                 components[v2] = v1.long_name;
            //                             });
            //                         });
            //                         var city;
            //                         var postal_code;
            //                         var state;
            //                         var country;

            //                         if (components.locality) {
            //                             city = components.locality;
            //                         }

            //                         if (!city) {
            //                             city = components.administrative_area_level_1;
            //                         }

            //                         if (components.postal_code) {
            //                             postal_code =
            //                                 components.postal_code != undefined ?
            //                                 components.postal_code :
            //                                 "";
            //                         }

            //                         if (components.administrative_area_level_1) {
            //                             state = components.administrative_area_level_1;
            //                         }

            //                         if (components.country) {
            //                             country = components.country;
            //                         }

            //                         $("#city").val(city);
            //                         $("#state").val(state);
            //                         $("#country").val(country);
            //                         $("#latitude").val(latitude);
            //                         $("#longitude").val(longitude);
            //                         $("#post_code").val(postal_code);
            //                         var slug1 = $("#slug1").val();

            //                         //address
            //                         var add = results[0].formatted_address;
            //                         var arr = add.split(",");
            //                         var add_str = "";
            //                         for (var i = 0; i < arr.length; ++i) {
            //                             if (arr[i].indexOf("+") == -1) {
            //                                 add_str += arr[i] + ",";
            //                             }
            //                         }
            //                         var address = add_str.slice(0, -1);

            //                         $("#searchTextField").val(address);
            //                         sessionStorage.setItem("lattitude", latitude);
            //                         sessionStorage.setItem("longitude", longitude);
            //                         sessionStorage.setItem("address_location", address);
            //                         sessionStorage.setItem("city", city);
            //                         sessionStorage.setItem("state", state);
            //                         sessionStorage.setItem("country", country);
            //                         sessionStorage.setItem("pincode", postal_code);
            //                         axios
            //                             .get(process.env.API_BASE_URL + "get_doctor_detail", {
            //                                 params: {
            //                                     doctor_username: slug1,
            //                                     latitude: latitude,
            //                                     longitude: longitude,
            //                                     get_location: 1,
            //                                 },
            //                             })
            //                             .then((response) => {
            //                                 if (response.data.status == "success") {
            //                                     // this.doctor_id = response.data.data._id;
            //                                     // console.log('sdad'+this.doctor_id);

            //                                     var distance = response.data.data.distance;
            //                                     $(".location_display").html(
            //                                         distance + " Km from your Location"
            //                                     );
            //                                 } else {}
            //                             });
            //                     }
            //                 }
            //             }
            //         );
            //     },
            //     function (error) {
            //         console.log("The Locator was denied :(");
            //     }
            // );
        }
    },

    mounted() {
        // setTimeout(() => {

        //     console.log(this.data)
        // }, 2000);

        if (this.$auth.loggedIn) {
            this.mbailnumbar = this.$auth.user.data.mobile
        }
        this.randomNumber = Math.floor(Math.random() * (200 - 50 + 1)) + 50;
        localStorage.setItem('book_visit_slot_id', '')
        $('body').removeClass('addnumbar')
        sessionStorage.setItem('notshow', 2)
        $(".addseseon").click(function () {
            sessionStorage.setItem("nurse_id", this.nurse_id);
            $('body').removeClass('addnumbar')
        }.bind(this))
        $(document).ready(function () {
            // Attach a scroll event handler
            var lastScrollTop = 0;

            var lastScrollTop = 0;

            $(window).scroll(function () {
                var st = $(this).scrollTop();
                if (st > lastScrollTop) {
                    // Scroll Down
                    $('.fab-btn').css('width', '40px');
                } else {
                    if (st > 200) {
                        $('.fab-btn').css('width', '150px');
                    }
                    // Scroll Up
                }
                lastScrollTop = st;
            });
        })

        //console.log(this.allrady_add_network.first_name)
        $(".notlogin").click(function (event) {
            event.preventDefault();
            if (!this.$auth.loggedIn) {
                this.loginGmail()
            }
        }.bind(this))

        sessionStorage.setItem("drfullpath", this.$route.fullPath);
        $('.btnbook').click(function () {
            $('body').addClass('addnumbar')

            function isMobile() {
                return window.innerWidth <= 768;
            }
            if (isMobile()) {
                window.scrollTo(0, 0);
            }
        })

        $('.mobail-numbutbtn').click(function () {
            $('body').removeClass('addnumbar')
        })
        this.routeinserach = localStorage.getItem('routgath');
        this.openpage = localStorage.getItem('openpage');

        this.slug1 = this.$route.path.split("/")[1];
        this.slug2 = this.$route.path.split("/")[2];
        this.slug3 = this.$route.path.split("/")[3];
        if (this.slug2 == "clinic") {
            $("#pills-home-tab").removeClass("active");
            $(".pills-profile-tab").trigger("click");
        }
        if (this.slug2 == 'Review') {
            $("#pills-home-tab").removeClass("active");
            $("#data_form").addClass("d-none");
            $(".pills-contact-tab").trigger("click");
            $('.loader').show();

            setTimeout(() => {
                // done = true
                this.resizeAllGridItems();
                //  console.log("done",done)
                $('.loader').hide();
            }, 1000);

            function isMobile() {
                return window.innerWidth <= 768;
            }
            if (isMobile()) {
                $("#pills-home-tab").removeClass("active");

                $(".pills-contact-tab2").trigger("click");
            } else {

            }

        }
        $('#inputCheck').click(function () {
            $("#data_form").removeClass("d-none");
            $('.mobilepadding').addClass('d-none')
            this.reviewfunction()
        }.bind(this))
        $('#cancelReview').click(function () {
            $("#data_form").addClass("d-none");
            $('.mobilepadding').removeClass('d-none')
        })
        $('#submit-btn').click(function () {
            $('.loader').show();
            setTimeout(() => {
                this.resizeAllGridItems();
                $('.loader').hide();
            }, 3000);
        }.bind(this))
        if ($('#inputCheck').checked = true) {
            $('.mobilepadding').addClass('d-none')
        }
        if (this.slug2 == "WriteAReview") {
            if (this.$auth.loggedIn) {
                $("#data_form").removeClass("d-none");
                $("#pills-contact-tab").removeClass("active");
                $(".pills-contact-tab").trigger("click");
                document.getElementById("inputCheck").checked = true;
                $("#data_form").removeClass("d-none");
                $('.mobilepadding').addClass('d-none')
            } else {
                this.loginGmail()

            }

        }
        /*  $('#pills-contact-tab').click(() => {
                this.$router.push("/" + this.slug1 + "/Review");
            }) */
        $(".pills-profile-tab").click(function () {
            this.$router.push("/" + this.slug1 + "/clinic");
        });
        this.longitude = sessionStorage.getItem("longitude");
        this.lattitude = sessionStorage.getItem("lattitude");
        /* if (this.lattitude == null) {
                this.longitude = this.$cookies.get("longitude");
                this.lattitude = this.$cookies.get("lattitude");
            }*/

        $(document).on("click", ".accordion-button", function () {
            $(this).toggleClass("click");
            $(".accordion-button").not(this).removeClass("click");
        });

        //  ---copy-text--
        const copyButton = document.getElementById("copy");

        const copyText = (e) => {
            const copiedText = copyButton.innerText;
            navigator.clipboard.writeText(copiedText);
            e.target.setAttribute("tooltip", "Copied! ✅");
        };

        const resetTooltip = (e) => {
            e.target.setAttribute("tooltip", "Copy to clipboard");
        };
        copyButton.addEventListener("click", (e) => copyText(e));
        copyButton.addEventListener("mouseover", (e) => resetTooltip(e));
        //    let longitude = sessionStorage.setItem("longitude", longitude);

        //sessionStorage.setItem("address_location", results[0].formatted_address);

        if (this.lattitude == null || this.lattitude == undefined || this.longitude == null || this.longitude == undefined) {
            this.longitude = '';
            this.lattitude = '';
        }
        axios
            .get(process.env.API_BASE_URL + "get_doctor_detail", {
                params: {
                    doctor_username: this.slug1,
                    latitude: this.lattitude,
                    longitude: this.longitude,
                },
            })
            .then((response) => {
                $('.loader').hide();
                if (response.data.status == "success") {
                    this.results = response.data.data;
                    this.doctor_id = response.data.data._id;
                    // console.log(this.results)
                    sessionStorage.setItem("doctor_id", this.doctor_id);
                    this.clinic_primary_address = this.results.clinic_primary_address;
                    var i = 0;
                    let locations = [];
                    // this.get_user_review()

                    const jsonString = this.results.treatment_list;
                    const titles = JSON.parse(jsonString);
                    this.Chief_Complaints = [];
                    titles.forEach(title => this.Chief_Complaints.push(" " + title));
                    if (this.results.search_services) {
                        const inputString = this.results.search_services;
                        const service_list = inputString.split(',');
                        const stringWithSpaces = service_list.join(', ');
                        this.service_list = ', ' + stringWithSpaces
                    }

                    const speciality = this.results.speciality;
                    this.speciality = speciality.replace(/ - /g, ', ');
                    // console.log(this.speciality)

                    sessionStorage.setItem("title", this.results.title);
                    sessionStorage.setItem("doctor_profile", this.results.doctor_profile);
                    sessionStorage.setItem("f_name", this.results.f_name);
                    sessionStorage.setItem("l_name", this.results.l_name);
                    // var myArray = Object.values(this.results.clinic_data);
                    // sessionStorage.setItem("clinic_data", JSON.stringify(myArray));

                    const firstConsultation = this.results && this.results.speciality ?
                        this.results.speciality.split('-')[0].trim() : '';
                    sessionStorage.setItem("speciality", firstConsultation);

                    if (this.results.clinic_primary_address.departments) {
                        // console.log(this.results.clinic_primary_address.departments)
                        this.departments = this.results.clinic_primary_address.departments
                    }

                    if (this.results.clinic_primary_address.sublocality_level_2 !== null && this.results.clinic_primary_address.sublocality_level_2 !== undefined && this.results.clinic_primary_address.sublocality_level_2 !== '') {
                        this.title_address = this.results.clinic_primary_address.sublocality_level_1 + ", " + this.results.clinic_primary_address.city
                        this.description_address = this.results.clinic_primary_address.sublocality_level_1 + ", " + this.results.clinic_primary_address.state + ", " + this.results.clinic_primary_address.country
                        this.keywords_address = this.results.clinic_primary_address.sublocality_level_2 + ", " + this.results.clinic_primary_address.sublocality_level_1 + ", " + this.results.clinic_primary_address.city + ", " + this.results.clinic_primary_address.state + ", " + this.results.clinic_primary_address.country
                    } else if (this.results.clinic_primary_address.sublocality_level_1 !== null && this.results.clinic_primary_address.sublocality_level_1 !== undefined && this.results.clinic_primary_address.sublocality_level_1 !== '') {
                        if (this.results.clinic_primary_address.sublocality_level_1 === this.results.clinic_primary_address.city) {
                            this.title_address = this.results.clinic_primary_address.city
                            this.keywords_address = this.results.clinic_primary_address.city + ", " + this.results.clinic_primary_address.state + ", " + this.results.clinic_primary_address.country
                        } else {
                            this.title_address = this.results.clinic_primary_address.sublocality_level_1 + ", " + this.results.clinic_primary_address.city
                            this.description_address = this.results.clinic_primary_address.sublocality_level_1 + ", " + this.results.clinic_primary_address.state + ", " + this.results.clinic_primary_address.country
                            this.keywords_address = this.results.clinic_primary_address.sublocality_level_1 + ', ' + this.results.clinic_primary_address.city + ", " + this.results.clinic_primary_address.state + ", " + this.results.clinic_primary_address.country
                        }
                    } else {
                        this.title_address = this.results.clinic_primary_address.city
                        this.description_address = this.results.clinic_primary_address.state + ", " + this.results.clinic_primary_address.country
                        this.keywords_address = this.results.clinic_primary_address.city + ", " + this.results.clinic_primary_address.state + ", " + this.results.clinic_primary_address.country
                    }

                    /* this.results.clinic_primary_address.forEach(res => {

                                                      var lat = parseFloat(res.latitude);

                                                      var lng = parseFloat(res.longitude);

                                                      var name = '';
                                                     var distance = (this.results.distance/1000).toFixed(1)+'kg';
                                                      if(lat != '' && lng != '')
                                                      {
                                                        locations.push( [name,lat,lng,distance, i]);
                                                        i++;

                                                      }

                                                      });*/
                    var lat = parseFloat(this.results.clinic_primary_address.latitude);

                    var lng = parseFloat(this.results.clinic_primary_address.longitude);

                    var name = this.results.f_name;

                    var distance = (this.results.distance / 1000).toFixed(1) + "km";
                    if (lat != "" && lng != "") {
                        locations.push([name, lat, lng, distance, 0]);
                    }
                    axios
                        .get(process.env.API_BASE_URL + "get-doctor-user-review/?doctor_id=" + this.doctor_id).
                    then((response) => {
                        if (response.data.status == "success") {
                            this.user_review_list = response.data.data;

                        } else {}
                    });
                    this.initMap(locations);

                    //  ---readmorebtn--

                    let readmore = document.getElementById("readmore");
                    // let readmore2 = document.getElementById("readmore_two");
                    let readmortext = document.querySelector(".readmortext");

                    if (this.results.about.length > 350) {
                        $("#readmore").show();
                    } else {
                        $("#readmore").hide();
                    }
                    readmore.addEventListener("click", () => {
                        readmortext.classList.toggle("height");
                    });
                    let li = document.querySelectorAll("accordion-item");
                    if (this.results.servicechargesmapping.length > 5) {
                        $("#showmore").modal("hide");
                    } else {
                        $("#showmore").modal("show");
                    }
                    // showmore.addEventListener('click', () => {
                    //     let ul = document.querySelector("ul");
                    //     // ul.style.height = "200px"

                    // })
                    //get user review
                    //$('#pills-contact-tab').trigger('click');
                    if (this.$auth.loggedIn) {
                        // var token = sessionStorage.getItem("auth-token");
                        // // console.log("token",token)
                        var token = localStorage.getItem('auth._token.local');
                        axios.defaults.headers = {
                            Authorization: token,
                        }
                        axios
                            .post(process.env.API_BASE_URL + "already-added-in-network", {
                                user_id: this.$auth.user.data.id,
                                user_type: "doctor",
                                doctor_id: this.doctor_id,
                            })
                            .then((response) => {
                                if (response.data.status == "success") {
                                    //console.log(response.data.data);
                                    this.allrady_add_network = response.data.data
                                    //console.log(this.allrady_add_network.first_name)
                                    if (this.allrady_add_network.first_name == undefined) {
                                        this.isAdd = 1;
                                    } else {
                                        this.isAdd = 3;
                                    }
                                    if (this.isAdd == 1) {
                                        $("#addnetwork > img").attr('src', '/images/connections.svg');
                                        $("#addnetwork > span").text("Add To Network");

                                    } else {
                                        $("#addnetwork > img").attr('src', '/images/Shape.svg');
                                        $("#addnetwork > span").text("Network Doctor");
                                    }

                                } else {
                                    console.log("not workin")
                                }
                            });
                    }

                } else {
                    $('.loader').show();

                }
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

        $(selector).on("click", function () {
            $(selector).removeClass("active");
            $(this).addClass("active");
        });

        $(function () {
            $(".moreShow").slice(0, 1).show();
            $("#loadMore").on("click", function (e) {
                e.preventDefault();
                $(".moreShow:hidden").slice(0, 1).slideDown();
                if ($(".moreShow:hidden").length == 0) {
                    $("#loadLess").fadeIn("slow");
                    $("#loadMore").hide();
                    // $("#loadMore").text('Load only the first 4');
                }
                $("html,body").animate({
                        scrollTop: $(this).offset().top,
                    },
                    1500
                );
            });

            $("#loadLess").on("click", function (e) {
                e.preventDefault();
                $("div:not(:lt(4))").fadeOut();
                $("#loadMore").fadeIn("slow");
                $("#loadLess").hide();

                desiredHeight = $(window).height();

                $("html,body").animate({
                        scrollTop: $(this).offset().top + desiredHeight,
                    },
                    1500
                );
            });
        });

        // The function toggles more (hidden) text when the user clicks on "Read more". The IF ELSE statement ensures that the text 'read more' and 'read less' changes interchangeably when clicked on.
        $(".moreless-button").click(function () {
            $(".moretext").slideToggle();
            if ($(".moreless-button").text() == "Read less") {
                $(this).text("Read More");
            } else {
                $(this).text("Read less");
            }
        });
        $("#readmore2").click(function () {
            // $(".moretext").slideToggle();
            if (this.innerText == "Read More") {
                this.innerText = "Read less";
            } else {
                $(this).text("Read More");
            }
        });
        $(".pack_readmore").click(function () {
            $(this).next(".pack_details").toggle();
        });

        this.$watch(
            () => [this.results.doc_gallary_1, this.results.doc_gallary_2, this.results.doc_gallary_3],
            () => {
                if (!this.results.doc_gallary_2) {
                    setTimeout(() => {
                        $('.owl-nav').addClass('inactive')
                    }, 1000);
                }
                this.$nextTick(() => {
                    if ($(".owl-carousel").length > 0) {
                        $(".owl-carousel").owlCarousel({
                            loop: true,
                            margin: 10,
                            dots: true,
                            nav: true,
                            responsive: {
                                0: {
                                    items: 1
                                },
                                768: {
                                    items: 1
                                },
                                1000: {
                                    items: 1
                                },
                                1366: {
                                    items: 1
                                },
                                1440: {
                                    items: 1
                                },
                            },
                        });
                    }
                });
            }
        );
        $(".click_button").click(() => {
            // let done = false
            $('.loader').show();
            setTimeout(() => {
                // done = true
                this.resizeAllGridItems();
                //  console.log("done",done)
                $('.loader').hide();
            }, 3000);
        })
        $('.addclassinbody').click(() => {
            $('body').addClass('addnumbar')
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        })

    },

    methods: {
        // Call the function to start the process
        // generateOTP();
        async get_user_review() {
            axios.get(process.env.API_BASE_URL + 'get-user-review-by-id?user_id=' + this.$auth.user.data.id + '&doctor_id=' + this.doctor_id)
                .then((response) => {
                    let result = response.data.data;
                    console.log(result.review_ques)
                    this.overall_rating = result.overall_rating;
                    this.review = result.review;
                    this.review_list = result.review_ques;
                })
        },
        async reviewfunction() {
            //get review question
            //get user review
            if (this.$auth.loggedIn) {
                var token = localStorage.getItem('auth._token.local');
                axios.defaults.headers = {
                    Authorization: token,
                }
                axios
                    .get(process.env.API_BASE_URL + "get-doctor-review-master", {
                        params: {
                            user_id: this.$auth.user.data.id,
                            doctor_id: this.doctor_id
                        }
                    })
                    .then((response) => {
                        if (response.data.status == "success") {
                            this.review_list = response.data.data;
                            if (this.review_list.overall_rating) {
                                this.overall_rating = this.review_list.overall_rating;
                            }
                            this.review = this.review_list.review;
                            // console.log("review_list", this.review_list);
                        } else {}
                    });
            }
        },

        btnbook() {
            $('body').addClass('addnumbar')

            function isMobile() {
                return window.innerWidth <= 768;
            }
            if (isMobile()) {
                window.scrollTo(0, 0);
            }
        },
        //review methods
        overall_rating_value(e) {
            // console.log(e.target.value)
            this.overall_rating = e.target.value
            $(".overlayExpe").removeClass('active')

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
        resizeAllGridItems() {
            const gridItems = this.$refs.grid.querySelectorAll('.grid-item');
            gridItems.forEach((item) => {
                this.resizeGridItem(item);
            });
        },

        resizeGridItem(item) {
            let gridPropertiesSet = false;

            $(item).css('height', 'auto');

            let gridStyle = window.getComputedStyle(this.$refs.grid);
            let rowHeight = parseInt(gridStyle.getPropertyValue('grid-auto-rows'));
            let rowGap = parseInt(gridStyle.getPropertyValue('grid-row-gap'));
            this.$refs.grid.style.gridAutoRows = rowHeight + 'px';
            this.$refs.grid.style.gridRowGap = rowGap + 'px';

            let contentHeight = $(item).prop('scrollHeight');
            let rowSpan;
            if (contentHeight < rowHeight) {
                rowSpan = 1;
            } else {
                rowSpan = Math.ceil((contentHeight + rowGap) / (rowHeight + rowGap));
            }

            $(item).css('grid-row-end', '');
            $(item).css('grid-row-end', "span " + rowSpan);

        },
        loginGmail() {
            google.accounts.id.prompt();

        },
        handleCredentialResponse(response) {
            // console.log(response.credential);
            const token = jwtDecode(response.credential)
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

        async addDoctorsNewWork() {
            var is_add = $("#is_add").val()
            if (is_add == 3) {
                // alert(is_add)
                let confom = confirm("Are you sure to remove?");
                if (confom) {
                    $("#addnetwork > img").attr('src', '/images/connections.svg');
                    $("#addnetwork > span").text("Add To Network");
                    is_add = 2
                }
                // alert(is_add)
            }
            if (is_add != 3) {

                try {
                    const token = localStorage.getItem('auth._token.local');
                    const response = await this.$axios.post(process.env.API_BASE_URL + 'add-doctors-newwork', {
                        user_id: this.$auth.user.data.id,
                        doctor_id: this.doctor_id,
                        is_add: is_add,
                    }, {
                        headers: {
                            'Authorization': token,
                        }
                    });
                    if (response && response.data && response.data.status === 'success') {
                        if (is_add == 2) {
                            $("#addnetwork > img").attr('src', '/images/connections.svg');
                            $("#addnetwork > span").text("Add To Network");
                            $("#is_add").val(1)
                            response.data.message = "Removed from your network!"
                        } else {
                            $("#addnetwork > img").attr('src', '/images/Shape.svg');
                            $("#addnetwork > span").text("Network Doctor");
                            $("#is_add").val(3)
                            response.data.message = "Added to network successfully!"
                        }
                        this.$toast.success(response.data.message);
                    } else {
                        alert("Failed");
                    }
                } catch (error) {
                    console.error("Error:", error);
                    alert("An error occurred while processing your request");
                }
            }
        },

        async onSignup() {
            if (this.overall_rating !== '') {
                $("#data_form").addClass("d-none");
                $('.mobilepadding').removeClass('d-none')
                var form = $('#data_form');
                form.parsley().validate();
                if (form.parsley().isValid()) {
                    var formData = $('#data_form').serialize();
                    try {
                        await this.$axios.post(process.env.API_BASE_URL + 'doctor-review', {
                            data: formData
                        }).
                        then((res) => {
                            if (res.data.status == 'success') {
                                $('.loader').hide();
                                var success = 1;
                                this.$toast.success(res.data.message);
                                axios
                                    .get(process.env.API_BASE_URL + "get-doctor-user-review/?doctor_id=" + this.doctor_id).
                                then((response) => {
                                    if (response.data.status == "success") {
                                        this.user_review_list = response.data.data;
                                        // console.log("this.user_review_list", this.user_review_list);
                                        this.submitExperience();

                                    } else {}
                                });
                            } else {
                                $('.loader').hide();
                                var success = 0;
                            }

                        })

                    } catch (e) {
                        this.error = e.response.data.message
                    }
                } else {
                    $('.loader').hide();
                }
            } else {
                alert("Add Overall Experiance")
                $(".overlayExpe").addClass('active')
            }

        },
        submitExperience(event) {
            document.getElementById("inputCheck").checked = false;
            event.preventDefault();
            this.experience = "";
            // $('#ratingStars input[type="radio"]').prop('checked', false);
            // $(".rs0").prop("checked", true);
            // this.$router.push("/" + this.slug1 + "/Review");
        },
        updateRating(rating) {
            this.selectedRating = rating;
        },
        async share() {
            try {
                var title = document.title
                const firstConsultation = this.results.speciality.split('-')[0].trim();
                let share;
                if (this.clinic_primary_address.sublocality_level_1) {
                    share = `${this.clinic_primary_address.sublocality_level_1}, ${this.clinic_primary_address.city}`
                } else {
                    share = `${this.clinic_primary_address.city}, ${this.clinic_primary_address.state}`
                }
                await navigator.share({
                    text: `${this.results.title} ${this.results.f_name} ${this.results.l_name} - ${firstConsultation} in ${share}.\n`,
                    title: title,
                    url: this.url,
                });

            } catch (err) {
                console.log(`Error: ${err}`)
                // this.resultMessage = `Error: ${err}`;
            }
            const firstConsultation = this.results.speciality.split('-')[0].trim();
            let share;
            if (this.clinic_primary_address.sublocality_level_1) {
                share = `${this.clinic_primary_address.sublocality_level_1}, ${this.clinic_primary_address.city}`
            } else {
                share = `${this.clinic_primary_address.city}, ${this.clinic_primary_address.state}`
            }
            let text = `${this.results.title} ${this.results.f_name} ${this.results.l_name} - ${firstConsultation} in ${share}.\n`

            this.openFlutterPage_share(text, this.url)

        },
        openFlutterPage_share(text, url) {
            console.log(process.env.API_BASE_URL_CURE + url)
            if (window.flutter_inappwebview) {
                // Call the Flutter handler
                window.flutter_inappwebview.callHandler('openFlutterPage_share', text, process.env.API_BASE_URL_CURE + url).then(function (response) {
                    console.log("Response from Flutter: " + response);
                });
            } else {
                console.log("Flutter handler not available");
            }
        },
        handleChange() {
            if (this.mbailnumbar.length === 10) {
                console.log("Input changed:", this.mbailnumbar);
            } else {
                console.log("Input not changed:", this.mbailnumbar);
            }
        },
        changeMobileNumber() {
            $("#otpinmobail").modal("hide");
            $("#Mobailnumbar").modal("show");
        },
        async initMap(locations) {
            const {
                Map
            } = await google.maps.importLibrary("maps");
            const {
                AdvancedMarkerElement
            } = await google.maps.importLibrary(
                "marker"
            );
            const map = new Map(document.getElementById("map-part"), {
                center: {
                    lat: parseFloat(locations[0][1]),
                    lng: parseFloat(locations[0][2]),
                },
                zoom: 13,
                mapId: "4504f8b37365c3d0",
            });
            var marker, i;
            for (i = 0; i < locations.length; i++) {
                if (!Number.isNaN(locations[i][1])) {
                    const priceTag1 = document.createElement("div");

                    priceTag1.className = "price-tag";
                    priceTag1.textContent = locations[i][3];

                    new AdvancedMarkerElement({
                        map,
                        position: {
                            lat: parseFloat(locations[i][1]),
                            lng: parseFloat(locations[i][2]),
                        },
                        content: priceTag1,
                    });
                }
                /*marker = new google.maps.Marker({
                                      position: new google.maps.LatLng(locations[i][1], locations[i][2]),
                                      map: map
                                    });

                                    google.maps.event.addListener(marker, 'click', (function(marker, i) {
                                      return function() {
                                        infowindow.setContent(locations[i][0]);
                                        infowindow.open(map, marker);
                                      }
                                    })(marker, i));*/
            }

            /*const priceTag = document.createElement("div");

                            priceTag.className = "price-tag";
                            priceTag.textContent = "12.5kg";
                            new AdvancedMarkerElement({
                              map,
                              position: { lat: 23.0336769, lng: 72.6407266},
                              content: priceTag,
                            });*/
        },
        startTimer() {
            this.timer = 120
            if (this.intervalId === null) {
                this.intervalId = setInterval(() => {
                    if (this.timer > 0) {
                        this.timer--;
                    } else {
                        this.showParagraph = true;
                        clearInterval(this.intervalId); // Stop the timer when it reaches 0
                        this.intervalId = null; // Reset interval ID
                    }
                }, 1000); // Update the timer every second (1000 milliseconds)
            }
        },

        write(event) {
            if (!event) {
                console.error("Event is undefined");
                return;
            }
            const parentDiv = event.currentTarget.parentNode;
            const packDetails = parentDiv.querySelector(".hidedetail");
            const packReadmore = parentDiv.querySelector(".pack_readmore");
            packDetails.classList.toggle("pack_details");
            packReadmore.value =
                packReadmore.value === "Read More" ? "Read less" : "Read More";
        },

    },
    computed: {

        formattedTime() {
            const minutes = Math.floor(this.timer / 60);
            const seconds = this.timer % 60;
            return `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
        }
    },
    components: {
        mobilenav,
        desktopnav,
        footerapp,
    },
};
</script>
