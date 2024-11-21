<template>
    
  <div>
    <div class="overlay"></div>
   <div class="hero-section">
      <header>
         <!-- Desktop navbar -->
         <nav class=" navbar navbar-expand-lg  navbar-light bg-transparent">
            <div class="container">
               <a class="navbar-brand" href="index.html">
                  <div class="logoIconsdtp">
                     <img src="images/CureNearMe-FAVICON_PC.svg" width="60" height="60" alt="">
                  </div>
                  <img src="images/Logo_CureNearMe.svg" width="60" height="60" alt="">
               </a>
               <button type="button" id="sidebarCollapse" style="display: none;" class="btn">
                  <i class="fas fa-align-left"></i>
               </button>
               <div class="collapse navbar-collapse desktop-navbar" id="navbarSupportedContent">
                  <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
                     <li class="nav-item dropdown has-megamenu">
                        <a class="nav-link dropdown-toggle" href="#" data-bs-toggle="dropdown">
                           <img src="images/connections.svg" width="25" height="25" alt="">
                           Connections
                        </a>
                        <div class="dropdown-menu megamenu" role="menu">
                           <a href="network.html">
                              <div class="menu-img-with-icon">
                                 <span>My Network </span>
                              </div>
                           </a>
                           <a href="network.html">
                              <div class="menu-img-with-icon">
                                 <span>Connect Provider</span>
                              </div>
                           </a>
                           <a href="network.html">
                              <div class="menu-img-with-icon">
                                 <span>Rate Provider</span>
                              </div>
                           </a>
                        </div>
                     </li>
                     <li class="nav-item">
                        <a class="nav-link" href="dr-profile.html">
                           <img src="images/jam_medical.svg" width="25" height="25" alt="">
                           Doctors
                        </a>
                     </li>
                     <li class="nav-item">
                        <a class="nav-link" href="nurse.html">
                           <img src="images/Nurses.svg" width="25" height="25" alt="">
                           Nurses
                        </a>
                     </li>
                     <li class="nav-item">
                        <a class="nav-link active" aria-current="page" href="diagnostics.html">
                           <img src="images/Deal_iconmenu.svg" width="25" height="25" alt="">
                           Deals
                        </a>
                     </li>
                     <li class="nav-item dropdown has-megamenu">
                        <a class="nav-link dropdown-toggle" href="#" data-bs-toggle="dropdown">
                           <img src="images/About_icon.svg" width="25" height="25" alt="">
                           About
                        </a>
                        <div class="dropdown-menu megamenu" role="menu">
                           <a href="about-medicare.html">
                              <div class="menu-img-with-icon">
                                 <span>About CureNearMe</span>
                              </div>
                           </a>
                           <a href="help-support.html">
                              <div class="menu-img-with-icon">
                                 <span>Help and Support</span>
                              </div>
                           </a>
                           <a href="contact-us.html">
                              <div class="menu-img-with-icon">
                                 <span>Contact Us</span>
                              </div>
                           </a>
                        </div>
                        <!-- dropdown-mega-menu.// -->
                     </li>
                     <li class="nav-item dropdown has-megamenu">
                        <a class="nav-link dropdown-toggle" href="login.html" data-bs-toggle="dropdown">
                           <img src="images/Profile_icon.svg" width="25" height="25" alt="">
                           Sign in/Sign Up
                        </a>
                        <div class="dropdown-menu megamenu" role="menu">
                           <a href="account.html">
                              <div class="menu-img-with-icon">
                                 <span>Account Info</span>
                              </div>
                           </a>
                           <a href="settings.html">
                              <div class="menu-img-with-icon">
                                 <span>Settings</span>
                              </div>
                           </a>
                           <a href="login.html">
                              <div class="menu-img-with-icon">
                                 <span>Logout</span>
                              </div>
                           </a>
                        </div>
                     </li>
                  </ul>
               </div>
            </div>
         </nav>
         <!-- Mobile navbar -->
         <nav id="sidebar">
            <div id="dismiss">
               <i class="fas fa-align-left"></i>
            </div>
            <div class="sidebar-header">
               <a class="navbar-brand" href="index.html"><img src="images/Logo.svg" alt=""></a>
            </div>
            <div class="user-profile">
               <h1><img src="images/profile-image.png" alt="profile photo" /> Zubair Sota</h1>
               <p>33, Rahul Nagar, Bhuj - Kutch 33, Rahul Nagar, Bhuj - Kutch <a href="#" class="editright"
                     data-bs-toggle="modal" data-bs-target="#exampleModal1"><i class="fas fa-edit"></i></a></p>
            </div>
            <ul class="list-unstyled components">
               <li>
                  <a href="index.html">
                     <img src="images/fluent_home-16-regular.svg" alt="">
                     Home
                  </a>
               </li>
               <li>
                  <a href="network.html">
                     <img src="images/carbon_network-2.svg" alt="">
                     My Network
                  </a>
               </li>
               <li>
                  <a href="network.html#pills-profile-tab">
                     <img src="images/fluent_plug-connected-20-regular.svg" alt="">
                     Connect Provider
                  </a>
               </li>
               <li>
                  <a href="network.html">
                     <img src="images/ant-design_star-outlined.svg" alt="">
                     Rate provider
                  </a>
               </li>
               <li>
                  <a href="about-medicare.html">
                     <img src="images/fluent_shield-badge-20-regular.svg" alt="">
                     Refer & get membership
                  </a>
               </li>
               <li class="active">
                  <a href="#homeSubmenu" data-toggle="collapse" aria-expanded="false">
                     <img src="images/cil_location-pin.svg" alt=""> About <img class="aboutRight"
                        src="images/manuIcon.svg" alt=""></a>
                  <ul class="collapse list-unstyled" id="homeSubmenu">
                     <li>
                        <a href="#">About CureNearMe </a>
                     </li>
                     <li>
                        <a href="#">Help and Support
                        </a>
                     </li>
                  </ul>
               </li>
               <li>
                  <a href="contact-us.html">
                     <img src="images/fluent_contact-card-16-regular.svg" alt="">
                     Contact Us
                  </a>
               </li>
               <li>
                  <a href="settings.html">
                     <img src="images/carbon_settings.svg" alt="">
                     Settings
                  </a>
               </li>
               <li>
                  <a href="login.html">
                     <img src="images/uiw_logout.svg" alt="">
                     Logout
                  </a>
               </li>
            </ul>
         </nav>
      </header>
      <section>
         <div class="hero-search">
            <h1 class="text-left mb-3"><span class="under-line-for-home">Find & Compare </span> medical services near
               you</h1>
            <div class="two-search-part">
               <div class="input-group location-search ">
                  <div class="input-group-text ">
                     <img src="images/lucation.svg" width="18" height="18" alt="">
                  </div>

                  <input type="text" class="form-control" id="inlineFormInputGroupUsername" placeholder="Ahmedabad"
                     style="border-right: 1px solid #c5c5c5;">
                  <div class='searchdrop'>
                     <div class='ul'>
                        <li><img src="images/Search.svg" alt=""> Channel</li>
                        <li><img src="images/Search.svg" alt=""> CodingLab</li>
                        <li><img src="images/Search.svg" alt=""> CodingNepal</li>
                        <li><img src="images/Search.svg" alt=""> YouTube</li>
                        <li><img src="images/Search.svg" alt="">YouTuber</li>
                        <li><img src="images/Search.svg" alt=""> YouTube Channel</li>
                        <li><img src="images/Search.svg" alt=""> Blogger</li>
                        <li><img src="images/Search.svg" alt=""> Bollywood</li>
                        <li><img src="images/Search.svg" alt=""> Vlogger</li>
                        <li><img src="images/Search.svg" alt="">Vechiles</li>
                        <li><img src="images/Search.svg" alt=""> Facebook</li>
                        <li><img src="images/Search.svg" alt=""> Freelancer</li>
                        <li><img src="images/Search.svg" alt=""> Facebook Page</li>
                        <li><img src="images/Search.svg" alt=""> Designer</li>
                     </div>
                  </div>
               </div>
               <style>
                  .box {
                     /* background-color: blue; */
                     height: 30px;
                     width: 300px;
                     position: relative;
                     overflow: hidden;
                     top: 10px;
                     margin: 0 auto;
                  }
                  .carousel-inner>.item.active{
                     
                  }
                  .box input {
                     position: absolute;
                     width: 100%;
                     z-index: 2;
                     height: 100%;
                     background-color: transparent;
                  }

                  input:focus~#myCarousel {
                     display: none;
                  }

                  #myCarousel {
                     position: absolute;
                     user-select: none;
                     top: 5px;
                     left: 5px;
                     z-index: 1;
                  }

                  .top-to-bottom .carousel-inner {
                     height: 100%;
                  }

                  .carousel.top-to-bottom .item {
                     -webkit-transition: 0.6s ease-in-out top;
                     -moz-transition: 0.6s ease-in-out top;
                     -ms-transition: 0.6s ease-in-out top;
                     -o-transition: 0.6s ease-in-out top;
                     transition: 0.6s ease-in-out top;
                  }

                  .carousel.top-to-bottom .active {
                     top: 0;
                  }

                  .carousel.top-to-bottom .next {
                     top: 400px;
                  }

                  .carousel.top-to-bottom .prev {
                     top: -400px;
                  }

                  .carousel.top-to-bottom .item {
                     left: 0;
                  }

                  #my_text_slider {
                     text-transform: uppercase;
                     color: #000;
                     font-size: 1em;
                     height: 180px;
                     font-family: 'Fjalla One';
                  }
               </style>
               <div class="input-group d-flex">
                  <div class="input-group-text">
                     <img src="images/Search.svg" alt=""> &nbsp;
                     <span class="text-blue">Search</span>
                  </div>
                  <div class="box">
                     <input type="text" class="form-control" id="inlineFormInputGroupUsername" placeholder="">
                     <div id="myCarousel" class="carousel slide top-to-bottom" data-ride="carousel">
                        <!-- Carousel items -->
                        <div class="carousel-inner" id="my_text_slider">
                           <div class="active item">Dr. Speciality
                           </div>
                           <div class="item">Health Conditions
                           </div>
                           <div class="item">Health Conditions
                           </div>
                           <div class="item">Disease
                           </div>
                           <div class="item">Nurse
                           </div>
                           <div class="item">Nurse Services
                           </div>
                        </div>
                        <!-- indicators -->

                        <ol class="carousel-indicators">
                           <li data-target="#myCarousel" data-slide-to="0" class="active"></li>
                           <li data-target="#myCarousel" data-slide-to="1"></li>
                           <li data-target="#myCarousel" data-slide-to="2"></li>
                           <li data-target="#myCarousel" data-slide-to="3"></li>
                           <li data-target="#myCarousel" data-slide-to="4"></li>
                           <li data-target="#myCarousel" data-slide-to="5"></li>
                        </ol>
                     </div>

                  </div>
                  <!-- <marquee scrolldelay="350" direction="up" |="" down="">
                     <div class="Placeholder__Text">Doctor</div>
                     <div class="Placeholder__Text inactive">Dr. Speciality</div>
                     <div class="Placeholder__Text">Health Conditions</div>
                     <div class="Placeholder__Text inactive">Disease</div>
                     <div class="Placeholder__Text">Doctor Services</div>
                     <div class="Placeholder__Text inactive">Nurse</div>
                     <div class="Placeholder__Text">Nurse Services</div>
                  </marquee> -->
                  <div class='searchdrop mobileview'>
                     <div class='ul'>
                        <li><img src="images/Search.svg" alt=""> Channel</li>
                        <li><img src="images/Search.svg" alt=""> CodingLab</li>
                        <li><img src="images/Search.svg" alt=""> CodingNepal</li>
                        <li><img src="images/Search.svg" alt=""> YouTube</li>
                        <li><img src="images/Search.svg" alt=""> YouTuber</li>
                        <li><img src="images/Search.svg" alt=""> YouTube Channel</li>
                        <li><img src="images/Search.svg" alt=""> Blogger</li>
                        <li><img src="images/Search.svg" alt=""> Bollywood</li>
                        <li><img src="images/Search.svg" alt=""> Vlogger</li>
                        <li><img src="images/Search.svg" alt=""> Vechiles</li>
                        <li><img src="images/Search.svg" alt=""> Facebook</li>
                        <li><img src="images/Search.svg" alt=""> Freelancer</li>
                        <li><img src="images/Search.svg" alt=""> Facebook Page</li>
                        <li><img src="images/Search.svg" alt=""> Designer</li>
                     </div>
                  </div>
               </div>
            </div>
            <div class="advance-search">
               <div class="advance-wrap">
                  <div class="text-grey roboto">
                     Explore your require category quickly <br>
                     more than <span class="text-light">10 speciality </span> you can find
                  </div>
                  <div style="min-width: 186px;" class="ex-width">
                     <div>
                        <a href="#" class="advance-cta" data-bs-toggle="modal" data-bs-target="#exampleModal">
                           <img src="images/carbon_edit-filter.svg" width="25" height="25" alt="">
                           Quick Search
                        </a>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </section>
   </div>
   <section class="carousel-select-section m-top">
      <div class="carousel-select container mt-lg-4 mt-0">
         <h3 class="text-blue ps-3">Select Your Categories</h3>
         <div class="designtabs">
            <ul class="nav nav-tabs">
               <div class="owl_1 owl-carousel owl-theme">
                  <div class="item">
                     <li class="active">
                        <a data-toggle="tab" href="#home">
                           <div class="dr-box">
                              <div class="dr-img">
                                 <img src="images/dr1.png" alt="">
                              </div>
                              <div class="dr-text">
                                 <h4 class="mb-0">Doctors</h4>
                                 <p class="mb-0 roboto text-grey">332 specialist</p>
                              </div>
                           </div>
                        </a>
                     </li>
                  </div>
                  <div class="item">
                     <li>
                        <a data-toggle="tab" href="#menu2">
                           <div class="dr-box">
                              <div class="dr-img">
                                 <img src="images/nurse-profile.jpg" alt="">
                              </div>
                              <div class="dr-text">
                                 <h4 class="mb-0">Nurse</h4>
                                 <p class="mb-0 roboto text-grey">332 specialist</p>
                              </div>
                           </div>
                        </a>
                     </li>
                  </div>
                  <div class="item">
                     <li>
                        <a data-toggle="tab" href="#menu1">
                           <div class="dr-box">
                              <div class="dr-img">
                                 <img src="images/pharmacy-profile.jpg" alt="">
                              </div>
                              <div class="dr-text">
                                 <h4 class="mb-0">Pharmacy</h4>
                                 <p class="mb-0 roboto text-grey">Coming Soon</p>
                              </div>
                           </div>
                        </a>
                     </li>
                  </div>
                  <div class="item">
                     <li>
                        <a data-toggle="tab" href="#menu3">
                           <div class="dr-box">
                              <div class="dr-img">
                                 <img src="images/hospital-profile.jpg" alt="">
                              </div>
                              <div class="dr-text">
                                 <h4 class="mb-0">Hospital</h4>
                                 <p class="mb-0 roboto text-grey">Coming Soon</p>
                              </div>
                           </div>
                        </a>
                     </li>
                  </div>
                  <div class="item">
                     <li>
                        <a data-toggle="tab" href="#menu4">
                           <div class="dr-box">
                              <div class="dr-img">
                                 <img src="images/Diagnostics.jpg" alt="">
                              </div>
                              <div class="dr-text">
                                 <h4 class="mb-0">Lab</h4>
                                 <p class="mb-0 roboto text-grey">Coming Soon</p>
                              </div>
                           </div>
                        </a>
                     </li>
                  </div>
               </div>
            </ul>
            <div class="tab-content">
               <div id="home" class="tab-pane fade in active">
                  <div class="price-details">
                     <div class="row mt-1">
                        <div class="col-sm-12">
                           <div class="price-title">
                              <h4 class="mb-0 text-blue">Services</h4>
                              <div class="price-label">
                                 <span class="small-text">Average Price:</span>
                                 <span class="price roboto fw-bold">₹1300.23</span>
                              </div>
                           </div>
                        </div>
                     </div>
                     <div class="row mt-4 dr-row">
                        <div class="col-xl-4">
                           <div class="dr-price-box">
                              <div class="p-dr-img">
                                 <img src="images/dr1.png" alt="">
                              </div>
                              <div class="p-dr-right">
                                 <h5 class="text-blue">Dr Karan Sodha</h5>
                                 <p class="mb-0 text-blue roboto">MD Cardiologist with 12 Years experience</p>
                                 <div class="p-dr-more-details">
                                    <div class="rating">
                                       <img src="images/bx_bxs-star.svg" width="18" height="18" alt="">
                                       <img src="images/bx_bxs-star.svg" width="18" height="18" alt="">
                                       <img src="images/bx_bxs-star.svg" width="18" height="18" alt="">
                                       <img src="images/bx_bxs-star.svg" width="18" height="18" alt="">
                                       <img src="images/bx_bxs-star-half.svg" width="18" height="18" alt="">
                                    </div>
                                    <div class="devider"></div>
                                    <div class="review">
                                       <span>288 Review</span>
                                    </div>
                                    <div class="devider"></div>
                                    <div class="distance">
                                       <div class="icon-d">
                                          <img src="images/lucation.svg" width="18" height="18" alt="">
                                       </div>
                                       <div class="text-d">
                                          2.6 km
                                       </div>
                                    </div>
                                 </div>
                                 <div class="price-dr d-md-block d-none">
                                    ₹ 1250.00
                                 </div>
                              </div>
                           </div>
                        </div>
                        <div class="col-xl-4">
                           <div class="dr-price-box">
                              <div class="p-dr-img">
                                 <img src="images/dr1.png" alt="">
                              </div>
                              <div class="p-dr-right">
                                 <h5 class="text-blue">Dr Karan Sodha</h5>
                                 <p class="mb-0 text-blue">MD Cardiologist with 12 Years experience</p>
                                 <div class="p-dr-more-details">
                                    <div class="rating">
                                       <img src="images/bx_bxs-star.svg" width="18" height="18" alt="">
                                       <img src="images/bx_bxs-star.svg" width="18" height="18" alt="">
                                       <img src="images/bx_bxs-star.svg" width="18" height="18" alt="">
                                       <img src="images/bx_bxs-star.svg" width="18" height="18" alt="">
                                       <img src="images/bx_bxs-star-half.svg" width="18" height="18" alt="">
                                    </div>
                                    <div class="devider"></div>
                                    <div class="review">
                                       <span>288 Review</span>
                                    </div>
                                    <div class="devider"></div>
                                    <div class="distance">
                                       <div class="icon-d">
                                          <img src="images/lucation.svg" width="18" height="18" alt="">
                                       </div>
                                       <div class="text-d">
                                          2.6 km
                                       </div>
                                    </div>
                                 </div>
                                 <div class="price-dr d-md-block d-none">
                                    ₹ 1250.00
                                 </div>
                              </div>
                           </div>
                        </div>
                        <div class="col-xl-4">
                           <div class="dr-price-box">
                              <div class="p-dr-img">
                                 <img src="images/dr1.png" alt="">
                              </div>
                              <div class="p-dr-right">
                                 <h5 class="text-blue">Dr Karan Sodha</h5>
                                 <p class="mb-0 text-blue">MD Cardiologist with 12 Years experience</p>
                                 <div class="p-dr-more-details">
                                    <div class="rating">
                                       <img src="images/bx_bxs-star.svg" width="18" height="18" alt="">
                                       <img src="images/bx_bxs-star.svg" width="18" height="18" alt="">
                                       <img src="images/bx_bxs-star.svg" width="18" height="18" alt="">
                                       <img src="images/bx_bxs-star.svg" width="18" height="18" alt="">
                                       <img src="images/bx_bxs-star-half.svg" width="18" height="18" alt="">
                                    </div>
                                    <div class="devider"></div>
                                    <div class="review">
                                       <span>288 Review</span>
                                    </div>
                                    <div class="devider"></div>
                                    <div class="distance">
                                       <div class="icon-d">
                                          <img src="images/lucation.svg" width="18" height="18" alt="">
                                       </div>
                                       <div class="text-d">
                                          2.6 km
                                       </div>
                                    </div>
                                 </div>
                                 <div class="price-dr d-md-block d-none">
                                    ₹ 1250.00
                                 </div>
                              </div>
                           </div>
                        </div>
                     </div>
                     <hr>
                     <div class="row mt-4 ">
                        <div class="col-sm-12">
                           <div class="price-title">
                              <h4 class="mb-0 text-blue">Women's Health</h4>
                              <div class="price-label">
                                 <span class="small-text">Average Price:</span>
                                 <span class="price roboto fw-bold">₹1300.23</span>
                              </div>
                           </div>
                        </div>
                     </div>
                     <div class="row mt-4 dr-row">
                        <div class="col-xl-4">
                           <div class="dr-price-box">
                              <div class="p-dr-img">
                                 <img src="images/dr1.png" alt="">
                              </div>
                              <div class="p-dr-right">
                                 <h5 class="text-blue">Dr Karan Sodha</h5>
                                 <p class="mb-0 text-blue roboto">MD Cardiologist with 12 Years experience</p>
                                 <div class="p-dr-more-details">
                                    <div class="rating">
                                       <img src="images/bx_bxs-star.svg" width="18" height="18" alt="">
                                       <img src="images/bx_bxs-star.svg" width="18" height="18" alt="">
                                       <img src="images/bx_bxs-star.svg" width="18" height="18" alt="">
                                       <img src="images/bx_bxs-star.svg" width="18" height="18" alt="">
                                       <img src="images/bx_bxs-star-half.svg" width="18" height="18" alt="">
                                    </div>
                                    <div class="devider"></div>
                                    <div class="review">
                                       <span>288 Review</span>
                                    </div>
                                    <div class="devider"></div>
                                    <div class="distance">
                                       <div class="icon-d">
                                          <img src="images/lucation.svg" width="18" height="18" alt="">
                                       </div>
                                       <div class="text-d">
                                          2.6 km
                                       </div>
                                    </div>
                                 </div>
                                 <div class="price-dr d-md-block d-none">
                                    ₹ 1250.00
                                 </div>
                              </div>
                           </div>
                        </div>
                        <div class="col-xl-4">
                           <div class="dr-price-box">
                              <div class="p-dr-img">
                                 <img src="images/dr1.png" alt="">
                              </div>
                              <div class="p-dr-right">
                                 <h5 class="text-blue">Dr Karan Sodha</h5>
                                 <p class="mb-0 text-blue roboto">MD Cardiologist with 12 Years experience</p>
                                 <div class="p-dr-more-details">
                                    <div class="rating">
                                       <img src="images/bx_bxs-star.svg" width="18" height="18" alt="">
                                       <img src="images/bx_bxs-star.svg" width="18" height="18" alt="">
                                       <img src="images/bx_bxs-star.svg" width="18" height="18" alt="">
                                       <img src="images/bx_bxs-star.svg" width="18" height="18" alt="">
                                       <img src="images/bx_bxs-star-half.svg" width="18" height="18" alt="">
                                    </div>
                                    <div class="devider"></div>
                                    <div class="review">
                                       <span>288 Review</span>
                                    </div>
                                    <div class="devider"></div>
                                    <div class="distance">
                                       <div class="icon-d">
                                          <img src="images/lucation.svg" width="18" height="18" alt="">
                                       </div>
                                       <div class="text-d">
                                          2.6 km
                                       </div>
                                    </div>
                                 </div>
                                 <div class="price-dr d-md-block d-none">
                                    ₹ 1250.00
                                 </div>
                              </div>
                           </div>
                        </div>
                        <div class="col-xl-4">
                           <div class="dr-price-box">
                              <div class="p-dr-img">
                                 <img src="images/dr1.png" alt="">
                              </div>
                              <div class="p-dr-right">
                                 <h5 class="text-blue">Dr Karan Sodha</h5>
                                 <p class="mb-0 text-blue roboto">MD Cardiologist with 12 Years experience</p>
                                 <div class="p-dr-more-details">
                                    <div class="rating">
                                       <img src="images/bx_bxs-star.svg" width="18" height="18" alt="">
                                       <img src="images/bx_bxs-star.svg" width="18" height="18" alt="">
                                       <img src="images/bx_bxs-star.svg" width="18" height="18" alt="">
                                       <img src="images/bx_bxs-star.svg" width="18" height="18" alt="">
                                       <img src="images/bx_bxs-star-half.svg" width="18" height="18" alt="">
                                    </div>
                                    <div class="devider"></div>
                                    <div class="review">
                                       <span>288 Review</span>
                                    </div>
                                    <div class="devider"></div>
                                    <div class="distance">
                                       <div class="icon-d">
                                          <img src="images/lucation.svg" width="18" height="18" alt="">
                                       </div>
                                       <div class="text-d">
                                          2.6 km
                                       </div>
                                    </div>
                                 </div>
                                 <div class="price-dr d-md-block d-none">
                                    ₹ 1250.00
                                 </div>
                              </div>
                           </div>
                        </div>
                     </div>
                     <hr>
                     <div class="row mt-4">
                        <div class="col-sm-12">
                           <div class="price-title">
                              <h4 class="mb-0 text-blue">Women's Health</h4>
                              <div class="price-label">
                                 <span class="small-text">Average Price:</span>
                                 <span class="price roboto fw-bold">₹1300.23</span>
                              </div>
                           </div>
                        </div>
                     </div>
                     <div class="row mt-4 dr-row">
                        <div class="col-xl-4">
                           <div class="dr-price-box">
                              <div class="p-dr-img">
                                 <img src="images/dr1.png" alt="">
                              </div>
                              <div class="p-dr-right">
                                 <h5 class="text-blue">Dr Karan Sodha</h5>
                                 <p class="mb-0 text-blue roboto">MD Cardiologist with 12 Years experience</p>
                                 <div class="p-dr-more-details">
                                    <div class="rating">
                                       <img src="images/bx_bxs-star.svg" width="18" height="18" alt="">
                                       <img src="images/bx_bxs-star.svg" width="18" height="18" alt="">
                                       <img src="images/bx_bxs-star.svg" width="18" height="18" alt="">
                                       <img src="images/bx_bxs-star.svg" width="18" height="18" alt="">
                                       <img src="images/bx_bxs-star-half.svg" width="18" height="18" alt="">
                                    </div>
                                    <div class="devider"></div>
                                    <div class="review">
                                       <span>288 Review</span>
                                    </div>
                                    <div class="devider"></div>
                                    <div class="distance">
                                       <div class="icon-d">
                                          <img src="images/lucation.svg" width="18" height="18" alt="">
                                       </div>
                                       <div class="text-d">
                                          2.6 km
                                       </div>
                                    </div>
                                 </div>
                                 <div class="price-dr d-md-block d-none">
                                    ₹ 1250.00
                                 </div>
                              </div>
                           </div>
                        </div>
                        <div class="col-xl-4">
                           <div class="dr-price-box">
                              <div class="p-dr-img">
                                 <img src="images/dr1.png" alt="">
                              </div>
                              <div class="p-dr-right">
                                 <h5 class="text-blue">Dr Karan Sodha</h5>
                                 <p class="mb-0 text-blue roboto">MD Cardiologist with 12 Years experience</p>
                                 <div class="p-dr-more-details">
                                    <div class="rating">
                                       <img src="images/bx_bxs-star.svg" width="18" height="18" alt="">
                                       <img src="images/bx_bxs-star.svg" width="18" height="18" alt="">
                                       <img src="images/bx_bxs-star.svg" width="18" height="18" alt="">
                                       <img src="images/bx_bxs-star.svg" width="18" height="18" alt="">
                                       <img src="images/bx_bxs-star-half.svg" width="18" height="18" alt="">
                                    </div>
                                    <div class="devider"></div>
                                    <div class="review">
                                       <span>288 Review</span>
                                    </div>
                                    <div class="devider"></div>
                                    <div class="distance">
                                       <div class="icon-d">
                                          <img src="images/lucation.svg" width="18" height="18" alt="">
                                       </div>
                                       <div class="text-d">
                                          2.6 km
                                       </div>
                                    </div>
                                 </div>
                                 <div class="price-dr d-md-block d-none">
                                    ₹ 1250.00
                                 </div>
                              </div>
                           </div>
                        </div>
                        <div class="col-xl-4">
                           <div class="dr-price-box">
                              <div class="p-dr-img">
                                 <img src="images/dr1.png" alt="">
                              </div>
                              <div class="p-dr-right">
                                 <h5 class="text-blue">Dr Karan Sodha</h5>
                                 <p class="mb-0 text-blue roboto">MD Cardiologist with 12 Years experience</p>
                                 <div class="p-dr-more-details">
                                    <div class="rating">
                                       <img src="images/bx_bxs-star.svg" width="18" height="18" alt="">
                                       <img src="images/bx_bxs-star.svg" width="18" height="18" alt="">
                                       <img src="images/bx_bxs-star.svg" width="18" height="18" alt="">
                                       <img src="images/bx_bxs-star.svg" width="18" height="18" alt="">
                                       <img src="images/bx_bxs-star-half.svg" width="18" height="18" alt="">
                                    </div>
                                    <div class="devider"></div>
                                    <div class="review">
                                       <span>288 Review</span>
                                    </div>
                                    <div class="devider"></div>
                                    <div class="distance">
                                       <div class="icon-d">
                                          <img src="images/lucation.svg" width="18" height="18" alt="">
                                       </div>
                                       <div class="text-d">
                                          2.6 km
                                       </div>
                                    </div>
                                 </div>
                                 <div class="price-dr d-md-block d-none">
                                    ₹ 1250.00
                                 </div>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
               <div id="menu1" class="tab-pane fade">
                  <div class="price-details">
                     <div class="row mt-1">
                        <div class="col-sm-12">
                           <div class="price-title">
                              <h4 class="mb-0 text-blue">Services</h4>
                              <div class="price-label">
                                 <span class="small-text">Average Price:</span>
                                 <span class="price roboto fw-bold">₹1300.23</span>
                              </div>
                           </div>
                        </div>
                     </div>
                     <div class="row mt-4 dr-row">
                        <div class="col-xl-4">
                           <div class="dr-price-box">
                              <div class="p-dr-img">
                                 <img src="images/pharmacy-profile.jpg" alt="">
                              </div>
                              <div class="p-dr-right">
                                 <h5 class="text-blue">Pharmacy</h5>
                                 <p class="mb-0 text-blue roboto">MD Cardiologist with 12 Years experience</p>
                                 <div class="p-dr-more-details">
                                    <div class="rating">
                                       <img src="images/bx_bxs-star.svg" width="18" height="18" alt="">
                                       <img src="images/bx_bxs-star.svg" width="18" height="18" alt="">
                                       <img src="images/bx_bxs-star.svg" width="18" height="18" alt="">
                                       <img src="images/bx_bxs-star.svg" width="18" height="18" alt="">
                                       <img src="images/bx_bxs-star-half.svg" width="18" height="18" alt="">
                                    </div>
                                    <div class="devider"></div>
                                    <div class="review">
                                       <span>288 Review</span>
                                    </div>
                                    <div class="devider"></div>
                                    <div class="distance">
                                       <div class="icon-d">
                                          <img src="images/lucation.svg" width="18" height="18" alt="">
                                       </div>
                                       <div class="text-d">
                                          2.6 km
                                       </div>
                                    </div>
                                 </div>
                                 <div class="price-dr d-md-block d-none">
                                    ₹ 1250.00
                                 </div>
                              </div>
                           </div>
                        </div>
                        <div class="col-xl-4">
                           <div class="dr-price-box">
                              <div class="p-dr-img">
                                 <img src="images/pharmacy-profile.jpg" alt="">
                              </div>
                              <div class="p-dr-right">
                                 <h5 class="text-blue">Pharmacy</h5>
                                 <p class="mb-0 text-blue">MD Cardiologist with 12 Years experience</p>
                                 <div class="p-dr-more-details">
                                    <div class="rating">
                                       <img src="images/bx_bxs-star.svg" width="18" height="18" alt="">
                                       <img src="images/bx_bxs-star.svg" width="18" height="18" alt="">
                                       <img src="images/bx_bxs-star.svg" width="18" height="18" alt="">
                                       <img src="images/bx_bxs-star.svg" width="18" height="18" alt="">
                                       <img src="images/bx_bxs-star-half.svg" width="18" height="18" alt="">
                                    </div>
                                    <div class="devider"></div>
                                    <div class="review">
                                       <span>288 Review</span>
                                    </div>
                                    <div class="devider"></div>
                                    <div class="distance">
                                       <div class="icon-d">
                                          <img src="images/lucation.svg" width="18" height="18" alt="">
                                       </div>
                                       <div class="text-d">
                                          2.6 km
                                       </div>
                                    </div>
                                 </div>
                                 <div class="price-dr d-md-block d-none">
                                    ₹ 1250.00
                                 </div>
                              </div>
                           </div>
                        </div>
                        <div class="col-xl-4">
                           <div class="dr-price-box">
                              <div class="p-dr-img">
                                 <img src="images/pharmacy-profile.jpg" alt="">
                              </div>
                              <div class="p-dr-right">
                                 <h5 class="text-blue">Pharmacy</h5>
                                 <p class="mb-0 text-blue">MD Cardiologist with 12 Years experience</p>
                                 <div class="p-dr-more-details">
                                    <div class="rating">
                                       <img src="images/bx_bxs-star.svg" width="18" height="18" alt="">
                                       <img src="images/bx_bxs-star.svg" width="18" height="18" alt="">
                                       <img src="images/bx_bxs-star.svg" width="18" height="18" alt="">
                                       <img src="images/bx_bxs-star.svg" width="18" height="18" alt="">
                                       <img src="images/bx_bxs-star-half.svg" width="18" height="18" alt="">
                                    </div>
                                    <div class="devider"></div>
                                    <div class="review">
                                       <span>288 Review</span>
                                    </div>
                                    <div class="devider"></div>
                                    <div class="distance">
                                       <div class="icon-d">
                                          <img src="images/lucation.svg" width="18" height="18" alt="">
                                       </div>
                                       <div class="text-d">
                                          2.6 km
                                       </div>
                                    </div>
                                 </div>
                                 <div class="price-dr d-md-block d-none">
                                    ₹ 1250.00
                                 </div>
                              </div>
                           </div>
                        </div>
                     </div>
                     <hr>
                     <div class="row mt-4 ">
                        <div class="col-sm-12">
                           <div class="price-title">
                              <h4 class="mb-0 text-blue">Women's Health</h4>
                              <div class="price-label">
                                 <span class="small-text">Average Price:</span>
                                 <span class="price roboto fw-bold">₹1300.23</span>
                              </div>
                           </div>
                        </div>
                     </div>
                     <div class="row mt-4 dr-row">
                        <div class="col-xl-4">
                           <div class="dr-price-box">
                              <div class="p-dr-img">
                                 <img src="images/pharmacy-profile.jpg" alt="">
                              </div>
                              <div class="p-dr-right">
                                 <h5 class="text-blue">Pharmacy</h5>
                                 <p class="mb-0 text-blue roboto">MD Cardiologist with 12 Years experience</p>
                                 <div class="p-dr-more-details">
                                    <div class="rating">
                                       <img src="images/bx_bxs-star.svg" width="18" height="18" alt="">
                                       <img src="images/bx_bxs-star.svg" width="18" height="18" alt="">
                                       <img src="images/bx_bxs-star.svg" width="18" height="18" alt="">
                                       <img src="images/bx_bxs-star.svg" width="18" height="18" alt="">
                                       <img src="images/bx_bxs-star-half.svg" width="18" height="18" alt="">
                                    </div>
                                    <div class="devider"></div>
                                    <div class="review">
                                       <span>288 Review</span>
                                    </div>
                                    <div class="devider"></div>
                                    <div class="distance">
                                       <div class="icon-d">
                                          <img src="images/lucation.svg" width="18" height="18" alt="">
                                       </div>
                                       <div class="text-d">
                                          2.6 km
                                       </div>
                                    </div>
                                 </div>
                                 <div class="price-dr d-md-block d-none">
                                    ₹ 1250.00
                                 </div>
                              </div>
                           </div>
                        </div>
                        <div class="col-xl-4">
                           <div class="dr-price-box">
                              <div class="p-dr-img">
                                 <img src="images/pharmacy-profile.jpg" alt="">
                              </div>
                              <div class="p-dr-right">
                                 <h5 class="text-blue">Pharmacy</h5>
                                 <p class="mb-0 text-blue roboto">MD Cardiologist with 12 Years experience</p>
                                 <div class="p-dr-more-details">
                                    <div class="rating">
                                       <img src="images/bx_bxs-star.svg" width="18" height="18" alt="">
                                       <img src="images/bx_bxs-star.svg" width="18" height="18" alt="">
                                       <img src="images/bx_bxs-star.svg" width="18" height="18" alt="">
                                       <img src="images/bx_bxs-star.svg" width="18" height="18" alt="">
                                       <img src="images/bx_bxs-star-half.svg" width="18" height="18" alt="">
                                    </div>
                                    <div class="devider"></div>
                                    <div class="review">
                                       <span>288 Review</span>
                                    </div>
                                    <div class="devider"></div>
                                    <div class="distance">
                                       <div class="icon-d">
                                          <img src="images/lucation.svg" width="18" height="18" alt="">
                                       </div>
                                       <div class="text-d">
                                          2.6 km
                                       </div>
                                    </div>
                                 </div>
                                 <div class="price-dr d-md-block d-none">
                                    ₹ 1250.00
                                 </div>
                              </div>
                           </div>
                        </div>
                        <div class="col-xl-4">
                           <div class="dr-price-box">
                              <div class="p-dr-img">
                                 <img src="images/pharmacy-profile.jpg" alt="">
                              </div>
                              <div class="p-dr-right">
                                 <h5 class="text-blue">Pharmacy</h5>
                                 <p class="mb-0 text-blue roboto">MD Cardiologist with 12 Years experience</p>
                                 <div class="p-dr-more-details">
                                    <div class="rating">
                                       <img src="images/bx_bxs-star.svg" width="18" height="18" alt="">
                                       <img src="images/bx_bxs-star.svg" width="18" height="18" alt="">
                                       <img src="images/bx_bxs-star.svg" width="18" height="18" alt="">
                                       <img src="images/bx_bxs-star.svg" width="18" height="18" alt="">
                                       <img src="images/bx_bxs-star-half.svg" width="18" height="18" alt="">
                                    </div>
                                    <div class="devider"></div>
                                    <div class="review">
                                       <span>288 Review</span>
                                    </div>
                                    <div class="devider"></div>
                                    <div class="distance">
                                       <div class="icon-d">
                                          <img src="images/lucation.svg" width="18" height="18" alt="">
                                       </div>
                                       <div class="text-d">
                                          2.6 km
                                       </div>
                                    </div>
                                 </div>
                                 <div class="price-dr d-md-block d-none">
                                    ₹ 1250.00
                                 </div>
                              </div>
                           </div>
                        </div>
                     </div>
                     <hr>
                     <div class="row mt-4">
                        <div class="col-sm-12">
                           <div class="price-title">
                              <h4 class="mb-0 text-blue">Women's Health</h4>
                              <div class="price-label">
                                 <span class="small-text">Average Price:</span>
                                 <span class="price roboto fw-bold">₹1300.23</span>
                              </div>
                           </div>
                        </div>
                     </div>
                     <div class="row mt-4 dr-row">
                        <div class="col-xl-4">
                           <div class="dr-price-box">
                              <div class="p-dr-img">
                                 <img src="images/pharmacy-profile.jpg" alt="">
                              </div>
                              <div class="p-dr-right">
                                 <h5 class="text-blue">Pharmacy</h5>
                                 <p class="mb-0 text-blue roboto">MD Cardiologist with 12 Years experience</p>
                                 <div class="p-dr-more-details">
                                    <div class="rating">
                                       <img src="images/bx_bxs-star.svg" width="18" height="18" alt="">
                                       <img src="images/bx_bxs-star.svg" width="18" height="18" alt="">
                                       <img src="images/bx_bxs-star.svg" width="18" height="18" alt="">
                                       <img src="images/bx_bxs-star.svg" width="18" height="18" alt="">
                                       <img src="images/bx_bxs-star-half.svg" width="18" height="18" alt="">
                                    </div>
                                    <div class="devider"></div>
                                    <div class="review">
                                       <span>288 Review</span>
                                    </div>
                                    <div class="devider"></div>
                                    <div class="distance">
                                       <div class="icon-d">
                                          <img src="images/lucation.svg" width="18" height="18" alt="">
                                       </div>
                                       <div class="text-d">
                                          2.6 km
                                       </div>
                                    </div>
                                 </div>
                                 <div class="price-dr d-md-block d-none">
                                    ₹ 1250.00
                                 </div>
                              </div>
                           </div>
                        </div>
                        <div class="col-xl-4">
                           <div class="dr-price-box">
                              <div class="p-dr-img">
                                 <img src="images/pharmacy-profile.jpg" alt="">
                              </div>
                              <div class="p-dr-right">
                                 <h5 class="text-blue">Pharmacy</h5>
                                 <p class="mb-0 text-blue roboto">MD Cardiologist with 12 Years experience</p>
                                 <div class="p-dr-more-details">
                                    <div class="rating">
                                       <img src="images/bx_bxs-star.svg" width="18" height="18" alt="">
                                       <img src="images/bx_bxs-star.svg" width="18" height="18" alt="">
                                       <img src="images/bx_bxs-star.svg" width="18" height="18" alt="">
                                       <img src="images/bx_bxs-star.svg" width="18" height="18" alt="">
                                       <img src="images/bx_bxs-star-half.svg" width="18" height="18" alt="">
                                    </div>
                                    <div class="devider"></div>
                                    <div class="review">
                                       <span>288 Review</span>
                                    </div>
                                    <div class="devider"></div>
                                    <div class="distance">
                                       <div class="icon-d">
                                          <img src="images/lucation.svg" width="18" height="18" alt="">
                                       </div>
                                       <div class="text-d">
                                          2.6 km
                                       </div>
                                    </div>
                                 </div>
                                 <div class="price-dr d-md-block d-none">
                                    ₹ 1250.00
                                 </div>
                              </div>
                           </div>
                        </div>
                        <div class="col-xl-4">
                           <div class="dr-price-box">
                              <div class="p-dr-img">
                                 <img src="images/pharmacy-profile.jpg" alt="">
                              </div>
                              <div class="p-dr-right">
                                 <h5 class="text-blue">Pharmacy</h5>
                                 <p class="mb-0 text-blue roboto">MD Cardiologist with 12 Years experience</p>
                                 <div class="p-dr-more-details">
                                    <div class="rating">
                                       <img src="images/bx_bxs-star.svg" width="18" height="18" alt="">
                                       <img src="images/bx_bxs-star.svg" width="18" height="18" alt="">
                                       <img src="images/bx_bxs-star.svg" width="18" height="18" alt="">
                                       <img src="images/bx_bxs-star.svg" width="18" height="18" alt="">
                                       <img src="images/bx_bxs-star-half.svg" width="18" height="18" alt="">
                                    </div>
                                    <div class="devider"></div>
                                    <div class="review">
                                       <span>288 Review</span>
                                    </div>
                                    <div class="devider"></div>
                                    <div class="distance">
                                       <div class="icon-d">
                                          <img src="images/lucation.svg" width="18" height="18" alt="">
                                       </div>
                                       <div class="text-d">
                                          2.6 km
                                       </div>
                                    </div>
                                 </div>
                                 <div class="price-dr d-md-block d-none">
                                    ₹ 1250.00
                                 </div>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
               <div id="menu2" class="tab-pane fade">
                  <div class="price-details">
                     <div class="row mt-1">
                        <div class="col-sm-12">
                           <div class="price-title">
                              <h4 class="mb-0 text-blue">Services</h4>
                              <div class="price-label">
                                 <span class="small-text">Average Price:</span>
                                 <span class="price roboto fw-bold">₹1300.23</span>
                              </div>
                           </div>
                        </div>
                     </div>
                     <div class="row mt-4 dr-row">
                        <div class="col-xl-4">
                           <div class="dr-price-box">
                              <div class="p-dr-img">
                                 <img src="images/nurse-profile.jpg" alt="">
                              </div>
                              <div class="p-dr-right">
                                 <h5 class="text-blue">Nurse</h5>
                                 <p class="mb-0 text-blue roboto">MD Cardiologist with 12 Years experience</p>
                                 <div class="p-dr-more-details">
                                    <div class="rating">
                                       <img src="images/bx_bxs-star.svg" width="18" height="18" alt="">
                                       <img src="images/bx_bxs-star.svg" width="18" height="18" alt="">
                                       <img src="images/bx_bxs-star.svg" width="18" height="18" alt="">
                                       <img src="images/bx_bxs-star.svg" width="18" height="18" alt="">
                                       <img src="images/bx_bxs-star-half.svg" width="18" height="18" alt="">
                                    </div>
                                    <div class="devider"></div>
                                    <div class="review">
                                       <span>288 Review</span>
                                    </div>
                                    <div class="devider"></div>
                                    <div class="distance">
                                       <div class="icon-d">
                                          <img src="images/lucation.svg" width="18" height="18" alt="">
                                       </div>
                                       <div class="text-d">
                                          2.6 km
                                       </div>
                                    </div>
                                 </div>
                                 <div class="price-dr d-md-block d-none">
                                    ₹ 1250.00
                                 </div>
                              </div>
                           </div>
                        </div>
                        <div class="col-xl-4">
                           <div class="dr-price-box">
                              <div class="p-dr-img">
                                 <img src="images/nurse-profile.jpg" alt="">
                              </div>
                              <div class="p-dr-right">
                                 <h5 class="text-blue">Nurse</h5>
                                 <p class="mb-0 text-blue">MD Cardiologist with 12 Years experience</p>
                                 <div class="p-dr-more-details">
                                    <div class="rating">
                                       <img src="images/bx_bxs-star.svg" width="18" height="18" alt="">
                                       <img src="images/bx_bxs-star.svg" width="18" height="18" alt="">
                                       <img src="images/bx_bxs-star.svg" width="18" height="18" alt="">
                                       <img src="images/bx_bxs-star.svg" width="18" height="18" alt="">
                                       <img src="images/bx_bxs-star-half.svg" width="18" height="18" alt="">
                                    </div>
                                    <div class="devider"></div>
                                    <div class="review">
                                       <span>288 Review</span>
                                    </div>
                                    <div class="devider"></div>
                                    <div class="distance">
                                       <div class="icon-d">
                                          <img src="images/lucation.svg" width="18" height="18" alt="">
                                       </div>
                                       <div class="text-d">
                                          2.6 km
                                       </div>
                                    </div>
                                 </div>
                                 <div class="price-dr d-md-block d-none">
                                    ₹ 1250.00
                                 </div>
                              </div>
                           </div>
                        </div>
                        <div class="col-xl-4">
                           <div class="dr-price-box">
                              <div class="p-dr-img">
                                 <img src="images/nurse-profile.jpg" alt="">
                              </div>
                              <div class="p-dr-right">
                                 <h5 class="text-blue">Nurse</h5>
                                 <p class="mb-0 text-blue">MD Cardiologist with 12 Years experience</p>
                                 <div class="p-dr-more-details">
                                    <div class="rating">
                                       <img src="images/bx_bxs-star.svg" width="18" height="18" alt="">
                                       <img src="images/bx_bxs-star.svg" width="18" height="18" alt="">
                                       <img src="images/bx_bxs-star.svg" width="18" height="18" alt="">
                                       <img src="images/bx_bxs-star.svg" width="18" height="18" alt="">
                                       <img src="images/bx_bxs-star-half.svg" width="18" height="18" alt="">
                                    </div>
                                    <div class="devider"></div>
                                    <div class="review">
                                       <span>288 Review</span>
                                    </div>
                                    <div class="devider"></div>
                                    <div class="distance">
                                       <div class="icon-d">
                                          <img src="images/lucation.svg" width="18" height="18" alt="">
                                       </div>
                                       <div class="text-d">
                                          2.6 km
                                       </div>
                                    </div>
                                 </div>
                                 <div class="price-dr d-md-block d-none">
                                    ₹ 1250.00
                                 </div>
                              </div>
                           </div>
                        </div>
                     </div>
                     <hr>
                     <div class="row mt-4 ">
                        <div class="col-sm-12">
                           <div class="price-title">
                              <h4 class="mb-0 text-blue">Women's Health</h4>
                              <div class="price-label">
                                 <span class="small-text">Average Price:</span>
                                 <span class="price roboto fw-bold">₹1300.23</span>
                              </div>
                           </div>
                        </div>
                     </div>
                     <div class="row mt-4 dr-row">
                        <div class="col-xl-4">
                           <div class="dr-price-box">
                              <div class="p-dr-img">
                                 <img src="images/nurse-profile.jpg" alt="">
                              </div>
                              <div class="p-dr-right">
                                 <h5 class="text-blue">Nurse</h5>
                                 <p class="mb-0 text-blue roboto">MD Cardiologist with 12 Years experience</p>
                                 <div class="p-dr-more-details">
                                    <div class="rating">
                                       <img src="images/bx_bxs-star.svg" width="18" height="18" alt="">
                                       <img src="images/bx_bxs-star.svg" width="18" height="18" alt="">
                                       <img src="images/bx_bxs-star.svg" width="18" height="18" alt="">
                                       <img src="images/bx_bxs-star.svg" width="18" height="18" alt="">
                                       <img src="images/bx_bxs-star-half.svg" width="18" height="18" alt="">
                                    </div>
                                    <div class="devider"></div>
                                    <div class="review">
                                       <span>288 Review</span>
                                    </div>
                                    <div class="devider"></div>
                                    <div class="distance">
                                       <div class="icon-d">
                                          <img src="images/lucation.svg" width="18" height="18" alt="">
                                       </div>
                                       <div class="text-d">
                                          2.6 km
                                       </div>
                                    </div>
                                 </div>
                                 <div class="price-dr d-md-block d-none">
                                    ₹ 1250.00
                                 </div>
                              </div>
                           </div>
                        </div>
                        <div class="col-xl-4">
                           <div class="dr-price-box">
                              <div class="p-dr-img">
                                 <img src="images/nurse-profile.jpg" alt="">
                              </div>
                              <div class="p-dr-right">
                                 <h5 class="text-blue">Nurse</h5>
                                 <p class="mb-0 text-blue roboto">MD Cardiologist with 12 Years experience</p>
                                 <div class="p-dr-more-details">
                                    <div class="rating">
                                       <img src="images/bx_bxs-star.svg" width="18" height="18" alt="">
                                       <img src="images/bx_bxs-star.svg" width="18" height="18" alt="">
                                       <img src="images/bx_bxs-star.svg" width="18" height="18" alt="">
                                       <img src="images/bx_bxs-star.svg" width="18" height="18" alt="">
                                       <img src="images/bx_bxs-star-half.svg" width="18" height="18" alt="">
                                    </div>
                                    <div class="devider"></div>
                                    <div class="review">
                                       <span>288 Review</span>
                                    </div>
                                    <div class="devider"></div>
                                    <div class="distance">
                                       <div class="icon-d">
                                          <img src="images/lucation.svg" width="18" height="18" alt="">
                                       </div>
                                       <div class="text-d">
                                          2.6 km
                                       </div>
                                    </div>
                                 </div>
                                 <div class="price-dr d-md-block d-none">
                                    ₹ 1250.00
                                 </div>
                              </div>
                           </div>
                        </div>
                        <div class="col-xl-4">
                           <div class="dr-price-box">
                              <div class="p-dr-img">
                                 <img src="images/nurse-profile.jpg" alt="">
                              </div>
                              <div class="p-dr-right">
                                 <h5 class="text-blue">Nurse</h5>
                                 <p class="mb-0 text-blue roboto">MD Cardiologist with 12 Years experience</p>
                                 <div class="p-dr-more-details">
                                    <div class="rating">
                                       <img src="images/bx_bxs-star.svg" width="18" height="18" alt="">
                                       <img src="images/bx_bxs-star.svg" width="18" height="18" alt="">
                                       <img src="images/bx_bxs-star.svg" width="18" height="18" alt="">
                                       <img src="images/bx_bxs-star.svg" width="18" height="18" alt="">
                                       <img src="images/bx_bxs-star-half.svg" width="18" height="18" alt="">
                                    </div>
                                    <div class="devider"></div>
                                    <div class="review">
                                       <span>288 Review</span>
                                    </div>
                                    <div class="devider"></div>
                                    <div class="distance">
                                       <div class="icon-d">
                                          <img src="images/lucation.svg" width="18" height="18" alt="">
                                       </div>
                                       <div class="text-d">
                                          2.6 km
                                       </div>
                                    </div>
                                 </div>
                                 <div class="price-dr d-md-block d-none">
                                    ₹ 1250.00
                                 </div>
                              </div>
                           </div>
                        </div>
                     </div>
                     <hr>
                     <div class="row mt-4">
                        <div class="col-sm-12">
                           <div class="price-title">
                              <h4 class="mb-0 text-blue">Women's Health</h4>
                              <div class="price-label">
                                 <span class="small-text">Average Price:</span>
                                 <span class="price roboto fw-bold">₹1300.23</span>
                              </div>
                           </div>
                        </div>
                     </div>
                     <div class="row mt-4 dr-row">
                        <div class="col-xl-4">
                           <div class="dr-price-box">
                              <div class="p-dr-img">
                                 <img src="images/nurse-profile.jpg" alt="">
                              </div>
                              <div class="p-dr-right">
                                 <h5 class="text-blue">Nurse</h5>
                                 <p class="mb-0 text-blue roboto">MD Cardiologist with 12 Years experience</p>
                                 <div class="p-dr-more-details">
                                    <div class="rating">
                                       <img src="images/bx_bxs-star.svg" width="18" height="18" alt="">
                                       <img src="images/bx_bxs-star.svg" width="18" height="18" alt="">
                                       <img src="images/bx_bxs-star.svg" width="18" height="18" alt="">
                                       <img src="images/bx_bxs-star.svg" width="18" height="18" alt="">
                                       <img src="images/bx_bxs-star-half.svg" width="18" height="18" alt="">
                                    </div>
                                    <div class="devider"></div>
                                    <div class="review">
                                       <span>288 Review</span>
                                    </div>
                                    <div class="devider"></div>
                                    <div class="distance">
                                       <div class="icon-d">
                                          <img src="images/lucation.svg" width="18" height="18" alt="">
                                       </div>
                                       <div class="text-d">
                                          2.6 km
                                       </div>
                                    </div>
                                 </div>
                                 <div class="price-dr d-md-block d-none">
                                    ₹ 1250.00
                                 </div>
                              </div>
                           </div>
                        </div>
                        <div class="col-xl-4">
                           <div class="dr-price-box">
                              <div class="p-dr-img">
                                 <img src="images/nurse-profile.jpg" alt="">
                              </div>
                              <div class="p-dr-right">
                                 <h5 class="text-blue">Nurse</h5>
                                 <p class="mb-0 text-blue roboto">MD Cardiologist with 12 Years experience</p>
                                 <div class="p-dr-more-details">
                                    <div class="rating">
                                       <img src="images/bx_bxs-star.svg" width="18" height="18" alt="">
                                       <img src="images/bx_bxs-star.svg" width="18" height="18" alt="">
                                       <img src="images/bx_bxs-star.svg" width="18" height="18" alt="">
                                       <img src="images/bx_bxs-star.svg" width="18" height="18" alt="">
                                       <img src="images/bx_bxs-star-half.svg" width="18" height="18" alt="">
                                    </div>
                                    <div class="devider"></div>
                                    <div class="review">
                                       <span>288 Review</span>
                                    </div>
                                    <div class="devider"></div>
                                    <div class="distance">
                                       <div class="icon-d">
                                          <img src="images/lucation.svg" width="18" height="18" alt="">
                                       </div>
                                       <div class="text-d">
                                          2.6 km
                                       </div>
                                    </div>
                                 </div>
                                 <div class="price-dr d-md-block d-none">
                                    ₹ 1250.00
                                 </div>
                              </div>
                           </div>
                        </div>
                        <div class="col-xl-4">
                           <div class="dr-price-box">
                              <div class="p-dr-img">
                                 <img src="images/nurse-profile.jpg" alt="">
                              </div>
                              <div class="p-dr-right">
                                 <h5 class="text-blue">Nurse</h5>
                                 <p class="mb-0 text-blue roboto">MD Cardiologist with 12 Years experience</p>
                                 <div class="p-dr-more-details">
                                    <div class="rating">
                                       <img src="images/bx_bxs-star.svg" width="18" height="18" alt="">
                                       <img src="images/bx_bxs-star.svg" width="18" height="18" alt="">
                                       <img src="images/bx_bxs-star.svg" width="18" height="18" alt="">
                                       <img src="images/bx_bxs-star.svg" width="18" height="18" alt="">
                                       <img src="images/bx_bxs-star-half.svg" width="18" height="18" alt="">
                                    </div>
                                    <div class="devider"></div>
                                    <div class="review">
                                       <span>288 Review</span>
                                    </div>
                                    <div class="devider"></div>
                                    <div class="distance">
                                       <div class="icon-d">
                                          <img src="images/lucation.svg" width="18" height="18" alt="">
                                       </div>
                                       <div class="text-d">
                                          2.6 km
                                       </div>
                                    </div>
                                 </div>
                                 <div class="price-dr d-md-block d-none">
                                    ₹ 1250.00
                                 </div>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
               <div id="menu3" class="tab-pane fade">
                  <div class="price-details">
                     <div class="row mt-1">
                        <div class="col-sm-12">
                           <div class="price-title">
                              <h4 class="mb-0 text-blue">Services</h4>
                              <div class="price-label">
                                 <span class="small-text">Average Price:</span>
                                 <span class="price roboto fw-bold">₹1300.23</span>
                              </div>
                           </div>
                        </div>
                     </div>
                     <div class="row mt-4 dr-row">
                        <div class="col-xl-4">
                           <div class="dr-price-box">
                              <div class="p-dr-img">
                                 <img src="images/hospital-profile.jpg" alt="">
                              </div>
                              <div class="p-dr-right">
                                 <h5 class="text-blue">Hospital</h5>
                                 <p class="mb-0 text-blue roboto">MD Cardiologist with 12 Years experience</p>
                                 <div class="p-dr-more-details">
                                    <div class="rating">
                                       <img src="images/bx_bxs-star.svg" width="18" height="18" alt="">
                                       <img src="images/bx_bxs-star.svg" width="18" height="18" alt="">
                                       <img src="images/bx_bxs-star.svg" width="18" height="18" alt="">
                                       <img src="images/bx_bxs-star.svg" width="18" height="18" alt="">
                                       <img src="images/bx_bxs-star-half.svg" width="18" height="18" alt="">
                                    </div>
                                    <div class="devider"></div>
                                    <div class="review">
                                       <span>288 Review</span>
                                    </div>
                                    <div class="devider"></div>
                                    <div class="distance">
                                       <div class="icon-d">
                                          <img src="images/lucation.svg" width="18" height="18" alt="">
                                       </div>
                                       <div class="text-d">
                                          2.6 km
                                       </div>
                                    </div>
                                 </div>
                                 <div class="price-dr d-md-block d-none">
                                    ₹ 1250.00
                                 </div>
                              </div>
                           </div>
                        </div>
                        <div class="col-xl-4">
                           <div class="dr-price-box">
                              <div class="p-dr-img">
                                 <img src="images/hospital-profile.jpg" alt="">
                              </div>
                              <div class="p-dr-right">
                                 <h5 class="text-blue">Hospital</h5>
                                 <p class="mb-0 text-blue">MD Cardiologist with 12 Years experience</p>
                                 <div class="p-dr-more-details">
                                    <div class="rating">
                                       <img src="images/bx_bxs-star.svg" width="18" height="18" alt="">
                                       <img src="images/bx_bxs-star.svg" width="18" height="18" alt="">
                                       <img src="images/bx_bxs-star.svg" width="18" height="18" alt="">
                                       <img src="images/bx_bxs-star.svg" width="18" height="18" alt="">
                                       <img src="images/bx_bxs-star-half.svg" width="18" height="18" alt="">
                                    </div>
                                    <div class="devider"></div>
                                    <div class="review">
                                       <span>288 Review</span>
                                    </div>
                                    <div class="devider"></div>
                                    <div class="distance">
                                       <div class="icon-d">
                                          <img src="images/lucation.svg" width="18" height="18" alt="">
                                       </div>
                                       <div class="text-d">
                                          2.6 km
                                       </div>
                                    </div>
                                 </div>
                                 <div class="price-dr d-md-block d-none">
                                    ₹ 1250.00
                                 </div>
                              </div>
                           </div>
                        </div>
                        <div class="col-xl-4">
                           <div class="dr-price-box">
                              <div class="p-dr-img">
                                 <img src="images/hospital-profile.jpg" alt="">
                              </div>
                              <div class="p-dr-right">
                                 <h5 class="text-blue">Hospital</h5>
                                 <p class="mb-0 text-blue">MD Cardiologist with 12 Years experience</p>
                                 <div class="p-dr-more-details">
                                    <div class="rating">
                                       <img src="images/bx_bxs-star.svg" width="18" height="18" alt="">
                                       <img src="images/bx_bxs-star.svg" width="18" height="18" alt="">
                                       <img src="images/bx_bxs-star.svg" width="18" height="18" alt="">
                                       <img src="images/bx_bxs-star.svg" width="18" height="18" alt="">
                                       <img src="images/bx_bxs-star-half.svg" width="18" height="18" alt="">
                                    </div>
                                    <div class="devider"></div>
                                    <div class="review">
                                       <span>288 Review</span>
                                    </div>
                                    <div class="devider"></div>
                                    <div class="distance">
                                       <div class="icon-d">
                                          <img src="images/lucation.svg" width="18" height="18" alt="">
                                       </div>
                                       <div class="text-d">
                                          2.6 km
                                       </div>
                                    </div>
                                 </div>
                                 <div class="price-dr d-md-block d-none">
                                    ₹ 1250.00
                                 </div>
                              </div>
                           </div>
                        </div>
                     </div>
                     <hr>
                     <div class="row mt-4 ">
                        <div class="col-sm-12">
                           <div class="price-title">
                              <h4 class="mb-0 text-blue">Women's Health</h4>
                              <div class="price-label">
                                 <span class="small-text">Average Price:</span>
                                 <span class="price roboto fw-bold">₹1300.23</span>
                              </div>
                           </div>
                        </div>
                     </div>
                     <div class="row mt-4 dr-row">
                        <div class="col-xl-4">
                           <div class="dr-price-box">
                              <div class="p-dr-img">
                                 <img src="images/hospital-profile.jpg" alt="">
                              </div>
                              <div class="p-dr-right">
                                 <h5 class="text-blue">Hospital</h5>
                                 <p class="mb-0 text-blue roboto">MD Cardiologist with 12 Years experience</p>
                                 <div class="p-dr-more-details">
                                    <div class="rating">
                                       <img src="images/bx_bxs-star.svg" width="18" height="18" alt="">
                                       <img src="images/bx_bxs-star.svg" width="18" height="18" alt="">
                                       <img src="images/bx_bxs-star.svg" width="18" height="18" alt="">
                                       <img src="images/bx_bxs-star.svg" width="18" height="18" alt="">
                                       <img src="images/bx_bxs-star-half.svg" width="18" height="18" alt="">
                                    </div>
                                    <div class="devider"></div>
                                    <div class="review">
                                       <span>288 Review</span>
                                    </div>
                                    <div class="devider"></div>
                                    <div class="distance">
                                       <div class="icon-d">
                                          <img src="images/lucation.svg" width="18" height="18" alt="">
                                       </div>
                                       <div class="text-d">
                                          2.6 km
                                       </div>
                                    </div>
                                 </div>
                                 <div class="price-dr d-md-block d-none">
                                    ₹ 1250.00
                                 </div>
                              </div>
                           </div>
                        </div>
                        <div class="col-xl-4">
                           <div class="dr-price-box">
                              <div class="p-dr-img">
                                 <img src="images/hospital-profile.jpg" alt="">
                              </div>
                              <div class="p-dr-right">
                                 <h5 class="text-blue">Hospital</h5>
                                 <p class="mb-0 text-blue roboto">MD Cardiologist with 12 Years experience</p>
                                 <div class="p-dr-more-details">
                                    <div class="rating">
                                       <img src="images/bx_bxs-star.svg" width="18" height="18" alt="">
                                       <img src="images/bx_bxs-star.svg" width="18" height="18" alt="">
                                       <img src="images/bx_bxs-star.svg" width="18" height="18" alt="">
                                       <img src="images/bx_bxs-star.svg" width="18" height="18" alt="">
                                       <img src="images/bx_bxs-star-half.svg" width="18" height="18" alt="">
                                    </div>
                                    <div class="devider"></div>
                                    <div class="review">
                                       <span>288 Review</span>
                                    </div>
                                    <div class="devider"></div>
                                    <div class="distance">
                                       <div class="icon-d">
                                          <img src="images/lucation.svg" width="18" height="18" alt="">
                                       </div>
                                       <div class="text-d">
                                          2.6 km
                                       </div>
                                    </div>
                                 </div>
                                 <div class="price-dr d-md-block d-none">
                                    ₹ 1250.00
                                 </div>
                              </div>
                           </div>
                        </div>
                        <div class="col-xl-4">
                           <div class="dr-price-box">
                              <div class="p-dr-img">
                                 <img src="images/hospital-profile.jpg" alt="">
                              </div>
                              <div class="p-dr-right">
                                 <h5 class="text-blue">Hospital</h5>
                                 <p class="mb-0 text-blue roboto">MD Cardiologist with 12 Years experience</p>
                                 <div class="p-dr-more-details">
                                    <div class="rating">
                                       <img src="images/bx_bxs-star.svg" width="18" height="18" alt="">
                                       <img src="images/bx_bxs-star.svg" width="18" height="18" alt="">
                                       <img src="images/bx_bxs-star.svg" width="18" height="18" alt="">
                                       <img src="images/bx_bxs-star.svg" width="18" height="18" alt="">
                                       <img src="images/bx_bxs-star-half.svg" width="18" height="18" alt="">
                                    </div>
                                    <div class="devider"></div>
                                    <div class="review">
                                       <span>288 Review</span>
                                    </div>
                                    <div class="devider"></div>
                                    <div class="distance">
                                       <div class="icon-d">
                                          <img src="images/lucation.svg" width="18" height="18" alt="">
                                       </div>
                                       <div class="text-d">
                                          2.6 km
                                       </div>
                                    </div>
                                 </div>
                                 <div class="price-dr d-md-block d-none">
                                    ₹ 1250.00
                                 </div>
                              </div>
                           </div>
                        </div>
                     </div>
                     <hr>
                     <div class="row mt-4">
                        <div class="col-sm-12">
                           <div class="price-title">
                              <h4 class="mb-0 text-blue">Women's Health</h4>
                              <div class="price-label">
                                 <span class="small-text">Average Price:</span>
                                 <span class="price roboto fw-bold">₹1300.23</span>
                              </div>
                           </div>
                        </div>
                     </div>
                     <div class="row mt-4 dr-row">
                        <div class="col-xl-4">
                           <div class="dr-price-box">
                              <div class="p-dr-img">
                                 <img src="images/hospital-profile.jpg" alt="">
                              </div>
                              <div class="p-dr-right">
                                 <h5 class="text-blue">Hospital</h5>
                                 <p class="mb-0 text-blue roboto">MD Cardiologist with 12 Years experience</p>
                                 <div class="p-dr-more-details">
                                    <div class="rating">
                                       <img src="images/bx_bxs-star.svg" width="18" height="18" alt="">
                                       <img src="images/bx_bxs-star.svg" width="18" height="18" alt="">
                                       <img src="images/bx_bxs-star.svg" width="18" height="18" alt="">
                                       <img src="images/bx_bxs-star.svg" width="18" height="18" alt="">
                                       <img src="images/bx_bxs-star-half.svg" width="18" height="18" alt="">
                                    </div>
                                    <div class="devider"></div>
                                    <div class="review">
                                       <span>288 Review</span>
                                    </div>
                                    <div class="devider"></div>
                                    <div class="distance">
                                       <div class="icon-d">
                                          <img src="images/lucation.svg" width="18" height="18" alt="">
                                       </div>
                                       <div class="text-d">
                                          2.6 km
                                       </div>
                                    </div>
                                 </div>
                                 <div class="price-dr d-md-block d-none">
                                    ₹ 1250.00
                                 </div>
                              </div>
                           </div>
                        </div>
                        <div class="col-xl-4">
                           <div class="dr-price-box">
                              <div class="p-dr-img">
                                 <img src="images/hospital-profile.jpg" alt="">
                              </div>
                              <div class="p-dr-right">
                                 <h5 class="text-blue">Hospital</h5>
                                 <p class="mb-0 text-blue roboto">MD Cardiologist with 12 Years experience</p>
                                 <div class="p-dr-more-details">
                                    <div class="rating">
                                       <img src="images/bx_bxs-star.svg" width="18" height="18" alt="">
                                       <img src="images/bx_bxs-star.svg" width="18" height="18" alt="">
                                       <img src="images/bx_bxs-star.svg" width="18" height="18" alt="">
                                       <img src="images/bx_bxs-star.svg" width="18" height="18" alt="">
                                       <img src="images/bx_bxs-star-half.svg" width="18" height="18" alt="">
                                    </div>
                                    <div class="devider"></div>
                                    <div class="review">
                                       <span>288 Review</span>
                                    </div>
                                    <div class="devider"></div>
                                    <div class="distance">
                                       <div class="icon-d">
                                          <img src="images/lucation.svg" width="18" height="18" alt="">
                                       </div>
                                       <div class="text-d">
                                          2.6 km
                                       </div>
                                    </div>
                                 </div>
                                 <div class="price-dr d-md-block d-none">
                                    ₹ 1250.00
                                 </div>
                              </div>
                           </div>
                        </div>
                        <div class="col-xl-4">
                           <div class="dr-price-box">
                              <div class="p-dr-img">
                                 <img src="images/hospital-profile.jpg" alt="">
                              </div>
                              <div class="p-dr-right">
                                 <h5 class="text-blue">Hospital</h5>
                                 <p class="mb-0 text-blue roboto">MD Cardiologist with 12 Years experience</p>
                                 <div class="p-dr-more-details">
                                    <div class="rating">
                                       <img src="images/bx_bxs-star.svg" width="18" height="18" alt="">
                                       <img src="images/bx_bxs-star.svg" width="18" height="18" alt="">
                                       <img src="images/bx_bxs-star.svg" width="18" height="18" alt="">
                                       <img src="images/bx_bxs-star.svg" width="18" height="18" alt="">
                                       <img src="images/bx_bxs-star-half.svg" width="18" height="18" alt="">
                                    </div>
                                    <div class="devider"></div>
                                    <div class="review">
                                       <span>288 Review</span>
                                    </div>
                                    <div class="devider"></div>
                                    <div class="distance">
                                       <div class="icon-d">
                                          <img src="images/lucation.svg" width="18" height="18" alt="">
                                       </div>
                                       <div class="text-d">
                                          2.6 km
                                       </div>
                                    </div>
                                 </div>
                                 <div class="price-dr d-md-block d-none">
                                    ₹ 1250.00
                                 </div>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
               <div id="menu4" class="tab-pane fade">
                  <div class="price-details">
                     <div class="row mt-1">
                        <div class="col-sm-12">
                           <div class="price-title">
                              <h4 class="mb-0 text-blue">Services</h4>
                              <div class="price-label">
                                 <span class="small-text">Average Price:</span>
                                 <span class="price roboto fw-bold">₹1300.23</span>
                              </div>
                           </div>
                        </div>
                     </div>
                     <div class="row mt-4 dr-row">
                        <div class="col-xl-4">
                           <div class="dr-price-box">
                              <div class="p-dr-img">
                                 <img src="images/Diagnostics.jpg" alt="">
                              </div>
                              <div class="p-dr-right">
                                 <h5 class="text-blue">Lab</h5>
                                 <p class="mb-0 text-blue roboto">MD Cardiologist with 12 Years experience</p>
                                 <div class="p-dr-more-details">
                                    <div class="rating">
                                       <img src="images/bx_bxs-star.svg" width="18" height="18" alt="">
                                       <img src="images/bx_bxs-star.svg" width="18" height="18" alt="">
                                       <img src="images/bx_bxs-star.svg" width="18" height="18" alt="">
                                       <img src="images/bx_bxs-star.svg" width="18" height="18" alt="">
                                       <img src="images/bx_bxs-star-half.svg" width="18" height="18" alt="">
                                    </div>
                                    <div class="devider"></div>
                                    <div class="review">
                                       <span>288 Review</span>
                                    </div>
                                    <div class="devider"></div>
                                    <div class="distance">
                                       <div class="icon-d">
                                          <img src="images/lucation.svg" width="18" height="18" alt="">
                                       </div>
                                       <div class="text-d">
                                          2.6 km
                                       </div>
                                    </div>
                                 </div>
                                 <div class="price-dr d-md-block d-none">
                                    ₹ 1250.00
                                 </div>
                              </div>
                           </div>
                        </div>
                        <div class="col-xl-4">
                           <div class="dr-price-box">
                              <div class="p-dr-img">
                                 <img src="images/Diagnostics.jpg" alt="">
                              </div>
                              <div class="p-dr-right">
                                 <h5 class="text-blue">Lab</h5>
                                 <p class="mb-0 text-blue">MD Cardiologist with 12 Years experience</p>
                                 <div class="p-dr-more-details">
                                    <div class="rating">
                                       <img src="images/bx_bxs-star.svg" width="18" height="18" alt="">
                                       <img src="images/bx_bxs-star.svg" width="18" height="18" alt="">
                                       <img src="images/bx_bxs-star.svg" width="18" height="18" alt="">
                                       <img src="images/bx_bxs-star.svg" width="18" height="18" alt="">
                                       <img src="images/bx_bxs-star-half.svg" width="18" height="18" alt="">
                                    </div>
                                    <div class="devider"></div>
                                    <div class="review">
                                       <span>288 Review</span>
                                    </div>
                                    <div class="devider"></div>
                                    <div class="distance">
                                       <div class="icon-d">
                                          <img src="images/lucation.svg" width="18" height="18" alt="">
                                       </div>
                                       <div class="text-d">
                                          2.6 km
                                       </div>
                                    </div>
                                 </div>
                                 <div class="price-dr d-md-block d-none">
                                    ₹ 1250.00
                                 </div>
                              </div>
                           </div>
                        </div>
                        <div class="col-xl-4">
                           <div class="dr-price-box">
                              <div class="p-dr-img">
                                 <img src="images/Diagnostics.jpg" alt="">
                              </div>
                              <div class="p-dr-right">
                                 <h5 class="text-blue">Lab</h5>
                                 <p class="mb-0 text-blue">MD Cardiologist with 12 Years experience</p>
                                 <div class="p-dr-more-details">
                                    <div class="rating">
                                       <img src="images/bx_bxs-star.svg" width="18" height="18" alt="">
                                       <img src="images/bx_bxs-star.svg" width="18" height="18" alt="">
                                       <img src="images/bx_bxs-star.svg" width="18" height="18" alt="">
                                       <img src="images/bx_bxs-star.svg" width="18" height="18" alt="">
                                       <img src="images/bx_bxs-star-half.svg" width="18" height="18" alt="">
                                    </div>
                                    <div class="devider"></div>
                                    <div class="review">
                                       <span>288 Review</span>
                                    </div>
                                    <div class="devider"></div>
                                    <div class="distance">
                                       <div class="icon-d">
                                          <img src="images/lucation.svg" width="18" height="18" alt="">
                                       </div>
                                       <div class="text-d">
                                          2.6 km
                                       </div>
                                    </div>
                                 </div>
                                 <div class="price-dr d-md-block d-none">
                                    ₹ 1250.00
                                 </div>
                              </div>
                           </div>
                        </div>
                     </div>
                     <hr>
                     <div class="row mt-4 ">
                        <div class="col-sm-12">
                           <div class="price-title">
                              <h4 class="mb-0 text-blue">Women's Health</h4>
                              <div class="price-label">
                                 <span class="small-text">Average Price:</span>
                                 <span class="price roboto fw-bold">₹1300.23</span>
                              </div>
                           </div>
                        </div>
                     </div>
                     <div class="row mt-4 dr-row">
                        <div class="col-xl-4">
                           <div class="dr-price-box">
                              <div class="p-dr-img">
                                 <img src="images/Diagnostics.jpg" alt="">
                              </div>
                              <div class="p-dr-right">
                                 <h5 class="text-blue">Lab</h5>
                                 <p class="mb-0 text-blue roboto">MD Cardiologist with 12 Years experience</p>
                                 <div class="p-dr-more-details">
                                    <div class="rating">
                                       <img src="images/bx_bxs-star.svg" width="18" height="18" alt="">
                                       <img src="images/bx_bxs-star.svg" width="18" height="18" alt="">
                                       <img src="images/bx_bxs-star.svg" width="18" height="18" alt="">
                                       <img src="images/bx_bxs-star.svg" width="18" height="18" alt="">
                                       <img src="images/bx_bxs-star-half.svg" width="18" height="18" alt="">
                                    </div>
                                    <div class="devider"></div>
                                    <div class="review">
                                       <span>288 Review</span>
                                    </div>
                                    <div class="devider"></div>
                                    <div class="distance">
                                       <div class="icon-d">
                                          <img src="images/lucation.svg" width="18" height="18" alt="">
                                       </div>
                                       <div class="text-d">
                                          2.6 km
                                       </div>
                                    </div>
                                 </div>
                                 <div class="price-dr d-md-block d-none">
                                    ₹ 1250.00
                                 </div>
                              </div>
                           </div>
                        </div>
                        <div class="col-xl-4">
                           <div class="dr-price-box">
                              <div class="p-dr-img">
                                 <img src="images/Diagnostics.jpg" alt="">
                              </div>
                              <div class="p-dr-right">
                                 <h5 class="text-blue">Lab</h5>
                                 <p class="mb-0 text-blue roboto">MD Cardiologist with 12 Years experience</p>
                                 <div class="p-dr-more-details">
                                    <div class="rating">
                                       <img src="images/bx_bxs-star.svg" width="18" height="18" alt="">
                                       <img src="images/bx_bxs-star.svg" width="18" height="18" alt="">
                                       <img src="images/bx_bxs-star.svg" width="18" height="18" alt="">
                                       <img src="images/bx_bxs-star.svg" width="18" height="18" alt="">
                                       <img src="images/bx_bxs-star-half.svg" width="18" height="18" alt="">
                                    </div>
                                    <div class="devider"></div>
                                    <div class="review">
                                       <span>288 Review</span>
                                    </div>
                                    <div class="devider"></div>
                                    <div class="distance">
                                       <div class="icon-d">
                                          <img src="images/lucation.svg" width="18" height="18" alt="">
                                       </div>
                                       <div class="text-d">
                                          2.6 km
                                       </div>
                                    </div>
                                 </div>
                                 <div class="price-dr d-md-block d-none">
                                    ₹ 1250.00
                                 </div>
                              </div>
                           </div>
                        </div>
                        <div class="col-xl-4">
                           <div class="dr-price-box">
                              <div class="p-dr-img">
                                 <img src="images/Diagnostics.jpg" alt="">
                              </div>
                              <div class="p-dr-right">
                                 <h5 class="text-blue">Lab</h5>
                                 <p class="mb-0 text-blue roboto">MD Cardiologist with 12 Years experience</p>
                                 <div class="p-dr-more-details">
                                    <div class="rating">
                                       <img src="images/bx_bxs-star.svg" width="18" height="18" alt="">
                                       <img src="images/bx_bxs-star.svg" width="18" height="18" alt="">
                                       <img src="images/bx_bxs-star.svg" width="18" height="18" alt="">
                                       <img src="images/bx_bxs-star.svg" width="18" height="18" alt="">
                                       <img src="images/bx_bxs-star-half.svg" width="18" height="18" alt="">
                                    </div>
                                    <div class="devider"></div>
                                    <div class="review">
                                       <span>288 Review</span>
                                    </div>
                                    <div class="devider"></div>
                                    <div class="distance">
                                       <div class="icon-d">
                                          <img src="images/lucation.svg" width="18" height="18" alt="">
                                       </div>
                                       <div class="text-d">
                                          2.6 km
                                       </div>
                                    </div>
                                 </div>
                                 <div class="price-dr d-md-block d-none">
                                    ₹ 1250.00
                                 </div>
                              </div>
                           </div>
                        </div>
                     </div>
                     <hr>
                     <div class="row mt-4">
                        <div class="col-sm-12">
                           <div class="price-title">
                              <h4 class="mb-0 text-blue">Women's Health</h4>
                              <div class="price-label">
                                 <span class="small-text">Average Price:</span>
                                 <span class="price roboto fw-bold">₹1300.23</span>
                              </div>
                           </div>
                        </div>
                     </div>
                     <div class="row mt-4 dr-row">
                        <div class="col-xl-4">
                           <div class="dr-price-box">
                              <div class="p-dr-img">
                                 <img src="images/Diagnostics.jpg" alt="">
                              </div>
                              <div class="p-dr-right">
                                 <h5 class="text-blue">Lab</h5>
                                 <p class="mb-0 text-blue roboto">MD Cardiologist with 12 Years experience</p>
                                 <div class="p-dr-more-details">
                                    <div class="rating">
                                       <img src="images/bx_bxs-star.svg" width="18" height="18" alt="">
                                       <img src="images/bx_bxs-star.svg" width="18" height="18" alt="">
                                       <img src="images/bx_bxs-star.svg" width="18" height="18" alt="">
                                       <img src="images/bx_bxs-star.svg" width="18" height="18" alt="">
                                       <img src="images/bx_bxs-star-half.svg" width="18" height="18" alt="">
                                    </div>
                                    <div class="devider"></div>
                                    <div class="review">
                                       <span>288 Review</span>
                                    </div>
                                    <div class="devider"></div>
                                    <div class="distance">
                                       <div class="icon-d">
                                          <img src="images/lucation.svg" width="18" height="18" alt="">
                                       </div>
                                       <div class="text-d">
                                          2.6 km
                                       </div>
                                    </div>
                                 </div>
                                 <div class="price-dr d-md-block d-none">
                                    ₹ 1250.00
                                 </div>
                              </div>
                           </div>
                        </div>
                        <div class="col-xl-4">
                           <div class="dr-price-box">
                              <div class="p-dr-img">
                                 <img src="images/Diagnostics.jpg" alt="">
                              </div>
                              <div class="p-dr-right">
                                 <h5 class="text-blue">Lab</h5>
                                 <p class="mb-0 text-blue roboto">MD Cardiologist with 12 Years experience</p>
                                 <div class="p-dr-more-details">
                                    <div class="rating">
                                       <img src="images/bx_bxs-star.svg" width="18" height="18" alt="">
                                       <img src="images/bx_bxs-star.svg" width="18" height="18" alt="">
                                       <img src="images/bx_bxs-star.svg" width="18" height="18" alt="">
                                       <img src="images/bx_bxs-star.svg" width="18" height="18" alt="">
                                       <img src="images/bx_bxs-star-half.svg" width="18" height="18" alt="">
                                    </div>
                                    <div class="devider"></div>
                                    <div class="review">
                                       <span>288 Review</span>
                                    </div>
                                    <div class="devider"></div>
                                    <div class="distance">
                                       <div class="icon-d">
                                          <img src="images/lucation.svg" width="18" height="18" alt="">
                                       </div>
                                       <div class="text-d">
                                          2.6 km
                                       </div>
                                    </div>
                                 </div>
                                 <div class="price-dr d-md-block d-none">
                                    ₹ 1250.00
                                 </div>
                              </div>
                           </div>
                        </div>
                        <div class="col-xl-4">
                           <div class="dr-price-box">
                              <div class="p-dr-img">
                                 <img src="images/Diagnostics.jpg" alt="">
                              </div>
                              <div class="p-dr-right">
                                 <h5 class="text-blue">Lab</h5>
                                 <p class="mb-0 text-blue roboto">MD Cardiologist with 12 Years experience</p>
                                 <div class="p-dr-more-details">
                                    <div class="rating">
                                       <img src="images/bx_bxs-star.svg" width="18" height="18" alt="">
                                       <img src="images/bx_bxs-star.svg" width="18" height="18" alt="">
                                       <img src="images/bx_bxs-star.svg" width="18" height="18" alt="">
                                       <img src="images/bx_bxs-star.svg" width="18" height="18" alt="">
                                       <img src="images/bx_bxs-star-half.svg" width="18" height="18" alt="">
                                    </div>
                                    <div class="devider"></div>
                                    <div class="review">
                                       <span>288 Review</span>
                                    </div>
                                    <div class="devider"></div>
                                    <div class="distance">
                                       <div class="icon-d">
                                          <img src="images/lucation.svg" width="18" height="18" alt="">
                                       </div>
                                       <div class="text-d">
                                          2.6 km
                                       </div>
                                    </div>
                                 </div>
                                 <div class="price-dr d-md-block d-none">
                                    ₹ 1250.00
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
   </section>
   <section class="btmsection ">
      <div class="container testimonial text-center ">
         <h2 class="text-center text-blue">HealthCare Providers Near You!</h2>
         <p class="text-center" style="color: #8892A8;" s="">Compare Reviews, Popularity, Distance, Price, Facilities &
            many more.</p>
         <div class="news-boxsB fullwth">
            <div class="news-img">
               <img src="images/Dr_card.png" width="410" class="img-fluid" alt="">
            </div>
            <div class="news-details drb">
               <h4 class="text-blue text-left">Doctors
                  <a href="" class="btn btniconsd">
                     <img src="images/Search.svg" alt="">
                  </a>
               </h4>
               <p class="text-left">Find them Speciality or Treatment wise </p>
            </div>
         </div>
         <div class="news-boxsB fullwth">
            <div class="news-img">
               <img src="images/Nurse_card.png" width="410" class="img-fluid" alt="">
            </div>
            <div class="news-details drb">
               <h4 class="text-blue text-left">Nurses
                  <a href="" class="btn btniconsd">
                     <img src="images/Search.svg" alt="">
                  </a>
               </h4>
               <p class="text-left">Ge the best Services at Home!</p>
            </div>
         </div>
         <div class="news-boxsB fullwth">
            <div class="news-img">
               <img src="images/Rx_card.png" width="410" class="img-fluid " alt="">
            </div>
            <div class="news-details drb">
               <h4 class="text-blue text-left" style="color: #5A5A5A !important;">Coming Soon!</h4>
               <p class="text-left">Get ordered Medicines at Home. </p>
            </div>
         </div>
      </div>
   </section>
   <section class="btmsection desktopview">
      <div class="container testimonial text-center ">
         <h2 class="text-center text-blue">Health tip of the week </h2>
         <p class="text-center" style="color: #8892A8;" s="">From the Experts to Ensure that you're getting Value added
            Advice!</p>
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
                        <a href="" class="linkread left">Read more</a>
                     </div>
                  </div>
                  <div class="news-img">
                     <div class="getregleft">
                        <h4 class="text-left"> Get <br>
                           Regular Updates vis
                        </h4>
                     </div>
                     <a href="" class="btn btnblogs left">Sign up</a>
                     <!--img src="images/diet_pc.png" class="img-fluid " alt=""-->
                  </div>
               </div>
            </div>
            <div class="news-boxsB healthBlog bg-imgr">
               <div class="news-details drb">
                  <div class="Blogsdr left">
                     <h4 class="text-blue text-left">Choose your at-home workout space</h4>
                     <div class="healthlist">
                        <ul>
                           <li>DO's
                           </li>
                           <li>Stand with your feet shoulder-width apart and your arms at your sides.</li>
                           <li style="margin-top: 10px;">DON'Ts</li>
                           <li>Don’t let your knee extend past your foot, always keep the calf straight. This
                              compromises the movement and puts excess pressure on the knees.</li>
                        </ul>
                        <a href="" class="linkread">Read more</a>
                     </div>
                  </div>
                  <div class="news-img">
                     <a href="" class="btn btnblogs right">Blogs</a>
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
         <p class="text-center" style="color: #8892A8;" s="">From the Experts to Ensure that you're getting Value added
            Advice!</p>
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
                  <a href="" class="linkread left">Read more</a>
               </div>
            </div>
            <div class="news-img">
               <div class="getregleft">
                  <h4 class="text-left"> Get <br>
                     Regular Updates vis
                  </h4>
               </div>
               <a href="" class="btn btnblogs right">Sign up</a>
               <img src="images/diet_mob.png" class="img-fluid bdrrd" alt="">
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
                     <li>Don’t let your knee extend past your foot, always keep the calf straight. This compromises the
                        movement and puts excess pressure on the knees.</li>
                  </ul>
                  <a href="" class="linkread">Read more</a>
               </div>
            </div>
            <div class="news-img">
               <a href="" class="btn btnblogs right">Blogs</a>
               <img src="images/yoga_lady_mob.png" class="img-fluid bdrrd" alt="">
            </div>
         </div>
      </div>
   </section>
   <section>
      <div class="container testimonial">
         <div class="test-wrap">
            <h2 class="text-center text-blue">Testimonials.</h2>
            <p class="text-center" style="color: #8892A8;" s>See what people are saying.</p>
            <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
               <div class="carousel-inner">
                  <div class="carousel-item active">
                     <div class="user-wrap">
                        <div class="user-left">
                           <div class="testimonials_box">
                              <div class="testimonials_box2">

                              </div>
                              <div class="testimonials_box1">
                                 <!-- <img src="./images/Tushar Sir.png" alt=""> -->
                              </div>
                           </div>
                           <!-- <img src="images/user1.png" alt="" class="img-fluid"> -->
                           <div class="usre-name">
                              <h3 class="text-blue">PharmaD Pablo</h3>
                              <p class="mb-0">Asst. Manager Cipla</p>
                           </div>
                        </div>
                        <div class="user-right">
                           <div class="user-right-para">
                              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus a est tortor. Fusce ut
                              dui in arcu elementum placerat et sed elit. Curabitur sem sem, lobortis quis dictum ac,
                              posuere id metus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per
                              inceptos
                           </div>
                        </div>
                     </div>
                  </div>
                  <div class="carousel-item">
                     <div class="user-wrap">
                        <div class="user-left">
                           <img src="images/user1.png" alt="" class="img-fluid">
                           <div class="usre-name">
                              <h3 class="text-blue">PharmaD Pablo</h3>
                              <p class="mb-0">Asst. Manager Cipla</p>
                           </div>
                        </div>
                        <div class="user-right">
                           <div class="user-right-para">
                              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus a est tortor. Fusce ut
                              dui in arcu elementum placerat et sed elit. Curabitur sem sem, lobortis quis dictum ac,
                              posuere id metus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per
                              inceptos
                           </div>
                        </div>
                     </div>
                  </div>
                  <div class="carousel-item">
                     <div class="user-wrap">
                        <div class="user-left">
                           <img src="images/user1.png" alt="" class="img-fluid">
                           <div class="usre-name">
                              <h3 class="text-blue">PharmaD Pablo</h3>
                              <p class="mb-0">Asst. Manager Cipla</p>
                           </div>
                        </div>
                        <div class="user-right">
                           <div class="user-right-para">
                              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus a est tortor. Fusce ut
                              dui in arcu elementum placerat et sed elit. Curabitur sem sem, lobortis quis dictum ac,
                              posuere id metus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per
                              inceptos
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
               <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls"
                  data-bs-slide="prev">
                  <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                  <span class="visually-hidden">Previous</span>
               </button>
               <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls"
                  data-bs-slide="next">
                  <span class="carousel-control-next-icon" aria-hidden="true"></span>
                  <span class="visually-hidden">Next</span>
               </button>
            </div>
         </div>
      </div>
   </section>
   <section class="btmsection btmmrg">
      <div class="container testimonial">
         <h2 class="text-center mb-4 text-blue">Hot Deals</h2>
         <div class="mainBoxsnew">
            <div class="news-boxsB">
               <div class="news-img">
                  <img src="images/gallery-of-hospital.jpg" class="img-fluid " alt="">
               </div>
               <div class="news-details">
                  <h5>50% OFF</h5>
                  <p>First consultation free at PhysioCares. </p>
               </div>
            </div>
            <div class="news-boxsB">
               <div class="news-img">
                  <img src="images/gallery-of-hospital.jpg" class="img-fluid " alt="">
               </div>
               <div class="news-details">
                  <h5>FREE CONSULTATION</h5>
                  <p>First consultation free at PhysioCares. </p>
               </div>
            </div>
            <div class="news-boxsB">
               <div class="news-img">
                  <img src="images/gallery-of-hospital.jpg" class="img-fluid " alt="">
               </div>
               <div class="news-details">
                  <h5>Rs. 500 OFF </h5>
                  <p>Get the best meds at the lowest cost in the city. </p>
               </div>
            </div>
            <div class="news-boxsB">
               <div class="news-img">
                  <img src="images/gallery-of-hospital.jpg" class="img-fluid " alt="">
               </div>
               <div class="news-details">
                  <h5>50% OFF</h5>
                  <p>First consultation free at PhysioCares. </p>
               </div>
            </div>
            <div class="news-boxsB">
               <div class="news-img">
                  <img src="images/gallery-of-hospital.jpg" class="img-fluid " alt="">
               </div>
               <div class="news-details">
                  <h5>FREE CONSULTATION</h5>
                  <p>First consultation free at PhysioCares. </p>
               </div>
            </div>
            <div class="news-boxsB">
               <div class="news-img">
                  <img src="images/gallery-of-hospital.jpg" class="img-fluid " alt="">
               </div>
               <div class="news-details">
                  <h5>Rs. 500 OFF </h5>
                  <p>Get the best meds at the lowest cost in the city. </p>
               </div>
            </div>
         </div>
      </div>
   </section>
   <footer class="d-none d-lg-block">
      <div class="container">
         <div class="footre-flex">
            <div class="footer-img">
               <img src="images/mobile-phone.png" alt="">
            </div>
            <div class="footer-text">
               <h2 class="mb-4 roboto">Get MediCurenearme.com <br>
                  On Your Phone
               </h2>
               <p class="mb-4 roboto">MediCure is the one stop solution for all the medical services you need. Add
                  MediCurenearme.com to your mobile's home screen and experiance the best services you may need.</p>
               <div class="footer-logo d-flex gap-2">
                  <a href="#">
                     <img src="images/logo-gp.svg" alt="">
                  </a>
                  <a href="#">
                     <img src="images/logo-ios.svg" alt="">
                  </a>
               </div>
               <div class="footer-links">
                  <div class="row">
                     <div class="col-md-4">
                        <h5>Home</h5>
                        <ul class="p-0">
                           <li><a href="about-medicare.html">About us</a></li>
                           <li><a href="#">FAQ</a></li>
                           <li><a href="#">Privacy Policy</a></li>
                           <li><a href="term-condition.html">Terms & Conditions</a></li>
                           <li><a href="contact-us.html">Contact Us</a></li>
                           <li><a href="#">Locations</a></li>
                        </ul>
                     </div>
                     <div class="col-md-4">
                        <h5>Our Services</h5>
                        <ul class="p-0">
                           <li><a href="#">Hospitals</a></li>
                           <li><a href="#">CPD</a></li>
                           <li><a href="dr-profile.html">Doctors</a></li>
                           <li><a href="pharmacy.html">Pharmacy</a></li>
                           <li><a href="#">Laboratory</a></li>
                           <li><a href="nurse.html">Nurse</a></li>
                           <li><a href="#">Connection</a></li>
                        </ul>
                     </div>
                     <div class="col-md-12">
                        <h5 class="ps-0">Follow us on : </h5>
                        <div class="social-icon d-flex g-1 ps-1" style="gap: 15px;">
                           <a href="#">
                              <img src="images/facebook.svg" width="20" height="20" alt="">
                           </a>
                           <img src="images/twitter.svg" width="22" height="22" alt="">
                           </a>
                           <a href="#">
                              <img src="images/instagram.svg" width="20" height="20" alt="">
                           </a>
                        </div>
                        <div class="copyright-text">
                           Copyright All Right Reserved 2023, @Medicare
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
   </footer>
   <div class="mobile-footer d-flex d-lg-none">
      <div class="footer-wrapper">
         <a class="foot-links active" href="#">
            <img class="iconsCure" src="images/CureNearMe.svg" width="25" height="25" alt="">
            <div class="name-of-f-link">CureNearMe</div>
         </a>
         <a class="foot-links">
            <img src="images/Nurses.svg" width="25" height="25" alt="">

            <div class="name-of-f-link">Nurse </div>
         </a>
         <a class="foot-links" href="dr-profile.html">
            <img src="images/jam_medical.svg" width="25" height="25" alt="">
            <div class="name-of-f-link">Doctor</div>
         </a>
         <a class="foot-links" href="pharmacy.html">
            <img src="images/Deal_icon.svg" width="25" height="25" alt="">
            <div class="Icontoplt">
               <img src="images/new_red.svg" width="15" height="6" alt="">
            </div>
            <div class="name-of-f-link">Deals</div>
         </a>
         <a class="foot-links">
            <img src="images/fi-rs-chart-connected.svg" width="25" height="25" alt="">
            <div class="name-of-f-link">Connection</div>
         </a>
         <!-- <div class="foot-links">
            <img src="images/fi-rs-woman-head.svg" alt="">
            <div class="name-of-f-link">Laboratory</div>
            </div>
            <div class="foot-links">
            <img src="images/fi-rs-chart-connected.svg" alt="">
            <div class="name-of-f-link">Connection</div>
            </div> -->
      </div>
   </div>
   <div class="modal fade modal-of-quick-search" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel"
      aria-hidden="true">
      <div class="modal-dialog modal-dialog-centered" style="max-width: 750px;">
         <div class="modal-content modal-blur">
            <button type="button" class="btn-close ms-auto" data-bs-dismiss="modal" aria-label="Close"></button>
            <div class="modal-body">
               <div class="row">
                  <div class="col-md-12 mb-3">
                     <div class="text-light text-center pb-1 mb-2" style="border-bottom: 1px solid #4d6385">
                        <ul class="nav nav-pills mb-3" id="pills-tab" role="tablist">
                           <li class="nav-item" role="presentation">
                              <button class="nav-link active" id="pills-home-tab" data-bs-toggle="pill"
                                 data-bs-target="#pills-home" type="button" role="tab" aria-controls="pills-home"
                                 aria-selected="true">OPD</button>
                           </li>
                           <li class="nav-item" role="presentation">
                              <button class="nav-link" id="pills-profile-tab" data-bs-toggle="pill"
                                 data-bs-target="#pills-profile" type="button" role="tab" aria-controls="pills-profile"
                                 aria-selected="false">Surguries</button>
                           </li>
                           <li class="nav-item" role="presentation">
                              <button class="nav-link" id="pills-contact-tab" data-bs-toggle="pill"
                                 data-bs-target="#pills-contact" type="button" role="tab" aria-controls="pills-contact"
                                 aria-selected="false">Lab Test</button>
                           </li>
                        </ul>
                     </div>
                  </div>
               </div>
               <ul class="listBlog Desktopnone mobilenone">
                  <li>
                     <a href="#">
                        <div class="menu-img-with-icon">
                           <img src="images/m1.png" alt="">
                           <span>Digestion</span>
                        </div>
                     </a>
                  </li>
                  <li>
                     <a href="#">
                        <div class="menu-img-with-icon">
                           <img src="images/m2.png" alt="">
                           <span>Gynaecology</span>
                        </div>
                     </a>
                  </li>
                  <li>
                     <a href="#">
                        <div class="menu-img-with-icon">
                           <img src="images/m3.png" alt="">
                           <span>Urology</span>
                        </div>
                     </a>
                  </li>
                  <li>
                     <a href="#">
                        <div class="menu-img-with-icon">
                           <img src="images/m4.png" alt="">
                           <span>Cardiology</span>
                        </div>
                     </a>
                  </li>
                  <li>
                     <a href="#">
                        <div class="menu-img-with-icon">
                           <img src="images/m5.png" alt="">
                           <span>Skin &amp; Hair</span>
                        </div>
                     </a>
                  </li>
                  <li>
                     <a href="#">
                        <div class="menu-img-with-icon">
                           <img src="images/m6.png" alt="">
                           <span>Lungs</span>
                        </div>
                     </a>
                  </li>
                  <li>
                     <a href="#">
                        <div class="menu-img-with-icon">
                           <img src="images/m2.png" alt="">
                           <span>Gynaecology</span>
                        </div>
                     </a>
                  </li>
                  <li>
                     <a href="#">
                        <div class="menu-img-with-icon">
                           <img src="images/m3.png" alt="">
                           <span>Urology</span>
                        </div>
                     </a>
                  </li>
                  <li>
                     <a href="#">
                        <div class="menu-img-with-icon">
                           <img src="images/m2.png" alt="">
                           <span>Gynaecology</span>
                        </div>
                     </a>
                  </li>
               </ul>
               <div class="modal-of-quick-search quick-search-for-mobile d-md-none">
                  <ul class="listBlog">
                     <li>
                        <a href="#">
                           <div class="menu-img-with-icon">
                              <img src="images/Digestion.png" alt="">
                              <span>Digestion 1</span>
                           </div>
                        </a>
                     </li>
                     <li>
                        <a href="#">
                           <div class="menu-img-with-icon">
                              <img src="images/Gynaecology.png" alt="">
                              <span>Gynaecology</span>
                           </div>
                        </a>
                     </li>
                     <li>
                        <a href="#">
                           <div class="menu-img-with-icon">
                              <img src="images/Urology.png" alt="">
                              <span>Urology</span>
                           </div>
                        </a>
                     </li>
                     <li>
                        <a href="#">
                           <div class="menu-img-with-icon">
                              <img src="images/Cardiology.png" alt="">
                              <span>Cardiology</span>
                           </div>
                        </a>
                     </li>
                     <li>
                        <a href="#">
                           <div class="menu-img-with-icon">
                              <img src="images/Skin &amp; Hair.png" alt="">
                              <span>Skin &amp; Hair</span>
                           </div>
                        </a>
                     </li>
                     <li>
                        <a href="#">
                           <div class="menu-img-with-icon">
                              <img src="images/lungs.png" alt="">
                              <span>Lungs</span>
                           </div>
                        </a>
                     </li>
                     <li>
                        <a href="#">
                           <div class="menu-img-with-icon">
                              <img src="images/Gynaecology.png" alt="">
                              <span>Gynaecology</span>
                           </div>
                        </a>
                     </li>
                     <li>
                        <a href="#">
                           <div class="menu-img-with-icon">
                              <img src="images/Urology.png" alt="">
                              <span>Urology</span>
                           </div>
                        </a>
                     </li>
                     <li>
                        <a href="#">
                           <div class="menu-img-with-icon">
                              <img src="images/Gynaecology.png" alt="">
                              <span>Gynaecology</span>
                           </div>
                        </a>
                     </li>
                  </ul>
               </div>
            </div>
         </div>
      </div>
   </div>
   <div class="modal fade modal-of-quick-search" id="exampleModal1" tabindex="-1" aria-labelledby="exampleModalLabel"
      aria-hidden="true">
      <div class="modal-dialog modal-dialog-centered" style="max-width: 750px;">
         <div class="modal-content modal-blur modelWhite">
            <button type="button" class="btn-close ms-auto" data-bs-dismiss="modal" aria-label="Close"></button>
            <div class="modal-body">
               <div class="a-popover-wrapper" aria-busy="false">
                  <header class="a-popover-header">
                     <h4 class="h4 roboto text-blue">Choose your location</h4>
                     <!--button data-action="a-popover-close" class=" a-button-close-a11y a-button-close a-declarative" aria-label="Close"><i class="a-icon a-icon-close"></i></button-->
                  </header>
                  <div class="textBlog">
                     <!--p class="mb-0 text-blue roboto mb-3">Select a delivery location to see product availability and delivery options</p-->
                     <a href="#" class="cta">Sign in to see your addresses</a>
                     <div class="a-divider a-divider-break a-spacing-top-base">
                        <h5>or enter an Indian pincode</h5>
                     </div>
                     <div class="locationForm">
                        <div class="a-column a-span8">
                           <input class="form-control" type="text" maxlength="6" id="GLUXZipUpdateInput"
                              aria-label="or enter an Indian pincode" data-action="GLUXPostalInputAction">
                        </div>
                        <div class="a-column a-span4 a-span-last" role="button">
                           <a href="#" class="cta">Apply</a>
                        </div>
                        <div class="a-divider a-divider-break a-spacing-top-base">
                           <h5>or</h5>
                        </div>
                        <a href="#" class="linkBlog">
                           <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 10 10"
                              fill="none">
                              <g clip-path="url(#clip0_2_3018)">
                                 <path
                                    d="M9.375 4.6875H7.47813C7.40797 4.13766 7.15724 3.62666 6.76529 3.23471C6.37334 2.84276 5.86234 2.59203 5.3125 2.52187V0.625H4.6875V2.52187C4.13766 2.59203 3.62666 2.84276 3.23471 3.23471C2.84276 3.62666 2.59203 4.13766 2.52187 4.6875H0.625V5.3125H2.52187C2.59203 5.86234 2.84276 6.37334 3.23471 6.76529C3.62666 7.15724 4.13766 7.40797 4.6875 7.47813V9.375H5.3125V7.47813C5.86234 7.40797 6.37334 7.15724 6.76529 6.76529C7.15724 6.37334 7.40797 5.86234 7.47813 5.3125H9.375V4.6875ZM5 6.875C4.62916 6.875 4.26665 6.76503 3.95831 6.55901C3.64996 6.35298 3.40964 6.06014 3.26773 5.71753C3.12581 5.37492 3.08868 4.99792 3.16103 4.63421C3.23338 4.27049 3.41195 3.9364 3.67417 3.67417C3.9364 3.41195 4.27049 3.23338 4.63421 3.16103C4.99792 3.08868 5.37492 3.12581 5.71753 3.26773C6.06014 3.40964 6.35298 3.64996 6.55901 3.95831C6.76503 4.26665 6.875 4.62916 6.875 5C6.87442 5.4971 6.67669 5.97368 6.32519 6.32519C5.97368 6.67669 5.4971 6.87442 5 6.875Z"
                                    fill="#363636" />
                              </g>
                              <defs>
                                 <clipPath id="clip0_2_3018">
                                    <rect width="10" height="10" fill="white" />
                                 </clipPath>
                              </defs>
                           </svg>
                           Use my current location
                        </a>
                     </div>
                  </div>
                  <div class="chooselocat">
                     <h4 class="h4 roboto text-blue mb-3">Choose your location</h4>
                     <!--p class="mb-0 text-blue roboto mb-3">Select a delivery location to see product availability and delivery options</p-->
                     <div class="chooselocgrop">
                        <div class="choosescr">
                           <div class="chooseloBox">
                              <h4 class="h4 roboto text-blue">Choose your location</h4>
                              <p class="mb-0 text-blue roboto mb-3">Select a delivery location to see product
                                 availability and delivery options</p>
                           </div>
                           <div class="chooseloBox">
                              <h4 class="h4 roboto text-blue">Choose your location</h4>
                              <p class="mb-0 text-blue roboto mb-3">Select a delivery location to see product
                                 availability and delivery options</p>
                           </div>
                           <div class="chooseloBox">
                              <h4 class="h4 roboto text-blue">Choose your location</h4>
                              <p class="mb-0 text-blue roboto mb-3">Select a delivery location to see product
                                 availability and delivery options</p>
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

<script>

export default {
    head(){
        return {
            title: "Cure Near Me",
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
                    content: `One Stop solutions for all medical needs`,
                },

                {
                    hid: 'og:title',
                    property: 'og:title',
                    content: "Cure Near Me"
                },
                {
                    hid: "og:description",
                    property: "og:description",
                    content: `One Stop solutions for all medical needs`,
                },
                {
                    hid: 'og:image',
                    property: 'og:image',
                    content: 'Cure Near Me'// replace with your image URL
                },
                {
                    hid: 'keywords',
                    name: 'keywords',
                    content: `best dental in Ahmdabad, Patient Reviews, Contact number, Phone number, Experience, Qualification, Achievements, Ratings, Directions, Map, Working hours, Clinic, Hospital, Services Cost, Consultation Charges, Official Website link,${this.Chief_Complaints}${this.service_list}.`
                }

            ],
        };
    }
}
</script>