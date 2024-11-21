<template>
   <div>
       <div class="hero-section with-inner-page">

     <main>
        <div class="container wrapper-of-box p-0">
           <div class="top-banner-section">
              <div class="back-and-edit pl-pr pt-4">
                 <a type="button" class="btn back-btn"> 
                 <img src="images/left-arrow-svgrepo-com.svg" width="30" height="20" alt="">
                 Back
                 </a>
              </div>
              <div class="banner-for-top">
                 <img src="images/dr-profile-banner.jpg" class="img-fluid" alt="">
              </div>
           </div>
           <div class="main-wrapper-for-dr-profile pl-pr ">
              <div class="dr-profile-and-details">
                 <div class="left-dr-profile">
                    <div class="dr-main-image">
                       <img src="images/dr-img.jpg" alt="">
                    </div>
                    <div class="rating">
                       <img src="images/star.svg" width="14" height="14" alt="">
                       <img src="images/star.svg" width="14" height="14" alt="">
                       <img src="images/star.svg" width="14" height="14" alt="">
                       <img src="images/star.svg" width="14" height="14" alt="">
                       <img src="images/star.svg" width="14" height="14" alt="">
                    </div>
                    <div class="rating-count blue-text text-center">
                       288 Review
                    </div>
                    <div class="bottom-cta mt-4 d-flex d-md-none justify-content-center ">
                       <a href="#" class="btn">
                       <img src="images/bi_share.svg" width="20" height="20" alt="">
                       Share
                       </a>
                    </div>
                 </div>
                 <div class="dr-right-details">
                    <h1 class="text-blue mb-0">Dr Namrata Sing</h1>
                    <div class="dr-specialist text-blue">MD Cardiologist</div>
                    <div class="more-details-of-doctor">
                       <div class="more-detail-box">
                          <div class="more-detal-icon">
                             <img src="images/lucation.svg" width="22" height="22" alt="">
                          </div>
                          <div class="more-details-text">
                             15 Kashmira A Park, Behind Adani
                             Hospital Road Bhuj 
                          </div>
                       </div>
                       <div class="more-detail-box">
                          <div class="more-detal-icon">
                             <img src="images/clarity_map-line.svg" width="18" height="18" alt="">
                          </div>
                          <div class="more-details-text">
                             <div class="">3 Km from your Location</div>
                             <div class="btn-for-locate-map mt-2">
                                <a href="#" class="btn">
                                <img src="images/carbon_airport-location.svg" class="carbonclr" width="10" height="10" alt="">
                                Open in Map
                                </a>
                             </div>
                          </div>
                       </div>
                       <div class="more-detail-box">
                          <div class="more-detal-icon">
                             <img src="images/clarity_alarm-clock-outline.svg" width="18" height="18" alt="">
                          </div>
                          <div class="more-details-text">
                             7:30am To 10:30pm time.
                          </div>
                       </div>
                    </div>
                    <div class="bottom-cta mt-4 d-none d-md-flex">
                       <a href="#" class="btn">
                       <img src="images/bi_share.svg" width="20" height="20" alt="">
                       Share
                       </a>
                       <a href="#" class="btn">
                       <img src="images/Group12.svg" width="20" height="20" alt="">
                       +79 5460704
                       </a>
                       <a href="#" class="btn">
                       <img src="images/connections.svg" width="20" height="20" alt="">
                       Add To Network
                       </a>
                    </div>
                    <div class="bottom-cta mt-4 d-flex d-md-none ">
                       <a href="#" class="btn">
                       <img src="images/Group12.svg" width="20" height="20" alt="">
                       +79 5460704
                       </a>
                       <a href="#" class="btn">
                       <img src="images/connections.svg" width="20" height="20" alt="">
                       Add To Network
                       </a>
                    </div>
                 </div>
              </div>
           </div>
           
           <ul class="nav nav-pills mb-3 common-innerpage-tabs dr-profile-mobile-tabs d-flex d-md-none" id="pills-tab" role="tablist">
              <li class="nav-item" role="presentation">
                 <button class="nav-link active" id="pills-home-tab" data-bs-toggle="pill" data-bs-target="#pills-home" type="button" role="tab" aria-controls="pills-home" aria-selected="true">Overview</button>
              </li>
              <span class="separator"></span>
              <li class="nav-item" role="presentation">
                 <button class="nav-link" id="pills-profile-tab" data-bs-toggle="pill" data-bs-target="#pills-profile" type="button" role="tab" aria-controls="pills-profile" aria-selected="false">Clinic</button>
              </li>
              <span class="separator"></span>
              <li class="nav-item" role="presentation">
                 <button class="nav-link" id="pills-contact-tab" data-bs-toggle="pill" data-bs-target="#pills-contact" type="button" role="tab" aria-controls="pills-contact" aria-selected="false">Review</button>
              </li>
           </ul>
           <div class="pl-pr my-5 d-none d-md-block">
              <hr>
           </div>
           <div class="more-details-bottom-part pl-pr mobile-padding review tabHospital">
              <ul class="nav nav-pills mb-4 common-innerpage-tabs d-none d-md-flex" id="pills-tab" role="tablist">
                 <li class="nav-item" role="presentation">
                    <button class="nav-link active" id="pills-home-tab" data-bs-toggle="pill" data-bs-target="#pills-home" type="button" role="tab" aria-controls="pills-home" aria-selected="true">Overview</button>
                 </li>
                 <li class="nav-item" role="presentation">
                    <button class="nav-link" id="pills-profile-tab" data-bs-toggle="pill" data-bs-target="#pills-profile" type="button" role="tab" aria-controls="pills-profile" aria-selected="false">Clinic</button>
                 </li>
                 <li class="nav-item" role="presentation">
                    <button class="nav-link" id="pills-contact-tab" data-bs-toggle="pill" data-bs-target="#pills-contact" type="button" role="tab" aria-controls="pills-contact" aria-selected="false">Review</button>
                 </li>
              </ul>
              <div class="tab-content mt-4" id="pills-tabContent">
                 <div class="tab-pane fade show active" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab">
                    <div class="overview-section">
                       <div class="three-box-of-dr-short-details">
                          <div class="box-of-short-details grouppat">
                             <div class="leftshortdet">
                                <img src="images/icon_1.svg" alt="">
                             </div>
                             <div class="rightshortdet">
                                <div class="box-title">PATIENTS</div>
                                <div class="box-details">1000+</div>
                             </div>
                          </div>
                          <div class="box-of-short-details grouppat">
                             <div class="leftshortdet">
                                <img src="images/icon_2.svg" alt="">
                             </div>
                             <div class="rightshortdet">
                                <div class="box-title">RATING </div>
                                <div class="box-details">4.5</div>
                             </div>
                          </div>
                          <div class="box-of-short-details grouppat">
                             <div class="leftshortdet">
                                <img src="images/icon_3.svg" alt="">
                             </div>
                             <div class="rightshortdet">
                                <div class="box-title">EXPERIANCE</div>
                                <div class="box-details">10 YEARS</div>
                             </div>
                          </div>
                          <div class="box-of-short-details Desktopon grouppat">
                             <div class="leftshortdet">
                                <img src="images/icon_4.svg" alt="">
                             </div>
                             <div class="rightshortdet">
                                <div class="box-title">POPULARITY</div>
                                <div class="box-details">9.0</div>
                             </div>
                          </div>
                       </div>
                       <h4 class="mb-3 mt-3 text-blue samebg"> About Dr Namrata </h4>
                       <div class="mobilenone">
                          <p class="text-blue">Dr. Namrata Sing, MD is a Cardiologist Specialist in Bhuj - Kutch and has over 33 years of experience in the medical field. He graduated from Gujarat University School Of Medicine medical school in 1988. Be sure to call ahead with Dr. Namrata He graduated from Gujarat University School Of Medicine medical school in 1988. Maecenas eget arcu arcu. Mauris sagittis, felis et varius vulputate, orci mi auctor sem, nec dapibus lorem mi at neque. Praesent semper ipsum sit amet magna dapibus, et semper metus ultricies. Be sure to call ahead with Dr. Namrata
                          </p>
                          <div class="article">
                             <p class="text-blue moretext">Morbi sollicitudin felis et massa posuere, quis elementum magna pretium. Aliquam erat volutpat. Ut aliquam ornare tristique. Nunc ornare velit urna, at efficitur lorem fringilla quis. Suspendisse laoreet magna nec felis tincidunt egestas. Suspendisse tempus ligula sit amet ante pretium interdum. Donec in libero neque. Nam finibus mi sed lacus blandit, eget lobortis mi tempor. Donec interdum quis sapien non porttitor. Maecenas eget arcu arcu. Mauris sagittis, felis et varius vulputate, orci mi auctor sem, nec dapibus lorem mi at neque. Praesent semper ipsum sit amet magna dapibus, et semper metus ultricies. Pellentesque in nisi dignissim, suscipit turpis in, vestibulum nunc. Ut eu risus lectus.
                             </p>
                             <a class="moreless-button text-blue" href="#">Read more</a>
                          </div>
                       </div>
                       <div class="mobiledp">
                          <p class="text-blue">Dr. Namrata Sing, MD is a Cardiologist Specialist in Bhuj - Kutch and has over 33 years of experience in the medical field. He graduated from Gujarat University School Of Medicine medical school in 1988. Be sure to call ahead with Dr. Namrata
                          </p>
                          <div class="article mb-3">
                             <p class="text-blue moretext">Morbi sollicitudin felis et massa posuere, quis elementum magna pretium. Aliquam erat volutpat. Ut aliquam ornare tristique. Nunc ornare velit urna, at efficitur lorem fringilla quis. Suspendisse laoreet magna nec felis tincidunt egestas. Suspendisse tempus ligula sit amet ante pretium interdum. Donec in libero neque. Nam finibus mi sed lacus blandit, eget lobortis mi tempor. Donec interdum quis sapien non porttitor. Maecenas eget arcu arcu. Mauris sagittis, felis et varius vulputate, orci mi auctor sem, nec dapibus lorem mi at neque. Praesent semper ipsum sit amet magna dapibus, et semper metus ultricies. Pellentesque in nisi dignissim, suscipit turpis in, vestibulum nunc. Ut eu risus lectus.
                             </p>
                             <a class="moreless-button text-blue" href="#">Read more</a>
                             <!--a href="#" id="loadMore" class="text-blue fw-bold">More...</a-->
                          </div>
                       </div>
                       <div class="get-service-home mb-3 mt-3">
                          <h5 class="text-blue">Book your appointment for Free</h5>
                          <div class="btn-for-locate-map upload-prescription mt-2">
                             <a href="./Appointmentone.html" class="btn btnbook">
                             <img src="images/appointment_icon.svg"  alt="">
                             Book Appointment
                             </a>
                          </div>
                       </div>
                       <div class="row">
                          <div class="col-lg-6">
                             <h4 class="mb-3 mt-3 text-blue samebg">Gallery</h4>
                             <div class="sliderBox">
                                <div class="owl-carousel owl-theme gallery-carousel">
                                   <div class="item">
                                      <img src="images/gallery-img.jpg" alt="" style="border-radius: 1rem;">
                                   </div>
                                   <div class="item">
                                      <img src="images/gallery-of-hospital.jpg" alt="" style="border-radius: 1rem;">
                                   </div>
                                   <div class="item">
                                      <img src="images/gallery-of-hospital.jpg" alt="" style="border-radius: 1rem;">
                                   </div>
                                   <div class="item">
                                      <img src="images/gallery-of-hospital.jpg" alt="" style="border-radius: 1rem;">
                                   </div>
                                </div>
                             </div>
                          </div>
                          <div class="col-lg-6 ">
                             <h4 class="mb-3 text-blue samebg mt-3">Services we Provide</h4>
                             <div class="relative">
                             <div class="scrollbarpharmacy">
                             <div class="accordion rounded-custom-ac ac-for-more-details degignples accordionDesign" id="accordionExample">
                                <div class="accordion-item">
                                   <h2 class="accordion-header" id="headingOne">
                                      <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                         <div class="imgwdith"><img src="images/ac-tick.svg" width="20" class="me-2" alt=""></div>
                                         Home Visit and its timing
                                      </button>
                                   </h2>
                                   <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                                      <div class="accordion-body">
                                         <div class="d-flex justify-content-between align-center flex-wrap">
                                            <div>
                                               Package will cost you Rs. 50,000/-*
                                            </div>
                                            <div>
                                               <div class="btn-for-locate-map ">
                                                  <a href="#" class="btn">
                                                  Know More
                                                  </a>
                                               </div>
                                            </div>
                                         </div>
                                      </div>
                                   </div>
                                </div>
                                <div class="accordion-item">
                                   <h2 class="accordion-header" id="headingTwo">
                                      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                         <div class="imgwdith"><img src="images/ac-tick.svg" width="20" class="me-2" alt=""></div>
                                         Personal care (including dressing bathing and toilet assistance)
                                      </button>
                                   </h2>
                                   <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                                      <div class="accordion-body">
                                         <p class="text-blue">
                                            Morbi sollicitudin felis et massa posuere, quis elementum magna 
                                         </p>
                                         <div class="article mb-3">
                                            <p class="text-blue moretext">
                                               This is the third item's accordion tristique. Nunc ornare velit urna, at efficitur lorem fringilla quis. Suspendisse laoreet magna nec felis tincidunt 
                                            </p>
                                            <a class="moreless-button text-blue" href="#">Read more</a>
                                            <!--a href="#" id="loadMore" class="text-blue fw-bold">More...</a-->
                                         </div>
                                      </div>
                                   </div>
                                </div>
                                <div class="accordion-item">
                                   <h2 class="accordion-header" id="heading01">
                                      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse01" aria-expanded="false" aria-controls="collapse01">
                                         <div class="imgwdith"><img src="images/ac-tick.svg" width="20" class="me-2" alt=""></div>
                                         Personal care (including dressing bathing and toilet assistance)
                                      </button>
                                   </h2>
                                   <div id="collapse01" class="accordion-collapse collapse" aria-labelledby="heading01" data-bs-parent="#accordionExample">
                                      <div class="accordion-body">
                                         <p class="text-blue">
                                            Morbi sollicitudin felis et massa posuere, quis elementum magna 
                                         </p>
                                         <div class="article mb-3">
                                            <p class="text-blue moretext">
                                               This is the third item's accordion tristique. Nunc ornare velit urna, at efficitur lorem fringilla quis. Suspendisse laoreet magna nec felis tincidunt 
                                            </p>
                                            <a class="moreless-button text-blue" href="#">Read more</a>
                                            <!--a href="#" id="loadMore" class="text-blue fw-bold">More...</a-->
                                         </div>
                                      </div>
                                   </div>
                                </div>
                                <div class="accordion-item">
                                   <h2 class="accordion-header" id="heading02">
                                      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse02" aria-expanded="false" aria-controls="collapse02">
                                         <div class="imgwdith"><img src="images/ac-tick.svg" width="20" class="me-2" alt=""></div>
                                         Personal care (including dressing bathing and toilet assistance)
                                      </button>
                                   </h2>
                                   <div id="collapse02" class="accordion-collapse collapse" aria-labelledby="heading02" data-bs-parent="#accordionExample">
                                      <div class="accordion-body">
                                         <p class="text-blue">
                                            Morbi sollicitudin felis et massa posuere, quis elementum magna 
                                         </p>
                                         <div class="article mb-3">
                                            <p class="text-blue moretext">
                                               This is the third item's accordion tristique. Nunc ornare velit urna, at efficitur lorem fringilla quis. Suspendisse laoreet magna nec felis tincidunt 
                                            </p>
                                            <a class="moreless-button text-blue" href="#">Read more</a>
                                            <!--a href="#" id="loadMore" class="text-blue fw-bold">More...</a-->
                                         </div>
                                      </div>
                                   </div>
                                </div>
                                <div class="accordion-item">
                                   <h2 class="accordion-header" id="heading03">
                                      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapse03" aria-expanded="false" aria-controls="collapse03">
                                         <div class="imgwdith"><img src="images/ac-tick.svg" width="20" class="me-2" alt=""></div>
                                         Personal care (including dressing bathing and toilet assistance)
                                      </button>
                                   </h2>
                                   <div id="collapse03" class="accordion-collapse collapse" aria-labelledby="heading03" data-bs-parent="#accordionExample">
                                      <div class="accordion-body">
                                         <p class="text-blue">
                                            Morbi sollicitudin felis et massa posuere, quis elementum magna 
                                         </p>
                                         <div class="article mb-3">
                                            <p class="text-blue moretext">
                                               This is the third item's accordion tristique. Nunc ornare velit urna, at efficitur lorem fringilla quis. Suspendisse laoreet magna nec felis tincidunt 
                                            </p>
                                            <a class="moreless-button text-blue" href="#">Read more</a>
                                            <!--a href="#" id="loadMore" class="text-blue fw-bold">More...</a-->
                                         </div>
                                      </div>
                                   </div>
                                </div>
                                <div class="accordion-item">
                                   <h2 class="accordion-header" id="headingThree">
                                      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                         <div class="imgwdith"><img src="images/ac-tick.svg" width="20" class="me-2" alt=""></div>
                                         24-hour emergency care
                                      </button>
                                   </h2>
                                   <div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                                      <div class="accordion-body">
                                         <p class="text-blue">
                                            Morbi sollicitudin felis et massa posuere, quis elementum magna 
                                         </p>
                                         <div class="article mb-3">
                                            <p class="text-blue moretext">
                                               This is the third item's accordion tristique. Nunc ornare velit urna, at efficitur lorem fringilla quis. Suspendisse laoreet magna nec felis tincidunt 
                                            </p>
                                            <a class="moreless-button text-blue" href="#">Read more</a>
                                            <!--a href="#" id="loadMore" class="text-blue fw-bold">More...</a-->
                                         </div>
                                      </div>
                                   </div>
                                </div>
                                <div class="accordion-item">
                                   <h2 class="accordion-header" id="headingfour">
                                      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapsefour" aria-expanded="false" aria-controls="collapsefour">
                                         <div class="imgwdith"><img src="images/ac-tick.svg" width="20" class="me-2" alt=""></div>
                                         24-hour emergency care
                                      </button>
                                   </h2>
                                   <div id="collapsefour" class="accordion-collapse collapse" aria-labelledby="headingfour" data-bs-parent="#accordionExample">
                                      <div class="accordion-body">
                                         <p class="text-blue">
                                            Morbi sollicitudin felis et massa posuere, quis elementum magna 
                                         </p>
                                         <div class="article mb-3">
                                            <p class="text-blue moretext">
                                               This is the third item's accordion tristique. Nunc ornare velit urna, at efficitur lorem fringilla quis. Suspendisse laoreet magna nec felis tincidunt 
                                            </p>
                                            <a class="moreless-button text-blue" href="#">Read more</a>
                                            <!--a href="#" id="loadMore" class="text-blue fw-bold">More...</a-->
                                         </div>
                                      </div>
                                   </div>
                                   
                                </div>
                             </div>

                             </div>
                             <a href="#" class="btn btnshwom">Show more</a>
                             </div>
                          </div>
                       </div>
                       <div class="row">
                          <div class="col-lg-6 mt-4">
                             <h4 class="mb-3 text-blue samebg">Achievment</h4>
                             <div class="time-and-service-details mt-2">
                                <div class="three-box-of-dr-short-details collapseTwo">
                                   <div class="box-of-short-details text-start timecl">
                                      <div class="microsoft">
                                         <ul>
                                            <li><img src="images/double-arrow-right-svgrepo-com.svg" alt="">
                                               <span>Medicine &amp; Bandage</span>
                                            </li>
                                            <li><img src="images/double-arrow-right-svgrepo-com.svg" alt="">
                                               <span>Dressing Injectin &amp; Infusion  Medicine &amp; Bandage</span>
                                            </li>
                                            <li><img src="images/double-arrow-right-svgrepo-com.svg" alt="">
                                               <span>Dressing Injectin &amp; Infusion Medicine &amp; Bandage</span>
                                            </li>
                                            <li><img src="images/double-arrow-right-svgrepo-com.svg" alt="">
                                               <span>Dressing Injectin &amp; Infusion Medicine &amp; Bandage</span>
                                            </li>
                                            <li><img src="images/double-arrow-right-svgrepo-com.svg" alt="">
                                               <span>Medicine &amp; Bandage</span>
                                            </li>
                                            <li><img src="images/double-arrow-right-svgrepo-com.svg" alt="">
                                               <span>Dressing Injectin &amp; Infusion Medicine &amp; Bandage</span>
                                            </li>
                                            <li><img src="images/double-arrow-right-svgrepo-com.svg" alt="">
                                               <span>Dressing Injectin &amp; Infusion Medicine &amp; Bandage</span>
                                            </li>
                                            <li><img src="images/double-arrow-right-svgrepo-com.svg" alt="">
                                               <span>Dressing Injectin &amp; Infusion Medicine &amp; Bandage</span>
                                            </li>
                                            <li><img src="images/double-arrow-right-svgrepo-com.svg" alt="">
                                               <span>Dressing Injectin &amp; Infusion Medicine &amp; Bandage</span>
                                            </li>
                                            <li><img src="images/double-arrow-right-svgrepo-com.svg" alt="">
                                               <span>Dressing Injectin &amp; Infusion Medicine &amp; Bandage</span>
                                            </li>
                                            <li><img src="images/double-arrow-right-svgrepo-com.svg" alt="">
                                               <span>Dressing Injectin &amp; Infusion Medicine &amp; Bandage</span>
                                            </li>
                                            <li><img src="images/double-arrow-right-svgrepo-com.svg" alt="">
                                               <span>Dressing Injectin &amp; Infusion Medicine &amp; Bandage</span>
                                            </li>
                                            <li><img src="images/double-arrow-right-svgrepo-com.svg" alt="">
                                               <span>Dressing Injectin &amp; Infusion Medicine &amp; Bandage</span>
                                            </li>
                                         </ul>
                                      </div>
                                   </div>
                                </div>
                             </div>
                          </div>
                          <div class="col-lg-6 mt-4">
                             <h4 class="mb-3 text-blue samebg">Locate Us</h4>
                             <div class="mapLocate">
                                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3669.65724136215!2d72.62364631542424!3d23.109639918866343!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e8179f1f7d58b%3A0x9bb5bf67160dc482!2sApollo%20Hospital%20International%20Limited%20Blood%20Bank!5e0!3m2!1sen!2sin!4v1647175528069!5m2!1sen!2sin" width="100%" height="314" style="border-radius: 1rem;" loading="lazy"></iframe>
                             </div>
                          </div>
                          
                       </div>
                    </div>
                 </div>
                 <div class="tab-pane fade" id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab">
                    <div class="clinic-section fullwidth">
                       <h4 class="mb-3 text-blue leftpyou">You can meet Dr Namrata Singh </h4>
                       <div class="row">
                          <div class="col-lg-6">
                              <div class="hospital-details-wrap">
                                   <div class="title-and-img-hospital">
                                      <div>
                                         <div class="title-and-available">
                                            <h5 class="mb-0 text-blue">Victoria Hospital </h5>
                                            <div class="available-chip">
                                               Available
                                            </div>
                                         </div>
                                         <div class="mt-4">
                                            <div class="more-detail-box">
                                               <div class="more-detal-icon">
                                                  <img src="images/lucation.svg" width="22" height="22" alt="">
                                               </div>
                                               <div class="more-details-text">
                                                  Tulsi Baugh Society Opp. Doctor House, <br>
                                                  near Parimal Garden, Ahmedabad 380006
                                               </div>
                                            </div>
                                         </div>
                                      </div>
                                      <div class="hospital-thumbnail">
                                         <img src="images/hospital-thumbnai.jpg" alt="">
                                      </div>
                                   </div>
                                   <div class="title-and-img-hospital">
                                      <div>
                                         <div class="mt-0">
                                            <div class="more-detail-box">
                                               <div class="more-detal-icon">
                                                  <img src="images/clarity_map-line.svg" width="22" height="22" alt="">
                                               </div>
                                               <div class="more-details-text">
                                                  <div class="more-details-text">
                                                     <div class="more-details-text">
                                                     <div class="">3 Km from your Location</div>
                                                     <div class="btn-for-locate-map mt-2">
                                                        <a href="#" class="btn">
                                                        <img src="images/carbon_airport-location.svg" class="carbonclr" width="10" height="10" alt=""> 
                                                        Open in Map
                                                        </a>
                                                     </div>
                                                      </div>  
                                                   </div>
                                               </div>
                                            </div>
                                         </div>
                                      </div>
                                      <div class="hospital-thumbnail">
                                        
                                      </div>
                                   </div>
                                   <div class="address-and-timing dr-profile">
                                      <div class="accordion" id="accordionExample">
                                         <div class="accordion-item victoHospital">
                                            <h2 class="accordion-header" id="headingOne">
                                               <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                                  <div class="last-wrap-of-box">
                                                     <div class="more-detail-box">
                                                        <div class="more-details-text">
                                                           <img src="images/clarity_alarm-clock-outline.svg" width="18" height="18" alt=""><b> Clinic Timing</b>
                                                        </div>
                                                     </div>
                                                     <div class="more-detail-box">
                                                        <div class="more-details-text">
                                                           <img src="images/jam_medical.svg" width="25" height="25" alt="">
                                                           <b> Facilities</b>
                                                        </div>
                                                        <span class="rightbht">Details</span>
                                                     </div>
                                                  </div>
                                               </button>
                                            </h2>
                                            <div id="collapseOne" class="accordion-collapse collapse" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                                               <div class="accordion-body victoHospital">
                                                  <div class="last-wrap-of-box">
                                                     <div class="more-detail-box">
                                                        <div class="more-details-text daysBlog">
                                                           <ul>
                                                              <li><span>Mon</span> 10.30am-2.00pm <br>
                                                                 05.00pm-8.00pm
                                                              </li>
                                                              <li><span>Tue</span> 10.30am-2.00pm</li>
                                                              <li><span>Wed</span>10.30am-2.00pm</li>
                                                              <li><span>Thu</span> 10.30am-2.00pm <br>
                                                                 05.00pm-8.00pm 
                                                              </li>
                                                              <li><span>Fri</span> 10.30am-2.00pm <br>
                                                                 05.00pm-8.00pm
                                                              </li>
                                                              <li><span>Sat</span> 10.30am-2.00pm</li>
                                                              <li><span>Sun</span> Closed</li>
                                                           </ul>
                                                        </div>
                                                        <div class="more-details-text daysBlog">
                                                           <ul>
                                                              <li> <img src="images/rightcheck.svg" width="18" height="18" alt=""> Insurance</li>
                                                              <li><img src="images/rightcheck.svg" width="18" height="18" alt=""> Generic Meds</li>
                                                              <li><img src="images/rightcheck.svg" width="18" height="18" alt=""> Appointments</li>
                                                              <li><img src="images/rightcheck.svg" width="18" height="18" alt=""> Health tips</li>
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
                          <div class="col-lg-6">
                              <div class="hospital-details-wrap">
                                   <div class="title-and-img-hospital">
                                      <div>
                                         <div class="title-and-available">
                                            <h5 class="mb-0 text-blue">Victoria Hospital </h5>
                                            <div class="available-chip">
                                               Available
                                            </div>
                                         </div>
                                         <div class="mt-4">
                                            <div class="more-detail-box">
                                               <div class="more-detal-icon">
                                                  <img src="images/lucation.svg" width="22" height="22" alt="">
                                               </div>
                                               <div class="more-details-text">
                                                  Tulsi Baugh Society Opp. Doctor House, <br>
                                                  near Parimal Garden, Ahmedabad 380006
                                               </div>
                                            </div>
                                         </div>
                                      </div>
                                      <div class="hospital-thumbnail">
                                         <img src="images/hospital-thumbnai.jpg" alt="">
                                      </div>
                                   </div>
                                   <div class="title-and-img-hospital">
                                      <div>
                                         <div class="mt-0">
                                            <div class="more-detail-box">
                                               <div class="more-detal-icon">
                                                  <img src="images/clarity_map-line.svg" width="22" height="22" alt="">
                                               </div>
                                               <div class="more-details-text">
                                                  <div class="more-details-text">
                                                     <div class="more-details-text">
                                                     <div class="">3 Km from your Location</div>
                                                     <div class="btn-for-locate-map mt-2">
                                                        <a href="#" class="btn">
                                                        <img src="images/carbon_airport-location.svg" class="carbonclr" width="10" height="10" alt="">
                                                        Open in Map
                                                        </a>
                                                     </div>
                                                      </div>  
                                                   </div>
                                               </div>
                                            </div>
                                         </div>
                                      </div>
                                      <div class="hospital-thumbnail">
                                        
                                      </div>
                                   </div>
                                   <div class="address-and-timing dr-profile">
                                      <div class="accordion" id="accordionExample">
                                         <div class="accordion-item victoHospital">
                                            <h2 class="accordion-header" id="headingOne">
                                               <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                                  <div class="last-wrap-of-box">
                                                     <div class="more-detail-box">
                                                        <div class="more-details-text">
                                                           <img src="images/clarity_alarm-clock-outline.svg" width="18" height="18" alt=""><b> Clinic Timing</b>
                                                        </div>
                                                     </div>
                                                     <div class="more-detail-box">
                                                        <div class="more-details-text">
                                                           <img src="images/jam_medical.svg" width="25" height="25" alt="">
                                                           <b> Facilities</b>
                                                        </div>
                                                        <span class="rightbht">Details</span>
                                                     </div>
                                                  </div>
                                               </button>
                                            </h2>
                                            <div id="collapseOne" class="accordion-collapse collapse" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                                               <div class="accordion-body victoHospital">
                                                  <div class="last-wrap-of-box">
                                                     <div class="more-detail-box">
                                                        <div class="more-details-text daysBlog">
                                                           <ul>
                                                              <li><span>Mon</span> 10.30am-2.00pm <br>
                                                                 05.00pm-8.00pm
                                                              </li>
                                                              <li><span>Tue</span> 10.30am-2.00pm</li>
                                                              <li><span>Wed</span>10.30am-2.00pm</li>
                                                              <li><span>Thu</span> 10.30am-2.00pm <br>
                                                                 05.00pm-8.00pm 
                                                              </li>
                                                              <li><span>Fri</span> 10.30am-2.00pm <br>
                                                                 05.00pm-8.00pm
                                                              </li>
                                                              <li><span>Sat</span> 10.30am-2.00pm</li>
                                                              <li><span>Sun</span> Closed</li>
                                                           </ul>
                                                        </div>
                                                        <div class="more-details-text daysBlog">
                                                           <ul>
                                                              <li> <img src="images/rightcheck.svg" width="18" height="18" alt=""> Insurance</li>
                                                              <li><img src="images/rightcheck.svg" width="18" height="18" alt=""> Generic Meds</li>
                                                              <li><img src="images/rightcheck.svg" width="18" height="18" alt=""> Appointments</li>
                                                              <li><img src="images/rightcheck.svg" width="18" height="18" alt=""> Health tips</li>
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
                          <div class="col-lg-6">
                              <div class="hospital-details-wrap">
                                   <div class="title-and-img-hospital">
                                      <div>
                                         <div class="title-and-available">
                                            <h5 class="mb-0 text-blue">Victoria Hospital </h5>
                                            <div class="available-chip">
                                               Available
                                            </div>
                                         </div>
                                         <div class="mt-4">
                                            <div class="more-detail-box">
                                               <div class="more-detal-icon">
                                                  <img src="images/lucation.svg" width="22" height="22" alt="">
                                               </div>
                                               <div class="more-details-text">
                                                  Tulsi Baugh Society Opp. Doctor House, <br>
                                                  near Parimal Garden, Ahmedabad 380006
                                               </div>
                                            </div>
                                         </div>
                                      </div>
                                      <div class="hospital-thumbnail">
                                         <img src="images/hospital-thumbnai.jpg" alt="">
                                      </div>
                                   </div>
                                   <div class="title-and-img-hospital">
                                      <div>
                                         <div class="mt-0">
                                            <div class="more-detail-box">
                                               <div class="more-detal-icon">
                                                  <img src="images/clarity_map-line.svg" width="22" height="22" alt="">
                                               </div>
                                               <div class="more-details-text">
                                                  <div class="more-details-text">
                                                     <div class="more-details-text">
                                                     <div class="">3 Km from your Location</div>
                                                     <div class="btn-for-locate-map mt-2">
                                                        <a href="#" class="btn">
                                                        <img src="images/carbon_airport-location.svg" class="carbonclr" width="10" height="10" alt="">
                                                        Open in Map
                                                        </a>
                                                     </div>
                                                      </div>  
                                                   </div>
                                               </div>
                                            </div>
                                         </div>
                                      </div>
                                      <div class="hospital-thumbnail">
                                        
                                      </div>
                                   </div>
                                   <div class="address-and-timing dr-profile">
                                      <div class="accordion" id="accordionExample">
                                         <div class="accordion-item victoHospital">
                                            <h2 class="accordion-header" id="headingOne">
                                               <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                                  <div class="last-wrap-of-box">
                                                     <div class="more-detail-box">
                                                        <div class="more-details-text">
                                                           <img src="images/clarity_alarm-clock-outline.svg" width="18" height="18" alt=""><b> Clinic Timing</b>
                                                        </div>
                                                     </div>
                                                     <div class="more-detail-box">
                                                        <div class="more-details-text">
                                                           <img src="images/jam_medical.svg" width="25" height="25" alt="">
                                                           <b> Facilities</b>
                                                        </div>
                                                        <span class="rightbht">Details</span>
                                                     </div>
                                                  </div>
                                               </button>
                                            </h2>
                                            <div id="collapseOne" class="accordion-collapse collapse" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                                               <div class="accordion-body victoHospital">
                                                  <div class="last-wrap-of-box">
                                                     <div class="more-detail-box">
                                                        <div class="more-details-text daysBlog">
                                                           <ul>
                                                              <li><span>Mon</span> 10.30am-2.00pm <br>
                                                                 05.00pm-8.00pm
                                                              </li>
                                                              <li><span>Tue</span> 10.30am-2.00pm</li>
                                                              <li><span>Wed</span>10.30am-2.00pm</li>
                                                              <li><span>Thu</span> 10.30am-2.00pm <br>
                                                                 05.00pm-8.00pm 
                                                              </li>
                                                              <li><span>Fri</span> 10.30am-2.00pm <br>
                                                                 05.00pm-8.00pm
                                                              </li>
                                                              <li><span>Sat</span> 10.30am-2.00pm</li>
                                                              <li><span>Sun</span> Closed</li>
                                                           </ul>
                                                        </div>
                                                        <div class="more-details-text daysBlog">
                                                           <ul>
                                                              <li> <img src="images/rightcheck.svg" width="18" height="18" alt=""> Insurance</li>
                                                              <li><img src="images/rightcheck.svg" width="18" height="18" alt=""> Generic Meds</li>
                                                              <li><img src="images/rightcheck.svg" width="18" height="18" alt=""> Appointments</li>
                                                              <li><img src="images/rightcheck.svg" width="18" height="18" alt=""> Health tips</li>
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
                       </div>
                    </div>
                 </div>
                 <div class="tab-pane fade" id="pills-contact" role="tabpanel" aria-labelledby="pills-contact-tab">
                    <div class="review-section fullwidth">
                       <h4 class="mb-3 text-blue leftpyou">What People say about Dr Namrata Singh</h4>
                       <div class="review-boxes-wrap mt-4">
                          <div class="row">
                             <div class="col-lg-6">
                                <div class="dr-search-list mt-5 cartBlog dr-profile">
                                   <div class="review-dr-box">
                                      <div class="dr-img-review">
                                         <img src="images/dr-img.jpg" width="80" alt="">
                                      </div>
                                      <div class="dr-review-part">
                                         <h5>Ms Amrita Rao</h5>
                                         <div class="p-dr-more-details">
                                            <div class="rating">
                                               <img src="images/star.svg"  alt="">
                                               <img src="images/star.svg" alt="">
                                               <img src="images/star.svg" alt="">
                                               <img src="images/star.svg" alt="">
                                               <img src="images/star.svg" alt="">
                                            </div>
                                            <div class="devider"></div>
                                            <div class="review">
                                               <span>288 Review</span>
                                            </div>
                                         </div>
                                         <div class="review-text text-grey mt-2 mb-2">
                                            Doctor is really experienced , basically i was facing
                                            skin issue for 3-4 years and i had visited 4 doctors,
                                            but got no results....
                                         </div>
                                      </div>
                                   </div>
                                   <div class="dr-review-part">
                                      <div class="review-row-of-rating dr-pr-rating">
                                         <div class="mb-3 ratingblogw">
                                            <div class="rating">
                                               <img src="images/star.svg" width="14" height="14"  alt="">
                                               <img src="images/star.svg" width="14" height="14"  alt="">
                                               <img src="images/star.svg" width="14" height="14"  alt="">
                                               <img src="images/star.svg" width="14" height="14"  alt="">
                                               <img src="images/star.svg" width="14" height="14"  alt="">
                                            </div>
                                            <div class="text-center text-blue fw-bold">
                                               Being Poilite
                                            </div>
                                         </div>
                                         <div class="ratingblogw">
                                            <div class="rating">
                                               <img src="images/star.svg" width="14" height="14"  alt="">
                                               <img src="images/star.svg" width="14" height="14"  alt="">
                                               <img src="images/star.svg" width="14" height="14"  alt="">
                                               <img src="images/star.svg" width="14" height="14"  alt="">
                                               <img src="images/star.svg" width="14" height="14"  alt="">
                                            </div>
                                            <div class="text-center text-blue fw-bold">
                                               Listning to you
                                            </div>
                                         </div>
                                         <div class="ratingblogw">
                                            <div class="rating">
                                               <img src="images/star.svg" width="14" height="14"  alt="">
                                               <img src="images/star.svg" width="14" height="14"  alt="">
                                               <img src="images/star.svg" width="14" height="14"  alt="">
                                               <img src="images/star.svg" width="14" height="14"  alt="">
                                               <img src="images/star.svg" width="14" height="14"  alt="">
                                            </div>
                                            <div class="text-center text-blue fw-bold">
                                               Clinical Enviornment
                                            </div>
                                         </div>
                                      </div>
                                      <div class="review-row-of-rating dr-pr-rating">
                                         <div class="ratingblogw">
                                            <div class="rating">
                                               <img src="images/starblack1.svg" width="14" height="14"  alt="">
                                               <img src="images/starblack1.svg" width="14" height="14"  alt="">
                                               <img src="images/starblack1.svg" width="14" height="14"  alt="">
                                               <img src="images/starblack1.svg" width="14" height="14"  alt="">
                                               <img src="images/starblack1.svg" width="14" height="14"  alt="">
                                            </div>
                                            <div class="text-center text-blue fw-bold">
                                               Clinical Hygiene
                                            </div>
                                         </div>
                                         <div class="ratingblogw">
                                            <div class="rating">
                                               <img src="images/starblack1.svg" width="14" height="14"  alt="">
                                               <img src="images/starblack1.svg" width="14" height="14"  alt="">
                                               <img src="images/starblack1.svg" width="14" height="14"  alt="">
                                               <img src="images/starblack1.svg" width="14" height="14"  alt="">
                                               <img src="images/starblack1.svg" width="14" height="14"  alt="">
                                            </div>
                                            <div class="text-center text-blue fw-bold">
                                               Counsiling
                                            </div>
                                         </div>
                                         <div class="ratingblogw">
                                            <div class="rating">
                                               <img src="images/starblack1.svg" width="14" height="14"  alt="">
                                               <img src="images/starblack1.svg" width="14" height="14"  alt="">
                                               <img src="images/starblack1.svg" width="14" height="14"  alt="">
                                               <img src="images/starblack1.svg" width="14" height="14"  alt="">
                                               <img src="images/starblack1.svg" width="14" height="14"  alt="">
                                            </div>
                                            <div class="text-center text-blue fw-bold">
                                               Overall Expiriance
                                            </div>
                                         </div>
                                      </div>
                                   </div>
                                </div>
                             </div>
                             <div class="col-lg-6">
                                <div class="dr-search-list mt-5 cartBlog dr-profile">
                                   <div class="review-dr-box">
                                      <div class="dr-img-review">
                                         <img src="images/dr-img.jpg" width="80" alt="">
                                      </div>
                                      <div class="dr-review-part">
                                         <h5>Mrs Ankita</h5>
                                         <div class="p-dr-more-details">
                                            <div class="rating">
                                               <img src="images/star.svg"  alt="">
                                               <img src="images/star.svg" alt="">
                                               <img src="images/star.svg" alt="">
                                               <img src="images/star.svg" alt="">
                                               <img src="images/star.svg" alt="">
                                            </div>
                                            <div class="devider"></div>
                                            <div class="review">
                                               <span>288 Review</span>
                                            </div>
                                         </div>
                                         <div class="review-text text-grey mt-2 mb-2">
                                            Doctor is really experienced , basically i was facing
                                            skin issue for 3-4 years and i had visited 4 doctors,
                                            but got no results....
                                         </div>
                                      </div>
                                   </div>
                                   <div class="dr-review-part">
                                      <div class="review-row-of-rating dr-pr-rating">
                                         <div class="mb-3 ratingblogw">
                                            <div class="rating">
                                               <img src="images/star.svg" width="14" height="14"  alt="">
                                               <img src="images/star.svg" width="14" height="14"  alt="">
                                               <img src="images/star.svg" width="14" height="14"  alt="">
                                               <img src="images/star.svg" width="14" height="14"  alt="">
                                               <img src="images/star.svg" width="14" height="14"  alt="">
                                            </div>
                                            <div class="text-center text-blue fw-bold">
                                               Being Poilite
                                            </div>
                                         </div>
                                         <div class="ratingblogw">
                                            <div class="rating">
                                               <img src="images/star.svg" width="14" height="14"  alt="">
                                               <img src="images/star.svg" width="14" height="14"  alt="">
                                               <img src="images/star.svg" width="14" height="14"  alt="">
                                               <img src="images/star.svg" width="14" height="14"  alt="">
                                               <img src="images/star.svg" width="14" height="14"  alt="">
                                            </div>
                                            <div class="text-center text-blue fw-bold">
                                               Listning to you
                                            </div>
                                         </div>
                                         <div class="ratingblogw">
                                            <div class="rating">
                                               <img src="images/star.svg" width="14" height="14"  alt="">
                                               <img src="images/star.svg" width="14" height="14"  alt="">
                                               <img src="images/star.svg" width="14" height="14"  alt="">
                                               <img src="images/star.svg" width="14" height="14"  alt="">
                                               <img src="images/star.svg" width="14" height="14"  alt="">
                                            </div>
                                            <div class="text-center text-blue fw-bold">
                                               Clinical Enviornment
                                            </div>
                                         </div>
                                      </div>
                                      <div class="review-row-of-rating dr-pr-rating">
                                         <div class="ratingblogw">
                                            <div class="rating">
                                               <img src="images/starblack1.svg" width="14" height="14"  alt="">
                                               <img src="images/starblack1.svg" width="14" height="14"  alt="">
                                               <img src="images/starblack1.svg" width="14" height="14"  alt="">
                                               <img src="images/starblack1.svg" width="14" height="14"  alt="">
                                               <img src="images/starblack1.svg" width="14" height="14"  alt="">
                                            </div>
                                            <div class="text-center text-blue fw-bold">
                                               Clinical Hygiene
                                            </div>
                                         </div>
                                         <div class="ratingblogw">
                                            <div class="rating">
                                               <img src="images/starblack1.svg" width="14" height="14"  alt="">
                                               <img src="images/starblack1.svg" width="14" height="14"  alt="">
                                               <img src="images/starblack1.svg" width="14" height="14"  alt="">
                                               <img src="images/starblack1.svg" width="14" height="14"  alt="">
                                               <img src="images/starblack1.svg" width="14" height="14"  alt="">
                                            </div>
                                            <div class="text-center text-blue fw-bold">
                                               Counsiling
                                            </div>
                                         </div>
                                         <div class="ratingblogw">
                                            <div class="rating">
                                               <img src="images/starblack1.svg" width="14" height="14"  alt="">
                                               <img src="images/starblack1.svg" width="14" height="14"  alt="">
                                               <img src="images/starblack1.svg" width="14" height="14"  alt="">
                                               <img src="images/starblack1.svg" width="14" height="14"  alt="">
                                               <img src="images/starblack1.svg" width="14" height="14"  alt="">
                                            </div>
                                            <div class="text-center text-blue fw-bold">
                                               Overall Expiriance
                                            </div>
                                         </div>
                                      </div>
                                   </div>
                                </div>
                             </div>
                             <div class="col-lg-6">
                                <div class="dr-search-list mt-5 cartBlog dr-profile">
                                   <div class="review-dr-box">
                                      <div class="dr-img-review">
                                         <img src="images/dr-img.jpg" width="80" alt="">
                                      </div>
                                      <div class="dr-review-part">
                                         <h5>Mr Andrew Thomas</h5>
                                         <div class="p-dr-more-details">
                                            <div class="rating">
                                               <img src="images/star.svg"  alt="">
                                               <img src="images/star.svg" alt="">
                                               <img src="images/star.svg" alt="">
                                               <img src="images/star.svg" alt="">
                                               <img src="images/star.svg" alt="">
                                            </div>
                                            <div class="devider"></div>
                                            <div class="review">
                                               <span>288 Review</span>
                                            </div>
                                         </div>
                                         <div class="review-text text-grey mt-2 mb-2">
                                            Doctor is really experienced , basically i was facing
                                            skin issue for 3-4 years and i had visited 4 doctors,
                                            but got no results....
                                         </div>
                                      </div>
                                   </div>
                                   <div class="dr-review-part">
                                      <div class="review-row-of-rating dr-pr-rating">
                                         <div class="mb-3 ratingblogw">
                                            <div class="rating">
                                               <img src="images/star.svg" width="14" height="14"  alt="">
                                               <img src="images/star.svg" width="14" height="14"  alt="">
                                               <img src="images/star.svg" width="14" height="14"  alt="">
                                               <img src="images/star.svg" width="14" height="14"  alt="">
                                               <img src="images/star.svg" width="14" height="14"  alt="">
                                            </div>
                                            <div class="text-center text-blue fw-bold">
                                               Being Poilite
                                            </div>
                                         </div>
                                         <div class="ratingblogw">
                                            <div class="rating">
                                               <img src="images/star.svg" width="14" height="14"  alt="">
                                               <img src="images/star.svg" width="14" height="14"  alt="">
                                               <img src="images/star.svg" width="14" height="14"  alt="">
                                               <img src="images/star.svg" width="14" height="14"  alt="">
                                               <img src="images/star.svg" width="14" height="14"  alt="">
                                            </div>
                                            <div class="text-center text-blue fw-bold">
                                               Listning to you
                                            </div>
                                         </div>
                                         <div class="ratingblogw">
                                            <div class="rating">
                                               <img src="images/star.svg" width="14" height="14"  alt="">
                                               <img src="images/star.svg" width="14" height="14"  alt="">
                                               <img src="images/star.svg" width="14" height="14"  alt="">
                                               <img src="images/star.svg" width="14" height="14"  alt="">
                                               <img src="images/star.svg" width="14" height="14"  alt="">
                                            </div>
                                            <div class="text-center text-blue fw-bold">
                                               Clinical Enviornment
                                            </div>
                                         </div>
                                      </div>
                                      <div class="review-row-of-rating dr-pr-rating">
                                         <div class="ratingblogw">
                                            <div class="rating">
                                               <img src="images/starblack1.svg" width="14" height="14"  alt="">
                                               <img src="images/starblack1.svg" width="14" height="14"  alt="">
                                               <img src="images/starblack1.svg" width="14" height="14"  alt="">
                                               <img src="images/starblack1.svg" width="14" height="14"  alt="">
                                               <img src="images/starblack1.svg" width="14" height="14"  alt="">
                                            </div>
                                            <div class="text-center text-blue fw-bold">
                                               Clinical Hygiene
                                            </div>
                                         </div>
                                         <div class="ratingblogw">
                                            <div class="rating">
                                               <img src="images/starblack1.svg" width="14" height="14"  alt="">
                                               <img src="images/starblack1.svg" width="14" height="14"  alt="">
                                               <img src="images/starblack1.svg" width="14" height="14"  alt="">
                                               <img src="images/starblack1.svg" width="14" height="14"  alt="">
                                               <img src="images/starblack1.svg" width="14" height="14"  alt="">
                                            </div>
                                            <div class="text-center text-blue fw-bold">
                                               Counsiling
                                            </div>
                                         </div>
                                         <div class="ratingblogw">
                                            <div class="rating">
                                               <img src="images/starblack1.svg" width="14" height="14"  alt="">
                                               <img src="images/starblack1.svg" width="14" height="14"  alt="">
                                               <img src="images/starblack1.svg" width="14" height="14"  alt="">
                                               <img src="images/starblack1.svg" width="14" height="14"  alt="">
                                               <img src="images/starblack1.svg" width="14" height="14"  alt="">
                                            </div>
                                            <div class="text-center text-blue fw-bold">
                                               Overall Expiriance
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
              </div>
           </div>
        </div>
     </main>
  </div>    </div>
 </template>
 
 <script>
 
 export default {
     head(){
         return {
             title: "Dr Namrata Sing dental in Ahmdabad",
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
                     content: `Book appointment -View clinic timing, service price, treatments & patient review. Dr hari jani dental in Ahmdabad`,
                 },
 
                 {
                     hid: 'og:title',
                     property: 'og:title',
                     content: "Dr Namrata Sing dental in Ahmdabad"
                 },
                 {
                     hid: "og:description",
                     property: "og:description",
                     content: `Book appointment -View clinic timing, service price, treatments & patient review.Dr hari jani dental in Ahmdabad`,
                 },
                 {
                     hid: 'og:image',
                     property: 'og:image',
                     content: 'Dr Namrata Sing dental in Ahmdabad'// replace with your image URL
                 },
                 {
                     hid: 'keywords',
                     name: 'keywords',
                     content: `Dr Namrata Sing dental in Ahmdabad, Patient Reviews, Contact number, Phone number, Experience, Qualification, Achievements, Ratings, Directions, Map, Working hours, Clinic, Hospital, Services Cost, Consultation Charges, Official Website link.`
                 }
 
             ],
         };
     }
 }
 </script>