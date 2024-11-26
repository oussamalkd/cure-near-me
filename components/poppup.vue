<template>
<div>
    <div class="modal fade modal-of-quick-search" id="errorModal1" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true" style="z-index: 10000;">
        <div class="modal-dialog modal-dialog-centered" style="max-width: 750px">
            <div class="modal-content modal-blur modelWhite footer_popup">
                <button type="button" class="btn-close ms-auto" data-bs-dismiss="modal" aria-label="Close"></button>
                <div class="modal-header border_in" style="background-color: #FFEDEF;color: red;">Please enable location permission from settings and try again!.</div>

            </div>
        </div>
    </div>
    <div class="modal fade modal-of-quick-search" id="commingSoonModal1" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered" style="max-width: 750px">
            <div class="modal-content modal-blur modelWhite footer_popup">
                <button type="button" class="btn-close ms-auto" data-bs-dismiss="modal" aria-label="Close"></button>
                <div class="modal-header border_in">Work In Progress</div>
                <div class="modal-body">
                    <div class="a-popover-wrapper" aria-busy="false">
                        <header class="a-popover-header">
                            <h4 class="h4 roboto text-blue">Coming Soon</h4>
                            <!--button data-action="a-popover-close" class=" a-button-close-a11y a-button-close a-declarative" aria-label="Close"><i class="a-icon a-icon-close"></i></button-->
                        </header>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="modal fade modal-of-quick-search" id="ContactUS" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered" style="max-width: 750px">
            <div class="modal-content modal-blur modelWhite footer_popup">
                <button type="button" class="btn-close ms-auto" data-bs-dismiss="modal" aria-label="Close"></button>
                <div class="modal-header border_in">Work In Progress</div>
                <div class="modal-body">
                    <div class="a-popover-wrapper" aria-busy="false">
                        <header class="a-popover-header">
                            <h4 class="h4 roboto text-blue">
                                <a href="tel:+91 7600292009">Call us at +91 7600292009</a>
                            </h4>
                            <!--button data-action="a-popover-close" class=" a-button-close-a11y a-button-close a-declarative" aria-label="Close"><i class="a-icon a-icon-close"></i></button-->
                        </header>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="modal fade modal-of-quick-search Locationaccees" id="exampleModal1" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
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
                                        <a href="#" class="cta">Sign in to see your addresses</a>
                                    </div>
                                    <div class="a-divider a-divider-break a-spacing-top-base">
                                        <h5>OR</h5>
                                    </div>
                                </div>
                                <div class="locationForm">
                                    <div class="a-column a-span12">
                                        <!-- <input class="form-control" type="text"  id="GLUXZipUpdateInput" aria-label="or enter an Indian pincode" data-action="GLUXPostalInputAction" placeholder="Enter Nearest Landmark, Area or PIN" /> -->
                                        <input class="form-control searchTextField_two" type="text" ref="origin" id="searchTextField" aria-label="or enter an Indian pincode" data-action="GLUXPostalInputAction" />
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
                        <!-- <div v-if="$auth.loggedIn"></div> -->
                        <!-- <div v-else>
                            <div class="chooselocat">
                                <h4 class=" roboto text-blue mb-3">Choose your location</h4>

                                <div class="chooselocgrop">
                                    <div class="choosescr">
                                        <div class="chooseloBox">
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
                                        </div>
                                        <div class="chooseloBox">
                                            <h4 class="h4 roboto text-blue">
                                                Choose your location
                                            </h4>
                                            <p class="mb-0 text-blue roboto mb-3">
                                                Select a delivery location to see product availability
                                                and delivery options
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div> -->
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="modal fade modal-of-quick-search booking " id="booking1" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true" data-bs-backdrop='static'>
        <div class="modal-dialog modal-dialog-centered" style="max-width: 450px;">
            <div class="modal-content  modelWhite " style="border-radius: 10px;">
                <button type="button" class="Close_popupbtn ms-auto" data-bs-dismiss="modal" aria-label="Close">
                    <img src="/images/Close_popup.svg" alt="Close_popup" height="14" width="14">
                </button>
                <div style=" border-radius: 10px;">
                    <form action="" method="post">
                        <h3 class="text-blue">Select Patient</h3>
                        <div class="text-left w-100 my-2">
                            <label for="" class="popup_textleble">Patient Name<span style="color: red;">*</span></label>
                            <select name="" id="selectedUserId" class="d-block w-100" v-model="selectedUserId" @change="getUserId">
                                <option v-for="(user_data, index) in user_name" :key="index" :value="user_data.id">{{ user_data.name }} ({{ user_data.relationship }})</option>
                            </select>
                        </div>

                        <div class="a-divider a-divider-break a-spacing-top-base">
                            <h5>OR</h5>
                        </div>
                        <div id="updatepage">
                            <button type="button" class=" ms-auto">
                                <a class="editright">+ Add New Patient</a>
                            </button>
                        </div>
                        <hr>
                        <div class="row mt-4">
                            <div class="bookinbtn d-flex">
                                <!-- <button class="col-6  bookinbtn_two" style="width: 50%;">
                                    <button type="button" class="ms-auto" data-bs-dismiss="modal" aria-label="Close">
                                        <a href="#" class="w-100">
                                            Cancel
                                        </a>
                                    </button>
                                </button> -->
                                <button type="button" class=" ms-auto col-6" data-bs-dismiss="modal" aria-label="Close" style="width: 80%; margin: auto;" id="updetpassent">
                                    <a class="editright w-100" data-bs-toggle="modal" data-bs-target="#bookingnext">Select</a>
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
    <div class="modal fade modal-of-quick-search booking" id="bookingnext" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true" data-bs-backdrop='static'>
        <div class="modal-dialog modal-dialog-centered" style="max-width: 450px;">
            <div class="modal-content  modelWhite " style="border-radius: 10px;">
                <button type="button" class="Close_popupbtn ms-auto" data-bs-dismiss="modal" aria-label="Close" @click="pation_updates_pupop_close">
                    <img src="/images/Close_popup.svg" alt="Close_popup" height="14" width="14">
                </button>
                <div style=" border-radius: 10px;">
                    <form action="" method="post">
                        <h3 class="text-blue">{{Update}}</h3>
                        <div class="text-left w-100 my-2">
                            <label for="" class="popup_textleble">Patient Name <span style="color: red;">*</span></label>
                            <!-- <input type="text" class="w-100" v-model="name" id="name" required autocomplete="off" > -->
                            <input type="text" class="w-100" v-model="name" id="value" required autocomplete="off" @input="validateInput" pattern="[A-Za-z]+">
                            <span class="parsley-length" id="name-error" style="display:none;">This field is required.</span>
                        </div>
                        <div class="d-flex g-3 justify-content-between w-100">
                            <div class="text-left col-5">
                                <label for="" class="popup_textleble">Gender<span style="color: red;">*</span></label>
                                <select name="" class="d-block w-100" required v-model="gender" id="gender">
                                    <option value="" disabled selected style="color: gray;">-- Select -- </option>
                                    <option value="Male">Male</option>
                                    <option value="Female">FeMale</option>
                                    <option value="Other">Other</option>
                                </select>
                                <span class="parsley-length" id="gender-error" style="display:none;">This field is required.</span>
                            </div>
                            <div class="text-left col-5">
                                <label for="" class="popup_textleble">Age(Yrs) <span style="color: red;">*</span></label>
                                <input type="number" inputmode="numeric" class="w-100" id="Age" required v-model="Age" maxlength="3" @input="validateInput_number">
                                <span class="parsley-length" id="Age-error" style="display:none;">This field is required.</span>
                            </div>
                        </div>
                        <div class="text-left w-100 my-2">
                            <label for="" class="popup_textleble">Relationship<span style="color: red;">*</span></label>
                            <select name="" id="Relationship" required class="d-block w-100" v-model="Relationship">
                                <option value="myself" disabled> <span>MySelf</span></option>
                                <option value="Father">Father</option>
                                <option value="Mother">Mother</option>
                                <option value="Son">Son</option>
                                <option value="Daughter">Daughter</option>
                                <option value="Husband">Husband</option>
                                <option value="Wife">Wife</option>
                                <option value="Brother">Brother</option>
                                <option value="Sister">Sister</option>
                                <option value="Grandfather">Grandfather</option>
                                <option value="Grandmother">Grandmother</option>
                                <option value="Grandson">Grandmother</option>
                                <option value="Granddaughter">Granddaughter</option>
                                <option value="Uncle">Uncle</option>
                                <option value="Aunt">Aunt</option>
                                <option value="Other">Other</option>
                            </select>
                            <span class="parsley-length" id="Relationship-error" style="display:none;">This field is required.</span>
                        </div>
                        <div class="text-left w-100">
                            <label for="" class="popup_textleble">Contact Num<span style="color: red;">*</span></label>
                            <div class="Contact_Num_inpupop">
                                <span>+91 </span>
                                <input type="number" class="w-100" inputmode="numeric" id="Contact_Num" required v-model="Contact_Num">
                            </div>
                            <span class="parsley-length" id="Contact_Num-error" style="display:none;">This field is required.</span>
                        </div>
                        <div class="text-left w-100 position-relative mt-2">
                            <label for="" class="popup_textleble">Nearest Landmark<span style="color: red;">*</span></label>
                            <img src="/images/Search.svg" alt="" style="position: absolute; left: 10px; top: 35px;">
                            <input type="text" class="w-100 ps-5" id="Nearest_Landmark searchTextField" required v-model="Nearest_Landmark" placeholder="Try apartment name & area" ref="location">
                            <span class="parsley-length" id="Nearest_Landmark-error" style="display:none;">This field is required.</span>
                        </div>
                        <div class="my_location" @click="geoLiveLocation">
                            <img src="/images/carbon_location.svg" alt="" height="15" width="15">
                            <a href="#">Use my current location</a>
                        </div>
                        <div class="text-left w-100 position-relative Nearest_Landmark mt-2">
                            <label for="" class="popup_textleble">Address<span style="color: red;">*</span></label>
                            <textarea name="" id="patient_address" style="width: 100%;" rows="5" placeholder="Enter House number, Apartment name, Nearest Landmark & Area" v-model="patient_address"></textarea>
                            <span class="parsley-length" id="patient_address-error" style="display:none;">This field is required.</span>
                        </div>
                        <hr>
                        <div class="row ">
                            <div class="bookinbtn bookinbtn_two">
                                <a href="#">
                                    <button type="button" class=" ms-auto" id="bookinbtn_two_close" @click="bookinbtn_two_close">
                                        Back
                                    </button>
                                </a>

                                <a id="submitdata">
                                    <button type="button" class="ms-auto">
                                        {{submit}}
                                    </button>
                                </a>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
    <div class="modal fade modal-of-quick-search booking" id="Appointment_Call" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true" data-bs-backdrop='static'>
        <div class="modal-dialog modal-dialog-centered" style="max-width:450px;">
            <div class="modal-content  modelWhite " style="border-radius: 10px;">
                <button type="button" class="Close_popupbtn ms-auto" @click="Appointment_Call_close">
                    <img src="/images/Close_popup.svg" alt="Close_popup" height="14" width="14">
                </button>
                <div style=" border-radius: 10px;">
                    <form action="" method="post">
                        <h3 class="text-blue" v-if="Request_Callback == 1">Call Request Reason <span style="color: #7B7B7B;">(Optional)</span></h3>
                        <h3 class="text-blue" v-else>Appointment Reason <span style="color: #7B7B7B;">(Optional)</span></h3>
                        <div class="text-left w-100 my-2">
                            <label for="" class="popup_textleble">Service</label>
                            <!-- <select name="" class="d-block w-100" v-model="service_value" required id="Service">
                                <option v-for="(service_name, index) in service_name" :key="index" :value="service_name._id">{{ service_name.service_name }}</option>
                            </select> -->
                            <v-select v-model="service_value" :options="serviceOptions()" :multiple="true" id="Service" @input="service_value_id(service_value)"></v-select>
                            <span class="parsley-length" id="name-error" style="display:none;">This field is required.</span>
                            <span class="parsley-length" v-if="get_service_next_slots != ''" style="color: gray;text-align: justify; font-size: .9rem;" v-for="(result, index) in get_service_next_slots ">
                                <li> {{ result }}</li>
                            </span>
                        </div>
                        <div v-for="(outerBox, outerIndex) in boxes" :key="outerIndex" class="text-left w-100 my-2" v-if="messege3.provider_type !== 2">
                            <label v-if="outerIndex === 0" for="" class="popup_textleble">Chief Complains</label>
                            <div :id="'chief_remove' + outerIndex" class="d-none Chief_Complains_input my-2">
                                <div class="d-flex ps-2 justify-content-between align-items-center">
                                    <p class="mb-0 col-10" @click="show_border_fever($event, outerIndex)">{{ outerBox.Chief_Complains_value }} <span v-if="outerBox.severe"> | {{ outerBox.severe }}</span> <span v-if="outerBox.duration_time">| {{ outerBox.duration_time }}</span> <span v-if="outerBox.duration"> {{ outerBox.duration }}</span></p>
                                    <a class="col-1 text-center" @click="remove_Chief_Complains($event, outerIndex)" style="cursor: pointer;"><img src="/images/Chief_Complainsdelet.svg" alt=""></a>
                                </div>
                            </div>
                            <v-select class="d-block Chief_Complains_placeholder w-100 mb-2" :options="getDiseaseOptions" v-model="outerBox.selectedDisease" @input="Chief_Complains(outerBox.selectedDisease, outerIndex)" :id="'chief_add' + outerIndex" placeholder="Enter Chief Complains"></v-select>
                            <span class="parsley-length" id="name-error" style="display:none;">This field is required.</span>
                            <div class="border_fever" :id="'border_fever' + outerIndex">
                                <div class="d-flex justify-content-between align-items-center">
                                    <p class="mb-0">{{ outerBox.Chief_Complains_value }}</p>
                                    <a @click="removeBox($event, outerIndex)"><img src="/images/Chief_ComplainsClose.svg" alt=""></a>
                                </div>
                                <div>
                                    <label for="">Severity Level</label>
                                    <div>
                                        <input type="button" value="Severe" @click="Severity_Level('Severe', outerIndex, $event)" ref="Severe">
                                        <input type="button" value="High" @click="Severity_Level('High', outerIndex, $event)" ref="High">
                                        <input type="button" value="Moderate" @click="Severity_Level('Moderate', outerIndex, $event)" ref="Moderate">
                                    </div>
                                </div>
                                <div class="duration_time">
                                    <label for="">Duration</label>
                                    <div>
                                        <input type="button" value="1" @click="duration_time_valu(1, outerIndex, $event)">
                                        <input type="button" value="2" @click="duration_time_valu(2, outerIndex, $event)">
                                        <input type="button" value="3" @click="duration_time_valu(3, outerIndex, $event)">
                                        <input type="button" value="4" @click="duration_time_valu(4, outerIndex, $event)">
                                        <input type="button" value="5" @click="duration_time_valu(5, outerIndex, $event)">
                                        <input type="button" value="6" @click="duration_time_valu(6, outerIndex, $event)">
                                        <select name="" id="" class="d-inline" @change="duration_time_time($event, outerIndex)">
                                            <option value="">Select</option>
                                            <option value="Hour">Hour</option>
                                            <option value="Day">Day</option>
                                            <option value="Week">Week</option>
                                            <option value="Month">Month</option>
                                            <option value="Quarter">Quarter</option>
                                            <option value="Year">Year</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="text-end" v-if="messege3.provider_type !== 2">
                            <button class="add_more_box" @click="addMoreBox">+ Add more</button>
                        </div>
                        <hr>
                        <div class="row ">
                            <div class="bookinbtn bookinbtn_two">
                                <a @click="Skip_servies">
                                    <button type="button" class=" ms-auto" data-bs-dismiss="modal" aria-label="Close">
                                        Skip
                                    </button>
                                </a>

                                <a id="submitdata_two">
                                    <button type="button" class="ms-auto">
                                        Submit
                                    </button>
                                </a>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
    <div class="modal fade modal-of-quick-search booking" id="gamilpopop" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true" data-bs-backdrop='static'>
        <div class="modal-dialog modal-dialog-centered" style="max-width: 305px; height: 330px;">
            <div class="modal-content  modelWhite " style="border-radius: 10px;">
                <button type="button" data-bs-dismiss="modal" aria-label="Close" class="bg-none ms-auto"><img src="/images/Close_btn.svg" alt="Close_btn" width="33"></button>
                <div style="width: 100%; height: 100%;" class="gamilbody">
                    <div class="gamailpopop_img">
                        <img src="/images/cureicon.svg" alt="cureicon" width="100" height="100">
                    </div>
                    <div class="gamailpopop_text">
                        <h2>Install CureNearMe</h2>
                        <p>Install this application on your home screen for quick and easy access when you’re on the go.</p>
                    </div>
                </div>
                <div class="gamailpopop_footer">
                    <p>Just tap <img src="/images/shareimg.svg" alt="shareimg" width="18" height="21">then ‘Add to Home Screen’</p>
                </div>
            </div>
        </div>
    </div>
    <div class="modal fade modal-of-quick-search Locationaccees" id="exampleModalcode" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered" style="max-width: 500px">
            <div class="modal-content modal-blur modelWhite p-0">
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
                                <div @click="shin_in_page">
                                    <a href="#" class="cta">Sign in to see your addresses</a>
                                </div>
                                <div class="a-divider a-divider-break a-spacing-top-base">
                                    <h5>OR</h5>
                                </div>
                            </div>
                            <div class="locationForm">
                                <div class="a-column a-span12">
                                    <input type="hidden" name="pos" value="" id="post_code" />
                                    <input type="hidden" name="city" value="" id="city" />
                                    <input type="hidden" name="state" value="" id="state" />
                                    <input type="hidden" name="country" value="" id="country" />
                                    <input type="hidden" name="latitude" value="" id="latitude" />
                                    <input type="hidden" name="longitude" value="" id="longitude" />
                                    <input class="form-control" type="text" ref="location_two" id="searchTextField" aria-label="or enter an Indian pincode" data-action="GLUXPostalInputAction" />
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
</template>

<script>
import axios from 'axios';

import store from "~/static/js/store";


var options = {
    mapTypeId: "roadmap",
    componentRestrictions: {
        country: "IN",
    },
};
export default {
    name: "poppup",
    data: () => ({
        Update: "Update",
        submit: "Update",
        name: "",
        gender: '',
        Relationship: '',
        Age: '',
        dynamicParameter: '',
        user_name: [],
        get_user_data: '',
        selectedUserId: null,
        select: 0,
        Nearest_Landmark: '',
        Contact_Num: '',
        patient_address: '',
        longitude: '',
        latitude: '',
        seceted_name: '',
        my_id: '',
        service_name: [],
        service_value: '',
        get_diseases_list: [],
        severity: '',
        services_id: [],
        get_service_next_slots: '',
        boxes: [{
            Chief_Complains_value: '',
            Chief_Complains_id: [],
            selectedDisease: '',
            severe: '',
            duration_time: '',
            duration: ''
        }],
        Request_Callback: 0
    }),
    computed: {
        messege3() {
            return store.state.message3;
        },
        messege() {
            return store.state.message;
        },
        message2() {
            return store.state.message2;
        },
        getDiseaseOptions() {
            return this.get_diseases_list.map(disease => ({
                label: disease.name,
                value: disease._id
            }))
        },

    },
    mounted() {
        $('#Contact_Num').on('chage', function () {
            const maxLength = 10;
            if ($(this).val().length > maxLength) {
                $(this).val($(this).val().slice(0, maxLength));
            }
        });
        // $('#pation_updates_pupop_close').click(function(){
        //     this.selectedUserId = localStorage.getItem('user_id')
        // });
        $(".border_fever .duration_time_input").click(function () {
            // $(this).toggleClass("input-with-icon")
            // $(this).toggleClass("active");
            // $(this).siblings("input").removeClass("active");
            // $(this).siblings("input").removeClass("input-with-icon");
        })
        this.Request_Callback = localStorage.getItem("Request_Callback");

        // setTimeout(() => {
        //     this.selectedUserId = this.seceted_name; // Assuming user_name is an array containing user data objects
        //     // this.name = this.$auth.user.data.first_name
        // }, 3000);

        this.latitude = sessionStorage.getItem('lattitude')
        this.longitude = sessionStorage.getItem('longitude')

        this.patient_list()

        this.dynamicParameter = sessionStorage.getItem("drfullpath")
        $("#updatepage button").click(() => {
            // console.log("add present");
            $("#bookingnext").modal("show");
            $("#booking1").modal("hide");
            this.Update = "Add Patient";
            this.submit = "Submit";
            this.name = "";
            this.patient_address = '';
            this.Contact_Num = '';
            this.Nearest_Landmark = '';
            this.Age = '';
            this.Relationship = '';
            this.gender = '';
            this.selectedUserId = ''
            this.get_user_data = ''
            this.select = 0,
                $("#Relationship").css("pointer-events", "auto");
            $("#Relationship").css("background-color", "#FFFF");
            $("#Contact_Num").prop("disabled", false);
            $("#Relationship").css("pointer-events", "auto");
            $("#Relationship").css("background-color", "#FFFF");
            $("#Contact_Num").prop("disabled", false);
        });
        $("#updetpassent").click(() => {
            // console.log("updet present");
            this.selectedUserId = localStorage.getItem('user_id')
            this.get_user_data = localStorage.getItem('user_id')
            $("#bookingnext").modal("show");
            $("#booking1").modal("hide");
            this.Update = "Update Patient";
            this.submit = "Update";
            this.name = this.name;
            this.select = 1

            try {
                $('.loader').show()
                axios.get(process.env.API_BASE_URL + 'get_patient_details?patient_id=' + this.get_user_data).
                then((response) => {
                    // console.log(response.data.data)
                    this.name = response.data.data.name
                    this.gender = response.data.data.gender
                    this.Age = response.data.data.age
                    this.Relationship = response.data.data.relationship
                    this.patient_address = response.data.data.address
                    this.Nearest_Landmark = response.data.data.nearest_landmark
                    this.Contact_Num = response.data.data.contact_no
                    this.longitude = response.data.data.longitude
                    this.latitude = response.data.data.latitude
                    $('.loader').hide()
                    if (this.selectedUserId == this.my_id) {
                        $("#Relationship").css("pointer-events", "none");
                        $("#Contact_Num").prop("disabled", true);
                        $(".Contact_Num_inpupop").addClass('dactive')

                        $("#Relationship").css("background-color", "#cccccc33");
                    } else {
                        $(".Contact_Num_inpupop").removeClass('dactive')

                        $("#Relationship").css("pointer-events", "auto");
                        $("#Relationship").css("background-color", "#FFFF");
                        $("#Contact_Num").prop("disabled", false);
                    }
                    if (response.data.data.latitude == null && response.data.data.longitude == null) {
                        this.latitude = sessionStorage.getItem('lattitude')
                        this.longitude = sessionStorage.getItem('longitude')
                    }
                })
            } catch (error) {

            }

        });
        $("#addmember").click(() => {
            // console.log("updet present");
            $("#bookingnext").modal("show");
            $("#booking1").modal("hide");
            this.Update = "Add Patient";
            this.submit = "Submit";
            this.name = "";
            this.patient_address = '';
            this.Contact_Num = '';
            this.Nearest_Landmark = '';
            this.Age = '';
            this.Relationship = '';
            this.gender = '';
            this.selectedUserId = ''
            this.get_user_data = ''
            this.select = 0,
                $("#Relationship").css("pointer-events", "auto");
            $("#Relationship").css("background-color", "#FFFF");
            $("#Contact_Num").prop("disabled", false);
        });
        $("#submitdata").click((event) => {
            this.Request_Callback = localStorage.getItem("Request_Callback");

            event.preventDefault();
            const fields = ['name', 'gender', 'Relationship', 'Age', 'Contact_Num', 'Nearest_Landmark', 'patient_address'];
            let anyEmpty = false;

            fields.forEach(field => {
                // Log the current field value
                // console.log(`${field}: ${this[field]}`);

                if (field === 'Contact_Num') {
                    $(`#${field}-error`).show();
                    if (this[field].length !== 10) {
                        anyEmpty = true;
                        $(`#${field}-error`).text('Contact number must be 10 characters long.').show();
                    } else {
                        $(`#${field}-error`).hide();
                    }
                } else if (field === 'Age') {
                    if (this[field].length > 3) {
                        anyEmpty = true;
                        $(`#${field}-error`).text('Please enter valid Age').show();
                    } else if (this[field] == '') {
                        $(`#${field}-error`).show();
                    } else {
                        $(`#${field}-error`).hide();
                    }
                } else {
                    if (this[field] === '' || this[field] === null || this[field] === undefined) {
                        anyEmpty = true;
                        $(`#${field}-error`).show();
                    } else {
                        $(`#${field}-error`).hide();
                    }
                }
                //console.log(this[field])
            });

            if (anyEmpty) {
                return;
            } else {
                // $("#Appointment_Call").modal("show")
                // $("#bookingnext").modal("hide");

                // $("#Appointment_Call").modal("show")

                $('.loader').show()

                if (this.select == 0) {
                    this.latitude = sessionStorage.getItem('lattitude')
                    this.longitude = sessionStorage.getItem('longitude')
                    try {
                        axios.post(process.env.API_BASE_URL + "add_patient", {
                                user_id: this.$auth.user.data.id,
                                name: this.name,
                                gender: this.gender,
                                age: this.Age,
                                relationship: this.Relationship,
                                address: this.patient_address,
                                nearest_landmark: this.Nearest_Landmark,
                                contact_no: this.Contact_Num,
                                latitude: this.latitude,
                                longitude: this.longitude,
                            }).then((response) => {
                                sessionStorage.setItem("patient_id", response.data.data.id)
                                localStorage.setItem('Relationship', this.Relationship)
                                localStorage.setItem('name', this.name)
                                this.$toast.success(response.data.message);
                                this.patient_list()
                                this.selectedUserId = response.data.data.id
                                this.get_user_data = response.data.data.id
                                localStorage.setItem('user_id', response.data.data.id)
                                // console.log("this.selectedUserId", this.selectedUserId)
                                // console.log("this.get_user_data", this.get_user_data)
                                // console.log(response.data)
                                this.callFunction(this.name, this.Relationship)

                                $("#bookingnext").modal("hide");

                                $("#Appointment_Call").modal("show")
                                // this.latitude = sessionStorage.getItem('lattitude')
                                // this.longitude = sessionStorage.getItem('longitude')
                                this.Services_list()
                            })
                            .catch((error) => {
                                console.error('There was an error with the request:', error);
                            }).finally(() => {
                                $('.loader').hide()
                            })

                    } catch (error) {
                        console.log
                    }
                } else {
                    // this.latitude = sessionStorage.getItem('lattitude')
                    // this.longitude = sessionStorage.getItem('longitude')
                    $('.loader').show()

                    try {
                        axios.post(process.env.API_BASE_URL + 'update_patient', {
                            patient_id: this.get_user_data,
                            name: this.name,
                            gender: this.gender,
                            age: this.Age,
                            relationship: this.Relationship,
                            address: this.patient_address,
                            nearest_landmark: this.Nearest_Landmark,
                            contact_no: this.Contact_Num,
                            latitude: this.latitude,
                            longitude: this.longitude,
                        }).then((response) => {
                            sessionStorage.setItem("patient_id", response.data.data.id)
                            this.$toast.success(response.data.message);
                            localStorage.setItem('Relationship', this.Relationship)
                            localStorage.setItem('name', this.name)
                            this.selectedUserId = response.data.data.id
                            localStorage.setItem('user_id', response.data.data.id)
                            $("#bookingnext").modal("hide");
                            this.callFunction(this.name, this.Relationship)

                            // if (this.$route.path == this.dynamicParameter + "/BookAppointment/BookingSumary") {
                            //     if (this.get_user_data !== '') {
                            //         location.reload();
                            //     }
                            // }

                            this.dynamicParameter = sessionStorage.getItem("drfullpath");
                            $("#bookingnext").modal("hide");

                            $("#Appointment_Call").modal("show")
                            // this.latitude = sessionStorage.getItem('lattitude')
                            // this.longitude = sessionStorage.getItem('longitude')
                            this.Services_list()

                            // if (this.$route.path === this.messege3.user_name + "/appointmentbook") {
                            //     this.$router.push(this.messege3.user_name + "/BookingSumaryClinic");
                            //     $("#Appointment_Call").modal("hide")
                            // } else {
                            //     this.$router.push(this.messege3.user_name + "/BookAppointment/BookingSumary");
                            //     $("#Appointment_Call").modal("hide")
                            //     setTimeout(() => {

                            //         if (this.get_user_data == this.my_id) {
                            //             let user_name = localStorage.getItem('name')
                            //             $('#my_user_name').html(user_name)

                            //         }
                            //     }, 2000);
                            // }

                        }).finally(() => {
                            $('.loader').hide()
                        })
                    } catch (error) {

                    }
                }

            }
            // console.log(this.$route);

        });
        $("#submitdata_two").click(() => {
            // console.log(this.boxes)
            this.boxes.forEach(box => {
                delete box.Chief_Complains_value;
                delete box.selectedDisease;
            });
            if (this.services_id !== '') {
                store.dispatch("compalaient_data", {
                    service_id: this.services_id,
                    compalaient_data: this.boxes
                });
            }
            this.dynamicParameter = sessionStorage.getItem("drfullpath");
            if (this.Request_Callback == 1) {
                if (this.messege3.provider_type == 1) {
                    let doctor_id = sessionStorage.getItem('doctor_id')
                    let patient_id = sessionStorage.getItem('patient_id')
                    let clinic_id = sessionStorage.getItem('clinic_id')

                    try {
                        axios.post(process.env.API_BASE_URL + 'callback_request_doctor_appointment', {
                            user_id: this.$auth.user.data.id,
                            doctor_id: doctor_id,
                            patient_id: patient_id,
                            service_id: this.services_id,
                            compalaient_data: this.boxes,
                            clinic_id: clinic_id
                        }).then((response) => {
                            // console.log(response.data)
                            $("#Appointment_Call").modal("hide")
                            this.$toast.success(response.data.data.message);
                            this.$router.push(this.messege3.user_name);
                        })

                    } catch (error) {
                        console.log('error', errorx)
                    }
                } else if (this.messege3.provider_type == 2) {
                    let nurse_id = sessionStorage.getItem('nurse_id')
                    let patient_id = sessionStorage.getItem('patient_id')
                    try {
                        axios.post(process.env.API_BASE_URL + 'callback_request_nurse_appointment', {
                            user_id: this.$auth.user.data.id,
                            nurse_id: nurse_id,
                            patient_id: patient_id,
                            service_id: this.services_id,
                        }).then((response) => {
                            // console.log(response.data)
                            this.$toast.success(response.data.data.message);
                            $("#Appointment_Call").modal("hide")
                            this.$router.push(this.messege3.user_name);
                        })

                    } catch (error) {
                        console.log('error', errorx)
                    }
                } else if (this.messege3.provider_type == 5) {
                    let patient_id = sessionStorage.getItem('patient_id')
                    let clinic_id = sessionStorage.getItem('clinic_id')

                    try {
                        axios.post(process.env.API_BASE_URL + 'callback_request_clinic_appointment', {
                            user_id: this.$auth.user.data.id,
                            clinic_id: clinic_id,
                            patient_id: patient_id,
                            service_id: this.services_id,
                        }).then((response) => {
                            // console.log(response.data)
                            this.$toast.success(response.data.data.message);
                            $("#Appointment_Call").modal("hide")
                            this.$router.push(this.messege3.user_name);
                        })

                    } catch (error) {
                        console.log('error', errorx)
                    }
                } else if (this.messege3.provider_type == 6) {
                    let patient_id = sessionStorage.getItem('patient_id')
                    let clinic_id = sessionStorage.getItem('clinic_id')

                    try {
                        axios.post(process.env.API_BASE_URL + 'callback_request_clinic_appointment', {
                            user_id: this.$auth.user.data.id,
                            clinic_id: clinic_id,
                            patient_id: patient_id,
                            service_id: this.services_id,
                        }).then((response) => {
                            // console.log(response.data)
                            this.$toast.success(response.data.data.message);
                            $("#Appointment_Call").modal("hide")
                            this.$router.push(this.messege3.user_name);
                        })

                    } catch (error) {
                        console.log('error', errorx)
                    }
                }
            } else {
                if (this.$route.path === this.messege3.user_name + "/appointmentbook") {
                    this.$router.push(this.messege3.user_name + "/BookingSumaryClinic");
                    $("#Appointment_Call").modal("hide")
                } else {
                    this.$router.push(this.messege3.user_name + "/BookAppointment/BookingSumary");
                    $("#Appointment_Call").modal("hide")
                }
                $("#Appointment_Call").modal("show")

            }
        });
        //auto complete location
        //Auto complete location
        const originAutocomplete_two = new google.maps.places.Autocomplete(
            this.$refs["location_two"],
            options
        );
        originAutocomplete_two.addListener("place_changed", () => {
            var place = originAutocomplete_two.getPlace();
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

            if (path_type == 3) {
                window.location.reload();
            }
            // var result = path_url.split("&");

            if (keyword != "") {
                // if (path_type == 1) {
                //     window.open(path_url, "_blank");
                // } else {
                //     var p1 =
                //         "search?id=" +
                //         keyword +
                //         "&lat=" +
                //         latitude +
                //         "&long=" +
                //         longitude +
                //         "&state=" +
                //         state +
                //         "&pin=" +
                //         postal_code +
                //         "&country=" +
                //         country +
                //         "&" +
                //         result[6];

                //     window.open(p1, "_self");

                // }
            } else {
                $(".address_live").html(place.formatted_address);
                $("#exampleModal1").modal("hide");
                $("#dismiss").trigger("click");
                $("#inlineFormInputGroupUsername").focus();
            }

        });

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

            if (path_type == 3) {
                window.location.reload();
            }
            // var result = path_url.split("&");

            if (keyword != "") {
                // if (path_type == 1) {
                //     window.open(path_url, "_blank");
                // } else {
                //     var p1 =
                //         "search?id=" +
                //         keyword +
                //         "&lat=" +
                //         latitude +
                //         "&long=" +
                //         longitude +
                //         "&state=" +
                //         state +
                //         "&pin=" +
                //         postal_code +
                //         "&country=" +
                //         country +
                //         "&" +
                //         result[6];

                //     window.open(p1, "_self");

                // }
            } else {
                $(".address_live").html(place.formatted_address);
                $("#exampleModal1").modal("hide");
                $("#dismiss").trigger("click");
                $("#inlineFormInputGroupUsername").focus();
            }

        });
    },
    methods: {
        shin_in_page() {
            this.$router.push('/login')
            $('#exampleModal1').modal('hide')
        },
        bookinbtn_two_close() {
            $('#bookingnext').modal("hide")
            $('#booking1').modal("show")
            this.selectedUserId = localStorage.getItem('user_id')

        },
        Appointment_Call_close() {
            this.selectedUserId = localStorage.getItem('user_id')
            $('#Appointment_Call').modal("hide")
        },
        pation_updates_pupop_close() {
            this.selectedUserId = localStorage.getItem('user_id')
        },
        addMoreBox(e) {
            e.preventDefault()
            this.boxes.push({
                Chief_Complains_value: '',
                selectedDisease: '',
                severe: '',
                duration_time: '',
                duration: ''
            });
            this.logAllBoxes()
        },
        serviceOptions() {
            if (this.service_name) {

                return Object.values(this.service_name).map(service => ({
                    label: service.service_name,
                    value: service.id
                }));
            }
        },
        Skip_servies() {
            if (this.services_id !== '') {
                store.dispatch("compalaient_data", {
                    service_id: this.services_id,
                    compalaient_data: this.boxes
                });
            }
            if (this.Request_Callback == 1) {
                if (this.messege3.provider_type == 1) {
                    let doctor_id = sessionStorage.getItem('doctor_id')
                    let patient_id = sessionStorage.getItem('patient_id')
                    let clinic_id = sessionStorage.getItem('clinic_id')

                    try {
                        axios.post(process.env.API_BASE_URL + 'callback_request_doctor_appointment', {
                            user_id: this.$auth.user.data.id,
                            doctor_id: doctor_id,
                            patient_id: patient_id,
                            service_id: this.services_id,
                            compalaient_data: this.boxes,
                            clinic_id: clinic_id
                        }).then((response) => {
                            // console.log(response.data)
                            $("#Appointment_Call").modal("hide")
                            this.$toast.success(response.data.data.message);
                            this.$router.push(this.messege3.user_name);
                        })

                    } catch (error) {
                        console.log('error', errorx)
                    }
                } else if (this.messege3.provider_type == 2) {
                    let nurse_id = sessionStorage.getItem('nurse_id')
                    let patient_id = sessionStorage.getItem('patient_id')
                    try {
                        axios.post(process.env.API_BASE_URL + 'callback_request_nurse_appointment', {
                            user_id: this.$auth.user.data.id,
                            nurse_id: nurse_id,
                            patient_id: patient_id,
                            service_id: this.services_id,
                        }).then((response) => {
                            // console.log(response.data)
                            this.$toast.success(response.data.data.message);
                            $("#Appointment_Call").modal("hide")
                            this.$router.push(this.messege3.user_name);
                        })

                    } catch (error) {
                        console.log('error', errorx)
                    }
                } else if (this.messege3.provider_type == 5) {
                    let clinic_id = sessionStorage.getItem('clinic_id')
                    let patient_id = sessionStorage.getItem('patient_id')
                    try {
                        axios.post(process.env.API_BASE_URL + 'callback_request_clinic_appointment', {
                            user_id: this.$auth.user.data.id,
                            clinic_id: clinic_id,
                            patient_id: patient_id,
                            service_id: this.services_id,
                        }).then((response) => {
                            // console.log(response.data)
                            this.$toast.success(response.data.data.message);
                            $("#Appointment_Call").modal("hide")
                            this.$router.push(this.messege3.user_name);
                        })

                    } catch (error) {
                        console.log('error', errorx)
                    }
                }
            } else {

                if (this.$route.path === this.messege3.user_name + "/appointmentbook") {
                    this.$router.push(this.messege3.user_name + "/BookingSumaryClinic");
                    $("#Appointment_Call").modal("hide")
                } else {
                    this.$router.push(this.messege3.user_name + "/BookAppointment/BookingSumary");
                    $("#Appointment_Call").modal("hide")
                }
            }
            $("#Appointment_Call").modal("show")

        },
        logAllBoxes() {
            this.boxes.forEach((box, index) => {
                this.removeBox(event, index)
            });
        },
        callFunction(name, relationship) {
            // Emit an event to call a function in the parent component
            this.$emit('call-function-in-parent', name, relationship);
        },
        Severity_Level(level, index, event) {
            this.boxes[index].severe = level;
            event.target.classList.toggle('active');
            const siblingButtons = event.target.parentNode.querySelectorAll('input[type="button"]');
            siblingButtons.forEach(button => {
                if (button !== event.target) {
                    button.classList.remove('active');
                }
            });


            // Check if the button has the 'active' class
            if ($(event.target).hasClass('active')) {
                // console.log('The button has the "active" class.');
            } else {
                // console.log('The button does not have the "active" class.');
                this.boxes[index].severe = '';
            }

        },
        duration_time_valu(duration_time, index, event) {
            this.boxes[index].duration_time = duration_time;
            event.target.classList.toggle('active');
            const siblingButtons = event.target.parentNode.querySelectorAll('input[type="button"]');
            siblingButtons.forEach(button => {
                if (button !== event.target) {
                    button.classList.remove('active');
                }
            });
            if ($(event.target).hasClass('active')) {
                // console.log('The button has the "active" class.');
            } else {
                // console.log('The button does not have the "active" class.');
                this.boxes[index].duration_time = '';
            }
        },
        duration_time_time(event, index) {
            const selectedValue = event.target.value;
            this.boxes[index].duration = selectedValue;
            if (this.boxes[index].duration !== '' && this.boxes[index].duration_time !== '' && this.boxes[index].severe !== '') {
                this.removeBox(event, index)
            }
        },
        async service_value_id(services_val) {
            let array_value = services_val.map(service => service.value);
            this.services_id = array_value
            let doctor_id = sessionStorage.getItem("doctor_id")
            let nurse_id = sessionStorage.getItem("nurse_id")

            let visit_slot_id = sessionStorage.getItem('visit_slot_id')
            let appt_date = sessionStorage.getItem('appt_date')
            let clinic_id = sessionStorage.getItem('clinic_id')

            let respons;
            if (this.services_id.length > 0) {
                if (this.messege3.provider_type == 1) {
                    respons = await axios.get(process.env.API_BASE_URL + 'get_service_next_slots?service_id=' + this.services_id + '&doctor_id=' + doctor_id + '&nurse_id=&visit_slot_id=' + visit_slot_id + '&appt_date=' + appt_date)
                } else if (this.messege3.provider_type == 2) {
                    respons = await axios.get(process.env.API_BASE_URL + 'get_service_next_slots?service_id=' + this.services_id + '&doctor_id=&nurse_id=' + nurse_id + '&visit_slot_id=' + visit_slot_id + '&appt_date=' + appt_date)
                } else if (this.messege3.provider_type == 5) {
                    respons = await axios.get(process.env.API_BASE_URL + 'get_service_next_slots?service_id=' + this.services_id + '&doctor_id=&clinic_id=' + clinic_id + '&visit_slot_id=' + visit_slot_id + '&appt_date=' + appt_date)
                } else if (this.messege3.provider_type == 6) {
                    respons = await axios.get(process.env.API_BASE_URL + 'get_service_next_slots?service_id=' + this.services_id + '&doctor_id=&clinic_id=' + clinic_id + '&visit_slot_id=' + visit_slot_id + '&appt_date=' + appt_date)
                }
                this.get_service_next_slots = respons.data.message
            } else {
                this.get_service_next_slots = ''
            }
            //    let respons = await axios.get(process.env.API_BASE_URL + 'get_service_next_slots?'+ queryString + '&doctor_id='+ doctor_id+'&nurse_id&visit_slot_id='+this.message2.book_visit_slot_id)
        },
        removeBox(event, index) {
            event.preventDefault()
            const chief_remove = '#chief_remove' + index;
            $('#border_fever' + index).removeClass('active')
            $(chief_remove).removeClass('d-none');

        },
        remove_Chief_Complains(event, index) {
            event.preventDefault()
            // this.boxes.splice(index, 1);
            if (this.boxes.length != 1) {
                this.boxes.splice(index, 1);
            } else {
                const chief_remove = '#chief_remove' + index;
                $(chief_remove).addClass('d-none');

                // Optional: you can reset the values of the first item instead of removing it
                // this.boxes[index].Chief_Complains_value = '';
                this.boxes[index].selectedDisease = '';
                // this.boxes[index].severe = '';
                // this.boxes[index].duration_time = '';
                // this.boxes[index].duration = '';

                const elementId = '#chief_add' + index;
                $(elementId).removeClass('d-none');
            }
        },
        show_border_fever(event, index) {
            event.preventDefault()
            const chief_remove = '#chief_remove' + index;

            $('#border_fever' + index).addClass('active')
            $(chief_remove).addClass('d-none');

            // Remove box at specified index
        },

        Chief_Complains(selectedDisease, index) {
            const elementId = '#chief_add' + index;
            const chief_remove = '#chief_remove' + index;
            if ($(elementId).length) {
                setTimeout(() => {
                    $(elementId).addClass('d-none');
                }, 1000);
            } else {}
            if (selectedDisease) {
                this.boxes[index].Chief_Complains_value = selectedDisease.label; // Update the value in the specific box
                this.boxes[index].Chief_Complains_id = selectedDisease.value;
                if (this.boxes[index].Chief_Complains_value !== '') {
                    // Toggle 'active' class for the specific box
                    $('.border_fever').eq(index).addClass('active');
                }
            }
        },

        patient_list() {
            try {
                let user_id = this.$auth.user.data.id;
                axios.get(process.env.API_BASE_URL + 'get_patient_list?user_id=' + user_id).
                then((response) => {
                    // console.log(response.data.data)
                    this.user_name = response.data.data
                    this.user_name.forEach(function (data) {
                        var isMySelfValue = data.is_my_self;
                        // Check if is_my_self is true
                        if (isMySelfValue == 1) {
                            var nameValue = data.id;
                            this.selectedUserId = nameValue
                            this.get_user_data = nameValue
                            this.my_id = nameValue
                            // const originalPath = this.messege.clinic_data.name;
                            // const encodedPath = encodeURIComponent(originalPath);
                            let clinic_name = sessionStorage.getItem('clinic_name')
                            if (this.$route.fullPath == this.messege3.user_name + "/BookAppointment/Homevisit" || this.$route.fullPath != this.messege3.user_name + "/BookAppointment/BookingSumary") {
                                localStorage.setItem('user_id', this.my_id)
                            }

                            // console.log("Name of the person: " + nameValue);
                        } else {}
                    }.bind(this));
                    0
                })
            } catch (error) {

            }
        },

        validateInput(event) {
            const inputValue = event.target.value;
            const regex = /^[A-Za-z]*$/; // Regular expression to match only alphabetic values

            if (!regex.test(inputValue)) {
                // If the input value does not match the pattern, prevent it from being entered
                event.target.value = inputValue.replace(/[^A-Za-z]/g, '');
            } else {
                // Otherwise, update the bound data property with the valid input value
                this.value = inputValue;
            }
        },
        validateInput_number(event) {
            const inputValue = event.target.value;
            const regex = /^[0-9]*$/;
            if (!regex.test(inputValue)) {
                event.target.value = inputValue.replace(/[^0-9]/g, '');
            } else {
                if (inputValue.length > 3) {
                    event.target.value = inputValue.slice(0, 3);
                } else {
                    this.Age = inputValue;
                }
            }
        },

        getUserId() {
            const selectedUser = this.user_name.find(user => user.id === this.selectedUserId);
            if (selectedUser) {
                const userId = selectedUser.id;
                this.get_user_id(userId);
            }
        },
        get_user_id(userId) {
            // console.log("User ID:", userId);
            this.get_user_data = userId
            localStorage.setItem('user_id', userId)
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
                        this.onLoginGmail();
                    } else {
                        var success = 0;
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
        },
        async onLoginGmail() {
            await this.$auth.loginWith('local', {
                data: {
                    email: this.email,
                    password: this.password
                },
            })
            this.$toast.success('Login successfully.');
            this.$router.push('/')
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
            // console.log("path_url", path_url);
            if (path_url === undefined) {
                // console.log("path_url1", path_url);
                window.location.reload;
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
                }
            }
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
                                    var path_url = $("#path_url").val();
                                    var path_type = $("#path_type").val();

                                    if (path_type == 3) {
                                        window.location.reload();
                                    }
                                    var keyword = $("#inlineFormInputGroupUsername").val();
                                    // console.log("path_url", path_url);
                                    if (path_url === undefined) {
                                        // console.log("path_url1", path_url);
                                        window.location.reload;
                                    }
                                    // var result = path_url.split("&");
                                    // if (keyword != "") {
                                    //     if (path_type == 1) {
                                    //         window.open(path_url, "_blank");
                                    //     } else {
                                    //         var p1 =
                                    //             "search?id=" +
                                    //             keyword +
                                    //             "&lat=" +
                                    //             latitude +
                                    //             "&long=" +
                                    //             longitude +
                                    //             "&state=" +
                                    //             state +
                                    //             "&pin=" +
                                    //             postal_code +
                                    //             "&country=" +
                                    //             country +
                                    //             "&" +
                                    //             result[6];

                                    //         window.open(p1, "_self");

                                    //     }
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

        async Services_list() {
            if (this.messege3.provider_type == 1) {
                let doctor_id = sessionStorage.getItem("doctor_id")
                let clinic_id = sessionStorage.getItem("clinic_id")
                if (clinic_id == null || this.$route.fullPath == this.messege3.user_name + "/BookAppointment/Homevisit") {
                    clinic_id = ''
                }
                try {
                    axios.get(process.env.API_BASE_URL + 'get_service_list?doctor_id=' + doctor_id + '&clinic_id=' + clinic_id).
                    then((response) => {
                        console.log(response.data.data)
                        this.service_name = response.data.data
                    }).catch((error) => {

                    })
                } catch (error) {

                }

                try {
                    axios.get(process.env.API_BASE_URL + 'get_diseases_list?doctor_id=' + doctor_id).
                    then((response) => {
                        response.data.data.forEach((item) => {
                            this.get_diseases_list = item
                        });
                    }).catch((error) => {

                    })
                } catch (error) {

                }
            } else if (this.messege3.provider_type == 2) {
                let nurse_id = sessionStorage.getItem('nurse_id')
                try {
                    axios.get(process.env.API_BASE_URL + 'get_service_list?nurse_id=' + nurse_id).
                    then((response) => {
                        // console.log(response.data.data)
                        this.service_name = response.data.data
                    }).catch((error) => {

                    })
                } catch (error) {

                }

            } else if (this.messege3.provider_type == 5) {
                let clinic_id = sessionStorage.getItem("clinic_id")
                if (clinic_id == null || this.$route.fullPath == this.messege3.user_name + "/BookAppointment/Homevisit") {
                    clinic_id = ''
                }
                try {
                    axios.get(process.env.API_BASE_URL + 'get_service_list?&clinic_id=' + clinic_id).
                    then((response) => {
                        // console.log(response.data.data)
                        this.service_name = response.data.data
                    }).catch((error) => {

                    })
                } catch (error) {

                }

                try {
                    axios.get(process.env.API_BASE_URL + 'get_clinic_diseases_list?clinic_id=' + clinic_id).
                    then((response) => {
                        console.log(response.data)
                        response.data.data.forEach((item) => {
                            this.get_diseases_list = item
                        });
                    }).catch((error) => {

                    })
                } catch (error) {

                }
            } else if (this.messege3.provider_type == 6) {
                let clinic_id = sessionStorage.getItem("clinic_id")
                if (clinic_id == null || this.$route.fullPath == this.messege3.user_name + "/BookAppointment/Homevisit") {
                    clinic_id = ''
                }
                try {
                    axios.get(process.env.API_BASE_URL + 'get_service_list?&clinic_id=' + clinic_id).
                    then((response) => {
                        // console.log(response.data.data)
                        this.service_name = response.data.data
                    }).catch((error) => {

                    })
                } catch (error) {

                }

                try {
                    axios.get(process.env.API_BASE_URL + 'get_clinic_diseases_list?clinic_id=' + clinic_id).
                    then((response) => {
                        console.log(response.data)
                        response.data.data.forEach((item) => {
                            this.get_diseases_list = item
                        });
                    }).catch((error) => {

                    })
                } catch (error) {

                }
            }

        }
    },
};
</script>
