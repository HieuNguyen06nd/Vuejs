<template>
    <!-- Page Preloader -->
    <div id="preloder">
      <div class="loader"></div>
    </div>
  
    <!-- Offcanvas Menu Section Begin -->
    <div class="offcanvas-menu-overlay"></div>
    <div class="canvas-open">
      <i class="icon_menu"></i>
    </div>
    <div class="offcanvas-menu-wrapper">
      <div class="canvas-close">
        <i class="icon_close"></i>
      </div>
      <div class="search-icon search-switch">
        <i class="icon_search"></i>
      </div>
      <div class="header-configure-area">
        <div class="language-option">
          <img :src="flag" alt="" />
          <span>EN <i class="fa fa-angle-down"></i></span>
          <div class="flag-dropdown">
            <ul>
              <li><a href="#">Zi</a></li>
              <li><a href="#">Fr</a></li>
            </ul>
          </div>
        </div>
        <a href="#" class="bk-btn">Booking Now</a>
      </div>
      <nav class="mainmenu mobile-menu">
        <ul>
          <li class="active"><a href="./index.html">Home</a></li>
          <li><a href="./rooms.html">Rooms</a></li>
          <li><a href="./about-us.html">About Us</a></li>
          <li><a href="./pages.html">Pages</a>
            <ul class="dropdown">
              <li><a href="./room-details.html">Room Details</a></li>
              <li><a href="#">Deluxe Room</a></li>
              <li><a href="#">Family Room</a></li>
              <li><a href="#">Premium Room</a></li>
            </ul>
          </li>
          <li><a href="./blog.html">News</a></li>
          <li><a href="./contact.html">Contact</a></li>
        </ul>
      </nav>
      <div id="mobile-menu-wrap"></div>
      <div class="top-social">
        <a href="#"><i class="fa fa-facebook"></i></a>
        <a href="#"><i class="fa fa-twitter"></i></a>
        <a href="#"><i class="fa fa-tripadvisor"></i></a>
        <a href="#"><i class="fa fa-instagram"></i></a>
      </div>
      <ul class="top-widget">
        <li><i class="fa fa-phone"></i> (12) 345 67890</li>
        <li><i class="fa fa-envelope"></i> info.colorlib@gmail.com</li>
      </ul>
    </div>
    <!-- Offcanvas Menu Section End -->
  
    <!-- Header Section Begin -->
    <header class="header-section">
      <div class="top-nav">
        <div class="container">
          <div class="row">
            <div class="col-lg-6">
              <ul class="tn-left">
                <li><i class="fa fa-phone"></i> (12) 345 67890</li>
                <li><i class="fa fa-envelope"></i> info.colorlib@gmail.com</li>
              </ul>
            </div>
            <div class="col-lg-6">
              <div class="tn-right">
                <div class="top-social">
                  <a href="#"><i class="fa fa-facebook"></i></a>
                  <a href="#"><i class="fa fa-twitter"></i></a>
                  <a href="#"><i class="fa fa-tripadvisor"></i></a>
                  <a href="#"><i class="fa fa-instagram"></i></a>
                </div>
                <a href="#" class="bk-btn">Booking Now</a>
                <div class="language-option">
                  <img :src="flag" alt="" />
                  <span>EN <i class="fa fa-angle-down"></i></span>
                  <div class="flag-dropdown">
                    <ul>
                      <li><a href="#">Zi</a></li>
                      <li><a href="#">Fr</a></li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- ... phần còn lại giữ nguyên như cũ ... -->
      <div class="copyright-option">
        <div class="container">
          <div class="row">
            <div class="col-lg-7">
              <ul>
                <li><a href="#">Contact</a></li>
                <li><a href="#">Terms of use</a></li>
                <li><a href="#">Privacy</a></li>
                <li><a href="#">Environmental Policy</a></li>
              </ul>
            </div>
            <div class="col-lg-5">
              <div class="co-text">
                <p>
                  &copy; {{ currentYear }} All rights reserved | This template is made with
                  <i class="fa fa-heart" aria-hidden="true"></i> by
                  <a href="https://colorlib.com" target="_blank">Colorlib</a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  </template>
  
  <script setup>
  import flag from '@/assets/img/flag.jpg'
  const currentYear = new Date().getFullYear()
  </script>
  
  <style scoped>
  /* Nếu cần CSS riêng cho HomePage thì đặt ở đây */
  </style>
  