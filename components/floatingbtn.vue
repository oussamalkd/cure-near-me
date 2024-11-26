<template>
<div>
    <!-- <div class="mainopShadow"></div> -->
    <div class="fab ">
        <div class="mainop d-flex0">
                <!-- <a href="https://plus.curenearme.com/login"> -->
                <a :href="apiBaseUrl" target="_blank">
                <i id="addIcon" class="material-icons">
                    <img src="/images/Vectorpluse.svg" width="25" height="25" alt="">
                </i>
                <div class="outer pos-ab" id="divToToggle">
                    <div class="card" style="--delay: -1">
                        <div class="content">I am Doctor</div>
                    </div>
                    <div class="card" style="--delay: 0">
                        <div class="content">I am Nurse</div>
                    </div>
                    <div class="card" style="--delay: 1">
                        <div class="content">I am Doctor</div>
                    </div>
                    <div class="card" style="--delay: 2">
                        <div class="content">I am Nurse</div>
                    </div>
                    <div class="card" style="--delay: 3">
                        <div class="content">I am Doctor</div>
                    </div>
                    <div class="card" style="--delay: 5">
                        <div class="content">I am Nurse</div>
                    </div>
                    <div class="card" style="--delay: 6">
                        <div class="content">I am Doctor</div>
                    </div>
                </div>
                <!-- <p class="text-blue " style="text-wrap: nowrap; display: inline;">i am Doctor</p> -->
                </a>
        </div>
    </div>

</div>

<!-- </div> -->
</template>

  
<style scoped>
.minifab {
    margin: 10px;
    align-items: center;
    justify-content: space-between;
}

.fab {
    background-color: transparent;
    height: 43px;
    width: 130px;
    border-radius: 15px;
    transition: height 300ms;
    transition-timing-function: ease;
    position: fixed;
    right: 50px;
    z-index: 1000;
    bottom: 50px;
    display: flex;
    align-items: center;
    text-align: center;
    overflow: hidden;
    display: block;
    transition: all 2s;
    background-color: #F9F9F9;
    color: #363636;
    box-shadow: 0px 4px 4px 0px #00000040;

}
.content {
    color: #363636;
}

.mainop {
    /* width: 64px; */
    height: 64px;
    position: relative;
    bottom: 0;
    left: 0;
    transition: transform 300ms;
    /* background-color: #F9F9F9; */
    border-radius: 32px;
    z-index: 6;
}

.mainopShadow {
    width: 64px;
    height: 64px;
    border-radius: 32px;
    position: absolute;
    right: 50px;
    bottom: 50px;
    box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
}

.mainop i {
    /* margin-top: 16px; */
    font-size: 32px;
    color: #fff;
    position: absolute;
    left: 8px;
    top: -5px;
}

.minifab {
    position: relative;
    width: 136px;
    height: 48px;
    padding: 10px;
    border-radius: 24px;
    z-index: 5;
    transition: box-shadow 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
}

.minifab:hover {
    box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
}

.minifabIcon {
    height: 24px;
    width: 24px;
    margin-top: 12px;
}

.op1 {
    overflow: hidden;
}

.outer {
    left: 43px;
    width: 70%;
    overflow: hidden;
    height: 44px;
    top: 0;
    margin-top: -1px;
}

.card {
    width: 150px;
    padding: 10px 0;
    /* left: 50px;
              color: #c5c5c5; */
    font-size: 15px;
    top: 0px;
    background-color: transparent;
    opacity: 0;
    pointer-events: none;
    position: absolute;
    border: none;
    animation: animate 15s linear infinite;
    animation-delay: calc(3s * var(--delay));
}

.wrapper .card:last-child {
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
        opacity: 0.6;
        transform: translateY(-100%) scale(0.9);
    }

    65%,
    100% {
        opacity: 1;
        transform: translateY(-100%) scale(0.5);
    }
}

.card .content {
    display: flex;
    align-items: center;
}

@media screen and (max-width: 768px) {
    .fab {
        right: 15px;
        z-index: 1000;
        bottom: 70px;
    }
}
</style>

  
<script>
export default {
    data() {
    return {
      apiBaseUrl: process.env.API_BASE_URL_LOGIN,
    }
},
    mounted() {

        $(document).ready(function () {
            // Attach a scroll event handler
            var lastScrollTop = 0;

            var lastScrollTop = 0;

            $(window).scroll(function () {
                var st = $(this).scrollTop();
                if (st > lastScrollTop) {
                    // Scroll Down
                    $('.fab').css('width', '43px');
                } else {
                    if (st > 200) {
                        $('.fab').css('width', '130px');
                    }
                    // Scroll Up
                }
                lastScrollTop = st;
            });
        })
    }
}
</script>
