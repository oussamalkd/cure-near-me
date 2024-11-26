<template>
<section class="carousel-select-section m-top overflow-hidden">
    <div class="carousel-select container mt-lg-4 mt-0 ">
        <h3 class="text-blue ps-3">Select Your Categories</h3>
        <div class="designtabs">
            <div class="nav nav-tabs" id="slider">
                <!-- <div class="control_next">></div>
                <div class="control_prev"><</div>  -->
                <ul class=" sidebar">
                    <li class="item">
                        <div>
                            <a data-toggle="tab" href="#menu2" @click="handleClick($event, 'nurse')">
                                <div class="dr-box">
                                    <div class="dr-img">
                                        <img src="images/nurse-profile.webp" class="img-fluid" alt="nurse-profile" width="60" height="60" />
                                    </div>
                                    <div class="dr-text">
                                        <h4 class="mb-0">Nurse</h4>
                                        <p class="mb-0 roboto text-grey">540 Specialist</p>
                                    </div>
                                </div>
                            </a>
                        </div>
                    </li>
                    <li class="item">
                        <div>
                            <a data-bs-toggle="modal" data-bs-target="#commingSoonModal1" href="#">
                                <div class="dr-box">
                                    <div class="dr-img">
                                        <img src="images/pharmacy-profile.webp" class="img-fluid" alt="pharmacy-profile.webp" width="60" height="60" />
                                    </div>
                                    <div class="dr-text">
                                        <h4 class="mb-0">Pharmacy</h4>
                                        <p class="mb-0 roboto text-grey">Coming Soon</p>
                                    </div>
                                </div>
                            </a>
                        </div>
                    </li>
                    <li class="item">
                        <div>
                            <a data-bs-toggle="modal" data-bs-target="#commingSoonModal1" href="#">
                                <div class="dr-box">
                                    <div class="dr-img">
                                        <img src="images/hospital-profile.webp" class="img-fluid" alt="hospital-profile" height="60" width="60" />
                                    </div>
                                    <div class="dr-text">
                                        <h4 class="mb-0">Hospital</h4>
                                        <p class="mb-0 roboto text-grey">Coming Soon</p>
                                    </div>
                                </div>
                            </a>
                        </div>
                    </li>
                    <li class="item">
                        <div>
                            <a data-bs-toggle="modal" data-bs-target="#commingSoonModal1" href="#">
                                <div class="dr-box">
                                    <div class="dr-img">
                                        <img src="images/Diagnostics.webp" class="img-fluid" alt="Diagnostics" width="60" height="60" />
                                    </div>
                                    <div class="dr-text">
                                        <h4 class="mb-0">Lab</h4>
                                        <p class="mb-0 roboto text-grey">Coming Soon</p>
                                    </div>
                                </div>
                            </a>
                        </div>
                    </li>
                    <li class="item">
                        <div class="active">
                            <a data-toggle="tab" href="#home" @click="handleClick($event, 'doctor')">
                                <div class="dr-box">
                                    <div class="dr-img">
                                        <img src="images/dr1.webp" class="img-fluid" alt="dr1.webp" width="60" height="60" />
                                    </div>
                                    <div class="dr-text">
                                        <h4 class="mb-0">Doctor</h4>
                                        <p class="mb-0 roboto text-grey">332 Specialist</p>
                                    </div>
                                </div>
                            </a>
                        </div>
                    </li>
                </ul>
            </div>
            <div class="tab-content mb-2">
                <div id="home" class="tab-pane fade in active">
                    <div class="price-details">
                        <div class="row mt-1">
                            <div class="col-sm-12">
                                <div class="price-title">
                                    <h4 class="mb-0 text-blue">Orthopedics</h4>
                                    <div class="price-label">
                                        <span class="small-text">Average Price:</span>
                                        <span class="price roboto fw-bold">₹1000.00</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="row mt-4 dr-row">
                            <div class="col-xl-4">
                                <div class="dr-price-box">
                                    <div class="p-dr-img">
                                        <img src="images/dranilsolnki.webp" alt="dr1" width="100" height="100" />
                                    </div>
                                    <div class="p-dr-right">
                                        <h5 class="text-blue"> <a href="https://curenearme.com/DrAnilSolanki" target="_bank"> Dr. Anil Solanki</a></h5>
                                        <p class="mb-0 text-blue roboto">
                                            Spine Surgeon
                                        </p>

                                        <div class="p-dr-more-details">
                                            <div class="rating">
                                                <img src="images/bx_bxs-star_new.svg" alt="bx_bxs-star_new" width="18" height="18" />
                                                <img src="images/bx_bxs-star_new.svg" alt="bx_bxs-star_new" width="18" height="18" />
                                                <img src="images/bx_bxs-star_new.svg" alt="bx_bxs-star_new" width="18" height="18" />
                                                <img src="images/bx_bxs-star_new.svg" alt="bx_bxs-star_new" width="18" height="18" />
                                                <img src="images/bx_bxs-star_new.svg" alt="bx_bxs-star_new" width="18" height="18" />
                                            </div>
                                            <div class="devider"></div>

                                            <div class="review">
                                                <span>10 Reviews</span>
                                            </div>

                                            <div class="devider"></div>

                                            <div class="distance">
                                                <div class="icon-d">
                                                    <img src="images/lucation.svg" alt="bx_bxs-star_new" width="15" height="15" />
                                                </div>
                                                <div class="text-d">4.5 km</div>
                                            </div>
                                        </div>
                                        <div class="price-dr d-md-block d-none">₹ 1000.00</div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-xl-4">
                                <div class="dr-price-box">
                                    <div class="p-dr-img">
                                        <img src="images/drkaran.webp" alt="dr1" width="100" height="100" />
                                    </div>
                                    <div class="p-dr-right">
                                        <h5 class="text-blue"> <a href="https://curenearme.com/DrKarnMaheshwari" target="_bank">Dr. Karn Maheshwari</a></h5>
                                        <p class="mb-0 text-blue">
                                            Hand Surgeon
                                        </p>

                                        <div class="p-dr-more-details">
                                            <div class="rating">
                                                <img src="images/bx_bxs-star_new.svg" alt="bx_bxs-star_new" width="18" height="18" />
                                                <img src="images/bx_bxs-star_new.svg" alt="bx_bxs-star_new" width="18" height="18" />
                                                <img src="images/bx_bxs-star_new.svg" alt="bx_bxs-star_new" width="18" height="18" />
                                                <img src="images/bx_bxs-star_new.svg" alt="bx_bxs-star_new" width="18" height="18" />
                                                <img src="images/bx_bxs-star-half.svg" alt="bx_bxs-star_new" width="18" height="18" />
                                            </div>
                                            <div class="devider"></div>

                                            <div class="review">
                                                <span>8 Reviews</span>
                                            </div>

                                            <div class="devider"></div>

                                            <div class="distance">
                                                <div class="icon-d">
                                                    <img src="images/lucation.svg" alt="bx_bxs-star_new" width="15" height="15" />
                                                </div>
                                                <div class="text-d"> 10 km</div>
                                            </div>
                                        </div>
                                        <div class="price-dr d-md-block d-none">₹ 1000.00</div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-xl-4">
                                <div class="dr-price-box">
                                    <div class="p-dr-img">
                                        <img src="images/drravi.webp" alt="dr1" width="100" height="100" />
                                    </div>
                                    <div class="p-dr-right">
                                        <h5 class="text-blue"><a href="https://curenearme.com/DrRaviPatel" target="_bank">Dr. Ravi Patel</a></h5>
                                        <p class="mb-0 text-blue">Joint Replacement Surgeon</p>

                                        <div class="p-dr-more-details">
                                            <div class="rating">
                                                <img src="images/bx_bxs-star_new.svg" alt="bx_bxs-star_new" width="18" height="18" />
                                                <img src="images/bx_bxs-star_new.svg" alt="bx_bxs-star_new" width="18" height="18" />
                                                <img src="images/bx_bxs-star_new.svg" alt="bx_bxs-star_new" width="18" height="18" />
                                                <img src="images/bx_bxs-star_new.svg" alt="bx_bxs-star_new" width="18" height="18" />
                                                <img src="images/bx_bxs-star-half.svg" alt="ant-design_star-outdivned_new" width="18" height="18" />
                                            </div>
                                            <div class="devider"></div>

                                            <div class="review">
                                                <span>23 Reviews</span>
                                            </div>

                                            <div class="devider"></div>

                                            <div class="distance">
                                                <div class="icon-d">
                                                    <img src="images/lucation.svg" alt="bx_bxs-star_new" width="15" height="15" />
                                                </div>
                                                <div class="text-d">12.5 km</div>
                                            </div>
                                        </div>
                                        <div class="price-dr d-md-block d-none">₹ 1000.00</div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <hr />

                        <div class="row mt-4">
                            <div class="col-sm-12">
                                <div class="price-title">
                                    <h4 class="mb-0 text-blue">Family Physician</h4>
                                    <div class="price-label">
                                        <span class="small-text">Average Price:</span>
                                        <span class="price roboto fw-bold">₹483.23</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="row mt-4 dr-row">
                            <div class="col-xl-4">
                                <div class="dr-price-box">
                                    <div class="p-dr-img">
                                        <img src="images/drdipek.webp" alt="dr1" width="100" height="100" />
                                    </div>
                                    <div class="p-dr-right">
                                        <h5 class="text-blue"><a href="https://curenearme.com/DrDipakMakwana" target="_bank">Dr. Dipak Makwana</a></h5>
                                        <p class="mb-0 text-blue roboto">
                                            Family Physician
                                        </p>

                                        <div class="p-dr-more-details">
                                            <div class="rating">
                                                <img src="images/bx_bxs-star_new.svg" alt="bx_bxs-star_new" width="18" height="18" />
                                                <img src="images/bx_bxs-star_new.svg" alt="bx_bxs-star_new" width="18" height="18" />
                                                <img src="images/bx_bxs-star_new.svg" alt="bx_bxs-star_new" width="18" height="18" />
                                                <img src="images/bx_bxs-star_new.svg" alt="bx_bxs-star_new" width="18" height="18" />
                                                <img src="images/bx_bxs-star-half.svg" alt="bx_bxs-star_new" width="18" height="18" />
                                            </div>
                                            <div class="devider"></div>

                                            <div class="review">
                                                <span>10 Reviews</span>
                                            </div>

                                            <div class="devider"></div>

                                            <div class="distance">
                                                <div class="icon-d">
                                                    <img src="images/lucation.svg" alt="bx_bxs-star_new" width="15" height="15" />
                                                </div>
                                                <div class="text-d">7.5 km</div>
                                            </div>
                                        </div>
                                        <div class="price-dr d-md-block d-none">₹ 500.00</div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-xl-4">
                                <div class="dr-price-box">
                                    <div class="p-dr-img">
                                        <img src="images/drjigar.webp" alt="dr1" width="100" height="100" />
                                    </div>
                                    <div class="p-dr-right">
                                        <h5 class="text-blue"><a href="https://curenearme.com/DrJigneshSolanki" target="_bank">Dr. Jignesh Solanki</a></h5>
                                        <p class="mb-0 text-blue roboto">
                                            Family Physician
                                        </p>

                                        <div class="p-dr-more-details">
                                            <div class="rating">
                                                <img src="images/bx_bxs-star_new.svg" alt="bx_bxs-star_new" width="18" height="18" />
                                                <img src="images/bx_bxs-star_new.svg" alt="bx_bxs-star_new" width="18" height="18" />
                                                <img src="images/bx_bxs-star_new.svg" alt="bx_bxs-star_new" width="18" height="18" />
                                                <img src="images/bx_bxs-star_new.svg" alt="bx_bxs-star_new" width="18" height="18" />
                                                <img src="images/bx_bxs-star-half.svg" alt="bx_bxs-star_new" width="18" height="18" />
                                            </div>
                                            <div class="devider"></div>

                                            <div class="review">
                                                <span>10 Reviews</span>
                                            </div>

                                            <div class="devider"></div>

                                            <div class="distance">
                                                <div class="icon-d">
                                                    <img src="images/lucation.svg" alt="bx_bxs-star_new" width="15" height="15" />
                                                </div>
                                                <div class="text-d">21.7 km</div>
                                            </div>
                                        </div>
                                        <div class="price-dr d-md-block d-none">₹ 800.00</div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-xl-4">
                                <div class="dr-price-box">
                                    <div class="p-dr-img">
                                        <img src="images/drjaydip.webp" alt="dr1" width="100" height="100" />
                                    </div>
                                    <div class="p-dr-right">
                                        <h5 class="text-blue"><a href="https://curenearme.com/DrJaydipPatel" target="_bank">Dr. Jaydip Patel</a></h5>
                                        <p class="mb-0 text-blue roboto">
                                            Family Physician
                                        </p>

                                        <div class="p-dr-more-details">
                                            <div class="rating">
                                                <img src="images/bx_bxs-star_new.svg" alt="bx_bxs-star_new" width="18" height="18" />
                                                <img src="images/bx_bxs-star_new.svg" alt="bx_bxs-star_new" width="18" height="18" />
                                                <img src="images/bx_bxs-star_new.svg" alt="bx_bxs-star_new" width="18" height="18" />
                                                <img src="images/bx_bxs-star_new.svg" alt="bx_bxs-star_new" width="18" height="18" />
                                                <img src="images/bx_bxs-star-half.svg" alt="ant-design_star-outdivned_new.svg" width="18" height="18" />
                                            </div>
                                            <div class="devider"></div>

                                            <div class="review">
                                                <span>10 Reviews</span>
                                            </div>

                                            <div class="devider"></div>

                                            <div class="distance">
                                                <div class="icon-d">
                                                    <img src="images/lucation.svg" alt="bx_bxs-star_new" width="15" height="15" />
                                                </div>
                                                <div class="text-d">17 km</div>
                                            </div>
                                        </div>
                                        <div class="price-dr d-md-block d-none">₹ 150.00</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <hr />

                        <div class="row mt-4">
                            <div class="col-sm-12">
                                <div class="price-title">
                                    <h4 class="mb-0 text-blue">Physiotherapy</h4>
                                    <div class="price-label">
                                        <span class="small-text">Average Price:</span>
                                        <span class="price roboto fw-bold">₹766.00</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="row mt-4 dr-row">
                            <div class="col-xl-4">
                                <div class="dr-price-box">
                                    <div class="p-dr-img">
                                        <img src="images/drtejendra.webp" alt="dr1" width="100" height="100" />
                                    </div>
                                    <div class="p-dr-right">
                                        <h5 class="text-blue"><a href="https://curenearme.com/DrTejendraRajput" target="_bank">Dr. Tejendra Rajput</a></h5>
                                        <p class="mb-0 text-blue roboto">
                                            MPT Neurology - Physiotherapist
                                        </p>

                                        <div class="p-dr-more-details">
                                            <div class="rating">
                                                <img src="images/bx_bxs-star_new.svg" alt="bx_bxs-star_new" width="18" height="18" />
                                                <img src="images/bx_bxs-star_new.svg" alt="bx_bxs-star_new" width="18" height="18" />
                                                <img src="images/bx_bxs-star_new.svg" alt="bx_bxs-star_new" width="18" height="18" />
                                                <img src="images/bx_bxs-star_new.svg" alt="bx_bxs-star_new" width="18" height="18" />
                                                <img src="images/bx_bxs-star-half.svg" alt="bx_bxs-star_new" width="18" height="18" />
                                            </div>
                                            <div class="devider"></div>

                                            <div class="review">
                                                <span>10 Reviews</span>
                                            </div>

                                            <div class="devider"></div>

                                            <div class="distance">
                                                <svg width="20" height="20" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <g id="carbon:location">
                                                        <path id="Vector" d="M6.46875 7.3125C6.06701 7.3125 5.67429 7.19337 5.34025 6.97017C5.00621 6.74698 4.74586 6.42974 4.59212 6.05858C4.43838 5.68741 4.39815 5.279 4.47653 4.88497C4.55491 4.49095 4.74837 4.12902 5.03244 3.84494C5.31652 3.56087 5.67845 3.36741 6.07247 3.28903C6.4665 3.21065 6.87491 3.25088 7.24608 3.40462C7.61724 3.55836 7.93448 3.81871 8.15767 4.15275C8.38087 4.48679 8.5 4.87951 8.5 5.28125C8.49936 5.81977 8.28514 6.33606 7.90435 6.71685C7.52356 7.09764 7.00727 7.31186 6.46875 7.3125ZM6.46875 4.0625C6.22771 4.0625 5.99207 4.13398 5.79165 4.2679C5.59123 4.40182 5.43502 4.59216 5.34277 4.81486C5.25053 5.03755 5.22639 5.2826 5.27342 5.51902C5.32044 5.75543 5.43652 5.97259 5.60696 6.14304C5.77741 6.31348 5.99457 6.42956 6.23098 6.47658C6.4674 6.52361 6.71245 6.49947 6.93515 6.40723C7.15784 6.31499 7.34819 6.15877 7.4821 5.95835C7.61602 5.75793 7.6875 5.5223 7.6875 5.28125C7.68718 4.95812 7.55867 4.64831 7.33018 4.41982C7.10169 4.19133 6.79188 4.06282 6.46875 4.0625Z" fill="#23355F" />
                                                        <path id="Vector_2" d="M6.46875 12.1875L3.04163 8.14572C2.99401 8.08503 2.94688 8.02395 2.90025 7.9625C2.31484 7.19135 1.99859 6.24943 2 5.28125C2 4.09606 2.47082 2.95942 3.30887 2.12137C4.14692 1.28331 5.28357 0.8125 6.46875 0.8125C7.65394 0.8125 8.79059 1.28331 9.62864 2.12137C10.4667 2.95942 10.9375 4.09606 10.9375 5.28125C10.9389 6.249 10.6228 7.19048 10.0377 7.96128L10.0373 7.9625C10.0373 7.9625 9.91538 8.12256 9.8971 8.14409L6.46875 12.1875ZM3.54863 7.47297C3.54944 7.47297 3.64369 7.59809 3.66522 7.62491L6.46875 10.9314L9.27594 7.62044C9.29382 7.59809 9.38888 7.47216 9.38929 7.47175C9.8675 6.8417 10.1259 6.07223 10.125 5.28125C10.125 4.31155 9.73979 3.38157 9.05411 2.69589C8.36843 2.01021 7.43845 1.625 6.46875 1.625C5.49906 1.625 4.56908 2.01021 3.8834 2.69589C3.19772 3.38157 2.8125 4.31155 2.8125 5.28125C2.81165 6.07272 3.07038 6.84264 3.54904 7.47297H3.54863Z" fill="#23355F" />
                                                    </g>
                                                </svg>
                                                <div class="text-d">8 km</div>
                                            </div>
                                        </div>
                                        <div class="price-dr d-md-block d-none">₹ 1500.00</div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-xl-4">
                                <div class="dr-price-box">
                                    <div class="p-dr-img">
                                        <img src="images/drvinod.webp" alt="dr1" width="100" height="100" />
                                    </div>
                                    <div class="p-dr-right">
                                        <h5 class="text-blue"><a href="https://curenearme.com/DrVinodkumarPrajapati" target="_bank">Dr. Vinodkumar Prajapati</a></h5>
                                        <p class="mb-0 text-blue roboto">
                                            Physiotherapist
                                        </p>

                                        <div class="p-dr-more-details">
                                            <div class="rating">
                                                <img src="images/bx_bxs-star_new.svg" alt="bx_bxs-star_new" width="18" height="18" />
                                                <img src="images/bx_bxs-star_new.svg" alt="bx_bxs-star_new" width="18" height="18" />
                                                <img src="images/bx_bxs-star_new.svg" alt="bx_bxs-star_new" width="18" height="18" />
                                                <img src="images/bx_bxs-star_new.svg" alt="bx_bxs-star_new" width="18" height="18" />
                                                <img src="images/bx_bxs-star-half.svg" alt="bx_bxs-star_new" width="18" height="18" />
                                            </div>
                                            <div class="devider"></div>

                                            <div class="review">
                                                <span>10 Reviews</span>
                                            </div>

                                            <div class="devider"></div>

                                            <div class="distance">
                                                <svg width="20" height="20" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <g id="carbon:location">
                                                        <path id="Vector" d="M6.46875 7.3125C6.06701 7.3125 5.67429 7.19337 5.34025 6.97017C5.00621 6.74698 4.74586 6.42974 4.59212 6.05858C4.43838 5.68741 4.39815 5.279 4.47653 4.88497C4.55491 4.49095 4.74837 4.12902 5.03244 3.84494C5.31652 3.56087 5.67845 3.36741 6.07247 3.28903C6.4665 3.21065 6.87491 3.25088 7.24608 3.40462C7.61724 3.55836 7.93448 3.81871 8.15767 4.15275C8.38087 4.48679 8.5 4.87951 8.5 5.28125C8.49936 5.81977 8.28514 6.33606 7.90435 6.71685C7.52356 7.09764 7.00727 7.31186 6.46875 7.3125ZM6.46875 4.0625C6.22771 4.0625 5.99207 4.13398 5.79165 4.2679C5.59123 4.40182 5.43502 4.59216 5.34277 4.81486C5.25053 5.03755 5.22639 5.2826 5.27342 5.51902C5.32044 5.75543 5.43652 5.97259 5.60696 6.14304C5.77741 6.31348 5.99457 6.42956 6.23098 6.47658C6.4674 6.52361 6.71245 6.49947 6.93515 6.40723C7.15784 6.31499 7.34819 6.15877 7.4821 5.95835C7.61602 5.75793 7.6875 5.5223 7.6875 5.28125C7.68718 4.95812 7.55867 4.64831 7.33018 4.41982C7.10169 4.19133 6.79188 4.06282 6.46875 4.0625Z" fill="#23355F" />
                                                        <path id="Vector_2" d="M6.46875 12.1875L3.04163 8.14572C2.99401 8.08503 2.94688 8.02395 2.90025 7.9625C2.31484 7.19135 1.99859 6.24943 2 5.28125C2 4.09606 2.47082 2.95942 3.30887 2.12137C4.14692 1.28331 5.28357 0.8125 6.46875 0.8125C7.65394 0.8125 8.79059 1.28331 9.62864 2.12137C10.4667 2.95942 10.9375 4.09606 10.9375 5.28125C10.9389 6.249 10.6228 7.19048 10.0377 7.96128L10.0373 7.9625C10.0373 7.9625 9.91538 8.12256 9.8971 8.14409L6.46875 12.1875ZM3.54863 7.47297C3.54944 7.47297 3.64369 7.59809 3.66522 7.62491L6.46875 10.9314L9.27594 7.62044C9.29382 7.59809 9.38888 7.47216 9.38929 7.47175C9.8675 6.8417 10.1259 6.07223 10.125 5.28125C10.125 4.31155 9.73979 3.38157 9.05411 2.69589C8.36843 2.01021 7.43845 1.625 6.46875 1.625C5.49906 1.625 4.56908 2.01021 3.8834 2.69589C3.19772 3.38157 2.8125 4.31155 2.8125 5.28125C2.81165 6.07272 3.07038 6.84264 3.54904 7.47297H3.54863Z" fill="#23355F" />
                                                    </g>
                                                </svg>
                                                <div class="text-d">8 km</div>
                                            </div>
                                        </div>
                                        <div class="price-dr d-md-block d-none">₹ 700.00</div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-xl-4">
                                <div class="dr-price-box">
                                    <div class="p-dr-img">
                                        <img src="images/drhitesh.webp" alt="dr1" width="100" height="100" />
                                    </div>
                                    <div class="p-dr-right">
                                        <h5 class="text-blue"><a href="https://curenearme.com/DrHiteshPrajapati" target="_bank">Dr. Hitesh Prajapati</a></h5>
                                        <p class="mb-0 text-blue roboto">
                                            MPT Neurology - Physiotherapist
                                        </p>

                                        <div class="p-dr-more-details">
                                            <div class="rating">
                                                <img src="images/bx_bxs-star_new.svg" alt="bx_bxs-star_new" width="18" height="18" />
                                                <img src="images/bx_bxs-star_new.svg" alt="bx_bxs-star_new" width="18" height="18" />
                                                <img src="images/bx_bxs-star_new.svg" alt="bx_bxs-star_new" width="18" height="18" />
                                                <img src="images/bx_bxs-star_new.svg" alt="bx_bxs-star_new" width="18" height="18" />
                                                <img src="images/bx_bxs-star-half.svg" alt="bx_bxs-star_new" width="18" height="18" />
                                            </div>
                                            <div class="devider"></div>

                                            <div class="review">
                                                <span>10 Review</span>
                                            </div>

                                            <div class="devider"></div>

                                            <div class="distance">
                                                <img src="images/lucation.svg" alt="bx_bxs-star_new" width="15" height="15" />
                                                <div class="text-d">19.5 km</div>
                                            </div>
                                        </div>
                                        <div class="price-dr d-md-block d-none">₹ 100.00</div>
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
                                        <img src="images/pharmacy-profile.webp" alt="pharmacy-profile" width="100" height="100" />
                                    </div>
                                    <div class="p-dr-right">
                                        <h5 class="text-blue">Pharmacy</h5>
                                        <p class="mb-0 text-blue roboto">
                                            MD Cardiologist with 12 Years experience
                                        </p>

                                        <div class="p-dr-more-details">
                                            <div class="rating">
                                                <img src="images/bx_bxs-star_new.svg" alt="bx_bxs-star_new" width="18" height="18" />
                                                <img src="images/bx_bxs-star_new.svg" alt="bx_bxs-star_new" width="18" height="18" />
                                                <img src="images/bx_bxs-star_new.svg" alt="bx_bxs-star_new" width="18" height="18" />
                                                <img src="images/bx_bxs-star_new.svg" alt="bx_bxs-star_new" width="18" height="18" />
                                                <img src="images/bx_bxs-star-half.svg" alt="bx_bxs-star_new" width="18" height="18" />
                                            </div>
                                            <div class="devider"></div>

                                            <div class="review">
                                                <span>288 Review</span>
                                            </div>

                                            <div class="devider"></div>

                                            <div class="distance">
                                                <img src="images/lucation.svg" alt="bx_bxs-star_new" width="15" height="15" />
                                                <div class="text-d">2.6 km</div>
                                            </div>
                                        </div>
                                        <div class="price-dr d-md-block d-none">₹ 1250.00</div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-xl-4">
                                <div class="dr-price-box">
                                    <div class="p-dr-img">
                                        <img src="images/pharmacy-profile.webp" alt="pharmacy-profile" width="100" height="100" />
                                    </div>
                                    <div class="p-dr-right">
                                        <h5 class="text-blue">Pharmacy</h5>
                                        <p class="mb-0 text-blue">
                                            MD Cardiologist with 12 Years experience
                                        </p>

                                        <div class="p-dr-more-details">
                                            <div class="rating">
                                                <img src="images/bx_bxs-star.svg" width="18" height="18" alt="bx_bxs-star" />
                                                <img src="images/bx_bxs-star.svg" width="18" height="18" alt="bx_bxs-star" />
                                                <img src="images/bx_bxs-star.svg" width="18" height="18" alt="bx_bxs-star" />
                                                <img src="images/bx_bxs-star.svg" width="18" height="18" alt="bx_bxs-star" />
                                                <img src="images/bx_bxs-star-half.svg" width="18" height="18" alt="bx_bxs-star" />
                                            </div>
                                            <div class="devider"></div>

                                            <div class="review">
                                                <span>288 Review</span>
                                            </div>

                                            <div class="devider"></div>

                                            <div class="distance">
                                                <div class="icon-d">
                                                    <img src="images/lucation.svg" alt="bx_bxs-star_new" width="15" height="15" />
                                                </div>
                                                <div class="text-d">2.6 km</div>
                                            </div>
                                        </div>
                                        <div class="price-dr d-md-block d-none">₹ 1250.00</div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-xl-4">
                                <div class="dr-price-box">
                                    <div class="p-dr-img">
                                        <img src="images/pharmacy-profile.webp" alt="pharmacy-profile" width="100" height="100" />
                                    </div>
                                    <div class="p-dr-right">
                                        <h5 class="text-blue">Pharmacy</h5>
                                        <p class="mb-0 text-blue">
                                            MD Cardiologist with 12 Years experience
                                        </p>

                                        <div class="p-dr-more-details">
                                            <div class="rating">
                                                <img src="images/bx_bxs-star.svg" width="18" height="18" alt="bx_bxs-star" />
                                                <img src="images/bx_bxs-star.svg" width="18" height="18" alt="bx_bxs-star" />
                                                <img src="images/bx_bxs-star.svg" width="18" height="18" alt="bx_bxs-star" />
                                                <img src="images/bx_bxs-star.svg" width="18" height="18" alt="bx_bxs-star" />
                                                <img src="images/bx_bxs-star-half.svg" width="18" height="18" alt="bx_bxs-star" />
                                            </div>
                                            <div class="devider"></div>

                                            <div class="review">
                                                <span>288 Review</span>
                                            </div>

                                            <div class="devider"></div>

                                            <div class="distance">
                                                <div class="icon-d">
                                                    <img src="images/lucation.svg" alt="bx_bxs-star_new" width="15" height="15" />
                                                </div>
                                                <div class="text-d">2.6 km</div>
                                            </div>
                                        </div>
                                        <div class="price-dr d-md-block d-none">₹ 1250.00</div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <hr />

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
                                        <img src="images/pharmacy-profile.webp" alt="pharmacy-profile" width="100" height="100" />
                                    </div>
                                    <div class="p-dr-right">
                                        <h5 class="text-blue">Pharmacy</h5>
                                        <p class="mb-0 text-blue roboto">
                                            MD Cardiologist with 12 Years experience
                                        </p>

                                        <div class="p-dr-more-details">
                                            <div class="rating">
                                                <img src="images/bx_bxs-star.svg" width="18" height="18" alt="bx_bxs-star" />
                                                <img src="images/bx_bxs-star.svg" width="18" height="18" alt="bx_bxs-star" />
                                                <img src="images/bx_bxs-star.svg" width="18" height="18" alt="bx_bxs-star" />
                                                <img src="images/bx_bxs-star.svg" width="18" height="18" alt="bx_bxs-star" />
                                                <img src="images/bx_bxs-star-half.svg" width="18" height="18" alt="bx_bxs-star" />
                                            </div>
                                            <div class="devider"></div>

                                            <div class="review">
                                                <span>288 Review</span>
                                            </div>

                                            <div class="devider"></div>

                                            <div class="distance">
                                                <div class="icon-d">
                                                    <img src="images/lucation.svg" alt="bx_bxs-star_new" width="15" height="15" />
                                                </div>
                                                <div class="text-d">2.6 km</div>
                                            </div>
                                        </div>
                                        <div class="price-dr d-md-block d-none">₹ 1250.00</div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-xl-4">
                                <div class="dr-price-box">
                                    <div class="p-dr-img">
                                        <img src="images/pharmacy-profile.webp" alt="pharmacy-profile" width="100" height="100" />
                                    </div>
                                    <div class="p-dr-right">
                                        <h5 class="text-blue">Pharmacy</h5>
                                        <p class="mb-0 text-blue roboto">
                                            MD Cardiologist with 12 Years experience
                                        </p>

                                        <div class="p-dr-more-details">
                                            <div class="rating">
                                                <img src="images/bx_bxs-star.svg" width="18" height="18" alt="bx_bxs-star" />
                                                <img src="images/bx_bxs-star.svg" width="18" height="18" alt="bx_bxs-star" />
                                                <img src="images/bx_bxs-star.svg" width="18" height="18" alt="bx_bxs-star" />
                                                <img src="images/bx_bxs-star.svg" width="18" height="18" alt="bx_bxs-star" />
                                                <img src="images/bx_bxs-star-half.svg" width="18" height="18" alt="bx_bxs-star" />
                                            </div>
                                            <div class="devider"></div>

                                            <div class="review">
                                                <span>288 Review</span>
                                            </div>

                                            <div class="devider"></div>

                                            <div class="distance">
                                                <div class="icon-d">
                                                    <img src="images/lucation.svg" alt="bx_bxs-star_new" width="15" height="15" />
                                                </div>
                                                <div class="text-d">2.6 km</div>
                                            </div>
                                        </div>
                                        <div class="price-dr d-md-block d-none">₹ 1250.00</div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-xl-4">
                                <div class="dr-price-box">
                                    <div class="p-dr-img">
                                        <img src="images/pharmacy-profile.webp" alt="pharmacy-profile" width="100" height="100" />
                                    </div>
                                    <div class="p-dr-right">
                                        <h5 class="text-blue">Pharmacy</h5>
                                        <p class="mb-0 text-blue roboto">
                                            MD Cardiologist with 12 Years experience
                                        </p>

                                        <div class="p-dr-more-details">
                                            <div class="rating">
                                                <img src="images/bx_bxs-star.svg" width="18" height="18" alt="bx_bxs-star" />
                                                <img src="images/bx_bxs-star.svg" width="18" height="18" alt="bx_bxs-star" />
                                                <img src="images/bx_bxs-star.svg" width="18" height="18" alt="bx_bxs-star" />
                                                <img src="images/bx_bxs-star.svg" width="18" height="18" alt="bx_bxs-star" />
                                                <img src="images/bx_bxs-star-half.svg" width="18" height="18" alt="bx_bxs-star" />
                                            </div>
                                            <div class="devider"></div>

                                            <div class="review">
                                                <span>288 Review</span>
                                            </div>

                                            <div class="devider"></div>

                                            <div class="distance">
                                                <div class="icon-d">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="12.792" height="17.446" viewBox="0 0 12.792 17.446">
                                                        <path id="map" d="M11.4,1A6.4,6.4,0,0,0,5,7.4c0,3.378,5.7,10.524,5.942,10.832a.581.581,0,0,0,.907,0c.244-.308,5.942-7.454,5.942-10.832A6.4,6.4,0,0,0,11.4,1Zm0,8.14a2.326,2.326,0,1,1,2.326-2.326A2.326,2.326,0,0,1,11.4,9.14Z" transform="translate(-5 -1)" fill="#969696" />
                                                    </svg>
                                                </div>
                                                <div class="text-d">2.6 km</div>
                                            </div>
                                        </div>
                                        <div class="price-dr d-md-block d-none">₹ 1250.00</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <hr />

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
                                        <img src="images/pharmacy-profile.webp" alt="pharmacy-profile" width="100" height="100" />
                                    </div>
                                    <div class="p-dr-right">
                                        <h5 class="text-blue">Pharmacy</h5>
                                        <p class="mb-0 text-blue roboto">
                                            MD Cardiologist with 12 Years experience
                                        </p>

                                        <div class="p-dr-more-details">
                                            <div class="rating">
                                                <img src="images/bx_bxs-star.svg" width="18" height="18" alt="bx_bxs-star" />
                                                <img src="images/bx_bxs-star.svg" width="18" height="18" alt="bx_bxs-star" />
                                                <img src="images/bx_bxs-star.svg" width="18" height="18" alt="bx_bxs-star" />
                                                <img src="images/bx_bxs-star.svg" width="18" height="18" alt="bx_bxs-star" />
                                                <img src="images/bx_bxs-star-half.svg" width="18" height="18" alt="bx_bxs-star" />
                                            </div>
                                            <div class="devider"></div>

                                            <div class="review">
                                                <span>288 Review</span>
                                            </div>

                                            <div class="devider"></div>

                                            <div class="distance">
                                                <div class="icon-d">
                                                    <img src="images/lucation.svg" alt="bx_bxs-star_new" width="15" height="15" />
                                                </div>
                                                <div class="text-d">2.6 km</div>
                                            </div>
                                        </div>
                                        <div class="price-dr d-md-block d-none">₹ 1250.00</div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-xl-4">
                                <div class="dr-price-box">
                                    <div class="p-dr-img">
                                        <img src="images/pharmacy-profile.webp" alt="pharmacy-profile" width="100" height="100" />
                                    </div>
                                    <div class="p-dr-right">
                                        <h5 class="text-blue">Pharmacy</h5>
                                        <p class="mb-0 text-blue roboto">
                                            MD Cardiologist with 12 Years experience
                                        </p>

                                        <div class="p-dr-more-details">
                                            <div class="rating">
                                                <img src="images/bx_bxs-star.svg" width="18" height="18" alt="bx_bxs-star" />
                                                <img src="images/bx_bxs-star.svg" width="18" height="18" alt="bx_bxs-star" />
                                                <img src="images/bx_bxs-star.svg" width="18" height="18" alt="bx_bxs-star" />
                                                <img src="images/bx_bxs-star.svg" width="18" height="18" alt="bx_bxs-star" />
                                                <img src="images/bx_bxs-star-half.svg" width="18" height="18" alt="bx_bxs-star-half" />
                                            </div>
                                            <div class="devider"></div>

                                            <div class="review">
                                                <span>288 Review</span>
                                            </div>

                                            <div class="devider"></div>

                                            <div class="distance">
                                                <div class="icon-d">
                                                    <img src="images/lucation.svg" alt="bx_bxs-star_new" width="15" height="15" />
                                                </div>
                                                <div class="text-d">2.6 km</div>
                                            </div>
                                        </div>
                                        <div class="price-dr d-md-block d-none">₹ 1250.00</div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-xl-4">
                                <div class="dr-price-box">
                                    <div class="p-dr-img">
                                        <img src="images/pharmacy-profile.webp" alt="pharmacy-profile" width="100" height="100" />
                                    </div>
                                    <div class="p-dr-right">
                                        <h5 class="text-blue">Pharmacy</h5>
                                        <p class="mb-0 text-blue roboto">
                                            MD Cardiologist with 12 Years experience
                                        </p>

                                        <div class="p-dr-more-details">
                                            <div class="rating">
                                                <img src="images/bx_bxs-star.svg" width="18" height="18" alt="bx_bxs-star.svg" />
                                                <img src="images/bx_bxs-star.svg" width="18" height="18" alt="bx_bxs-star.svg" />
                                                <img src="images/bx_bxs-star.svg" width="18" height="18" alt="bx_bxs-star.svg" />
                                                <img src="images/bx_bxs-star.svg" width="18" height="18" alt="bx_bxs-star.svg" />
                                                <img src="images/bx_bxs-star-half.svg" width="18" height="18" alt="bx_bxs-star-half.svg" />
                                            </div>
                                            <div class="devider"></div>

                                            <div class="review">
                                                <span>288 Review</span>
                                            </div>

                                            <div class="devider"></div>

                                            <div class="distance">
                                                <div class="icon-d">
                                                    <img src="images/lucation.svg" alt="bx_bxs-star_new" width="15" height="15" />
                                                </div>
                                                <div class="text-d">2.6 km</div>
                                            </div>
                                        </div>
                                        <div class="price-dr d-md-block d-none">₹ 1250.00</div>
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
                                    <h4 class="mb-0 text-blue">Patient Care at Home</h4>
                                    <div class="price-label">
                                        <span class="small-text">Average Price:</span>
                                        <span class="price roboto fw-bold">₹916.66</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="row mt-4 dr-row">
                            <div class="col-xl-4">
                                <div class="dr-price-box">
                                    <div class="p-dr-img">
                                        <img src="images/nursegunja.webp" alt="dr1" width="100" height="100" />
                                    </div>
                                    <div class="p-dr-right">
                                        <h5 class="text-blue"><a href="https://curenearme.com/BrotherGunjanbhaiChauhan" target="_bank">Mr Gunjanbhai Chauhan</a></h5>
                                        <p class="mb-0 text-blue roboto">
                                            Nurse (Brother)
                                        </p>

                                        <div class="p-dr-more-details">
                                            <div class="rating">
                                                <img src="images/bx_bxs-star_new.svg" alt="bx_bxs-star_new" width="18" height="18" />
                                                <img src="images/bx_bxs-star_new.svg" alt="bx_bxs-star_new" width="18" height="18" />
                                                <img src="images/bx_bxs-star_new.svg" alt="bx_bxs-star_new" width="18" height="18" />
                                                <img src="images/bx_bxs-star_new.svg" alt="bx_bxs-star_new" width="18" height="18" />
                                                <img src="images/bx_bxs-star-half.svg" alt="bx_bxs-star_new" width="18" height="18" />
                                            </div>
                                            <div class="devider"></div>

                                            <div class="review">
                                                <span>10 Reviews</span>
                                            </div>

                                            <div class="devider"></div>

                                            <div class="distance">
                                                <svg width="20" height="20" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <g id="carbon:location">
                                                        <path id="Vector" d="M6.46875 7.3125C6.06701 7.3125 5.67429 7.19337 5.34025 6.97017C5.00621 6.74698 4.74586 6.42974 4.59212 6.05858C4.43838 5.68741 4.39815 5.279 4.47653 4.88497C4.55491 4.49095 4.74837 4.12902 5.03244 3.84494C5.31652 3.56087 5.67845 3.36741 6.07247 3.28903C6.4665 3.21065 6.87491 3.25088 7.24608 3.40462C7.61724 3.55836 7.93448 3.81871 8.15767 4.15275C8.38087 4.48679 8.5 4.87951 8.5 5.28125C8.49936 5.81977 8.28514 6.33606 7.90435 6.71685C7.52356 7.09764 7.00727 7.31186 6.46875 7.3125ZM6.46875 4.0625C6.22771 4.0625 5.99207 4.13398 5.79165 4.2679C5.59123 4.40182 5.43502 4.59216 5.34277 4.81486C5.25053 5.03755 5.22639 5.2826 5.27342 5.51902C5.32044 5.75543 5.43652 5.97259 5.60696 6.14304C5.77741 6.31348 5.99457 6.42956 6.23098 6.47658C6.4674 6.52361 6.71245 6.49947 6.93515 6.40723C7.15784 6.31499 7.34819 6.15877 7.4821 5.95835C7.61602 5.75793 7.6875 5.5223 7.6875 5.28125C7.68718 4.95812 7.55867 4.64831 7.33018 4.41982C7.10169 4.19133 6.79188 4.06282 6.46875 4.0625Z" fill="#23355F" />
                                                        <path id="Vector_2" d="M6.46875 12.1875L3.04163 8.14572C2.99401 8.08503 2.94688 8.02395 2.90025 7.9625C2.31484 7.19135 1.99859 6.24943 2 5.28125C2 4.09606 2.47082 2.95942 3.30887 2.12137C4.14692 1.28331 5.28357 0.8125 6.46875 0.8125C7.65394 0.8125 8.79059 1.28331 9.62864 2.12137C10.4667 2.95942 10.9375 4.09606 10.9375 5.28125C10.9389 6.249 10.6228 7.19048 10.0377 7.96128L10.0373 7.9625C10.0373 7.9625 9.91538 8.12256 9.8971 8.14409L6.46875 12.1875ZM3.54863 7.47297C3.54944 7.47297 3.64369 7.59809 3.66522 7.62491L6.46875 10.9314L9.27594 7.62044C9.29382 7.59809 9.38888 7.47216 9.38929 7.47175C9.8675 6.8417 10.1259 6.07223 10.125 5.28125C10.125 4.31155 9.73979 3.38157 9.05411 2.69589C8.36843 2.01021 7.43845 1.625 6.46875 1.625C5.49906 1.625 4.56908 2.01021 3.8834 2.69589C3.19772 3.38157 2.8125 4.31155 2.8125 5.28125C2.81165 6.07272 3.07038 6.84264 3.54904 7.47297H3.54863Z" fill="#23355F" />
                                                    </g>
                                                </svg>
                                                <div class="text-d">2.6 km</div>
                                            </div>
                                        </div>
                                        <div class="price-dr d-md-block d-none">₹ 1250.00</div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-xl-4">
                                <div class="dr-price-box">
                                    <div class="p-dr-img">
                                        <img src="images/nursejagdis.webp" alt="dr1" width="100" height="100" />
                                    </div>
                                    <div class="p-dr-right">
                                        <h5 class="text-blue"><a href="https://curenearme.com/BrotherJagdishPanwar" target="_bank">Mr Jagdish Panwar</a></h5>
                                        <p class="mb-0 text-blue roboto">
                                            Nurse (Brother)
                                        </p>

                                        <div class="p-dr-more-details">
                                            <div class="rating">
                                                <img src="images/bx_bxs-star_new.svg" alt="bx_bxs-star_new" width="18" height="18" />
                                                <img src="images/bx_bxs-star_new.svg" alt="bx_bxs-star_new" width="18" height="18" />
                                                <img src="images/bx_bxs-star_new.svg" alt="bx_bxs-star_new" width="18" height="18" />
                                                <img src="images/bx_bxs-star_new.svg" alt="bx_bxs-star_new" width="18" height="18" />
                                                <img src="images/bx_bxs-star-half.svg" alt="bx_bxs-star_new" width="18" height="18" />
                                            </div>
                                            <div class="devider"></div>

                                            <div class="review">
                                                <span>10 Reviews</span>
                                            </div>

                                            <div class="devider"></div>

                                            <div class="distance">
                                                <svg width="20" height="20" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <g id="carbon:location">
                                                        <path id="Vector" d="M6.46875 7.3125C6.06701 7.3125 5.67429 7.19337 5.34025 6.97017C5.00621 6.74698 4.74586 6.42974 4.59212 6.05858C4.43838 5.68741 4.39815 5.279 4.47653 4.88497C4.55491 4.49095 4.74837 4.12902 5.03244 3.84494C5.31652 3.56087 5.67845 3.36741 6.07247 3.28903C6.4665 3.21065 6.87491 3.25088 7.24608 3.40462C7.61724 3.55836 7.93448 3.81871 8.15767 4.15275C8.38087 4.48679 8.5 4.87951 8.5 5.28125C8.49936 5.81977 8.28514 6.33606 7.90435 6.71685C7.52356 7.09764 7.00727 7.31186 6.46875 7.3125ZM6.46875 4.0625C6.22771 4.0625 5.99207 4.13398 5.79165 4.2679C5.59123 4.40182 5.43502 4.59216 5.34277 4.81486C5.25053 5.03755 5.22639 5.2826 5.27342 5.51902C5.32044 5.75543 5.43652 5.97259 5.60696 6.14304C5.77741 6.31348 5.99457 6.42956 6.23098 6.47658C6.4674 6.52361 6.71245 6.49947 6.93515 6.40723C7.15784 6.31499 7.34819 6.15877 7.4821 5.95835C7.61602 5.75793 7.6875 5.5223 7.6875 5.28125C7.68718 4.95812 7.55867 4.64831 7.33018 4.41982C7.10169 4.19133 6.79188 4.06282 6.46875 4.0625Z" fill="#23355F" />
                                                        <path id="Vector_2" d="M6.46875 12.1875L3.04163 8.14572C2.99401 8.08503 2.94688 8.02395 2.90025 7.9625C2.31484 7.19135 1.99859 6.24943 2 5.28125C2 4.09606 2.47082 2.95942 3.30887 2.12137C4.14692 1.28331 5.28357 0.8125 6.46875 0.8125C7.65394 0.8125 8.79059 1.28331 9.62864 2.12137C10.4667 2.95942 10.9375 4.09606 10.9375 5.28125C10.9389 6.249 10.6228 7.19048 10.0377 7.96128L10.0373 7.9625C10.0373 7.9625 9.91538 8.12256 9.8971 8.14409L6.46875 12.1875ZM3.54863 7.47297C3.54944 7.47297 3.64369 7.59809 3.66522 7.62491L6.46875 10.9314L9.27594 7.62044C9.29382 7.59809 9.38888 7.47216 9.38929 7.47175C9.8675 6.8417 10.1259 6.07223 10.125 5.28125C10.125 4.31155 9.73979 3.38157 9.05411 2.69589C8.36843 2.01021 7.43845 1.625 6.46875 1.625C5.49906 1.625 4.56908 2.01021 3.8834 2.69589C3.19772 3.38157 2.8125 4.31155 2.8125 5.28125C2.81165 6.07272 3.07038 6.84264 3.54904 7.47297H3.54863Z" fill="#23355F" />
                                                    </g>
                                                </svg>
                                                <div class="text-d">2.30 km</div>
                                            </div>
                                        </div>
                                        <div class="price-dr d-md-block d-none">₹ 1000.00</div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-xl-4">
                                <div class="dr-price-box">
                                    <div class="p-dr-img">
                                        <img src="images/nursevarsh.webp" alt="dr1" width="100" height="100" />
                                    </div>
                                    <div class="p-dr-right">
                                        <h5 class="text-blue"><a href="https://curenearme.com/SisterVarshaChhadwa" target="_bank">Ms Varsha Chhadwa</a></h5>
                                        <p class="mb-0 text-blue roboto">
                                            Nurse (Sister)
                                        </p>

                                        <div class="p-dr-more-details">
                                            <div class="rating">
                                                <img src="images/bx_bxs-star_new.svg" alt="bx_bxs-star_new" width="18" height="18" />
                                                <img src="images/bx_bxs-star_new.svg" alt="bx_bxs-star_new" width="18" height="18" />
                                                <img src="images/bx_bxs-star_new.svg" alt="bx_bxs-star_new" width="18" height="18" />
                                                <img src="images/bx_bxs-star_new.svg" alt="bx_bxs-star_new" width="18" height="18" />
                                                <img src="images/bx_bxs-star-half.svg" alt="bx_bxs-star_new" width="18" height="18" />
                                            </div>
                                            <div class="devider"></div>

                                            <div class="review">
                                                <span>10 Review</span>
                                            </div>

                                            <div class="devider"></div>

                                            <div class="distance">
                                                <img src="images/lucation.svg" alt="bx_bxs-star_new" width="15" height="15" />
                                                <div class="text-d">6.86 km</div>
                                            </div>
                                        </div>
                                        <div class="price-dr d-md-block d-none">₹ 500.00</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <hr />

                        <div class="row mt-4">
                            <div class="col-sm-12">
                                <div class="price-title">
                                    <h4 class="mb-0 text-blue">Administering Medications</h4>
                                    <div class="price-label">
                                        <span class="small-text">Average Price:</span>
                                        <span class="price roboto fw-bold">₹566.66</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="row mt-4 dr-row">
                            <div class="col-xl-4">
                                <div class="dr-price-box">
                                    <div class="p-dr-img">
                                        <img src="images/nursepravin.webp" alt="nurse-profile" width="100" height="100" />
                                    </div>
                                    <div class="p-dr-right">
                                        <h5 class="text-blue"><a href="https://curenearme.com/BrotherPravinbhaiParmar" target="_bank">Mr Pravinbhai Parmar</a></h5>
                                        <p class="mb-0 text-blue roboto">
                                            Nurse (Brother)
                                        </p>

                                        <div class="p-dr-more-details">
                                            <div class="rating">
                                                <img src="images/bx_bxs-star_new.svg" alt="bx_bxs-star_new" width="18" height="18" />
                                                <img src="images/bx_bxs-star_new.svg" alt="bx_bxs-star_new" width="18" height="18" />
                                                <img src="images/bx_bxs-star_new.svg" alt="bx_bxs-star_new" width="18" height="18" />
                                                <img src="images/bx_bxs-star_new.svg" alt="bx_bxs-star_new" width="18" height="18" />
                                                <img src="images/bx_bxs-star-half.svg" alt="bx_bxs-star_new" width="18" height="18" />
                                            </div>
                                            <div class="devider"></div>

                                            <div class="review">
                                                <span>288 Review</span>
                                            </div>

                                            <div class="devider"></div>

                                            <div class="distance">
                                                <img src="images/lucation.svg" alt="bx_bxs-star_new" width="15" height="15" />
                                                <div class="text-d">6.10 km</div>
                                            </div>
                                        </div>
                                        <div class="price-dr d-md-block d-none">₹ 500.00</div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-xl-4">
                                <div class="dr-price-box">
                                    <div class="p-dr-img">
                                        <img src="images/nursearvind.webp" alt="nurse-profile" width="100" height="100" />
                                    </div>
                                    <div class="p-dr-right">
                                        <h5 class="text-blue"><a href="https://curenearme.com/BrotherArvindMeena" target="_bank">Mr Arvind Meena</a></h5>
                                        <p class="mb-0 text-blue roboto">
                                            Nurse (Brother)
                                        </p>

                                        <div class="p-dr-more-details">
                                            <div class="rating">
                                                <img src="images/bx_bxs-star_new.svg" alt="bx_bxs-star_new" width="18" height="18" />
                                                <img src="images/bx_bxs-star_new.svg" alt="bx_bxs-star_new" width="18" height="18" />
                                                <img src="images/bx_bxs-star_new.svg" alt="bx_bxs-star_new" width="18" height="18" />
                                                <img src="images/bx_bxs-star_new.svg" alt="bx_bxs-star_new" width="18" height="18" />
                                                <img src="images/bx_bxs-star-half.svg" alt="bx_bxs-star_new" width="18" height="18" />
                                            </div>
                                            <div class="devider"></div>

                                            <div class="review">
                                                <span>288 Review</span>
                                            </div>

                                            <div class="devider"></div>

                                            <div class="distance">
                                                <img src="images/lucation.svg" alt="bx_bxs-star_new" width="15" height="15" />
                                                <div class="text-d">4.6 km</div>
                                            </div>
                                        </div>
                                        <div class="price-dr d-md-block d-none">₹ 700.00</div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-xl-4">
                                <div class="dr-price-box">
                                    <div class="p-dr-img">
                                        <img src="images/nursepratik.webp" alt="nurse-profile" width="100" height="100" />
                                    </div>
                                    <div class="p-dr-right">
                                        <h5 class="text-blue"><a href="https://curenearme.com/BrotherPratikPandya" target="_bank">Mr Pratik Pandya</a></h5>
                                        <p class="mb-0 text-blue roboto">
                                            Nurse (Brother)
                                        </p>

                                        <div class="p-dr-more-details">
                                            <div class="rating">
                                                <img src="images/bx_bxs-star_new.svg" alt="bx_bxs-star_new" width="18" height="18" />
                                                <img src="images/bx_bxs-star_new.svg" alt="bx_bxs-star_new" width="18" height="18" />
                                                <img src="images/bx_bxs-star_new.svg" alt="bx_bxs-star_new" width="18" height="18" />
                                                <img src="images/bx_bxs-star_new.svg" alt="bx_bxs-star_new" width="18" height="18" />
                                                <img src="images/bx_bxs-star-half.svg" alt="bx_bxs-star_new" width="18" height="18" />
                                            </div>
                                            <div class="devider"></div>

                                            <div class="review">
                                                <span>288 Review</span>
                                            </div>

                                            <div class="devider"></div>

                                            <div class="distance">
                                                <img src="images/lucation.svg" alt="bx_bxs-star_new" width="15" height="15" />
                                                <div class="text-d">6.78 km</div>
                                            </div>
                                        </div>
                                        <div class="price-dr d-md-block d-none">₹ 500.00</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <hr />

                        <div class="row mt-4">
                            <div class="col-sm-12">
                                <div class="price-title">
                                    <h4 class="mb-0 text-blue">Nurse(Brother) at Home</h4>
                                    <div class="price-label">
                                        <span class="small-text">Average Price:</span>
                                        <span class="price roboto fw-bold">₹1166.66</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div class="row mt-4 dr-row">
                            <div class="col-xl-4">
                                <div class="dr-price-box">
                                    <div class="p-dr-img">
                                        <img src="images/nursearvind.webp" alt="nurse-profile" width="100" height="100" />
                                    </div>
                                    <div class="p-dr-right">
                                        <h5 class="text-blue"><a href="https://curenearme.com/BrotherArvindMeena" target="_bank">Mr Arvind Meena</a></h5>
                                        <p class="mb-0 text-blue roboto">
                                            Nurse (Brother)
                                        </p>

                                        <div class="p-dr-more-details">
                                            <div class="rating">
                                                <img src="images/bx_bxs-star_new.svg" alt="bx_bxs-star_new" width="18" height="18" />
                                                <img src="images/bx_bxs-star_new.svg" alt="bx_bxs-star_new" width="18" height="18" />
                                                <img src="images/bx_bxs-star_new.svg" alt="bx_bxs-star_new" width="18" height="18" />
                                                <img src="images/bx_bxs-star_new.svg" alt="bx_bxs-star_new" width="18" height="18" />
                                                <img src="images/bx_bxs-star-half.svg" alt="bx_bxs-star_new" width="18" height="18" />
                                            </div>
                                            <div class="devider"></div>

                                            <div class="review">
                                                <span>288 Review</span>
                                            </div>

                                            <div class="devider"></div>

                                            <div class="distance">
                                                <img src="images/lucation.svg" alt="bx_bxs-star_new" width="15" height="15" />
                                                <div class="text-d">16.5 km</div>
                                            </div>
                                        </div>
                                        <div class="price-dr d-md-block d-none">₹ 1500.00</div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-xl-4">
                                <div class="dr-price-box">
                                    <div class="p-dr-img">
                                        <img src="images/nurserakesh.webp" alt="nurse-profile" width="100" height="100" />
                                    </div>
                                    <div class="p-dr-right">
                                        <h5 class="text-blue"><a href="https://curenearme.com/BrotherRakeshPatel" target="_bank">Mr Rakesh Patel</a></h5>
                                        <p class="mb-0 text-blue roboto">
                                            Nurse (Brother)
                                        </p>

                                        <div class="p-dr-more-details">
                                            <div class="rating">
                                                <img src="images/bx_bxs-star_new.svg" alt="bx_bxs-star_new" width="18" height="18" />
                                                <img src="images/bx_bxs-star_new.svg" alt="bx_bxs-star_new" width="18" height="18" />
                                                <img src="images/bx_bxs-star_new.svg" alt="bx_bxs-star_new" width="18" height="18" />
                                                <img src="images/bx_bxs-star_new.svg" alt="bx_bxs-star_new" width="18" height="18" />
                                                <img src="images/bx_bxs-star-half.svg" alt="bx_bxs-star_new" width="18" height="18" />
                                            </div>
                                            <div class="devider"></div>

                                            <div class="review">
                                                <span>288 Review</span>
                                            </div>

                                            <div class="devider"></div>

                                            <div class="distance">
                                                <img src="images/lucation.svg" alt="bx_bxs-star_new" width="15" height="15" />
                                                <div class="text-d">10 km</div>
                                            </div>
                                        </div>
                                        <div class="price-dr d-md-block d-none">₹ 1000.00</div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-xl-4">
                                <div class="dr-price-box">
                                    <div class="p-dr-img">
                                        <img src="images/nursejagdis.webp" alt="dr1" width="100" height="100" />
                                    </div>
                                    <div class="p-dr-right">
                                        <h5 class="text-blue"><a href="https://curenearme.com/BrotherJagdishPanwar" target="_bank">Mr Jagdish Panwar</a></h5>
                                        <p class="mb-0 text-blue roboto">
                                            Nurse (Brother)
                                        </p>
                                        <div class="p-dr-more-details">
                                            <div class="rating">
                                                <img src="images/bx_bxs-star_new.svg" alt="bx_bxs-star_new" width="18" height="18" />
                                                <img src="images/bx_bxs-star_new.svg" alt="bx_bxs-star_new" width="18" height="18" />
                                                <img src="images/bx_bxs-star_new.svg" alt="bx_bxs-star_new" width="18" height="18" />
                                                <img src="images/bx_bxs-star_new.svg" alt="bx_bxs-star_new" width="18" height="18" />
                                                <img src="images/bx_bxs-star-half.svg" alt="bx_bxs-star_new" width="18" height="18" />
                                            </div>
                                            <div class="devider"></div>

                                            <div class="review">
                                                <span>288 Review</span>
                                            </div>

                                            <div class="devider"></div>

                                            <div class="distance">
                                                <img src="images/lucation.svg" alt="bx_bxs-star_new" width="15" height="15" />
                                                <div class="text-d">6.5 km</div>
                                            </div>
                                        </div>
                                        <div class="price-dr d-md-block d-none">₹ 1000.00</div>
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
                                        <img src="images/hospital-profile.webp" alt="hospital-profile" width="100" height="100" />
                                    </div>
                                    <div class="p-dr-right">
                                        <h5 class="text-blue">Hospital</h5>
                                        <p class="mb-0 text-blue roboto">
                                            MD Cardiologist with 12 Years experience
                                        </p>

                                        <div class="p-dr-more-details">
                                            <div class="rating">
                                                <img src="images/bx_bxs-star_new.svg" alt="bx_bxs-star_new" width="18" height="18" />
                                                <img src="images/bx_bxs-star_new.svg" alt="bx_bxs-star_new" width="18" height="18" />
                                                <img src="images/bx_bxs-star_new.svg" alt="bx_bxs-star_new" width="18" height="18" />
                                                <img src="images/bx_bxs-star_new.svg" alt="bx_bxs-star_new" width="18" height="18" />
                                                <img src="images/bx_bxs-star-half.svg" alt="bx_bxs-star_new" width="18" height="18" />
                                            </div>
                                            <div class="devider"></div>

                                            <div class="review">
                                                <span>288 Review</span>
                                            </div>

                                            <div class="devider"></div>

                                            <div class="distance">
                                                <div class="icon-d">
                                                    <img src="images/lucation.svg" alt="bx_bxs-star_new" width="15" height="15" />
                                                </div>
                                                <div class="text-d">2.6 km</div>
                                            </div>
                                        </div>
                                        <div class="price-dr d-md-block d-none">₹ 1250.00</div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-xl-4">
                                <div class="dr-price-box">
                                    <div class="p-dr-img">
                                        <img src="images/hospital-profile.webp" alt="hospital-profile" width="100" height="100" />
                                    </div>
                                    <div class="p-dr-right">
                                        <h5 class="text-blue">Hospital</h5>
                                        <p class="mb-0 text-blue">
                                            MD Cardiologist with 12 Years experience
                                        </p>

                                        <div class="p-dr-more-details">
                                            <div class="rating">
                                                <img src="images/bx_bxs-star_new.svg" alt="bx_bxs-star_new" width="18" height="18" />
                                                <img src="images/bx_bxs-star_new.svg" alt="bx_bxs-star_new" width="18" height="18" />
                                                <img src="images/bx_bxs-star_new.svg" alt="bx_bxs-star_new" width="18" height="18" />
                                                <img src="images/bx_bxs-star_new.svg" alt="bx_bxs-star_new" width="18" height="18" />
                                                <img src="images/bx_bxs-star-half.svg" alt="bx_bxs-star_new" width="18" height="18" />
                                            </div>
                                            <div class="devider"></div>

                                            <div class="review">
                                                <span>288 Review</span>
                                            </div>

                                            <div class="devider"></div>

                                            <div class="distance">
                                                <div class="icon-d">
                                                    <img src="images/lucation.svg" alt="bx_bxs-star_new" width="15" height="15" />
                                                </div>
                                                <div class="text-d">2.6 km</div>
                                            </div>
                                        </div>
                                        <div class="price-dr d-md-block d-none">₹ 1250.00</div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-xl-4">
                                <div class="dr-price-box">
                                    <div class="p-dr-img">
                                        <img src="images/hospital-profile.webp" alt="hospital-profile" width="100" height="100" />
                                    </div>
                                    <div class="p-dr-right">
                                        <h5 class="text-blue">Hospital</h5>
                                        <p class="mb-0 text-blue">
                                            MD Cardiologist with 12 Years experience
                                        </p>

                                        <div class="p-dr-more-details">
                                            <div class="rating">
                                                <img src="images/bx_bxs-star_new.svg" alt="bx_bxs-star_new" width="18" height="18" />
                                                <img src="images/bx_bxs-star_new.svg" alt="bx_bxs-star_new" width="18" height="18" />
                                                <img src="images/bx_bxs-star_new.svg" alt="bx_bxs-star_new" width="18" height="18" />
                                                <img src="images/bx_bxs-star_new.svg" alt="bx_bxs-star_new" width="18" height="18" />
                                                <img src="images/bx_bxs-star-half.svg" alt="bx_bxs-star_new" width="18" height="18" />
                                            </div>
                                            <div class="devider"></div>

                                            <div class="review">
                                                <span>288 Review</span>
                                            </div>

                                            <div class="devider"></div>

                                            <div class="distance">
                                                <div class="icon-d">
                                                    <img src="images/lucation.svg" alt="bx_bxs-star_new" width="15" height="15" />
                                                </div>
                                                <div class="text-d">2.6 km</div>
                                            </div>
                                        </div>
                                        <div class="price-dr d-md-block d-none">₹ 1250.00</div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <hr />

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
                                        <img src="images/hospital-profile.webp" alt="hospital-profile" width="100" height="100" />
                                    </div>
                                    <div class="p-dr-right">
                                        <h5 class="text-blue">Hospital</h5>
                                        <p class="mb-0 text-blue roboto">
                                            MD Cardiologist with 12 Years experience
                                        </p>

                                        <div class="p-dr-more-details">
                                            <div class="rating">
                                                <img src="images/bx_bxs-star_new.svg" alt="bx_bxs-star_new" width="18" height="18" />
                                                <img src="images/bx_bxs-star_new.svg" alt="bx_bxs-star_new" width="18" height="18" />
                                                <img src="images/bx_bxs-star_new.svg" alt="bx_bxs-star_new" width="18" height="18" />
                                                <img src="images/bx_bxs-star_new.svg" alt="bx_bxs-star_new" width="18" height="18" />
                                                <img src="images/bx_bxs-star-half.svg" alt="bx_bxs-star_new" width="18" height="18" />
                                            </div>
                                            <div class="devider"></div>

                                            <div class="review">
                                                <span>288 Review</span>
                                            </div>

                                            <div class="devider"></div>

                                            <div class="distance">
                                                <div class="icon-d">
                                                    <img src="images/lucation.svg" alt="bx_bxs-star_new" width="15" height="15" />
                                                </div>
                                                <div class="text-d">2.6 km</div>
                                            </div>
                                        </div>
                                        <div class="price-dr d-md-block d-none">₹ 1250.00</div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-xl-4">
                                <div class="dr-price-box">
                                    <div class="p-dr-img">
                                        <img src="images/hospital-profile.webp" alt="hospital-profile" width="100" height="100" />
                                    </div>
                                    <div class="p-dr-right">
                                        <h5 class="text-blue">Hospital</h5>
                                        <p class="mb-0 text-blue roboto">
                                            MD Cardiologist with 12 Years experience
                                        </p>

                                        <div class="p-dr-more-details">
                                            <div class="rating">
                                                <img src="images/bx_bxs-star_new.svg" alt="bx_bxs-star_new" width="18" height="18" />
                                                <img src="images/bx_bxs-star_new.svg" alt="bx_bxs-star_new" width="18" height="18" />
                                                <img src="images/bx_bxs-star_new.svg" alt="bx_bxs-star_new" width="18" height="18" />
                                                <img src="images/bx_bxs-star_new.svg" alt="bx_bxs-star_new" width="18" height="18" />
                                                <img src="images/bx_bxs-star-half.svg" alt="bx_bxs-star_new" width="18" height="18" />
                                            </div>
                                            <div class="devider"></div>

                                            <div class="review">
                                                <span>288 Review</span>
                                            </div>

                                            <div class="devider"></div>

                                            <div class="distance">
                                                <div class="icon-d">
                                                    <img src="images/lucation.svg" alt="bx_bxs-star_new" width="15" height="15" />
                                                </div>
                                                <div class="text-d">2.6 km</div>
                                            </div>
                                        </div>
                                        <div class="price-dr d-md-block d-none">₹ 1250.00</div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-xl-4">
                                <div class="dr-price-box">
                                    <div class="p-dr-img">
                                        <img src="images/hospital-profile.webp" alt="hospital-profile" width="100" height="100" />
                                    </div>
                                    <div class="p-dr-right">
                                        <h5 class="text-blue">Hospital</h5>
                                        <p class="mb-0 text-blue roboto">
                                            MD Cardiologist with 12 Years experience
                                        </p>

                                        <div class="p-dr-more-details">
                                            <div class="rating">
                                                <img src="images/bx_bxs-star_new.svg" alt="bx_bxs-star_new" width="18" height="18" />
                                                <img src="images/bx_bxs-star_new.svg" alt="bx_bxs-star_new" width="18" height="18" />
                                                <img src="images/bx_bxs-star_new.svg" alt="bx_bxs-star_new" width="18" height="18" />
                                                <img src="images/bx_bxs-star_new.svg" alt="bx_bxs-star_new" width="18" height="18" />
                                                <img src="images/bx_bxs-star-half.svg" alt="bx_bxs-star_new" width="18" height="18" />
                                            </div>
                                            <div class="devider"></div>

                                            <div class="review">
                                                <span>288 Review</span>
                                            </div>

                                            <div class="devider"></div>

                                            <div class="distance">
                                                <div class="icon-d">
                                                    <img src="images/lucation.svg" alt="bx_bxs-star_new" width="15" height="15" />
                                                </div>
                                                <div class="text-d">2.6 km</div>
                                            </div>
                                        </div>
                                        <div class="price-dr d-md-block d-none">₹ 1250.00</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <hr />

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
                                        <img src="images/hospital-profile.webp" alt="hospital-profile" width="100" height="100" />
                                    </div>
                                    <div class="p-dr-right">
                                        <h5 class="text-blue">Hospital</h5>
                                        <p class="mb-0 text-blue roboto">
                                            MD Cardiologist with 12 Years experience
                                        </p>

                                        <div class="p-dr-more-details">
                                            <div class="rating">
                                                <img src="images/bx_bxs-star_new.svg" alt="bx_bxs-star_new" width="18" height="18" />
                                                <img src="images/bx_bxs-star_new.svg" alt="bx_bxs-star_new" width="18" height="18" />
                                                <img src="images/bx_bxs-star_new.svg" alt="bx_bxs-star_new" width="18" height="18" />
                                                <img src="images/bx_bxs-star_new.svg" alt="bx_bxs-star_new" width="18" height="18" />
                                                <img src="images/bx_bxs-star-half.svg" alt="bx_bxs-star_new" width="18" height="18" />
                                            </div>
                                            <div class="devider"></div>

                                            <div class="review">
                                                <span>288 Review</span>
                                            </div>

                                            <div class="devider"></div>

                                            <div class="distance">
                                                <div class="icon-d">
                                                    <img src="images/lucation.svg" alt="bx_bxs-star_new" width="15" height="15" />
                                                </div>
                                                <div class="text-d">2.6 km</div>
                                            </div>
                                        </div>
                                        <div class="price-dr d-md-block d-none">₹ 1250.00</div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-xl-4">
                                <div class="dr-price-box">
                                    <div class="p-dr-img">
                                        <img src="images/hospital-profile.webp" alt="hospital-profile" width="100" height="100" />
                                    </div>
                                    <div class="p-dr-right">
                                        <h5 class="text-blue">Hospital</h5>
                                        <p class="mb-0 text-blue roboto">
                                            MD Cardiologist with 12 Years experience
                                        </p>

                                        <div class="p-dr-more-details">
                                            <div class="rating">
                                                <img src="images/bx_bxs-star_new.svg" alt="bx_bxs-star_new" width="18" height="18" />
                                                <img src="images/bx_bxs-star_new.svg" alt="bx_bxs-star_new" width="18" height="18" />
                                                <img src="images/bx_bxs-star_new.svg" alt="bx_bxs-star_new" width="18" height="18" />
                                                <img src="images/bx_bxs-star_new.svg" alt="bx_bxs-star_new" width="18" height="18" />
                                                <img src="images/bx_bxs-star-half.svg" alt="bx_bxs-star_new" width="18" height="18" />
                                            </div>
                                            <div class="devider"></div>

                                            <div class="review">
                                                <span>288 Review</span>
                                            </div>

                                            <div class="devider"></div>

                                            <div class="distance">
                                                <div class="icon-d">
                                                    <img src="images/lucation.svg" alt="bx_bxs-star_new" width="15" height="15" />
                                                </div>
                                                <div class="text-d">2.6 km</div>
                                            </div>
                                        </div>
                                        <div class="price-dr d-md-block d-none">₹ 1250.00</div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-xl-4">
                                <div class="dr-price-box">
                                    <div class="p-dr-img">
                                        <img src="images/hospital-profile.webp" alt="hospital-profile" width="100" height="100" />
                                    </div>
                                    <div class="p-dr-right">
                                        <h5 class="text-blue">Hospital</h5>
                                        <p class="mb-0 text-blue roboto">
                                            MD Cardiologist with 12 Years experience
                                        </p>

                                        <div class="p-dr-more-details">
                                            <div class="rating">
                                                <img src="images/bx_bxs-star_new.svg" alt="bx_bxs-star_new" width="18" height="18" />
                                                <img src="images/bx_bxs-star_new.svg" alt="bx_bxs-star_new" width="18" height="18" />
                                                <img src="images/bx_bxs-star_new.svg" alt="bx_bxs-star_new" width="18" height="18" />
                                                <img src="images/bx_bxs-star_new.svg" alt="bx_bxs-star_new" width="18" height="18" />
                                                <img src="images/bx_bxs-star-half.svg" alt="bx_bxs-star_new" width="18" height="18" />
                                            </div>
                                            <div class="devider"></div>

                                            <div class="review">
                                                <span>288 Review</span>
                                            </div>

                                            <div class="devider"></div>

                                            <div class="distance">
                                                <div class="icon-d">
                                                    <img src="images/lucation.svg" alt="bx_bxs-star_new" width="15" height="15" />
                                                </div>
                                                <div class="text-d">2.6 km</div>
                                            </div>
                                        </div>
                                        <div class="price-dr d-md-block d-none">₹ 1250.00</div>
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
                                        <img src="images/Diagnostics.webp" alt="Diagnostics" width="100" height="100" />
                                    </div>
                                    <div class="p-dr-right">
                                        <h5 class="text-blue">Lab</h5>
                                        <p class="mb-0 text-blue roboto">
                                            MD Cardiologist with 12 Years experience
                                        </p>

                                        <div class="p-dr-more-details">
                                            <div class="rating">
                                                <img src="images/bx_bxs-star_new.svg" alt="bx_bxs-star_new" width="18" height="18" />
                                                <img src="images/bx_bxs-star_new.svg" alt="bx_bxs-star_new" width="18" height="18" />
                                                <img src="images/bx_bxs-star_new.svg" alt="bx_bxs-star_new" width="18" height="18" />
                                                <img src="images/bx_bxs-star_new.svg" alt="bx_bxs-star_new" width="18" height="18" />
                                                <img src="images/bx_bxs-star-half.svg" alt="bx_bxs-star_new" width="18" height="18" />
                                            </div>
                                            <div class="devider"></div>

                                            <div class="review">
                                                <span>288 Review</span>
                                            </div>

                                            <div class="devider"></div>

                                            <div class="distance">
                                                <div class="icon-d">
                                                    <img src="images/lucation.svg" alt="bx_bxs-star_new" width="15" height="15" />
                                                </div>
                                                <div class="text-d">2.6 km</div>
                                            </div>
                                        </div>
                                        <div class="price-dr d-md-block d-none">₹ 1250.00</div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-xl-4">
                                <div class="dr-price-box">
                                    <div class="p-dr-img">
                                        <img src="images/Diagnostics.webp" alt="Diagnostics" width="100" height="100" />
                                    </div>
                                    <div class="p-dr-right">
                                        <h5 class="text-blue">Lab</h5>
                                        <p class="mb-0 text-blue">
                                            MD Cardiologist with 12 Years experience
                                        </p>

                                        <div class="p-dr-more-details">
                                            <div class="rating">
                                                <img src="images/bx_bxs-star_new.svg" alt="bx_bxs-star_new" width="18" height="18" />
                                                <img src="images/bx_bxs-star_new.svg" alt="bx_bxs-star_new" width="18" height="18" />
                                                <img src="images/bx_bxs-star_new.svg" alt="bx_bxs-star_new" width="18" height="18" />
                                                <img src="images/bx_bxs-star_new.svg" alt="bx_bxs-star_new" width="18" height="18" />
                                                <img src="images/bx_bxs-star-half.svg" alt="bx_bxs-star_new" width="18" height="18" />
                                            </div>
                                            <div class="devider"></div>

                                            <div class="review">
                                                <span>288 Review</span>
                                            </div>

                                            <div class="devider"></div>

                                            <div class="distance">
                                                <div class="icon-d">
                                                    <img src="images/lucation.svg" alt="bx_bxs-star_new" width="15" height="15" />
                                                </div>
                                                <div class="text-d">2.6 km</div>
                                            </div>
                                        </div>
                                        <div class="price-dr d-md-block d-none">₹ 1250.00</div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-xl-4">
                                <div class="dr-price-box">
                                    <div class="p-dr-img">
                                        <img src="images/Diagnostics.webp" alt="Diagnostics" width="100" height="100" />
                                    </div>
                                    <div class="p-dr-right">
                                        <h5 class="text-blue">Lab</h5>
                                        <p class="mb-0 text-blue">
                                            MD Cardiologist with 12 Years experience
                                        </p>

                                        <div class="p-dr-more-details">
                                            <div class="rating">
                                                <img src="images/bx_bxs-star_new.svg" alt="bx_bxs-star_new" width="18" height="18" />
                                                <img src="images/bx_bxs-star_new.svg" alt="bx_bxs-star_new" width="18" height="18" />
                                                <img src="images/bx_bxs-star_new.svg" alt="bx_bxs-star_new" width="18" height="18" />
                                                <img src="images/bx_bxs-star_new.svg" alt="bx_bxs-star_new" width="18" height="18" />
                                                <img src="images/bx_bxs-star-half.svg" alt="bx_bxs-star_new" width="18" height="18" />
                                            </div>
                                            <div class="devider"></div>

                                            <div class="review">
                                                <span>288 Review</span>
                                            </div>

                                            <div class="devider"></div>

                                            <div class="distance">
                                                <div class="icon-d">
                                                    <img src="images/lucation.svg" alt="bx_bxs-star_new" width="15" height="15" />
                                                </div>
                                                <div class="text-d">2.6 km</div>
                                            </div>
                                        </div>
                                        <div class="price-dr d-md-block d-none">₹ 1250.00</div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <hr />

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
                                        <img src="images/Diagnostics.webp" alt="Diagnostics" width="100" height="100" />
                                    </div>
                                    <div class="p-dr-right">
                                        <h5 class="text-blue">Lab</h5>
                                        <p class="mb-0 text-blue roboto">
                                            MD Cardiologist with 12 Years experience
                                        </p>

                                        <div class="p-dr-more-details">
                                            <div class="rating">
                                                <img src="images/bx_bxs-star_new.svg" alt="bx_bxs-star_new" width="18" height="18" />
                                                <img src="images/bx_bxs-star_new.svg" alt="bx_bxs-star_new" width="18" height="18" />
                                                <img src="images/bx_bxs-star_new.svg" alt="bx_bxs-star_new" width="18" height="18" />
                                                <img src="images/bx_bxs-star_new.svg" alt="bx_bxs-star_new" width="18" height="18" />
                                                <img src="images/bx_bxs-star-half.svg" alt="bx_bxs-star_new" width="18" height="18" />
                                            </div>
                                            <div class="devider"></div>

                                            <div class="review">
                                                <span>288 Review</span>
                                            </div>

                                            <div class="devider"></div>

                                            <div class="distance">
                                                <div class="icon-d">
                                                    <img src="images/lucation.svg" alt="bx_bxs-star_new" width="15" height="15" />
                                                </div>
                                                <div class="text-d">2.6 km</div>
                                            </div>
                                        </div>
                                        <div class="price-dr d-md-block d-none">₹ 1250.00</div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-xl-4">
                                <div class="dr-price-box">
                                    <div class="p-dr-img">
                                        <img src="images/Diagnostics.webp" alt="Diagnostics" width="100" height="100" />
                                    </div>
                                    <div class="p-dr-right">
                                        <h5 class="text-blue">Lab</h5>
                                        <p class="mb-0 text-blue roboto">
                                            MD Cardiologist with 12 Years experience
                                        </p>

                                        <div class="p-dr-more-details">
                                            <div class="rating">
                                                <img src="images/bx_bxs-star_new.svg" alt="bx_bxs-star_new" width="18" height="18" />
                                                <img src="images/bx_bxs-star_new.svg" alt="bx_bxs-star_new" width="18" height="18" />
                                                <img src="images/bx_bxs-star_new.svg" alt="bx_bxs-star_new" width="18" height="18" />
                                                <img src="images/bx_bxs-star_new.svg" alt="bx_bxs-star_new" width="18" height="18" />
                                                <img src="images/bx_bxs-star-half.svg" alt="bx_bxs-star_new" width="18" height="18" />
                                            </div>
                                            <div class="devider"></div>

                                            <div class="review">
                                                <span>288 Review</span>
                                            </div>

                                            <div class="devider"></div>

                                            <div class="distance">
                                                <div class="icon-d">
                                                    <img src="images/lucation.svg" alt="bx_bxs-star_new" width="15" height="15" />
                                                </div>
                                                <div class="text-d">2.6 km</div>
                                            </div>
                                        </div>
                                        <div class="price-dr d-md-block d-none">₹ 1250.00</div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-xl-4">
                                <div class="dr-price-box">
                                    <div class="p-dr-img">
                                        <img src="images/Diagnostics.webp" alt="Diagnostics" width="100" height="100" />
                                    </div>
                                    <div class="p-dr-right">
                                        <h5 class="text-blue">Lab</h5>
                                        <p class="mb-0 text-blue roboto">
                                            MD Cardiologist with 12 Years experience
                                        </p>

                                        <div class="p-dr-more-details">
                                            <div class="rating">
                                                <img src="images/bx_bxs-star_new.svg" alt="bx_bxs-star_new" width="18" height="18" />
                                                <img src="images/bx_bxs-star_new.svg" alt="bx_bxs-star_new" width="18" height="18" />
                                                <img src="images/bx_bxs-star_new.svg" alt="bx_bxs-star_new" width="18" height="18" />
                                                <img src="images/bx_bxs-star_new.svg" alt="bx_bxs-star_new" width="18" height="18" />
                                                <img src="images/bx_bxs-star-half.svg" alt="bx_bxs-star_new" width="18" height="18" />
                                            </div>
                                            <div class="devider"></div>

                                            <div class="review">
                                                <span>288 Review</span>
                                            </div>

                                            <div class="devider"></div>

                                            <div class="distance">
                                                <div class="icon-d">
                                                    <img src="images/lucation.svg" alt="bx_bxs-star_new" width="15" height="15" />
                                                </div>
                                                <div class="text-d">2.6 km</div>
                                            </div>
                                        </div>
                                        <div class="price-dr d-md-block d-none">₹ 1250.00</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <hr />

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
                                        <img src="images/Diagnostics.webp" alt="Diagnostics" width="100" height="100" />
                                    </div>
                                    <div class="p-dr-right">
                                        <h5 class="text-blue">Lab</h5>
                                        <p class="mb-0 text-blue roboto">
                                            MD Cardiologist with 12 Years experience
                                        </p>

                                        <div class="p-dr-more-details">
                                            <div class="rating">
                                                <img src="images/bx_bxs-star_new.svg" alt="bx_bxs-star_new" width="18" height="18" />
                                                <img src="images/bx_bxs-star_new.svg" alt="bx_bxs-star_new" width="18" height="18" />
                                                <img src="images/bx_bxs-star_new.svg" alt="bx_bxs-star_new" width="18" height="18" />
                                                <img src="images/bx_bxs-star_new.svg" alt="bx_bxs-star_new" width="18" height="18" />
                                                <img src="images/bx_bxs-star-half.svg" alt="bx_bxs-star_new" width="18" height="18" />
                                            </div>
                                            <div class="devider"></div>

                                            <div class="review">
                                                <span>288 Review</span>
                                            </div>

                                            <div class="devider"></div>

                                            <div class="distance">
                                                <div class="icon-d">
                                                    <img src="images/lucation.svg" alt="bx_bxs-star_new" width="15" height="15" />
                                                </div>
                                                <div class="text-d">2.6 km</div>
                                            </div>
                                        </div>
                                        <div class="price-dr d-md-block d-none">₹ 1250.00</div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-xl-4">
                                <div class="dr-price-box">
                                    <div class="p-dr-img">
                                        <img src="images/Diagnostics.webp" alt="Diagnostics" width="100" height="100" />
                                    </div>
                                    <div class="p-dr-right">
                                        <h5 class="text-blue">Lab</h5>
                                        <p class="mb-0 text-blue roboto">
                                            MD Cardiologist with 12 Years experience
                                        </p>

                                        <div class="p-dr-more-details">
                                            <div class="rating">
                                                <img src="images/bx_bxs-star_new.svg" alt="bx_bxs-star_new" width="18" height="18" />
                                                <img src="images/bx_bxs-star_new.svg" alt="bx_bxs-star_new" width="18" height="18" />
                                                <img src="images/bx_bxs-star_new.svg" alt="bx_bxs-star_new" width="18" height="18" />
                                                <img src="images/bx_bxs-star_new.svg" alt="bx_bxs-star_new" width="18" height="18" />
                                                <img src="images/bx_bxs-star-half.svg" alt="bx_bxs-star_new" width="18" height="18" />
                                            </div>
                                            <div class="devider"></div>

                                            <div class="review">
                                                <span>288 Review</span>
                                            </div>

                                            <div class="devider"></div>

                                            <div class="distance">
                                                <div class="icon-d">
                                                    <img src="images/lucation.svg" alt="bx_bxs-star_new" width="15" height="15" />
                                                </div>
                                                <div class="text-d">2.6 km</div>
                                            </div>
                                        </div>
                                        <div class="price-dr d-md-block d-none">₹ 1250.00</div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-xl-4">
                                <div class="dr-price-box">
                                    <div class="p-dr-img">
                                        <img src="images/Diagnostics.webp" alt="Diagnostics" width="100" height="100" />
                                    </div>
                                    <div class="p-dr-right">
                                        <h5 class="text-blue">Lab</h5>
                                        <p class="mb-0 text-blue roboto">
                                            MD Cardiologist with 12 Years experience
                                        </p>

                                        <div class="p-dr-more-details">
                                            <div class="rating">
                                                <img src="images/bx_bxs-star_new.svg" alt="bx_bxs-star_new" width="18" height="18" />
                                                <img src="images/bx_bxs-star_new.svg" alt="bx_bxs-star_new" width="18" height="18" />
                                                <img src="images/bx_bxs-star_new.svg" alt="bx_bxs-star_new" width="18" height="18" />
                                                <img src="images/bx_bxs-star_new.svg" alt="bx_bxs-star_new" width="18" height="18" />
                                                <img src="images/bx_bxs-star-half.svg" alt="bx_bxs-star_new" width="18" height="18" />
                                            </div>
                                            <div class="devider"></div>

                                            <div class="review">
                                                <span>288 Review</span>
                                            </div>

                                            <div class="devider"></div>

                                            <div class="distance">
                                                <div class="icon-d">
                                                    <img src="images/lucation.svg" alt="bx_bxs-star_new" width="15" height="15" />
                                                </div>
                                                <div class="text-d">2.6 km</div>
                                            </div>
                                        </div>
                                        <div class="price-dr d-md-block d-none">₹ 1250.00</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="modal fade modal-of-quick-search" id="commingSoonModal1" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered" style="max-width: 750px">
            <div class="modal-content modelWhite" style="padding: 0px !important">
                <div class="modal-header">
                    <span> Work In Progress</span>
                    <button style="float: right" type="button" class="btn-close ms-auto" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <div class="a-popover-wrapper" aria-busy="false">
                        <header class="a-popover-header">
                            <h4 class="h4 roboto text-blue text-center">Coming Soon</h4>
                            <!--button data-action="a-popover-close" class=" a-button-close-a11y a-button-close a-declarative" aria-label="Close"><i class="a-icon a-icon-close"></i></button-->
                        </header>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!-- </div> -->
</section>
</template>

<style>
#slider {
    position: relative;
    /* overflow: ; */
    width: 100% !important;
    margin: 24px auto 20px auto;
    border-radius: 4px;
}

#slider ul {
    position: relative;
    margin: 0;
    padding: 0;
    /* height: 300px; */
    list-style: none;
    display: flex;
    /* Use flexbox to easily handle the slides */
    transition: transform 0.5s ease-in-out;
}

#slider ul li {
    flex: 0 0 22%;
    margin-right: 7px;
}

.control_prev {
    position: absolute;
    top: -42%;
    z-index: 1006;
    display: block;
    padding: 4% 3%;
    left: -65px;
    width: auto;
    height: auto;
    /* background: #2a2a2a; */
    /* color: #fff; */
    -webkit-text-decoration: none;
    text-decoration: none;
    font-weight: 600;
    font-size: 18px;
    opacity: 0.8;
    cursor: pointer;
}

.control_next {
    position: absolute;
    top: -42%;
    right: 0;
    z-index: 999;
    display: block;
    padding: 4% 3%;
    width: auto;
    height: auto;
    /* background: #2a2a2a; */
    /* color: #fff; */
    text-decoration: none;
    font-weight: 600;
    font-size: 18px;
    opacity: 0.8;
    cursor: pointer;
}

a.control_prev:hover,
a.control_next:hover {
    opacity: 1;
    transition: all 0.2s ease;
}

.control_prev {
    border-radius: 0 2px 2px 0;
}

.control_next {
    right: -58px;
    border-radius: 2px 0 0 2px;
}

.designtabs .item>div {
    margin-right: 5px;
    margin-bottom: 5px;
}

.slider_option {
    position: relative;
    margin: 10px auto;
    width: 160px;
    font-size: 18px;
}

@media screen and (max-width:1200px) {
    #slider ul {
        overflow-x: scroll;
        overflow-y: hidden;
    }

    #slider ul::-webkit-scrollbar {
        display: none;
    }
}

@media screen and (max-width:992px) {
    #slider ul li {
        flex: 0 0 34%;
    }

    #slider ul {
        overflow-x: scroll;
        overflow-y: hidden;
    }

    #slider ul::-webkit-scrollbar {
        display: none;
    }
}

@media screen and (max-width:768px) {
    #slider ul li {
        flex: 0 0 40%;
        margin-right: 1px;
    }

    #slider ul {
        overflow-x: scroll;
        overflow-y: hidden;
    }

    #slider ul::-webkit-scrollbar {
        display: none;
    }

    #slider {
        height: 40px !important;
        /* overflow: scroll; */
    }

    .control_prev {
        display: none;
    }

    .control_next {
        display: none;
    }
}

.item.active .dr-box {
    color: var(--white) !important;
    background-color: var(--blue);
    transition: 0.2s all ease-in-out;
    cursor: pointer;
}

.item.active .dr-box {
    color: var(--white) !important;
}

.designtabs .item.active>div .dr-text h4 {
    color: var(--white) !important;

}

@media screen and (max-width:361px) {
    #slider ul li {
        flex: 0 0 42%;
        margin-right: 1px;
    }
}
</style>

<script>
export default {
    //     head: {
    //         link: [
    //             { rel: 'stylesheet', href: '/css/owl.carousel.min.css' },
    //             { rel: 'stylesheet', href: '/css/owl.theme.default.min.css' },
    //           ],
    //     script: [
    //       {
    //         type: "module",
    //         src: "/js/carousel.min.js",
    //       },
    //     ],
    //   },
    mounted() {

        $('.item > div').on("click", function () {
            var selector = '.item div'; // Update this selector based on your actual structure
            $(selector).removeClass("active");
            // $(this).addClass("active");
            $('.item').removeClass('.active')
            // console.log("selected");
        });
        jQuery(document).ready(function ($) {
            var autoplay = false;

            $('#checkbox').change(function () {
                autoplay = !autoplay;
                if (autoplay) {
                    startAutoplay();
                }
            });

            var slideCount = $('#slider ul li').length;
            var slideWidth = $('#slider ul li').width();
            var slideHeight = $('#slider ul li').height();
            var sliderUlWidth = slideCount * slideWidth;

            $('#slider').css({
                width: slideWidth,
                height: slideHeight
            });

            $('#slider ul').css({
                width: sliderUlWidth
            });

            function startAutoplay() {
                setInterval(function () {
                    moveRight();
                }, 3000);
            }

            $('#slider ul li:last-child').prependTo('#slider ul');

            function moveLeft() {
                $('#slider ul').animate({
                    left: +slideWidth
                }, 200, function () {
                    $('#slider ul li:last-child').prependTo('#slider ul');
                    $('#slider ul').css('left', '');
                });
            }

            function moveRight() {
                $('#slider ul').animate({
                    left: -slideWidth
                }, 200, function () {
                    $('#slider ul li:first-child').appendTo('#slider ul');
                    $('#slider ul').css('left', '');
                });
            }

            $('.control_prev').click(function () {
                moveLeft();
            });

            $('.control_next').click(function () {
                moveRight();
            });

        });

        // $(document).ready(function () {
        //     $(".owl-carousel").owlCarousel();
        // });

        // $(".owl-carousel").owlCarousel({
        //     loop: true,
        //     margin: 10,
        //     nav: true,
        //     dots: true,
        //     responsive: {
        //         0: {
        //             items: 2.4,
        //         },
        //         768: {
        //             items: 3,
        //         },
        //         1000: {
        //             items: 4,
        //         },
        //         1366: {
        //             items: 5,
        //         },
        //         1440: {
        //             items: 5,
        //         },
        //     },
        // });

    },
    methods: {
        handleClick(event, category) {
            event.preventDefault();
            console.log(`Clicked on category: ${category}`);
            if (category == 'nurse') {
                $('#home').removeClass('active')
                $('#menu2').addClass('active')
            }
            else if(category == 'doctor'){
                $('#home').addClass('active')
                $('#menu2').removeClass('active')
            }
        }
    }
}
</script>
